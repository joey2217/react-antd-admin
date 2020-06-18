import { AxiosPromise } from 'axios';
import request from '../utils/request';
import { PageParams, ListResponse, Response } from '../models/type';
import Account from '../models/system/Account';
import Auth from '../models/system/Auth';

/**
 * Account
 */
export function getAccountList(params: PageParams): AxiosPromise<ListResponse<Account>> {
  return request({
    url: '/api/system/account',
    method: 'GET',
    params
  })
}

export function addAccount(account: Account): AxiosPromise<Response> {
  return request({
    url: '/api/common/add',
    method: 'PUT',
    data: account
  })
}

export function deleteAccount(ids: (number | string)[]): AxiosPromise<Response> {
  return request({
    url: '/api/common/delete',
    method: 'DELETE',
    params: { ids: ids.join() },
  })
}

export function updateAccount(account: Account): AxiosPromise<Response> {
  return request({
    url: '/api/common/update',
    method: 'PUT',
    data: account
  })
}

/**
 * Auth
 */
export function getAuthList(): AxiosPromise<ListResponse<Auth>> {
  return request({
    url: '/api/system/auth',
    method: 'GET',
  })
}

export function addAuth(auth: Auth): AxiosPromise<Response> {
  return request({
    url: '/api/common/add',
    method: 'PUT',
    data: auth
  })
}

export function deleteAuth(ids: (number | string)[]): AxiosPromise<Response> {
  return request({
    url: '/api/common/delete',
    method: 'DELETE',
    params: { ids: ids.join() },
  })
}

export function updateAuth(auth: Auth): AxiosPromise<Response> {
  return request({
    url: '/api/common/update',
    method: 'PUT',
    data: auth
  })
}