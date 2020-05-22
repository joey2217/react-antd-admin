import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import { observer } from "mobx-react";
import { MenuItemProps } from "antd/lib/menu/MenuItem";
import { SubMenuProps } from "antd/lib/menu/SubMenu";
import { Link, useRouteMatch } from "react-router-dom";
import useBreakpoint from "../../components/hooks/useBreakpoint";
import { useStore } from "../../store";
import {
  DashboardOutlined,
  TableOutlined,
  FormOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import Logo from "./Logo";

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuList: Array<any> = [
  {
    path: "/home",
    title: "home",
    icon: <DashboardOutlined />,
  },
  {
    path: "/table",
    title: "table",
    icon: <TableOutlined />,
  },
  {
    path: "/form",
    title: "form",
    icon: <FormOutlined />,
  },
  {
    path: "/menu",
    title: "menu",
    icon: <MenuOutlined />,
    children: [
      {
        path: "/menu/menu1",
        title: "menu1",
        children: [
          {
            path: "/menu/menu1/menu1-1",
            title: "menu1-1",
          },
          {
            path: "/menu/menu1/menu1-2",
            title: "menu1-2",
          },
        ],
      },
      {
        path: "/menu/menu2",
        title: "menu2",
      },
    ],
  },
];

const Sidebar = () => {
  const breakpoint = useBreakpoint();

  const match = useRouteMatch();

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
          <SubMenu title={item.title} key={item.path} icon={item.icon}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          {...item}
          title={item.title}
          key={item.path}
          icon={item.icon}
        >
          <Link to={item.path}>{item.title}</Link>
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
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[match.url]}
      >
        {renderMenu(menuList)}
      </Menu>
    </Sider>
  );
};
export default observer(Sidebar);
