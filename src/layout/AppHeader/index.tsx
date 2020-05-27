import React from 'react';
import { Layout } from 'antd';
import Trigger from './Trigger';
import UserAvatar from './UserAvatar';
import ThemeSwitch from './ThemeSwitch';

const { Header } = Layout;

const AppHeader = ()=>{
   return (
      <Header className="header">
        <Trigger />
        <ThemeSwitch />
        <UserAvatar />
      </Header>
   )
}
export default AppHeader;
