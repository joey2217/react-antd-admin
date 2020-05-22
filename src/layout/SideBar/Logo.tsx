import React from "react";
import star from "./star.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img className="logo-img" src={star} alt="logo" />
      <h1 className="logo-title">Antd Admin</h1>
    </Link>
  );
};
export default Logo;
