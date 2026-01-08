import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  

  {
    path: '/',
    name: 'inicio',
    component: () => import('../views/L_InicioView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue')
  }
];

// Crea el enrutador
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});




export default router;
