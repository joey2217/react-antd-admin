import {
  AppActionTypes,
  CHANGE_LANG,
  Lang,
  Theme,
  TOGGLE_COLLAPSED,
  TOGGLE_THEME,
} from "./type";

export function changeLang(lang: Lang): AppActionTypes {
  return {
    type: CHANGE_LANG,
    payload: lang,
  };
}

export function toggleCollapsed(collapsed?: boolean): AppActionTypes {
  return {
    type: TOGGLE_COLLAPSED,
    payload: collapsed,
  };
}

export function toggleTheme(theme: Theme): AppActionTypes {
  return {
    type: TOGGLE_THEME,
    payload: theme,
  };
}
