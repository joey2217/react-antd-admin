import React, { useEffect } from "react";
import { Layout, Menu, Grid } from "antd";
import { observer } from "mobx-react";
import { MenuItemProps } from "antd/lib/menu/MenuItem";
import { SubMenuProps } from "antd/lib/menu/SubMenu";
import { Link, useRouteMatch } from "react-router-dom";
import { useStore } from "../../store";
import {
  DashboardOutlined,
  TableOutlined,
  FormOutlined,
  MenuOutlined,
  SettingOutlined,
  HighlightOutlined,
  LineChartOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useIntl } from "react-intl";

import Logo from "./Logo";

const { Sider } = Layout;
const { SubMenu } = Menu;
const { useBreakpoint } = Grid;

interface MenuProps {
  path: string;
  title: string;
  icon?: any;
  children?: Array<MenuProps>;
}

const menuList: Array<MenuProps> = [
  {
    path: "/home",
    title: "home",
    icon: DashboardOutlined,
  },
  {
    path: "/table",
    title: "table",
    icon: TableOutlined,
  },
  {
    path: "/form",
    title: "form",
    icon: FormOutlined,
  },
  {
    path: "/system",
    title: "system",
    icon: SettingOutlined,
    children: [
      {
        path: "/system/account",
        title: "account",
      },
      {
        path: "/system/auth",
        title: "auth",
      },
      {
        path: "/system/role",
        title: "role",
      },
    ],
  },
  {
    path: "/editor",
    title: "editor",
    icon: HighlightOutlined,
    children: [
      {
        path: "/editor/flow",
        title: "flow",
      },
      {
        path: "/editor/mind",
        title: "mind",
      },
    ],
  },
  {
    path: "/charts",
    title: "charts",
    icon: LineChartOutlined,
    children: [
      {
        path: "/charts/line",
        title: "lineCharts",
      },
      {
        path: "/charts/common",
        title: "commonCharts",
      },
    ],
  },
  {
    path: "/text-editor",
    title: "textEditor",
    icon: EditOutlined,
    children: [
      {
        path: "/text-editor/markdown",
        title: "markdown",
      },
      {
        path: "/text-editor/rich-text",
        title: "richText",
      },
    ],
  },
  {
    path: "/nested-menu",
    title: "nestedMenu",
    icon: MenuOutlined,
    children: [
      {
        path: "/nested-menu/menu1",
        title: "menu1",
        children: [
          {
            path: "/nested-menu/menu1/menu1-1",
            title: "menu11",
          },
          {
            path: "/nested-menu/menu1/menu1-2",
            title: "menu12",
          },
        ],
      },
      {
        path: "/nested-menu/menu2",
        title: "menu2",
      },
    ],
  },
];

const Sidebar = () => {
  const breakpoint = useBreakpoint();

  const match = useRouteMatch();

  const { formatMessage: f } = useIntl();

  const {
    appStore: { collapsed, setCollapsed, theme },
  } = useStore();

  useEffect(() => {
    const bp = Object.entries(breakpoint)
      .filter((screen) => !!screen[1])
      .map((screen) => screen[0]);
    if (bp.includes("xs")) {
      setCollapsed(true);
    }
  }, [breakpoint, setCollapsed]);

  const renderMenu = (data: Array<MenuProps>) => {
    return data.map((item: MenuItemProps & SubMenuProps & MenuProps) => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            title={f({ id: item.title })}
            key={item.path}
            icon={item.icon && React.createElement(item.icon)}
          >
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          {...item}
          title={f({ id: item.title })}
          key={item.path}
          icon={item.icon && React.createElement(item.icon)}
        >
          <Link to={item.path}>{f({ id: item.title })}</Link>
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
      theme={theme === "dark" ? "dark" : "light"}
    >
      <Logo />
      <Menu
        theme={theme === "dark" ? "dark" : "light"}
        mode="inline"
        defaultSelectedKeys={[match.url]}
      >
        {renderMenu(menuList)}
      </Menu>
    </Sider>
  );
};
export default observer(Sidebar);
