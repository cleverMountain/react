import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';
import "./form.less"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import http from '../../utils/axios';
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';



interface ParamsObj {
  username?: string,
  password?: string,
}

const App: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }
  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  const onFinish = () => {
    http.post('/login', ({
      username: 'admin',
      password: '1234566',
    } as ParamsObj)).then((res: any) => {
      if (res.success) {
        localStorage.setItem('token', res.data.token)
        navigate('/home');
      }
    })
  }
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <Form.Item
        style={{ marginTop: '60px' }}
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} onChange={handleUsername} value={username} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>
            <span className='remenber'>
              记住密码
            </span>
          </Checkbox>
        </Form.Item>


      </Form.Item>

      <Form.Item>
        <div className='login-btn' onClick={onFinish} >登录</div>
      </Form.Item>
    </Form>
  );
};

export default App;