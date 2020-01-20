import { observable,action } from 'mobx'

class User {
  @observable
  userInfo = {
    name:'name'
  }

  @action.bound
  async getUserInfo(){
    this.userInfo={
      name:'Joey'
    }
  }
}

const user = new User()

export default user;