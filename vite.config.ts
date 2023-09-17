import { fileURLToPath, URL } from 'node:url'

import { UserConfigExport, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 动态引入组件
import { vitePluginForArco } from '@arco-plugins/vite-vue'

// mock
import { viteMockServe } from 'vite-plugin-mock'

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
      vitePluginForArco({
        style: 'css',
      }),
      viteMockServe({
        localEnabled: command === 'serve',
        supportTs: true,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: '@import "@/styles/variable.less";',
        },
      },
    },
    // server: {
    //   proxy: {
    //     [env.VITE_APP_BASE_API]: {
    //       target: env.VITE_BASE_SERVE,
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },
  }
}
