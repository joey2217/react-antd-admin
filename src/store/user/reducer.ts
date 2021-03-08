import { getToken, setToken } from "../../utils/auth";
import {
  UserActionTypes,
  UserState,
  SET_TOKEN,
  SET_USER_INFO,
  RESET_USER_INFO,
} from "./types";

const INITIAL_STATE: UserState = {
  token: getToken(),
  userId: "",
  username: "",
  roles: [],
  menus: [],
  avatar:
    "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
};

export default function reducer(
  state = INITIAL_STATE,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case SET_TOKEN:
      setToken(action.payload);
      return {
        ...state,
        token: action.payload,
      };

    case SET_USER_INFO:
      const { userId, name, avatar, menus, roles } = action.payload;
      return {
        ...state,
        username: name,
        userId,
        avatar,
        menus,
        roles,
      };
    case RESET_USER_INFO:
      return {
        ...INITIAL_STATE,
        token: "",
      };
    default:
      return state;
  }
}
