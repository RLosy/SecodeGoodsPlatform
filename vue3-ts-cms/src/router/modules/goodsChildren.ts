import type { RouteRecordRaw } from 'vue-router';

export const goodsRouteChildren: RouteRecordRaw[] = [
  {
    path: 'allGoods',
    component: () => import('@/view/allGoods/allGoods.vue')
  },
  {
    path: 'searchGoods',
    component: () => import('@/view/searchGoods/searchGoods.vue')
  }
];
