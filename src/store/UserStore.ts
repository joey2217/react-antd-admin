import { observable, action } from 'mobx';
import { LoginData } from '../models/user'
import { login, getUserInfo } from '../api/user'
import { getToken, setToken } from '../utils/auth'

export default class CountStore {

  @observable
  username: string = '';

  @observable
  avatar: string = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';

  @observable
  accessToken: string = getToken();

  @action.bound
  async login(loginData: LoginData) {
    try {
      const { data: { message, token } } = await login(loginData);
      this.accessToken = token;
      setToken(token)
      return message;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  @action.bound
  async getUserInfo() {
    try {
      const { data: { name, avatar, message } } = await getUserInfo();
      this.username = name;
      this.avatar = avatar;
      return message
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }

  // custom authority validate 
  @action.bound
  validateAuth(path:string){
    if (path&&this.accessToken) {
      return true;
    }
    return false;
  }

} 
