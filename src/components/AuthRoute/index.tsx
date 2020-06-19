import React from "react";
import { Route, Redirect,RouteProps } from "react-router-dom";

import { useStore } from "../../store";

const AuthRoute = ({  path, ...rest }: RouteProps) => {
  const {
    userStore: { validateAuth },
  } = useStore();
  return validateAuth(path) ? (
    <Route {...rest} />
  ) : (
    <Redirect
      to={{
        pathname: "/exception/403",
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
