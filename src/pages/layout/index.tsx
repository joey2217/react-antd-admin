import React, { useEffect, useState } from "react";
import { useStore } from "../../store";
import { message, Spin, Layout } from "antd";
import "./layout.less";
import useWindowSize from "../../components/useWindowSize";
import AppMain from "./AppMain";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const { Content } = Layout;

const Home = () => {
  const [loading, setLoading] = useState(false);

  const { width, height } = useWindowSize();

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
        <Sidebar />
        <Layout className="site-layout">
          <Navbar/>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            {width}*{height}
            <AppMain />
          </Content>
        </Layout>
      </Layout>
    </Spin>
  );
};
export default Home;
