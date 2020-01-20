import React, { useEffect } from 'react';
import { Button } from 'antd';
import { login } from './api/user';
import { useObserver, useLocalStore } from 'mobx-react';
import store from './store';

import './App.css';

const App: React.FC = () => {
  const s = useLocalStore(() => store);

  useEffect(() => {
    (async () => {
      try {
        const res = await login({ username: '', password: '' });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return useObserver(() => (
    <div className="App">
      {s.user.userInfo.name}
      <Button type="primary">Button</Button>
    </div>
  ));
};

export default App;
