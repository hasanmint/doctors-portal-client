import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailbleAppointments = ({ date }) => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(Response => Response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-28'>
            <div className='text-center my-10'>
                <h3 className='text-secondary text-xl font-bold '>Available Services on {format(date, 'PP')}
                </h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =>
                        <Service
                            key={service._1}
                            service={service}
                        ></Service>
                    )
                }
            </div>
        </div>

    );
};

export default AvailbleAppointments;