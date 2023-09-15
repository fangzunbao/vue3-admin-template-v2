import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import { defaultRoutes, asyncRoutes } from './routes'

const routes: RouteRecordRaw[] = [...defaultRoutes, ...asyncRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
