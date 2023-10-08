import axios from 'axios';

export const netUtils = {
  namespaced: true,

  actions: {
    // 验证用户是否登录，登录返回true，否则返回fales
    async authVerify() {
      const result = await axios.get('/api/authvrify', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        }
      });
      return result;
    },

    // 修改昵称
    async updateNickName(ctx: any, newNickName: string) {
      const result = axios.patch(
        '/api/update/nickname',
        {
          nickeName: newNickName
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        }
      );
      console.log(result);
    },

    // 修改密码
    async updatePassword(ctx: any, newPassword: string) {
      const result = axios.patch(
        '/api/update/password',
        {
          password: newPassword
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        }
      );
      console.log(result);
    }
  }
};
