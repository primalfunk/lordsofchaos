import React from 'react';
import { Layout, Menu, Button, Typography } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const menuItems = [
    {
        label: 'Lords of Chaos',
        key: '1',
        // You can also add onClick, icon, etc. here
    },
    // Add more items as needed
];

const LandingPage = ({ onStartGame }) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
            </Header>
            <Content style={{ padding: '50px' }}>
                <div className="site-layout-content" style={{ textAlign: 'center' }}>
                    <Title level={2}>Welcome to Lords of Chaos</Title>
                    <Button type="primary" size="large" onClick={onStartGame}>
                        Start Game
                    </Button>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Lords of Chaos ©2024 Created by You
            </Footer>
        </Layout>
    );
};

export default LandingPage;