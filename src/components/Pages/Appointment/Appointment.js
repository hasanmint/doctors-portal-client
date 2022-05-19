import React, { useState } from 'react';
import Footer from '../../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailbleAppointments from './AvailbleAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailbleAppointments date={date}></AvailbleAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;