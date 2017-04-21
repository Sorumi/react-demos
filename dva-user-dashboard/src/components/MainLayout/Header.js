import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  const MenuItem = Menu.Item;
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <MenuItem key="/users">
        <Link to="/users">
          <Icon type="bars" />Users
        </Link>
      </MenuItem>
      <MenuItem key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </MenuItem>
      <MenuItem key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
      </MenuItem>
    </Menu>
  );
}

export default Header;
