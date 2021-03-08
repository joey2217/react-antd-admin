import { AxiosPromise } from "axios";
import request from "../utils/request";
import { PageParams, ListResponse, CommonResponse } from "../utils/types";

export type Role = "admin" | "user";

export enum Status {
  DISABLED,
  ENABLED,
}

export interface Account {
  id?: number | string;
  username: string;
  account: string;
  status: Status;
  roles: Role[];
}

/**
 * Account
 */
export function getAccountList(
  params: PageParams & Partial<Account>
): AxiosPromise<ListResponse<Account>> {
  return request({
    url: "/api/system/account",
    method: "GET",
    params,
  });
}

export function addAccount(account: Account): AxiosPromise<CommonResponse> {
  return request({
    url: "/api/common/add",
    method: "PUT",
    data: account,
  });
}

export function deleteAccount(
  ids: (number | string)[]
): AxiosPromise<CommonResponse> {
  return request({
    url: "/api/common/delete",
    method: "DELETE",
    params: { ids: ids.join() },
  });
}

export function updateAccount(account: Account): AxiosPromise<CommonResponse> {
  return request({
    url: "/api/common/update",
    method: "PUT",
    data: account,
  });
}

export interface Auth {
  id?: number;
  name: string;
  url: string;
  children?: Auth[];
}

/**
 * Auth
 */
export function getAuthList(): AxiosPromise<ListResponse<Auth>> {
  return request({
    url: "/api/system/auth",
    method: "GET",
  });
}

export function addAuth(auth: Auth): AxiosPromise<CommonResponse> {
  return request({
    url: "/api/common/add",
    method: "PUT",
    data: auth,
  });
}

export function deleteAuth(
  ids: (number | string)[]
): AxiosPromise<CommonResponse> {
  return request({
    url: "/api/common/delete",
    method: "DELETE",
    params: { ids: ids.join() },
  });
}

export function updateAuth(auth: Auth): AxiosPromise<CommonResponse> {
  return request({
    url: "/api/common/update",
    method: "PUT",
    data: auth,
  });
}
