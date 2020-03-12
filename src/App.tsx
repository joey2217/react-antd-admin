import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Layout from "./pages/layout";
import Login from "./pages/login";
import "./App.less";
import {  ConfigProvider }  from 'antd';
import { useStore } from "./store";
import { observer } from "mobx-react";


import { IntlProvider } from "react-intl";

function App() {
  const {
    appStore: { locale, localeMessage,antdLocale }
  } = useStore();
  return (
    <BrowserRouter>
      <IntlProvider locale={locale} messages={localeMessage}>
        <ConfigProvider locale={antdLocale}>
          <div id="app">
            <Switch>
              <Route path="/" exact component={Layout} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </ConfigProvider>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default observer(App);
