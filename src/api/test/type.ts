export interface LoginData {
  username: string
  password: string
}

export interface Result<T> {
  code: number
  data: T
}

export interface User {
  userId?: number
  avatar?: string
  username?: string
  password?: string
  desc?: string
  roles?: [string]
  buttons?: [string]
  routes?: [string]
  token?: string
}

export interface userToken {
  token: string
}

export interface CheckUser<T>{
  checkUser: T
}
