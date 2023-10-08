import { createStore } from 'vuex';
import axios from 'axios';
import { notFoundUser, notFoundProducts } from '@/hooks/messageHooks';

const store = createStore({
  state() {
    return {
      AllUsers: [],
      certainUser: {
        userData: {},
        userProducts: []
      },
      allProducts: [],
      productsBySearch: []
    };
  },
  getters: {},
  mutations: {
    storeAllUsers(state: any, users) {
      state.AllUsers = users;
    },

    storeCertainUser(state, data) {
      state.certainUser.userData = data.user;
      state.certainUser.userProducts = data.products;
    },

    storeAllGoods(state, data) {
      state.allProducts = data;
    },

    storeProductsBySearch(state, data) {
      state.productsBySearch = data;
    }
  },

  // 获取所有用户
  actions: {
    async getAllUsers({ commit }) {
      const results = await axios.get('user');
      commit('storeAllUsers', results.data);
    },

    // 查找指定用户
    async getCertainUser({ commit }, { condition, seekValue }) {
      const result = await axios.get(`/user/${condition}/${seekValue}`);
      if (result.data.stateCode === 404) {
        notFoundUser();
        return;
      }

      commit('storeCertainUser', result.data);
    },

    // 获取所有商品
    async getAllProducts({ commit }, sortValue: number) {
      const results = await axios.get(`/products/${sortValue}`);
      commit('storeAllGoods', results.data.data);
    },

    async getProductsById({ commit }, id: string) {
      const results = await axios.get(`/products/?id=${id}`);
      if (results.data.data.length === 0) {
        notFoundProducts();
        return;
      }
      commit('storeProductsBySearch', results.data.data);
    },

    async getProductsByCategory({ commit }, category: string) {
      const results = await axios.get(`/products/?category=${category}`);
      commit('storeProductsBySearch', results.data.data);
    }
  }
});

export default store;
