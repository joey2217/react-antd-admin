import React from "react";
import { Card, Row, Col } from "antd";
import LoginForm from "./LoginForm";
import { useIntl } from "react-intl";
import LangDropdown from "../../layout/AppHeader/LangDropdown";

import "./style.css";

const Login = () => {
  const { formatMessage: f } = useIntl();

  return (
    <Row id="login-container" align="middle" justify="center">
      <Col xs={24} sm={16} md={14} lg={12} xl={6}>
        <Card
          className="login-card"
          title={f({ id: "login" })}
          extra={<LangDropdown />}
        >
          <LoginForm />
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
