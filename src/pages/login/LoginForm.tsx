import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useStore } from "../../store";

const LoginForm = () => {
  const history = useHistory();

  const {
    userStore: { login },
  } = useStore();

  const [loading, setLoading] = useState(false);

  const onFinish = async (loginData: any) => {
    try {
      setLoading(true);
      const msg = await login(loginData);
      message.success(msg);
      history.push("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <Form  name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
