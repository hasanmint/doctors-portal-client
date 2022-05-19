import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="flex justify-between hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-1">
                        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='dentist-chair' />
                    </div>
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;