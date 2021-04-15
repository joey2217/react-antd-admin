import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImg } from "./logo.svg";

const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex h-10 items-center flex-nowrap box-border my-3 mx-4 bg-gray-200 overflow-hidden text-black dark:text-white"
    >
      <LogoImg className="w-10 h-10 m-1 flex-shrink-0" />
      <strong className="text-black text-lg flex-shrink truncate">
        Antd Admin
      </strong>
    </Link>
  );
};
export default memo(Logo);
