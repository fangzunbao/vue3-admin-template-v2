import { defineStore } from 'pinia'
import type { AppState } from './type'

const useAppStore = defineStore('app', {
  state: (): AppState => ({
    collapsed: false,
    refresh: false,
    theme: 'light',
  }),
  actions: {
    // 切换菜单栏的折叠
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
    // 切换组件刷新状态
    toggleRefresh() {
      this.refresh = !this.refresh
    },
    // 切换暗黑/亮色模式
    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark'
        document.body.setAttribute('arco-theme', 'dark')
      } else {
        this.theme = 'light'
        document.body.removeAttribute('arco-theme')
      }
    },
  },
  getters: {},
})

export default useAppStore
