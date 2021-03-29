import React from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { RootState } from "../../store";
import { toggleCollapsed } from "../../store/app/actions";
import UserAvatar from "./UserAvatar";
import ThemeSwitch from "./ThemeSwitch";
import FullscreenSwitch from "./FullscreenSwitch";
import LangDropdown from "./LangDropdown";
const { Header } = Layout;

const AppHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { collapsed } = useSelector<RootState, { collapsed: boolean }>(
    (state) => ({
      collapsed: state.app.collapsed
    })
  )
  return (
    <Header
      className="bg-white flex items-center header"
      style={{ padding: "0 16px" }}
    >
      <MenuUnfoldOutlined
        className={classnames(
          "cursor-pointer transform mr-auto text-lg",
          collapsed && "rotate-180"
        )}
        onClick={() => dispatch(toggleCollapsed())}
      />
      <FullscreenSwitch />
      <ThemeSwitch />
      <UserAvatar />
      <LangDropdown />
    </Header>
  );
};

export default AppHeader;
