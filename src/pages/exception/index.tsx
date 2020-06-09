import React from "react";
import { useRouteMatch, match } from "react-router-dom";
import NoAuth from "../../components/Exception/NoAuth";
import Error from "../../components/Exception/Error";
import NotFound from "../../components/Exception/NotFound";

const Exception = () => {
  const routeMatch: match<{ code: string }> = useRouteMatch();
  const code = Number(routeMatch.params.code);
  if (code === 403) {
    return <NoAuth />;
  } else if (code === 500) {
    return <Error />;
  } else {
    return <NotFound />;
  }
};
export default Exception;
