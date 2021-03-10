import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { IMenu } from "../../api/login";
import { RootState } from "../../store";

const AuthRoute: React.FC<RouteProps> = ({
  path,
  component: Component,
  ...rest
}) => {
  const menus = useSelector<RootState>(state => state.user.menus) as IMenu[]
  const validate = (path: string | string[] | undefined) => {
    // TODO validate permission
    console.log('validate path', path, menus);
    return path && menus.length > 0
  }
  return (
    <Route
      path={path}
      {...rest}
      render={(props) =>
        Component && validate(path) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/error/403",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default AuthRoute;
