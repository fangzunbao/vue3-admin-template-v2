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

export interface DraggableData {
  id: number | string
  label: string
  value: string
}
