import { useStore } from 'vuex';
import axios from 'axios';
import { deleteSuccess } from '@/hooks/messageHooks';

export const confirmDeleteUser = () => {
  const store = useStore();
  const confirmBtn = async (userId: number, userName: string) => {
    const results = await axios.delete(`user/${userId}`);

    if (results.data.stateCode === 203) {
      store.dispatch('getAllUsers');
      deleteSuccess(userName);
    }
  };

  return {
    confirmBtn
  };
};
