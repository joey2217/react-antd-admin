import React, { Suspense } from "react";
import { Layout } from "antd";

import { Switch,Route } from "react-router-dom";
import NotFound from "../components/Exception/NotFound";

import AuthRoute from "../components/AuthRoute";

const Home = React.lazy(() => import("../pages/home"));
const Form = React.lazy(() => import("../pages/form"));
const Table = React.lazy(() => import("../pages/table"));
const Menu = React.lazy(() => import("../pages/menu"));

const { Content } = Layout;

const AppContent = () => {
  return (
    <Content className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AuthRoute path="/home" component={Home} />
          <AuthRoute path="/form" component={Form} />
          <AuthRoute path="/table" component={Table} />
          <AuthRoute path="/menu/menu2" component={Menu} />
          <AuthRoute path="/menu/menu1/menu1-1" component={Menu} />
          <AuthRoute path="/menu/menu1/menu1-2" component={Menu} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Content>
  );
};
export default AppContent;
