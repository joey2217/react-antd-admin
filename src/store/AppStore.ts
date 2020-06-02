import { observable, action, autorun } from 'mobx';
import { Theme, switchTheme } from "../utils/theme";

const COLLAPSED = 'collapsed';
const THEME = 'theme';

export default class name {

  @observable
  collapsed: boolean = localStorage[COLLAPSED] === 1;

  @observable
  theme: Theme = localStorage[THEME] || 'default';

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
}

autorun(reaction => {
  console.log(reaction);
  reaction.dispose()
})
