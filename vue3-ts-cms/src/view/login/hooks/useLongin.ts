import axios from 'axios';
import type { Router } from 'vue-router';
import { loginSuccess, loginFail, messageOut } from '@/hooks/messageHooks';

interface ILoginType {
  account: string;
  password: string;
}

const loginMessageIsNull = (loginMsg: ILoginType) => {
  if (loginMsg.account === '') {
    const message = '账号不能为空';
    messageOut(message, 'warning');
    return false;
  }
  if (loginMsg.password === '') {
    console.log('密码');
    const message = '密码不能为空';
    messageOut(message, 'warning');
    return false;
  }

  return true;
};

export const useLogin = (loginMsg: ILoginType, router: Router) => {
  const loginSubmit = async () => {
    if (!loginMessageIsNull(loginMsg)) return;

    const result = await axios.post('manager/login', {
      account: loginMsg.account,
      password: loginMsg.password
    });
    if (result.data.stateCode === 200) {
      router.push('/main');
      loginSuccess();
    } else {
      loginFail();
    }
  };

  return {
    loginSubmit
  };
};
