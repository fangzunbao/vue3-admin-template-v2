//统一管理项目用户相关的接口

import request from '@/utils/request'

import type { LoginData, Result, userToken, User, CheckUser } from './type'

//项目用户相关的请求地址

enum API {
  LOGIN_URL = '/mock-api/user/login',
  USERINFO_URL = '/mock-api/user/info',
  LOGOUT_URL = '/mock-api/user/logout',
}

//登录接口
export const reqLogin = (data: LoginData): Promise<Result<userToken>> =>
  request.post(API.LOGIN_URL, data)

//获取用户信息
export const reqUserInfo = (): Promise<Result<CheckUser<User>>> =>
  request.get(API.USERINFO_URL)

//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
