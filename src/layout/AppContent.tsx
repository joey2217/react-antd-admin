import React, { Suspense,lazy } from "react";
import { Layout } from "antd";

import { Switch, Route } from "react-router-dom";
import NotFound from "../components/Exception/NotFound";

import AuthRoute from "../components/AuthRoute";

const { Content } = Layout;

const AppContent = () => {
  return (
    <Content className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AuthRoute path="/home" component={lazy(() => import("../pages/home"))} />
          <AuthRoute path="/form" component={lazy(() => import("../pages/form"))} />
          <AuthRoute path="/table" component={lazy(() => import("../pages/table"))} />
          <AuthRoute path="/menu*" component={lazy(() => import("../pages/menu"))} />
          {/* system */}
          <AuthRoute path="/system/account" component={lazy(() => import("../pages/system/account"))} />
          <AuthRoute path="/system/auth" component={lazy(() => import("../pages/system/auth"))} />
          <AuthRoute path="/system/role" component={lazy(() => import("../pages/system/role"))} />
          {/* <AuthRoute
            path="/system"
            render={({ match: { url } }: RouteComponentProps) => (
              <Switch>
                <AuthRoute path={`${url}/account`} component={Account} />
                <AuthRoute path={`${url}/auth`} component={Auth} />
                <AuthRoute path={`${url}/role`} component={Role} />
                <Redirect to={`${url}/account`} />
              </Switch>
            )}
          /> */}
          {/* editor */}
          <AuthRoute path="/editor/flow" component={lazy(()=>import('../pages/editor/flow'))} />
          <AuthRoute path="/editor/mind" component={lazy(()=>import('../pages/editor/mind'))} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Content>
  );
};
export default AppContent;
