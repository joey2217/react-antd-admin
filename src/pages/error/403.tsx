import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

const NoAuth = () => {
  const { formatMessage: f } = useIntl();

  return (
    <Result
      status="403"
      title="403"
      subTitle={f({ id: "noAuthSubTitle" })}
      extra={
        <Link to="/">
          <Button type="primary">{f({ id: "backHome" })}</Button>
        </Link>
      }
    />
  );
};
export default NoAuth;
