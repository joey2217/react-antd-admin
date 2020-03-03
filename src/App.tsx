import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./pages/layout";
import Login from "./pages/login";
import "./App.css";

import {useStore} from './store'

import {IntlProvider} from 'react-intl';


function App() {
  const {appStore:{locale,localeMessage}} = useStore()
  return (
    <BrowserRouter>
      <IntlProvider locale={locale} messages={localeMessage}>
        <div id="app">
          <Switch>
            <Route path="/" exact component={Layout} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;
