import React, { useEffect, useState } from 'react';
import { Delaunay } from 'd3-delaunay';
import Room from './Room';
import { generateDescription } from '../game/descriptionGenerator'

const GameMap = ({ playerPosition }) => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const points = generatePointsForRooms();
        const delaunay = Delaunay.from(points);
        const voronoi = delaunay.voronoi([0, 0, 1000, 1000]);

        const generatedRooms = Array.from(voronoi.cellPolygons()).map((polygon, index) => ({
            id: index,
            polygon: polygon,
            description: generateDescription(),
        }));

        setRooms(generatedRooms);
    }, [playerPosition]);

    const generatePointsForRooms = (count = 30, mapWidth = 1000, mapHeight = 1000) => {
        const points = [];
        for (let i = 0; i < count; i++) {
            points.push([Math.random() * mapWidth, Math.random() * mapHeight]);
        }
        return points;
    };

    const handleRoomClick = (room) => {
        console.log(`Clicked on room: ${room.id}`);
        // Room click logic
    };

    const getVisibleRooms = (allRooms, playerPos) => {
        // Basic implementation: return all rooms
        // TODO: Update to return rooms based on player position and visibility logic
        return allRooms;
    };

    // Render only the rooms within the player's view
    const visibleRooms = getVisibleRooms(rooms, playerPosition);

    return (
        <svg className="game-map" width="100%" height="100%" viewBox="0 0 1000 1000">
            {rooms.map(room => (
                <Room 
                    key={room.id} 
                    roomData={room}
                    onClick={() => handleRoomClick(room)}
                />
            ))}
        </svg>
    );
};

export default GameMap;