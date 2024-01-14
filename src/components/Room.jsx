import React from 'react';

const Room = ({ roomData, onClick }) => {
    // Convert polygon points to a string for the 'points' attribute in SVG
    const points = roomData.polygon.map(p => p.join(",")).join(" ");

    return (
        <polygon points={points} onClick={onClick} fill="blue" stroke="black" />
    );
};

export default Room;