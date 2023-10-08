import type { RouteRecordRaw } from 'vue-router';

export const talkRouteChildren: RouteRecordRaw[] = [
  {
    path: 'talk',
    component: () => import('@/view/talkMessage/TalkMessage.vue')
  }
];
