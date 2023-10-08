import type { RouteRecordRaw } from 'vue-router';

export const mainRouterChildren: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/main/removeUser'
  },
  {
    path: 'removeUser',
    component: () => import('@/view/removeUser/removeUser.vue')
  },
  {
    path: 'addUser',
    component: () => import('@/view/addUser/addUser.vue')
  },
  {
    path: 'seekUser',
    component: () => import('@/view/seekUser/seekUser.vue')
  }
];
