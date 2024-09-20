import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '@/views/ProductsView.vue';
import CategoryView from '@/views/CategoryView.vue';

const routes = [
  {
    path: '/',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/category/:category',
    name: 'category',
    component: CategoryView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
