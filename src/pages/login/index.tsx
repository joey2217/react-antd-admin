import React from "react";
import { Card, Row, Col } from "antd";
import LoginForm from "./LoginForm";
import './style.css'

const Login = () => {
  return (
    <Row id="login-container" align="middle" justify="center">
      <Col xs={24} sm={16} md={14} lg={12} xl={6}>
        <Card className="login-card" title="Login">
          <LoginForm />
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
