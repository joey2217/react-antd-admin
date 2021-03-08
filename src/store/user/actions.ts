import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { LoginData, login, UserInfo, getUserInfo, logout } from "../../api/login";
import { UserActionTypes, UserState, SET_TOKEN, SET_USER_INFO, RESET_USER_INFO } from "./types";

// login
function setToken(token: string): UserActionTypes {
  return {
    type: SET_TOKEN,
    payload: token,
  };
}

export function loginAction(
  data: LoginData
): ThunkAction<void, UserState, null, Action<string>> {
  return async (dispatch) => {
    const {
      data: { token, message },
    } = await login(data);
    dispatch(setToken(token));
    return message;
  };
}

// userInfo
function setUserInfo(userInfo: UserInfo): UserActionTypes {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
}

export function getUserInfoAction(): ThunkAction<
  void,
  UserState,
  null,
  Action<any>
> {
  return async (dispatch) => {
    const { data } = await getUserInfo();
    dispatch(setUserInfo(data));
    return data;
  };
}

// logout
function resetUserInfo(): UserActionTypes {
  return {
    type: RESET_USER_INFO,
  };
}

export function logoutAction(): ThunkAction<void, UserState, null, Action<any>> {
  return async (dispatch) => {
    const {data:{message}} = await logout()
    dispatch(resetUserInfo())
    return message
  };
}
