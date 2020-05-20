import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useStore } from "../../store";
import { observer } from "mobx-react";

const Trigger = () => {
  const {
    appStore: { collapsed, toggleCollapsed },
  } = useStore();

  return React.createElement(
    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
    {
      className: "trigger",
      onClick: toggleCollapsed,
    }
  );
};
export default observer(Trigger);
