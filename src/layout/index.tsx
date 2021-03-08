import React from "react";
import { Layout } from "antd";
import Sider from "./Sider";
import Header from "./Header";
import AppContent from "./AppContent";

const AppLayout: React.FC = () => {
  return (
    <Layout className="h-screen">
      <Sider />
      <Layout>
        <Header />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
