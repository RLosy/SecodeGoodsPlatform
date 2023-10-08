import axios from 'axios';

export const uploadGoods = {
  namespaced: true,
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {
    async uploadGoods(ctx: any, paylod: any) {
      const result = await axios({
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        },
        method: 'POST',
        url: '/api/upload/desc',
        data: {
          paylod
        }
      });
      return result;
    }
  }
};
