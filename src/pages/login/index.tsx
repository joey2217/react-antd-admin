import React from "react";
import { Card, Row, Col } from "antd";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Background from './Background'

const LoginWrapper = styled(Row)`
  padding: 0 5vw 20vh 5vw;
  /* background-color:#a4b0be; */
`;

const Login = () => {
  return (
    <LoginWrapper className="height-100" align="middle" justify="center">
      <Col xs={24} sm={16} md={14} lg={12} xl={6}>
        <Card title="Login">
          <LoginForm />
        </Card>
      </Col>
      <Background/>
    </LoginWrapper>
  );
};
export default Login;
