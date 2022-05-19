import React from 'react';

const Service = ({ service, setTeatment }) => {
    const { name, slots } = service;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <div className='text-center'>
                        <h2 className="text-xl text-secondary">{name}</h2>
                        <p>
                            {
                                slots.length > 0 ?
                                    <span>{slots[0]}</span>
                                    :
                                    <span className='text-red-500'>Try Another Day</span>
                            }
                        </p>
                        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} availble </p>
                    </div>
                    <div className="card-actions justify-center">

                        <label htmlFor="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTeatment(service)}
                            className="btn btn-secondary text-white uppercase">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;