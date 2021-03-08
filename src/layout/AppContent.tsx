import React, { lazy, Suspense } from "react";
import { Layout } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
const { Content } = Layout;

const AppContent: React.FC = () => {
  return (
    <Content id="main" className="m-4 p-6 bg-white dark:bg-black">
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" component={lazy(() => import("../pages/home"))} />
          <AuthRoute path="/form" component={lazy(() => import("../pages/form"))} />
          <AuthRoute path="/table" component={lazy(() => import("../pages/table"))} />
          <AuthRoute path="/nested-menu*" component={lazy(() => import("../pages/menu"))} />
          {/* system */}
          <AuthRoute path="/system/account" component={lazy(() => import("../pages/system/account"))} />
          <AuthRoute path="/system/auth" component={lazy(() => import("../pages/system/auth"))} />
          <AuthRoute path="/system/role" component={lazy(() => import("../pages/system/role"))} />
          {/* editor */}
          <AuthRoute path="/editor/flow" component={lazy(() => import('../pages/editor/flow'))} />
          <AuthRoute path="/editor/mind" component={lazy(() => import('../pages/editor/mind'))} />
          <AuthRoute path="/charts/line" component={lazy(() => import('../pages/charts/line'))} />
          <AuthRoute path="/charts/common" component={lazy(() => import('../pages/charts/common'))} />
          <AuthRoute path="/text-editor/markdown" component={lazy(() => import('../pages/text-editor/markdown'))} />
          <AuthRoute path="/text-editor/rich-text" component={lazy(() => import('../pages/text-editor/rich-text'))} />
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
