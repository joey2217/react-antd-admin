import React, { memo } from 'react'
import { Switch } from 'antd'
import { useRecoilState } from 'recoil'
import { themeState } from '../../store/atom'

const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  return (
    <Switch
      checkedChildren="🌙"
      unCheckedChildren="☀"
      defaultChecked={theme === 'dark'}
      onChange={(checked) => {
        setTheme(checked ? 'dark' : 'light')
      }}
    />
  )
}

export default memo(ThemeSwitch)
