import { createContext, useContext } from 'react'
import CountStore from './CountStore'
import UserStore from './UserStore'

const store = {
  countStore: new CountStore(),
  userStore: new UserStore(),
}

const storeContext = createContext(store);

export const useStore = () => useContext(storeContext);