export interface CommonResponse {
  message: string;
  [prop: string]: any;
}

export interface PageParams {
  pageNum?: number;
  pageSize?: number;
  [prop: string]: any;
}

export interface ListResponse<T> {
  message: string;
  total: number;
  list: T[];
  [prop: string]: any;
}
