//统一管理项目用户相关的接口

import request from '@/utils/request'
import qs from 'query-string'

import type {
  LoginData,
  Result,
  userToken,
  User,
  CheckUser,
  PolicyListRes,
} from './type'

//项目用户相关的请求地址

enum API {
  LOGIN_URL = '/mock-api/user/login',
  USERINFO_URL = '/mock-api/user/info',
  LOGOUT_URL = '/mock-api/user/logout',
  PROJECT_LIST = '/mock-api/project/list',
  FORM_CREATE = '/mock-api/form/create',
  WATERFALL_LIST = '/mock-api/images/list',
}

//登录接口
export const reqLogin = (data: LoginData): Promise<Result<userToken>> =>
  request.post(API.LOGIN_URL, data)

//获取用户信息
export const reqUserInfo = (): Promise<Result<CheckUser<User>>> =>
  request.get(API.USERINFO_URL)

//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)

// 获取项目列表
export const reqProjectList = (params: any): Promise<Result<PolicyListRes>> =>
  request.get(`${API.PROJECT_LIST}?${qs.stringify(params)}`)

// 分步表单提交
export const reqFormCreate = (data: any): Promise<Result<any>> =>
  request.post(API.FORM_CREATE, data)

// 瀑布流图片获取
export const reqWaterfallList = (params: any): Promise<Result<any>> =>
  request.get(`${API.WATERFALL_LIST}?${qs.stringify(params)}`)
