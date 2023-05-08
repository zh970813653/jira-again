import React from "react";
import { Form, Input, Button, message } from "antd";
import { AuthParams } from "types/auth";
import { AuthContext } from "context/auth";

interface RegisterParams extends AuthParams {
  confirmpassword: string;
}

const Register = () => {
  const { resister } = AuthContext();
  const onFinish = async (value: RegisterParams) => {
    try {
      if (value.confirmpassword !== value.password) {
        return message.error("两次密码不一致");
      }
      await resister({
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
        <Input.Password placeholder="密码" />
      </Form.Item>
      <Form.Item
        name="confirmpassword"
        rules={[{ required: true, message: "确认密码" }]}
      >
        <Input.Password placeholder="确认密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
