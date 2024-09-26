import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '@/views/ProductsView.vue';
import CategoryView from '@/views/CategoryView.vue';
import SubcategoryView from '@/views/SubcategoryView.vue';
import SubcategoryProductsView from '@/views/SubcategoryProductsView.vue';
import SearchResults from '@/components/SearchResults.vue';
import LoginView from '@/views/LoginView.vue';
import AdminView from '@/views/AdminView.vue';
import { useAuthStore } from '@/stores/auth'; // Importar el store

const routes = [
  { path: '/', 
    name: 'products', 
    component: ProductsView 
  },
  { path: '/category/:category', 
    name: 'category', 
    component: CategoryView 
  },
  { path: '/category/:category/subcategories', 
    name: 'subcategory', 
    component: SubcategoryView },
  { path: '/category/:category/subcategory/:subcategory', 
    name: 'subcategory-products', 
    component: SubcategoryProductsView 
  },
  { path: '/search', 
    name: 'searchResults', 
    component: SearchResults, 
    props: (route) => ({ searchQuery: route.query.name }) 
  },
  { path: '/login', 
    name: 'login', 
    component: LoginView 
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (!authStore.user.isAuthenticated) {
        next({ name: 'login' }); // Redirigir al login si no está autenticado
      } else {
        next(); // Permitir el acceso si está autenticado
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
