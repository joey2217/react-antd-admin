import { AxiosPromise } from 'axios'
import request from '../utils/request'
import { LoginData, IUser } from '../models/user'
import { IRequest } from '../models/type'

/**
 * 登录 获取token
 * @param LoginData 
 */
export function login(data: LoginData): AxiosPromise<IUser> {
  return request({
    url: '/api/user/login',
    method: 'POST',
    data,
  })
}
/**
 * 获取用户信息
 */
export function getUserInfo(): AxiosPromise<IUser> {
  return request({
    url: '/api/user/user-info',
    method: 'GET',
  })
}
/**
 * 登出
 */
export function logout(): AxiosPromise<IRequest> {
  return request({
    url: '/api/user/logout',
    method: 'POST',
  })
}