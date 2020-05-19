import { observable, action } from 'mobx';

const COLLAPSED = 'collapsed';

export default class name {

  @observable
  collapsed: boolean = localStorage[COLLAPSED] === 1

  @action.bound
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    localStorage[COLLAPSED] = this.collapsed;
  }
}