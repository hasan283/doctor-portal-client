import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0yBRCxPk8JEPa4HAid8BV5etF88eIhJZYuSC9JNaxE8OhqWusjHbXquZSJo2sbBB975pYSXGhkvNH2qNShESpJ00UJz7HonU');

const Payment = () => {
    const { paymentId } = useParams();
    const url = `http://localhost:5000/booking/${paymentId}`;
    const { data: appointment, isLoading } = useQuery(['booking', paymentId], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('Access Token')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>


            <div class="card-body shadow-lg mb-5">
                <h2><b>{appointment.patientName}</b></h2>
                <h2 class="card-title">Pay for {appointment.treatment}</h2>
                <p>Your Appointment <b className='text-orange-700'>{appointment.date}</b> at <b className='text-blue-700'>{appointment.slot}</b></p>
                <p><b>Please pay:</b> <span className='text-secondary-700'>${appointment.price}</span></p>

            </div>



            <div class="card-body shadow-lg mt-20">
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>
            </div>


        </div>
    );
};

export default Payment;