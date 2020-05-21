import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import { observer } from "mobx-react";
import { MenuItemProps } from "antd/lib/menu/MenuItem";
import { SubMenuProps } from "antd/lib/menu/SubMenu";
import useBreakpoint from "../../components/hooks/useBreakpoint";
import { useStore } from "../../store";
import { MailOutlined } from "@ant-design/icons";

import Logo from "./Logo";

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuList: Array<any> = [
  {
    key: 1,
    path: "/home",
    title: "home",
    icon: <MailOutlined />,
    children: [
      {
        key: 2,
        path: "/home",
        title: "home",
        icon: <MailOutlined />,
      },
    ],
  },
];

const Sidebar = () => {
  const breakpoint = useBreakpoint();

  const {
    appStore: { collapsed, setCollapsed },
  } = useStore();

  useEffect(() => {
    if (breakpoint === "sm") {
      setCollapsed(true);
    }
  }, [breakpoint, setCollapsed]);

  interface MenuProps {
    key: string | number;
    path: string;
    title: string | React.ReactNode;
    children?: Array<MenuProps>;
  }

  const renderMenu = (data: Array<any>) => {
    return data.map((item: MenuItemProps & SubMenuProps & MenuProps) => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu title={item.title} key={item.key} icon={item.icon}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item {...item} title={item.title} key={item.key} icon={item.icon}>
          {item.title}
        </Menu.Item>
      );
    });
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsedWidth={breakpoint === "sm" ? 0 : 80}
      collapsed={collapsed}
      className={["sider", `sider-${breakpoint}`].join(" ")}
    >
      <Logo />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {renderMenu(menuList)}
      </Menu>
    </Sider>
  );
};
export default observer(Sidebar);
