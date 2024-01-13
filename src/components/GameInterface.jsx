import React from 'react';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;
import GameMap from './GameMap';

const GameInterface = () => {
    return (
        <Layout>
            <Content style={{ padding: '20px' }}>
                <Row>
                    <Col xs={24} md={16} style={{ background: '#ddd' }}> {/* Map Area Placeholder */}
                        <GameMap />
                    </Col>
                    <Col xs={24} md={8} style={{ background: '#eee' }}> {/* Text Area Placeholder */}
                        Text Display will go here
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default GameInterface;