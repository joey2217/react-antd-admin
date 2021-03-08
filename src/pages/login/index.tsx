import React from "react";
import { Card, Row, Col } from "antd";
import { useIntl } from "react-intl";
import LoginForm from "./LoginForm";
import LangDropdown from "../../layout/Header/LangDropdown";

const Login: React.FC = () => {
  const { formatMessage: f } = useIntl();

  return (
    <Row
      align="middle"
      justify="center"
      className="h-screen pb-20 bg-gradient-to-r from-indigo-400 via-green-500 to-blue-400"
    >
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
