import React, { useState, useEffect } from 'react';
import TrafficLight from './TrafficLight';

const Junction = () => {
    const [light, setLight] = useState('red');

    useEffect(() => {
        let timer;
        if (light === 'red') {
            timer = setTimeout(() => setLight('yellow'), 5000);
        } else if (light === 'yellow') {
            timer = setTimeout(() => setLight('green'), 2000);
        } else if (light === 'green') {
            timer = setTimeout(() => setLight('red'), 3000);
        }

        return () => clearTimeout(timer);
    }, [light]);

    return (
        <div>
            <h1 className="mb-4 text-center">Traffic Light Simulation</h1>
            <div className="d-flex justify-content-around">
                <TrafficLight light={light} />
                <TrafficLight light={light === 'green' ? 'red' : (light === 'red' ? 'green' : 'yellow')} />
            </div>
            <div className="d-flex justify-content-around mt-4">
                <TrafficLight light={light} />
                <TrafficLight light={light === 'green' ? 'red' : (light === 'red' ? 'green' : 'yellow')} />
            </div>
        </div>
    );
};

export default Junction;
