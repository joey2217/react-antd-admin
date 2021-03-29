import React from "react";
import { Layout } from "antd";
import Logo from "./Logo";
import { useSelector, shallowEqual } from "react-redux";
import AppMenu from "./AppMenu";
import { RootState } from "../../store";
const { Sider } = Layout;

const AppSider: React.FC = () => {
  const { collapsed } = useSelector<RootState, { collapsed: boolean }>(
    (state) => ({ collapsed: state.app.collapsed }), shallowEqual
  )
  return (
    <Sider className="h-screen" trigger={null} collapsible collapsed={collapsed}>
      <Logo />
      <AppMenu />
    </Sider>
  );
};

export default AppSider;
