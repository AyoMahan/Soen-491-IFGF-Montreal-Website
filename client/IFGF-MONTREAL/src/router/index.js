import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue'),
    },
    {
      path: '/outreach',
      name: 'outreach',
      component: () => import('../views/OutreachView.vue'),
    },
    {
      path: '/connect',
      name: 'connect',
      component: () => import('../views/ConnectView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/SignIn.vue'),
    }
  ],
})

export default router
