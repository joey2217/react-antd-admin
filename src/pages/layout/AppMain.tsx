import React from "react";
import { useIntl } from "react-intl";

const AppMain = () => {
  const { formatMessage: f } = useIntl();
  return <>{f({ id: "hello" })}</>;
};
export default AppMain;
