import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


type Props = {}

const Adminlayout = (props: Props) => {
  return (
    <div>
      <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <NavLink to="/admin"><Menu.Item icon={<LaptopOutlined className='navbar' />}  key="1">Home</Menu.Item></NavLink>
              <NavLink to="/admin/products"><Menu.Item icon={<LaptopOutlined className='navbar' />}  key="1">Products</Menu.Item></NavLink>
              <NavLink to='/admin/categories'><Menu.Item icon={<LaptopOutlined  className='navbar'/>}  key="5">Categories</Menu.Item></NavLink>
              <NavLink to='/admin/users'><Menu.Item icon={<UserOutlined  className='navbar'/>}  key="5">Users</Menu.Item></NavLink>
              
              <NavLink to="/admin/order"><Menu.Item icon={<NotificationOutlined className='navbar'/>} key="9">Order</Menu.Item></NavLink>
              <NavLink to="/"><Menu.Item icon={<UserOutlined className='navbar' />}  key="1">Home Pgae</Menu.Item></NavLink>

          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 510 }}><Outlet/></Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout></div>
  )
}

export default Adminlayout