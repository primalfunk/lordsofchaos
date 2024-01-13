import React from 'react';

const Map = () => {
    const handleRoomClick = () => {
        console.log('Room clicked');
    };

    return (
        <div onClick={handleRoomClick} style={{ width: '100%', height: '100%' }}>
            {/* Static map representation for now */}
            Map Visualization
        </div>
    );
};

export default Map;