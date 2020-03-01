import { observable, action, computed } from 'mobx';
import { login, getUserInfo } from '../api/user'
import { LoginData, IUser } from '../model/type'

export default class UserStore {

  @observable
  user: IUser = { name: '', token: '' }

  /**
   * 登录
   * @param loginData 
   */
  @action.bound
  async login(loginData: LoginData) {
    try {
      const { data } = await login(loginData)
      this.user = data
      return data.message
    } catch (error) {
      throw error
    }
  }

  @action.bound
  async getUserInfo() {
    try {
      if (this.user.token) {
        return '获取用户信息成功!';
      } else {
        const { data } = await getUserInfo();
        this.user = data;
        return data.message;
      }
    } catch (error) {
      throw error
    }
  }

  @computed get name() {
    return this.user.name;
  }
}