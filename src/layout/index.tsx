import React, { useEffect } from "react";
import useBreakpoint from "../components/hooks/useBreakpoint";
import { useStore } from "../store";
import { useHistory, useLocation } from "react-router-dom";

import { Layout, Menu } from 'antd';

const { Header, Content,  Sider } = Layout;


const AppLayout: React.FC = () => {

  const breakpoint = useBreakpoint();
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    console.log("breakpoint:" + breakpoint);
  }, [breakpoint]);

  const {
    userStore: { getUserInfo },
  } = useStore();

  useEffect(() => {
    (async () => {
      try {
        await getUserInfo();
      } catch (error) {
        console.error(error);
        history.replace(`/login?ref=${pathname}`);
      }
    })();
  }, [getUserInfo, history, pathname]);

  return     (
      <Layout>
          <Header>header</Header>
          <Layout>
          <Sider>left sidebar</Sider>
          <Content>main content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
      </Layout>
    )
};
 
export default AppLayout;
