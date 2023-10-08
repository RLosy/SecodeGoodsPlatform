import { useStore } from 'vuex';

export const gategoryController = () => {
  const store = useStore();

  const getCategoryGoods = (category: string) => {
    if (category === '全部商品') {
      store.dispatch('getImageUrls');
      return;
    }
    store.dispatch('getCategoryGoods', category);
  };

  return {
    getCategoryGoods
  };
};
