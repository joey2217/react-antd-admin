import React from "react";
import { Layout } from "antd";
import { useStore } from "../../store";
import AppMenu from "./AppMenu";

import {observer} from 'mobx-react'

const { Sider } = Layout;

const Sidebar = () => {
  const {
    appStore: { collapsed }
  } = useStore();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <AppMenu />
    </Sider>
  );
};
export default observer(Sidebar);
