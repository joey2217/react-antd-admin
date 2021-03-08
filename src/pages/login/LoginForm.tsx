import React, { useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/user/actions";
// const usernameReg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
// const passwordReg = /^[a-zA-Z]\w{5,17}$/;

const LoginForm = () => {
  const history = useHistory();
  const { formatMessage: f } = useIntl();

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    form.setFieldsValue({
      username: "Hello",
      password: "World",
    });
  }, [form]);

  const onFinish = async (loginData: any) => {
    try {
      setLoading(true);
      const msg = await dispatch(loginAction(loginData));
      message.success(msg);
      history.push("/");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: f({ id: "usernameMessage" }) }]}
      >
        <Input prefix={<UserOutlined />} placeholder={f({ id: "username" })} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: f({ id: "passwordMessage" }) }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder={f({ id: "password" })}
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" loading={loading}>
          {f({ id: "login" })}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
