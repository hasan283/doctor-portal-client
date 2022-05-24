import React from 'react';

const AppointTime = ({ service, setBooking }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available. Try Another Day!</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <p><b>Price: </b>${price}</p>
                <div className="card-actions">
                    <label onClick={() => setBooking(service)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointmen</label>
                </div>
            </div>
        </div>
    );
};

export default AppointTime;