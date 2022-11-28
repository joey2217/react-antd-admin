import React, { memo } from 'react'
import { Layout, Space } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import { useRecoilState } from 'recoil'
import { collapsedState } from '../store'
import UserAvatar from './UserAvatar'
import LanguageDropdown from './LanguageDropdown'
import ThemeSwitch from './ThemeSwitch'

const { Header } = Layout

const AppHeader: React.FC = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState)

  return (
    <Header
      id="header"
      className="flex items-center header"
      style={{ padding: '0 16px' }}
    >
      <MenuUnfoldOutlined
        className="transform mr-auto text-lg"
        style={{
          transform: collapsed ? '' : 'rotate(180deg)',
        }}
        onClick={() => setCollapsed(!collapsed)}
      />
      <Space size="middle">
        <ThemeSwitch />
        <LanguageDropdown />
        <UserAvatar />
      </Space>
    </Header>
  )
}

export default memo(AppHeader)
