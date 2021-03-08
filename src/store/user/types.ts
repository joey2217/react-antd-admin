import { IMenu, UserInfo } from "../../api/login";
// constants
export const SET_TOKEN = "set_token";
export const SET_USER_INFO = "set_user_info";
export const RESET_USER_INFO = "reset_user_info";

// state
export interface UserState {
  token: string;
  userId: string;
  username: string;
  avatar: string;
  roles: string[];
  menus: Array<IMenu>;
}

// action
interface SetTokenAction {
  type: typeof SET_TOKEN;
  payload: string;
}

interface SetUserInfoAction {
  type: typeof SET_USER_INFO;
  payload: UserInfo;
}
interface ResetUserInfoAction {
  type: typeof RESET_USER_INFO;
}

export type UserActionTypes =
  | SetTokenAction
  | SetUserInfoAction
  | ResetUserInfoAction;
