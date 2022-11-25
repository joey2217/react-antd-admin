export type CommonResponse<T = unknown> = { message: string } & T

export interface Page {
  pageNum?: number
  pageSize?: number
}

export type PageParams<T = unknown> = Page & T

export interface ListResponse<T> {
  message: string
  total: number
  list: T[]
}
