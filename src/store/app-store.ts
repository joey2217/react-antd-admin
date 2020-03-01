import { observable, action } from 'mobx';

export default class AppStore{

  @observable
  collapsed=false;

  @action.bound
  toggleCollapsed(){
    this.collapsed=!this.collapsed
  }

}