import React from 'react';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;
import GameMap from './GameMap';
import './GameInterface.css'

const GameInterface = () => {
    return (
        <Row>
            <Col xs={24} lg={12} className="responsive-box">
                <GameMap />
            </Col>
            <Col xs={24} lg={12} className="responsive-box">
                Text Display Here
            </Col>
        </Row>
    );
};

export default GameInterface;