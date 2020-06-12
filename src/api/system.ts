import { AxiosPromise } from 'axios';
import request from '../utils/request';
import { PageParams, ListResponse, Response } from '../models/type';
import { Account } from '../models/system';

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

export function deleteAccount(ids: (number|string)[]): AxiosPromise<Response> {
  return request({
    url: '/api/system/account/delete',
    method: 'GET',
    params: { ids: ids.join() },
  })
}

export function updateAccountList(account: Account): AxiosPromise<Response> {
  return request({
    url: '/api/system/account/delete',
    method: 'GET',
    data: account
  })
}