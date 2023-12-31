import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/LoginPage.vue'),
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('@/components/SignPage.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;