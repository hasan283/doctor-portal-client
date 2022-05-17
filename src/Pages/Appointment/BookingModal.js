import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ booking, date, setBooking, refetch }) => {
    const { _id, name, slots } = booking;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP')
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phoneNumber: event.target.number.value
        }

        fetch('https://dry-bastion-96276.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set ${formattedDate} at ${slot}`);
                } else {
                    toast.error(`Already Have and Appointment is on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch();
                setBooking(null);
            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary py-5">Booking for {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-accent w-full max-w-xs" required />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName || ''} className="input input-bordered input-accent w-full max-w-xs" required />
                        <input name='email' type="email" disabled value={user?.email || ''} className="input input-bordered input-accent w-full max-w-xs" required />
                        <input name='number' type="number" placeholder="Phone Number" className="input input-bordered input-accent w-full max-w-xs" required />
                        <input type="submit" value="Booking" className="btn bg-secondary text-white uppercase w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;