import axios from 'axios'
import { getToken } from '@/utils/auth'
import { Message } from '@arco-design/web-vue'

// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_API,
  timeout: 10000,
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      Message.error(res.data.message)
      return Promise.reject(new Error(res.data.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    //处理网络错误
    let msg = ''
    let status = error.response.status
    switch (status) {
      case 401:
        msg = 'token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '无网络'
    }
    Message.error(error.message)
    return Promise.reject(error)
  },
)

export default request
