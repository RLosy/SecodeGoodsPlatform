import axios from 'axios';

export const userHome = {
  namespaced: true,
  state() {
    return {
      publishGoods: []
    };
  },
  getters: {},

  mutations: {},

  actions: {
    // 测试
    async getUserMsg() {
      if (localStorage.getItem('userToken')) {
        const result = await axios({
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          },
          method: 'GET',
          url: '/api/usermsg'
        });
        return result;
      }
    }
  }
};
