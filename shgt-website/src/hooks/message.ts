import { ElMessage } from 'element-plus';

export const notLogin = () => {
  ElMessage({
    message: '您还未登录哟,请先登录！',
    type: 'warning'
  });
};

export const uploadSuccess = () => {
  ElMessage({
    message: '商品上传成功！',
    type: 'success'
  });
};

export const notMatch = () => {
  ElMessage({
    message: '没有匹配的商品！',
    type: 'warning'
  });
};
