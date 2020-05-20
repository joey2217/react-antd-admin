import React from 'react';
import { Layout } from 'antd';
import Trigger from './Trigger'

const { Header } = Layout;

const AppHeader = ()=>{
   return (
      <Header className="header">
        <Trigger />
      </Header>
   )
}
export default AppHeader;
