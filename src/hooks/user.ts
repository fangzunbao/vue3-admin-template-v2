import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'
import { Message } from '@arco-design/web-vue'

export default function useUser() {
  const router = useRouter()
  const userStore = useUserStore()

  const logout = async (logoutTo?: string) => {
    await userStore.logout()
    const currentRoute = router.currentRoute.value
    Message.success('退出成功')
    router.push({
      path: logoutTo && typeof logoutTo === 'string' ? logoutTo : '/login',
      query: {
        ...currentRoute.query,
        redirect: currentRoute.fullPath,
      },
    })
  }

  return { logout }
}
