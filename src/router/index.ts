import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Inventory from '@/views/Inventory.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/dashboard', component: Dashboard },
  { path: '/inventory', component: Inventory },
  { path: '/:pathMatch(.*)*', redirect: '/dashboard' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
