import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // LANDING ROUTES
    {
      path: '/',
      name: 'landing',
      component: () => import('../modules/landing/layouts/LandingLayaut.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../modules/landing/pages/HomePage.vue'),
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('../modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('../modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('../modules/landing/pages/ContactPage.vue'),
        },
      ],
    },

    // AUTH ROUTES

    {
      path: '/auth',
      redirect: '/login',
      name: 'auth',
      component: () => import('../modules/auth/layout/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../modules/auth/pages/LoginPage.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // NOT FOUND

    { path: '/:pathMatch(.*)*', name: 'NotFound404', component: NotFound404 },
  ],
});

export default router;
