import { AxiosPromise } from "axios";
import request from "../utils/request";
import { CommonResponse } from "../utils/types";

export interface LoginData {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}

/**
 * 登录 获取token
 * @param LoginData
 */
export function login(
  data: LoginData
): AxiosPromise<LoginResponse & CommonResponse> {
  return request({
    url: "/api/user/login",
    method: "POST",
    data,
  });
}

export interface IMenu {
  path: string;
  title: string;
  icon?: string;
  children?: Array<IMenu>;
}

export interface UserInfo {
  name: string;
  userId: string;
  roles: string[];
  avatar: string;
  menus: Array<IMenu>;
}

/**
 * 获取用户信息
 */
export function getUserInfo(): AxiosPromise<UserInfo & CommonResponse> {
  return request({
    url: "/api/user/user-info",
    method: "GET",
  });
}
/**
 * 登出
 */
export function logout(): AxiosPromise<CommonResponse> {
  return request({
    url: "/api/user/logout",
    method: "POST",
  });
}
