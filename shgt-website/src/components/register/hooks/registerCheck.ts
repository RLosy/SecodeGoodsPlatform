import { ElMessage } from 'element-plus';

const telIsNull = () => {
  ElMessage({
    message: '手机号不能为空！！',
    type: 'error',
    offset: 200
  });
};
const acIsNull = () => {
  ElMessage({
    message: '账号不能为空！！',
    type: 'error',
    offset: 200
  });
};
const pwlIsNull = () => {
  ElMessage({
    message: '密码不能为空！！',
    type: 'error',
    offset: 200
  });
};
const registerSuccess = () => {
  ElMessage({
    message: '注册成功！！',
    type: 'success',
    offset: 100
  });
};
const isExist = () => {
  ElMessage({
    message: '该手机号或账号已注册！！',
    type: 'success',
    offset: 200
  });
};

export const checkRegister = (registerMsg: any) => {
  const check = () => {
    const TLength = registerMsg.telNumber.length;
    const ALength = registerMsg.account.length;
    const PLength = registerMsg.password.length;
    if (TLength === 0) {
      telIsNull();
      return true;
    } else if (ALength === 0) {
      acIsNull();
      return true;
    } else if (PLength === 0) {
      pwlIsNull();
      return true;
    } else {
      return false;
    }
  };

  return {
    check,
    registerSuccess,
    isExist
  };
};
