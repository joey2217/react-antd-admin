import React from 'react';
import { Layout } from 'antd';
import Trigger from './Trigger';
import UserAvatar from './UserAvatar';

const { Header } = Layout;

const AppHeader = ()=>{
   return (
      <Header className="header">
        <Trigger />
        <UserAvatar />
      </Header>
   )
}
export default AppHeader;
