import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '@/views/ProductsView.vue';
import CategoryView from '@/views/CategoryView.vue';
import SubcategoryView from '@/views/SubcategoryView.vue';
import SubcategoryProductsView from '@/views/SubcategoryProductsView.vue';
import SearchResults from '@/components/SearchResults.vue';

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
    component: SubcategoryProductsView, 
  },
  {
    path: '/search',
    name: 'searchResults',
    component: SearchResults,
    props: (route) => ({ searchQuery: route.query.name }), 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
