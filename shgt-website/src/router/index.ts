import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    name: 'uploadgoods',
    path: '/uploadgoods',
    component: () => import('@/components/uploadGoods/uploadGoods.vue')
  },
  {
    path: '/main',
    component: () => import('@/view/main/main.vue'),
    children: [
      {
        path: '',
        redirect: '/main/products'
      },
      {
        path: 'products',
        component: () => import('@/view/main/cpns/goodsList.vue')
      },
      {
        name: 'details',
        path: 'prodetails',
        component: () => import('@/components/productDetails/productDetail.vue')
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/components/login/login.vue')
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('@/components/register/register.vue')
  },
  {
    path: '/home',
    component: () => import('@/view/home/home.vue'),
    children: [
      {
        path: '',
        redirect: '/home/personmsg'
      },
      {
        path: 'personmsg',
        component: () => import('@/view/personMsg/personMsg.vue')
      },
      {
        path: 'shopcar',
        component: () => import('@/view/shopCar/shopCar.vue')
      },
      {
        name: 'message',
        path: 'message',
        component: () => import('@/view/talkMessage/talkMessage.vue')
      },
      {
        path: 'update',
        component: () => import('@/view/updateUserMsg/update.vue')
      },
      {
        path: 'publish',
        component: () => import('@/view/publishGoods/publishGoods.vue')
      },
      {
        path: 'deal',
        component: () => import('@/view/dealGoods/dealGoods.vue')
      },
      {
        name: 'talk',
        path: 'talk',
        component: () => import('@/view/talkMessage/talk.vue')
      }
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
