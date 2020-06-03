import { observable, action } from 'mobx';
import { Theme, switchTheme } from "../utils/theme";

const COLLAPSED = 'collapsed';
const THEME = 'theme';
const LANG = 'lang';


export type Lang = |'en'|'zhCN'|'zh'


export default class AppStore {

  @observable
  collapsed: boolean = localStorage[COLLAPSED] === 1;

  @observable
  theme: Theme = localStorage[THEME] || 'default';

  @observable
  lang: Lang = localStorage[LANG] || navigator.language;

  @action.bound
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    localStorage[COLLAPSED] = this.collapsed;
  }

  @action.bound
  setCollapsed(collapsed: boolean) {
    this.collapsed = collapsed;
    localStorage[COLLAPSED] = collapsed;
  }

  @action.bound
  toggleTheme(theme?: Theme) {
    if (theme) {
      this.theme = theme;
      localStorage[THEME] = this.theme;
      switchTheme(this.theme);
    } else {
      this.theme = this.theme === 'default' ? 'dark' : 'default';
      localStorage[THEME] = this.theme;
      switchTheme(this.theme);
    }
  }

  @action.bound
  switchLang(lang: Lang) {
    this.lang = lang;
    localStorage[LANG] = lang;
  }

}
