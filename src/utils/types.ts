export interface CommonResponse {
  message: string;
  [prop: string]: any;
}

export interface PageParams {
  pageNum?: number;
  pageSize?: number;
  [propName: string]: any;
}

export interface ListResponse<T> {
  message: string;
  total: number;
  list: Array<T>;
  [propName: string]: any;
}