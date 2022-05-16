import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointTime from './AppointBooking';
import BookingModal from './BookingModal';

const AppointService = ({ date }) => {
    const [booking, setBooking] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>;
    }


    return (
        <div className='pt-12'>
            <h3 className="text-secondary text-center text-xl">Available Appointments on {format(date, 'PP')}</h3>
            <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <AppointTime
                        key={service._id}
                        service={service}
                        setBooking={setBooking}></AppointTime>)
                }
            </div>
            {booking && <BookingModal
                booking={booking}
                setBooking={setBooking}
                date={date}
                refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AppointService;