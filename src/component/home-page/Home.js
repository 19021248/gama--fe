import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  EditOutlined,
  WechatOutlined,
  BarChartOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom';
import SimulateHome from '../../pages/simulation_help-page/SimulationHelpPage';
import HeaderComponent from '../common/header.component';
import HomeContent from './home.content';
import ChartComponent from './chart.component';
import AccountComponent from './account.component';
import { getItem } from '../../utils';
import Edit from '../edit-page/edit.component';
import { set } from 'lodash';
import { SimulationProvider } from '../simulation-context/SimulationContext';

const { Header, Sider, Content } = Layout;

const Home = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const [choose, setChoose] = useState(1);
  const Pages = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Home',
      onClick: () => setChoose(1),
      description: '',
    },
    {
      key: '2',
      icon: <EditOutlined />,
      label: 'Simulate',
      onClick: () => setChoose(2),
      description: 'Giả lập dữ liệu Gama',
    },
    {
      key: '3',
      icon: <WechatOutlined />,
      label: 'Chat',
      onClick: () => {
        history.push('/chat');
      },
      description: 'Tham gia trò chuyện trực tuyến',
    },
    {
      key: '4',
      icon: <BarChartOutlined />,
      label: 'Chart',
      onClick: () => setChoose(4),
      description: 'Xem kết quả',
    },
    {
      key: '5',
      icon: <UserOutlined />,
      label: 'Member',
      onClick: () => setChoose(5),
      description: 'Sửa đổi thông tin cá nhân',
    },
  ];
  // useEffect(() => {
  //   localStorage.removeItem('tabs');
  //   const tempUser = getItem('user');
  //   if (!tempUser) history.push('/login');
  // });

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: '100%' }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={Pages}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            paddingLeft: 20,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,

            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
              style: { fontSize: 30, alignSelf: 'center' },
            },
          )}
          <LogoutOutlined
            style={{ fontSize: 30, alignSelf: 'center' }}
            onClick={() => {
              localStorage.clear();
              history.push('/login');
            }}
          />
        </Header>
        <Content
          style={{
            height: '100%',
            padding: 20,
            overflow: 'scroll',
            backgroundColor: 'white',
          }}
        >
            {choose === 1 ? (
              <HomeContent setChoose={setChoose} pages={Pages} />
            ) : choose === 2 ? (
              <SimulateHome setChoose={setChoose} />
            ) : choose === 3 ? (
              <Edit />
            ) : choose === 4 ? (
              <ChartComponent />
            ) : (
              <AccountComponent />
            )}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
