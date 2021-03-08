import React from "react";
import { Layout } from "antd";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import AppMenu from "./AppMenu";
import { RootState } from "../../store";
const { Sider } = Layout;

const AppSider: React.FC = () => {
  const collapsed = useSelector<RootState>(
    (state) => state.app.collapsed
  ) as boolean;
  return (
    <Sider className="h-screen" trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <AppMenu />
    </Sider>
  );
};

export default AppSider;
