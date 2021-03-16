import { version } from "antd";

export type Lang = "en" | "zh-CN";
export type Theme = "light" | "dark" | "system";
// constants
export const CHANGE_LANG = "change_lang";
export const TOGGLE_COLLAPSED = "toggle_collapsed";
export const TOGGLE_THEME = "toggle_theme";

// state
export interface AppState {
  lang: Lang;
  collapsed: boolean;
  theme: Theme;
}

//action
interface ChangeLangAction {
  type: typeof CHANGE_LANG;
  payload: Lang;
}
interface ToggleCollapsedAction {
  type: typeof TOGGLE_COLLAPSED;
  payload?: boolean;
}

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
  payload: Theme;
}

export type AppActionTypes =
  | ChangeLangAction
  | ToggleCollapsedAction
  | ToggleThemeAction;

const LOCAL_LANG = "lang";

export function getLang(): Lang {
  return localStorage[LOCAL_LANG] || navigator.language;
}

export function setLang(lang: Lang) {
  return localStorage[LOCAL_LANG] = lang
}

const LOCAL_COLLAPSED = "collapsed";

export function getCollapsed(): boolean {
  return localStorage[LOCAL_COLLAPSED] === "1";
}

const LOCAL_THEME = "theme";
const darkCss = `https://cdn.jsdelivr.net/npm/antd@${version}/dist/antd.dark.min.css`;

export function getTheme(): Theme {
  let styleLink = document.getElementById("theme-style") as HTMLLinkElement;
  if (
    localStorage[LOCAL_THEME] === "dark" ||
    (!(LOCAL_THEME in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    if (styleLink) {
      // 假如存在id为theme-style 的link标签，直接修改其href
      styleLink.href = darkCss; // 切换 antd 组件主题
    } else {
      // 不存在的话，则新建一个
      styleLink = document.createElement("link");
      styleLink.type = "text/css";
      styleLink.rel = "stylesheet";
      styleLink.id = "theme-style";
      styleLink.href = darkCss;
      document.body.append(styleLink);
    }
  } else {
    document.documentElement.classList.remove("dark");
    if (styleLink) {
      styleLink.href = "";
    }
  }
  if (LOCAL_THEME in localStorage) {
    return localStorage[LOCAL_THEME];
  } else {
    return "system";
  }
}

export function setTheme(theme: Theme) {
  // if (theme === "dark") {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }
  if (theme === "system") {
    localStorage.removeItem(LOCAL_THEME);
  } else {
    localStorage[LOCAL_THEME] = theme;
  }
}
