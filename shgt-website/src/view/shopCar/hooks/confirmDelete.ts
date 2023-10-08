import axios from 'axios';
import { useStore } from 'vuex';

export const confirmDeleteGood = () => {
  const store = useStore();

  const confirmDelete = async (goodsId: number) => {
    const result = await axios.delete(`/api/user/deleshopcar/${goodsId}`);
    store.dispatch('getShopCar');
    return result;
  };

  return {
    confirmDelete
  };
};
