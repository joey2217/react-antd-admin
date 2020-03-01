import { AxiosPromise } from 'axios'
import request from '../utils/request'
import { LoginData,IUser } from '../model/type'

/**
 * 登录
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
 * 获取用户信息(携带用户凭证)
 */
export function getUserInfo(): AxiosPromise<IUser>{
  return request({
    url: '/api/user/user-info',
    method: 'GET',
  })
}