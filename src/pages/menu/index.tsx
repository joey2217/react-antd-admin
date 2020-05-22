import React from "react";
import { RouteComponentProps } from "react-router-dom";

const Menu = ({ match }: RouteComponentProps) => {
  return <div>path:{match.url}</div>;
};
export default Menu;
