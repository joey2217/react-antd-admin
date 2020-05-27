import { observable, action, autorun } from 'mobx';

const COLLAPSED = 'collapsed';
const THEME = 'theme';

export type Theme = | 'default' | 'dark';

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
  toggleTheme() {
    this.theme = this.theme === 'default' ? 'dark' : 'default';
    localStorage[THEME] = this.theme;
  }


}

autorun(reaction => {
  console.log(reaction);
  reaction.dispose()
})
