import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Space } from 'antd';
const { Header } = Layout;

const HeaderMenu = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
  };

  const menuItemStyle = {
    backgroundColor: '#d4e4f7',
  };

  return (
    <Header style={{ background: '#d4e4f7' }}>
      <Space className="header-content" size="large" style={{ justifyContent: 'space-between', width: '100%' }}>
        <Link to="/" className="header-title">
          <img className="logo-icon" src="{logo}" alt="" />
          启梦
        </Link>
        <Menu mode="horizontal" style={{ backgroundColor: '#d4e4f7' }}>
          <Menu.Item key="courses" style={menuItemStyle}>
            <Link to="/courses">课程</Link>
          </Menu.Item>
          <Menu.Item key="exams" style={menuItemStyle}>
            <Link to="/exams">考试</Link>
          </Menu.Item>
          {isLogin && (
            <>
              <Menu.Item key="profile" style={menuItemStyle}>
                <Link to="/profile">个人中心</Link>
              </Menu.Item>
              <Menu.Item key="logout" onClick={handleLogout} style={menuItemStyle}>
                退出登录
              </Menu.Item>
            </>
          )}
          {!isLogin && (
            <>
              <Menu.Item key="login" style={menuItemStyle}>
                <Link to="/login">登录</Link>
              </Menu.Item>
              <Menu.Item key="register" style={menuItemStyle}>
                <Link to="/reg">注册</Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Space>
    </Header>
  );
};

export default HeaderMenu;
