// 登录参数
export interface LoginData {
  username: string;
  password: string;
}

// 用户接口
export interface User {
  name: string;
  token: string;
  [propName: string]: any;
}