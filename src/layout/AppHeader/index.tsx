import React from 'react';
import { Layout } from 'antd';
import Trigger from './Trigger';
import UserAvatar from './UserAvatar';
import ThemeSwitch from './ThemeSwitch';
import FullscreenSwitch from './FullscreenSwitch'
import LangDropdown from './LangDropdown'

const { Header } = Layout;

const AppHeader = ()=>{
   return (
      <Header className="header">
        <Trigger />
        <FullscreenSwitch />
        <ThemeSwitch />
        <UserAvatar />
        <LangDropdown />
      </Header>
   )
}
export default AppHeader;
