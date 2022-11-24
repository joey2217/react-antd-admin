import { atom } from 'recoil'
import {
  getLanguage,
  LOCAL_LNG,
  getTheme,
  setTheme,
  LOCAL_THEME,
  simpleLocalStorageEffect,
} from './helper'
import type { Language, Theme } from './helper'
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

export const themeState = atom<Theme>({
  key: 'themeState',
  default: getTheme(),
  effects: [
    simpleLocalStorageEffect<Theme>(LOCAL_THEME),
    ({ onSet }) => {
      onSet((theme) => {
        setTheme(theme)
      })
    },
  ],
})
