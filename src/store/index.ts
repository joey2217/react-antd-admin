import { createContext, useContext } from 'react'
import CountStore from './CountStore'

const store = {
  countStore: new CountStore()
}

const storeContext = createContext(store);

export const useStore = () => useContext(storeContext);