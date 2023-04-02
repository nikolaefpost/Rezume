import React from 'react';

const Copyright = () => {
    const date = new Date();

    return (
        <div className='copyright'>
            <p className='p-text'>© {date.getFullYear()} Pilot</p>
            <p className='p-text'>All right reserved</p>
        </div>
    );
};

export default Copyright;