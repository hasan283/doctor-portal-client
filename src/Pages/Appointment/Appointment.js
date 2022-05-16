import React, { useState } from 'react';
import Footer from '../Shared/Footer'
import ApntBanner from './ApntBanner';
import AppointService from './AppointService';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <ApntBanner date={date} setDate={setDate}></ApntBanner>
            <AppointService date={date}></AppointService>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;