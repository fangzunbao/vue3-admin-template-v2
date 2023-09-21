import router from '@/router'
import { useUserStore } from '@/stores'
import setting from '@/config/setting'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })

// 前置守卫
router.beforeEach(async (to, from, next) => {
  nprogress.start()
  const userStore = useUserStore()
  const token = userStore.token
  const username = userStore.username
  if (token) {
    // 已登录
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          await userStore.getUserInfo()
          next()
        } catch (error) {
          userStore.logout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    // 未登录
    if (to.path !== '/login') {
      next({ path: '/login', query: { redirect: to.path } })
    } else {
      next()
    }
  }
})

// 后置守卫
router.afterEach((to, from) => {
  document.title = `${to.meta.title} - ${setting.title}`
  nprogress.done()
})
