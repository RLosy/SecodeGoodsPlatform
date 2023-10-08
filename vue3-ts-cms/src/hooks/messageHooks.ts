import { ElMessage } from 'element-plus';

export const deleteSuccess = (userName: string) => {
  ElMessage({
    message: `用户${userName}已被删除！`,
    type: 'success'
  });
};

export const notFoundUser = () => {
  ElMessage({
    message: `此用户不存在！`,
    type: 'warning'
  });
};

export const deleteProduct = () => {
  ElMessage({
    message: `商品删除成功！`,
    type: 'success'
  });
};

export const notFoundProducts = () => {
  ElMessage({
    message: `查找的商品不存在！`,
    type: 'warning'
  });
};

export const loginSuccess = () => {
  ElMessage({
    message: `登录成功，欢迎使用！`,
    type: 'success'
  });
};

export const loginFail = () => {
  ElMessage({
    message: `账号或密码错误，请重新输入！`,
    type: 'error'
  });
};

type MessageType = 'success' | 'warning' | 'info' | 'error';

export const messageOut = (message: string, type: MessageType) => {
  ElMessage({
    message: message,
    type: type
  });
};
