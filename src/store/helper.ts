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
    if (savedValue != null) {
      setSelf(savedValue as any)
    }

    onSet((newValue, _, isReset) => {
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
