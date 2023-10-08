import type { RouteRecordRaw } from 'vue-router';

export const advertsRouteChildren: RouteRecordRaw[] = [
  {
    path: 'allAdverts',
    component: () => import('@/view/allAdverts/allAdverts.vue')
  },
  {
    path: 'uploadAdverts',
    component: () => import('@/view/uploadAdverts/uploadAdverts.vue')
  }
];
