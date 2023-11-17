import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'
import { isLoggedIn } from '../auth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('../views/Login.vue'),
          meta: {
            allowAnonymous: true
          }
        },
        {
          path: '/',
          name: 'Users',
          component: () => import('../views/UsersPage.vue'),
          meta: {
            allowAnonymous: false
          }
      }
    ]
  })
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
    if (to.name !== 'Login' && !to.meta.allowAnonymous && !isLoggedIn()) next({ name: 'Login' })
    else if (to.name === 'Login' && isLoggedIn()) next({ name: 'Users' })
    else next()
  })

  export default router;