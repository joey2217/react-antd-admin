import React, { Suspense } from "react";
import { Layout } from "antd";

import { Switch,useRouteMatch } from "react-router-dom";

import AuthRoute from "../components/AuthRoute";

const Example = React.lazy(()=>import('../pages/example'))

const { Content } = Layout;

const AppContent = ( ) => {
  const match  = useRouteMatch()
  console.log(match);
  return (
    <Content className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AuthRoute path={`/home`} component={Example} />
          <AuthRoute path={`/home/test`} component={Example} />
        </Switch>
      </Suspense>
    </Content>
  );
};
export default AppContent;
