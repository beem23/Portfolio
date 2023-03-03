import React, { useState, useEffect } from 'react';
import './styles/TimePullStyles.css';

function TimePull() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    function handleMouseMove(event) {
        setCoordinates({ x: event.clientX, y: event.clientY });
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
        }, 1000);

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='TimeContainer'>
            <h4>{time}</h4>
            <div className='Coordinates'>
                <p>X: {coordinates.x} Y: {coordinates.y}</p>
            </div>
        </div>
    );
}

export default TimePull;
