import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Illustration from '../../assets/undraw_secure_login_pdn4.svg';
import './LoginPage.css';
import { login } from '../../api/index.js';

const { Title } = Typography;

const LoginPage = () => {
	const navigate = useNavigate();
	const onFinish = async(values) => {
		const {username,password} = values;
		try {
			const response = await login(username, password);
			const token = response.data.token
			localStorage.setItem('token',token)
			navigate('courses');
			window.location.reload();
			
			// You can now redirect the user or update the application state as needed.
		  } catch (error) {
			console.error('Login failed:', error);
			// Show an error message to the user or handle the error as needed.
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
			<Col className="login" xs={20} sm={16} md={12} lg={8} xl={6}>
				<img
					src={Illustration}
					alt="Illustration"
					className="illustration"
				/>
				<Title
					level={2}
					style={{ textAlign: 'center', marginBottom: 40 }}
				>
					登录
				</Title>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					autoComplete="off"
				>
					<Form.Item
						name="username"
						rules={[
							{ required: true, message: '请输入您的用户名！' },
						]}
					>
						<Input prefix={<UserOutlined />} placeholder="用户名" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{ required: true, message: '请输入您的密码！' },
						]}
					>
						<Input
							prefix={<LockOutlined />}
							type="password"
							placeholder="密码"
						/>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							style={{ width: '100%' }}
						>
							登录
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>
	);
};

export default LoginPage;
