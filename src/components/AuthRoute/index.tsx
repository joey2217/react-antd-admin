import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useStore } from "../../store";

const AuthRoute = ({ component: Component, path, ...rest }: any) => {
  const {
    userStore: { validateAuth },
  } = useStore();
  return validateAuth(path) ? (
    <Route {...rest} component={Component} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { ref: path },
      }}
    />
  );
};
export default AuthRoute;

//  <Route
//   {...rest}
//   render={(props: RouteComponentProps<any>) =>
//     validateAuth(props.location.pathname) ? (
//       <Component />
//     ) : (
//       <Redirect
//         to={{
//           pathname: "/login",
//           state: { ref: props.location },
//         }}
//       />
//     )
//   }
// />
