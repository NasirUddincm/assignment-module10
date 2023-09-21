import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductListPage.vue')
    },
    {
      path: '/product-details/:id',
      name: 'product-details',
      component: () => import('../views/ProductDetailPage.vue')
    },
  ]
})

export default router
