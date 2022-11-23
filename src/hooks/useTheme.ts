import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const LOCAL_THEME = 'theme'

function getTheme(): Theme {
  if (
    localStorage[LOCAL_THEME] === 'dark' ||
    (!(LOCAL_THEME in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark'
  }
  return 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getTheme())

  useEffect(() => {
    document.documentElement.classList.add(theme)
    localStorage[LOCAL_THEME] = theme
  }, [theme])

  return [theme, setTheme]
}
