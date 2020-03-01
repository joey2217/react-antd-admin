import { createContext, useContext } from 'react'

import UserStore from './user-store';
import AppStore from './app-store';

const store = {
  userStore: new UserStore(),
  appStore: new AppStore(),
}

const storeContext = createContext(store);

export const useStore = () => useContext(storeContext);