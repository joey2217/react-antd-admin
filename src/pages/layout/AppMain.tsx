import React from "react";
import { useIntl } from "react-intl";
import { Pagination } from "antd";

const AppMain = () => {
  const { formatMessage: f } = useIntl();
  return (
    <>
      {f({ id: "hello" })}
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </>
  );
};
export default AppMain;
