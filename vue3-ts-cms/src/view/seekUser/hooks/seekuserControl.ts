import { useStore } from 'vuex';

export const seekUserControl = () => {
  const store = useStore();

  const seekBtn = async (seekType: string, seekValue: string) => {
    const condition = seekType.split('.')[0];

    store.dispatch('getCertainUser', { condition, seekValue });
  };

  return {
    seekBtn
  };
};
