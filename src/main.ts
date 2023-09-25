import './styles/index.less'
import { createApp } from 'vue'
import type { Directive } from 'vue'
import { Message, Notification } from '@arco-design/web-vue'

import App from './App.vue'
import router from './router'
import store from './stores'
import '@/utils/permission'

const app = createApp(App)

// 自定义指令
import * as directives from '@/directives'
Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})

Message._context = app._context
Notification._context = app._context

app.use(router)
app.use(store)
app.mount('#app')
