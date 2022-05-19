import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-2xl">
                <div class="card-body">
                    <div className='text-center'>
                        <h2 class="text-xl text-secondary">{name}</h2>
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
                    <div class="card-actions justify-center">
                        <button disabled={slots.length === 0} class="btn btn-secondary text-white uppercase">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;