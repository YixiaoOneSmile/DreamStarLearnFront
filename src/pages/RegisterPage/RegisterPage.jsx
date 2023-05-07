import React from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../api/index.js';
import { Form, Input, Button } from 'antd';

const RegisterPage = () => {
  // const history = useHistory();

  const onFinish = async (values) => {
    try {
      const response = await registerUser(values);
      // 注册成功后重定向到登录页面
      // history.push('/login');
    } catch (error) {
      // 显示错误信息
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
