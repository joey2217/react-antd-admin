import React, { memo, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Outlet } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import Sider from './Sider'
import Header from './Header'

const { Content } = Layout

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <Layout className="h-screen overflow-hidden">
      <Sider />
      <Layout className="site-layout">
        <Header />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default memo(AppLayout)
