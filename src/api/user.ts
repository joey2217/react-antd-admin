import { AxiosPromise } from 'axios'
import request from '../utils/request'

export interface loginData {
  username: string,
  password: string,
}

export function login(data: loginData): AxiosPromise {
  return request({
    url: '/api/login',
    method: 'POST',
    data,
  })
}