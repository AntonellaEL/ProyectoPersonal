import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '@/views/ProductsView.vue';
import CategoryView from '@/views/CategoryView.vue';
import SubcategoryView from '@/views/SubcategoryView.vue';
import SubcategoryProductsView from '@/views/SubcategoryProductsView.vue';

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
  {
    path: '/category/:category/subcategories',
    name: 'subcategory',
    component: SubcategoryView,
  },
  {
    path: '/category/:category/subcategory/:subcategory',
    name: 'subcategory-products',
    component: SubcategoryProductsView, // Nueva ruta
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
