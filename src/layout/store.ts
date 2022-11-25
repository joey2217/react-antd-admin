import { atom } from 'recoil'
import { localStorageEffect } from '../store/helper'

const LOCAL_COLLAPSED = 'collapsed'

export const collapsedState = atom<boolean>({
  key: 'collapsedState',
  default: false,
  effects: [localStorageEffect<boolean>(LOCAL_COLLAPSED)],
})
