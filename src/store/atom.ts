import { atom } from 'recoil'
import { getLanguage, LOCAL_LNG, simpleLocalStorageEffect } from './helper'
import type { Language } from './helper'
import i18n from '../i18n'

// language
export const languageState = atom<Language>({
  key: 'languageState',
  default: getLanguage(),
  effects: [
    simpleLocalStorageEffect<Language>(LOCAL_LNG),
    ({ onSet }) => {
      onSet((lng) => {
        i18n.changeLanguage(lng)
      })
    },
  ],
})
