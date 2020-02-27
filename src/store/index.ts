import { createContext, useContext } from 'react'

import CounterStore from './counter-store';

const store = {
  counterStore: new CounterStore(),
}

const storeContext = createContext(store);

export const useStore = () => useContext(storeContext);