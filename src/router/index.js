import { createRouter, createWebHistory } from 'vue-router';
import ComponentHome from '../components/ComponentHome.vue';
import ProductsView from '../views/ProductsView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  { path: '/', component: ComponentHome },
  { path: '/productos', component: ProductsView },
  { path: '/login', component: LoginView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
