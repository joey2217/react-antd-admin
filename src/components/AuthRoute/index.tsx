import React from "react";
import {
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import { useStore } from "../../store";

const AuthRoute = ({ component: Component, ...rest }: any) => {
  const {
    userStore: { validateAuth },
  } = useStore();
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps<any>) =>
        validateAuth(props.location.pathname) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { ref: props.location },
            }}
          />
        )
      }
    />
  );
};
export default AuthRoute;
