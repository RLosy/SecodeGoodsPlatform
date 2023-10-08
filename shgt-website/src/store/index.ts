import { createStore } from 'vuex';
import axios from 'axios';
import { userHome } from './modules/userHome';
import { uploadGoods } from './modules/uploadGoods';
import { netUtils } from './modules/netUtils';

import { notMatch } from '@/hooks/message';

const store = createStore({
  state() {
    return {
      imageDatas: [], // 返回的商品信息，为一个数组，数组里包含商品对象
      userToken: '',
      user: {}, // 当前登录用户信息
      userPublishGoods: [], // 发布过的商品
      shopCarGoods: [], // 购物车商品
      talkMessage: [], // 聊天界面信息
      userSendMsg: [], // 当前用户发起的消息
      userReceiveMsg: [], // 当前用户收到的消息
      mainCarousel: [], // 首页广告轮播图
      homeCarousel: [], // 个人中心轮播图
      detailGoods: {}, // 当前详情商品
      currentTalkGoods: '' // 当前发起留言的商品
    };
  },
  getters: {},

  mutations: {
    // 保存商品信息
    getImageUrl(state: any, paylod: any[]) {
      state.imageDatas = paylod;
    },

    storeToken(state, token: string) {
      state.userToken = token;
      // 将token存储至本地
      localStorage.setItem('userToken', token);
    },

    // 保存用户信息
    storeUserMsg(state, paylod) {
      state.user = paylod;
    },

    // 保存用户发布的商品
    storePublishGoods(state, paylod) {
      state.userPublishGoods = paylod;
    },

    // 保存用户购物车商品
    storeShopCarGoods(state, paylod) {
      state.shopCarGoods = paylod;
    },

    // 保存聊天的记录
    storeTalkMessage(state, data) {
      state.talkMessage = data;
    },

    storeMsgUsers(state, data) {
      state.userSendMsg = data.send;
      state.userReceiveMsg = data.receive;
    },

    storeCarousel(state, data) {
      state.mainCarousel = [];
      state.homeCarousel = [];
      for (const item of data) {
        if (item.ad_groups === '首页轮播广告') {
          state.mainCarousel.push(item);
        } else {
          state.homeCarousel.push(item);
        }
      }
    },

    // 保存单个商品详情
    storeDetails(state, data) {
      state.detailGoods = data;
    },

    storeTalkGoods(state, url) {
      state.currentTalkGoods = url;
    }
  },

  actions: {
    // 获取主页面的图片数据
    getImageUrls({ commit }) {
      axios
        .request({
          method: 'GET',
          url: '/api/maingoods'
        })
        .then((res) => {
          // const data: any[] = res.data.data.list;
          commit('getImageUrl', res.data);
        });
    },

    // 点击分类后的主页商品
    async getCategoryGoods({ commit }, category: string) {
      const results = await axios.get(`/api/maingoods/${category}`);

      commit('getImageUrl', results.data);
    },

    async getSearchGoods({ commit }, searchValue: string) {
      const results = await axios.get(`/api/maingoods/search/${searchValue}`);
      if (results.data.length === 0) {
        notMatch();
        return;
      }
      commit('getImageUrl', results.data);
    },

    // 检查用户是否登录，登录则保存相关数据
    async checkIsLogin({ commit }) {
      const results = await axios.get('/api/islogin', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        }
      });

      if (results.data === false) {
        commit('storeUserMsg', results.data);
      } else {
        commit('storeUserMsg', results.data);
      }
    },

    async getPublishGoods({ state, commit }) {
      const { id } = state.user;
      const results = await axios.get(`/api/user/${id}`);

      commit('storePublishGoods', results.data);
    },

    async getShopCar({ state, commit }) {
      const { id } = state.user;
      const results = await axios.get(`/api/user/shopcar/${id}`);
      commit('storeShopCarGoods', results.data);
    },

    // 聊天界面内的信息
    async getTalkMessage({ commit }, { reveiveUserId, currentUserId }) {
      const results = await axios.get(
        `/api/user/talk/${currentUserId}/${reveiveUserId * 1}`
      );

      if (results.data.stateCode === 200) {
        commit('storeTalkMessage', results.data.data);
      }
    },

    // 聊天面板的信息
    async getMessageUsers({ commit }, userId) {
      const results = await axios.get(`/api/user/talkusers/${userId.value}`);

      commit('storeMsgUsers', results.data);
    },

    async getCarousel({ commit }) {
      const results = await axios.get('/api/adverts');
      commit('storeCarousel', results.data.data);
    }
  },

  modules: {
    userHome,
    uploadGoods,
    netUtils
  }
});

export default store;
