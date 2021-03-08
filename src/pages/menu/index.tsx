import React from "react";
import { RouteComponentProps } from "react-router-dom";

const Menu: React.FC<RouteComponentProps> = ({ match }) => {
  return <div>path:{match.url}</div>;
};
export default Menu;
