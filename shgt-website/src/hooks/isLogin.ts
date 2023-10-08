export const isLogin = () => {
  const token = localStorage.getItem('userToken');
  return token;
};
