import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';
import { useNavigate, useParams  } from 'react-router-dom';
import "./form.css"
const FormLogin = (props) => {
  const navigate = useNavigate();
  const params = useParams()
  let [username, setUsername] = useState()
  let [password, setPasseord] = useState()
  const onFinish = () => {
    console.log(props)
    console.log(params)
    navigate('/home');
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}

    >
      <Form.Item
        name="username"
        style={{ marginTop: '52px' }}
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="用户名"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          value={password}
          onChange={(e) => setPasseord(e.target.value)}
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>
            <span className='remenber'>记住密码</span>
          </Checkbox>
        </Form.Item>


      </Form.Item>

      <Form.Item className='btn'>
        <div className='login-btn' onClick={onFinish}>登录</div>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;