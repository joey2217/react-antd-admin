import React, { memo } from 'react'
import { Layout } from 'antd'
import { useRecoilValue } from 'recoil'
import { collapsedState } from '../store'
import { themeState } from '../../store/atom'
import Logo from './Logo'
import Menu from './Menu'

const { Sider } = Layout

const AppSider: React.FC = () => {
  const collapsed = useRecoilValue(collapsedState)
  const theme = useRecoilValue(themeState)

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme={theme}>
      <Logo />
      <Menu theme={theme}/>
    </Sider>
  )
}

export default memo(AppSider)
