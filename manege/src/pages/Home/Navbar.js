import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate,  } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const urls = {
  firstPage: '/home/firstpage',
  clock: '/home/clock',
  stopCheck: '/home/stopcheck'
}
const items = [
  getItem('首页', 'firstPage', <MailOutlined />),
  getItem('打卡', 'clock', <AppstoreOutlined />),
  getItem('现场检查', 'stopCheck', <SettingOutlined />)
];


const Navbar = () => {
  const navigate = useNavigate()
  const [openKeys, setOpenKeys] = useState('firstPage');
  useEffect(() => {
    setOpenKeys('firstPage')
    onOpenChange({key: openKeys})
  }, [openKeys])
  const onOpenChange = ({key}) => {
    navigate(urls[key])
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      defaultSelectedKeys={['firstPage']}
      onClick={onOpenChange}
      style={{
        width: '100%',
        height: '100%'
      }}
      items={items}
    />
  );
};
export default Navbar;