import {
  AppActionTypes,
  AppState,
  CHANGE_LANG,
  getCollapsed,
  getLang,
  getTheme,
  setTheme,
  TOGGLE_COLLAPSED,
  TOGGLE_THEME,
} from "./type";

const INITIAL_STATE: AppState = {
  lang: getLang(),
  collapsed: getCollapsed(),
  theme: getTheme(),
};

export default function reducer(
  state = INITIAL_STATE,
  action: AppActionTypes
): AppState {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case TOGGLE_COLLAPSED:
      return {
        ...state,
        collapsed: action.payload || !state.collapsed,
      };
    case TOGGLE_THEME:
      const theme = action.payload;
      setTheme(theme);
      return {
        ...state,
        theme: getTheme(),
      };
    default:
      return state;
  }
}
