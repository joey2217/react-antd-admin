import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";
import { Layout } from "antd";
import styled from 'styled-components'
import LocaleDropdown from "./components/LocaleDropdown";

import { useStore } from "../../store";
const { Header } = Layout;

const HeaderWrapper = styled(Header)`
  padding: 0 16px 0 0;
  display:flex;
  align-items:center;
`

const Right = styled.div`
  margin-left:auto;
`


function Navbar() {
  const {
    appStore: { collapsed, toggleCollapsed }
  } = useStore();

  return (
    <HeaderWrapper>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => toggleCollapsed()
      })}
      <Right>
      <LocaleDropdown/>
      </Right>
      
    </HeaderWrapper>
  );
}
export default observer(Navbar);
