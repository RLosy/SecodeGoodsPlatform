import axios from 'axios';
import { useStore } from 'vuex';
import { ElMessage } from 'element-plus';
import { isLogin } from '@/hooks/isLogin';
import { notLogin } from '@/hooks/message';

const addSuccess = () => {
  ElMessage({
    message: '添加购物车成功！！',
    type: 'success'
  });
};

const addfail = () => {
  ElMessage({
    message: '商品已在购物车！！',
    type: 'warning'
  });
};

export const addShopCarHooks = (
  ownerId: number,
  url: string,
  description: string,
  dealWay: string[],
  productsId: number
) => {
  const store = useStore();
  const { id: currentUserId } = store.state.user;

  const checkIsExist = async () => {
    const result = await axios.get(
      `/api/user/shopcar/${currentUserId}/${productsId}`
    );

    return result.data;
  };

  const addToShopCar = async () => {
    const result = isLogin();
    if (!result) {
      notLogin();
      return;
    }
    const isExist = await checkIsExist();
    if (isExist) {
      addfail();
      return;
    }

    const results = await axios({
      method: 'POST',
      url: '/api/user/addshopcar',
      data: {
        currentUserId,
        ownerId,
        description,
        url,
        dealWay,
        productsId
      }
    });
    addSuccess();
    return results;
  };

  return {
    addToShopCar
  };
};
