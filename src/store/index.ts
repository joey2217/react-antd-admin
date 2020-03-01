import { createContext, useContext } from 'react'

import UserStore from './user-store';

const store = {
  userStore: new UserStore(),
}

const storeContext = createContext(store);

export const useStore = () => useContext(storeContext);