import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useEffect } from 'react';
import { useNavigate,  } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];
interface UrlsObj {
  [propName: string]: string // 其他属性
} 
interface changeObj {
  key: string,
  [propName: string]: any, // 其他属性
}
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    label,
    type,
  } as MenuItem;
}
const urls: UrlsObj = {
  firstPage: '/home/firstpage',
  clock: '/home/clock',
  stopCheck: '/home/stopcheck'
}
const items: MenuItem[] = [
  getItem('首页', 'firstPage', <MailOutlined />),
  getItem('现场检查', 'stopCheck', <AppstoreOutlined />),
  getItem('档案管理', 'clock', <SettingOutlined />),
];


const Navbar: React.FC = () => {
  const navigate = useNavigate()

  const [openKeys] = useState(['firstPage']);
  const onOpenChange = (keys: changeObj) => {
    navigate(urls[keys['key']])
  };
  useEffect(() => {
    onOpenChange({key: 'stopCheck'})
  }, [])
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      defaultSelectedKeys={['stopCheck']}
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