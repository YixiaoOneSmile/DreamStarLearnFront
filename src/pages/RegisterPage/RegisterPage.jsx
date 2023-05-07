import React from 'react';
import { register } from '../../api/index.js';
import { Form, Input, Button, Row, Col, Typography } from 'antd';
import Illustration from '../../assets/undraw_secure_login_pdn4.svg';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

const RegisterPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const {username,password} =values
    try {
      const response = await register(username, password);
      // 注册成功后重定向到登录页面
      alert("注册成功")
      navigate('/login');
    } catch (error) {
      console.error('register failed:', error);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
      }}
    >
      <Col className="register" xs={20} sm={16} md={12} lg={8} xl={6}>
        <img
          src={Illustration}
          alt="Illustration"
          className="illustration"
        />
        <Title level={2} style={{ textAlign: 'center', marginBottom: 40 }}>
          注册
        </Title>
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入您的用户名！' }]}
          >
            <Input prefix={<span className="iconfont">&#xe60b;</span>} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入您的密码！' }]}
          >
            <Input.Password prefix={<span className="iconfont">&#xe669;</span>} placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
              style={{ width: '100%' }}
            >
              注册
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterPage;
