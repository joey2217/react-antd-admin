import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

const NotFound = () => {
  const { formatMessage: f } = useIntl();

  return (
    <Result
      status="404"
      title="404"
      subTitle={f({ id: "notFoundSubTitle" })}
      extra={
        <Link to="/">
          <Button type="primary">{f({ id: "backHome" })}</Button>
        </Link>
      }
    />
  );
};
export default NotFound;
