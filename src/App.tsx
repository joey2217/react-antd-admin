import React from 'react';
import './App.css';
import { Button } from 'antd';

import {useStore} from './store'
import {observer} from 'mobx-react'

function App() {
  const {counterStore:{count,increase}} = useStore()
  return (
    <div className="App">
      <span>{count}</span>
      <Button type="primary" onClick={()=>increase()}>Increase</Button>
    </div>
  );
}

export default observer(App);
