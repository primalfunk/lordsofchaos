import React from 'react';
import { Card } from 'antd';

const Room = ({ description, exits, onRoomClick }) => {
    return (
        <Card onClick={onRoomClick} hoverable>
            <h3>Room</h3>
            <p>{description}</p>
            {/* Display exits or other room info here */}
        </Card>
    );
};

export default Room;