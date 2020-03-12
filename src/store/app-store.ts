import { observable, action, computed } from 'mobx';
import en_US from '../locale/en_US'
import zh_CN from '../locale/zh_CN'
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';

export default class AppStore {

  @observable
  collapsed = false;

  @observable
  locale = 'zh';

  @action.bound
  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
  @action.bound
  toggleLocale(locale: string) {
    this.locale = locale;
  }

  @computed get localeMessage() {
    let lang = this.locale;
    if (/zh/.test(lang)) {
      return zh_CN;
    }
    return en_US;
  }

  @computed get antdLocale() {
    let lang = this.locale;
    if (/zh/.test(lang)) {
      return zhCN;
    }
    return enUS;
  }
}