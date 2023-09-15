import type { User } from '@/api/test/type'
import type { RouteRecordRaw } from 'vue-router'

export interface UserState {
  token: string
  username: string
  avatar: string
  userInfo: User
  routes: RouteRecordRaw[]
}

export interface AppState {
  collapsed: boolean
  refresh: boolean
  theme: 'dark' | 'light'
}
