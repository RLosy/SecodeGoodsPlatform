import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import { mainRouterChildren } from './modules/mainChildren';
import { goodsRouteChildren } from './modules/goodsChildren';
import { advertsRouteChildren } from './modules/advertsChildren';
import { talkRouteChildren } from './modules/talkChildren';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/view/login/login.vue')
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('@/view/main/main.vue'),
    children: [
      ...mainRouterChildren,
      ...goodsRouteChildren,
      ...advertsRouteChildren,
      ...talkRouteChildren
    ]
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
