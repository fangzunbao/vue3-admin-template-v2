export interface GetParams {
  body: null
  type: string
  url: string
}

export interface Pagination {
  current: number
  pageSize: number
  total?: number
}
