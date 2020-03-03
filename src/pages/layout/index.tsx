import React, { useEffect, useState } from "react";
import { useStore } from "../../store";
import { message, Spin, Layout,Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './layout.less'
import useWindowSize from '../../components/useWindowSize'
import AppMain from './AppMain'

const { Header, Sider, Content } = Layout;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const {width,height} = useWindowSize();
  const {
    userStore: { getUserInfo }
  } = useStore();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const msg = await getUserInfo();
        message.success(msg);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [getUserInfo]);

  return (
    <Spin spinning={loading} tip="Loading...">
       <Layout id="app">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: ()=>{setCollapsed(!collapsed)},
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {width}*{height}
            <AppMain/>
          </Content>
        </Layout>
      </Layout>
    </Spin>
  );
};
export default Home;
