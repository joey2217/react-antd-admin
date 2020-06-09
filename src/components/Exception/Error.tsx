import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

const Error = () => {
  const { formatMessage: f } = useIntl();
  return (
    <Result
      status="500"
      title="500"
      subTitle={f({ id: "errorSubTitle" })}
      extra={
        <Link to="/">
          <Button type="primary">{f({ id: "backHome" })}</Button>
        </Link>
      }
    />
  );
};
export default Error;
