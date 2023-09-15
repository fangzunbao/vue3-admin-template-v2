import { defineStore } from 'pinia'
import type { UserState } from './type'
import type { LoginData, User } from '@/api/test/type'
import { defaultRoutes, asyncRoutes } from '@/router/routes'
import { reqLogin, reqUserInfo } from '@/api/test'
import { setToken, getToken, removeToken } from '@/utils/auth'

const ERROR_AVATAR =
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'

const useUserStore = defineStore('user', {
  state: (): UserState => ({
    username: '',
    avatar: '' || ERROR_AVATAR,
    token: getToken() || '',
    userInfo: Object as User,
    routes: [...defaultRoutes, ...asyncRoutes],
  }),
  actions: {
    // 账号登录
    async login(loginForm: LoginData) {
      try {
        const res = await reqLogin(loginForm)
        this.token = res.data.token
        setToken(res.data.token)
      } catch (err) {
        removeToken()
        throw err
      }
    },
    // 获取用户信息
    async getUserInfo() {
      try {
        const {
          data: { checkUser },
        } = await reqUserInfo()
        this.setUserInfo(checkUser)
        this.avatar = checkUser.avatar || ''
        this.username = checkUser.username || ''
      } catch (err) {
        throw err
      }
    },
    // 退出登录
    async logout() {
      try {
      } catch (err) {
        throw err
      } finally {
        this.logoutCallback()
      }
    },
    // 退出系统后的操作
    logoutCallback() {
      removeToken()
      this.resetInfo()
    },
    // 重置Store中的数据
    resetInfo() {
      this.$reset()
    },
    // 设置用户信息
    setUserInfo(partial: Partial<User>) {
      this.$patch({ userInfo: partial })
    },
  },
  getters: {},
})

export default useUserStore
