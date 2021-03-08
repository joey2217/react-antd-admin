import React, { lazy, Suspense } from "react";
import { Layout } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
const { Content } = Layout;

const AppContent: React.FC = () => {
  return (
    <Content className="m-4 p-6 bg-white dark:bg-black">
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" component={lazy(() => import("../pages/home"))} />
          <AuthRoute path="/form" component={lazy(() => import("../pages/form"))} />
          <AuthRoute path="/table" component={lazy(() => import("../pages/table"))} />
          <AuthRoute path="/nested-menu*" component={lazy(() => import("../pages/menu"))} />
          <Route path="/error/404" component={lazy(() => import("../pages/error/404"))} />
          <Route path="/error/403" component={lazy(() => import("../pages/error/403"))} />
          <Route path="/error/500" component={lazy(() => import("../pages/error/500"))} />
          <Redirect to="/error/404" />
        </Switch>
      </Suspense>
    </Content>
  );
};

export default AppContent;
