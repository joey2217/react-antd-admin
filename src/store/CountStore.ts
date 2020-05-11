import { observable, action, computed } from 'mobx';

export default class CountStore {

  @observable
  count: number = 0;

  @action.bound
  increase() {
    this.count++;
  }
  @action.bound
  decrease() {
    this.count--;
  }

  @computed get doubleCount() {
    return this.count * 2;
  }
} 