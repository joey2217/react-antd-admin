import { createContext, useContext } from 'react'
import UserStore from './UserStore'
import AppStore from './AppStore'

const store = {
  userStore: new UserStore(),
  appStore: new AppStore(),
}

const storeContext = createContext(store);

export const useStore = () => useContext(storeContext);