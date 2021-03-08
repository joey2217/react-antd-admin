import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

const AuthRoute: React.FC<RouteProps> = ({
  path,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props: any) =>
        Component && path ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default AuthRoute;
