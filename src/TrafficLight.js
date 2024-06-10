import React from 'react';
import './style.css';

const TrafficLight = ({light}) => {

    return (
        <div className='d-flex justify-content-center'>
             <div className="d-flex flex-column align-items-center bg-dark rounded p-3" style={{ width: '100px', height: '300px' }}>
            <div data-testid="red-light" className={`light ${light === 'red' ? 'bg-danger' : 'bg-secondary'} rounded-circle mb-2`} style={{ width: '60px', height: '60px' }}></div>
            <div data-testid="yellow-light" className={`light ${light === 'yellow' ? 'bg-warning' : 'bg-secondary'} rounded-circle mb-2`} style={{ width: '60px', height: '60px' }}></div>
            <div data-testid="green-light" className={`light ${light === 'green' ? 'bg-success' : 'bg-secondary'} rounded-circle mb-2`} style={{ width: '60px', height: '60px' }}></div>
        </div>
        </div>
       
    );
};

export default TrafficLight;
