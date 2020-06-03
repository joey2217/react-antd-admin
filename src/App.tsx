import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./layout";
import Login from "./pages/login";
import NotFound from "./components/Exception/NotFound";

import { useStore } from './store'
import { observer } from 'mobx-react'

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
          <Route path="/home" component={Layout} />
          <Route path="/table" component={Layout} />
          <Route path="/form" component={Layout} />
          <Route path="/menu" component={Layout} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </IntlWrapper>
  );
}

export default observer(App);
