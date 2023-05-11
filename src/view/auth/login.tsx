import React from "react";
import { Form, Input, Button } from "antd";
import { AuthParams } from "types/auth";
import { AuthContext } from "context/auth";
const Login = () => {
  const {login} = AuthContext()
  const onFinish = async (value: AuthParams) => {
    try {
      await login({
        password: value.password,
        username: value.username,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input.Password placeholder="密码" autoComplete="off" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
