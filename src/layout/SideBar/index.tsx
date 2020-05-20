import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { observer } from "mobx-react";

import useBreakpoint from "../../components/hooks/useBreakpoint";
import { useStore } from "../../store";

import Logo from "./Logo";

const { Sider } = Layout;

const Sidebar = () => {
  const breakpoint = useBreakpoint();

  const {
    appStore: { collapsed,setCollapsed },
  } = useStore();

  useEffect(() => {
    if (breakpoint==='sm') {
      setCollapsed(true);
    }
  }, [breakpoint, setCollapsed]);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsedWidth={breakpoint === "sm" ? 0 : 80}
      collapsed={collapsed}
      className={["sider",`sider-${breakpoint}`].join(' ')}
    >
      <Logo />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default observer(Sidebar);
