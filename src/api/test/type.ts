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

export interface CheckUser<T> {
  checkUser: T
}

export interface PolicyRecord {
  id: string
  number: number
  name: string
  contentType: 'img' | 'horizontalVideo' | 'verticalVideo'
  filterType: 'artificial' | 'rules'
  count: number
  status: 'online' | 'offline'
  createdTime: string
}

export interface PolicyParams extends Partial<PolicyRecord> {
  current: number
  pageSize: number
}

export interface PolicyListRes {
  list: PolicyRecord[]
  total: number
}

export interface BaseInfoModel {
  activityName: string
  channelType: string
  promotionTime: string[]
  promoteLink: string
}

export interface ChannelInfoModel {
  advertisingSource: string
  advertisingMedia: string
  keyword: string[]
  pushNotify: boolean
  advertisingContent: string
}

export type UnitChannelModel = BaseInfoModel & ChannelInfoModel
