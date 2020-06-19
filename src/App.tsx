import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layout";
import Login from "./pages/login";
import Exception from "./pages/exception";

import { useStore } from './store'
import IntlWrapper from './language/index';

import "./App.less";

function App() {
  const { appStore: { theme, toggleTheme } } = useStore();

  useEffect(() => {
    if (theme === 'dark') {
      toggleTheme('dark');
    }
  }, [theme, toggleTheme]);

  return (
    <IntlWrapper >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/login" component={Login} />
          <Route path="/exception/:code" component={Exception} />
          <Route component={Layout} />
        </Switch>
      </BrowserRouter>
    </IntlWrapper>
  );
}

export default App;
