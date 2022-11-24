import type { AtomEffect } from 'recoil'

export type Language = 'zhCN' | 'en'

export const LOCAL_LNG = 'language'

const zhReg = /zh/

export function getLanguage(): Language {
  const localLanguage = localStorage.getItem(LOCAL_LNG)
  if (localLanguage) {
    return localLanguage as Language
  }
  const language = navigator.language
  if (zhReg.test(language)) {
    return 'zhCN'
  }
  return 'en'
}

export const simpleLocalStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    console.log('simpleLocalStorageEffect', savedValue);
    if (savedValue != null) {
      setSelf(savedValue as any)
    }

    onSet((newValue, _, isReset) => {
      console.log(newValue, isReset);
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, newValue as string)
    })
  }

export const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export type Theme = 'dark' | 'light'

export const LOCAL_THEME = 'theme'

export function getTheme(): Theme {
  if (
    localStorage[LOCAL_THEME] === 'dark' ||
    (!(LOCAL_THEME in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    return 'dark'
  }
  document.documentElement.classList.remove('dark')
  return 'light'
}

export function setTheme(theme: Theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
