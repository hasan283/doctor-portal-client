import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className='py-20'
        >
            <div className='w-80 mx-auto sm:w-100'>
                <div className="text-center py-12">
                    <h3 className="text-primary text-xl">Contact Us</h3>
                    <h1 className="text-white text-3xl">Stay connected with us</h1>
                </div>
                <form>
                    <input type="email" className="form-input w-full px-4 py-3 rounded my-6" placeholder='Email Address' required />
                    <input type="text" className="form-input w-full px-4 py-3 rounded" placeholder='Subject' required />
                    <textarea type="text" className="form-input w-full px-4 py-3 rounded my-5" placeholder='Your Message' required />
                    <center>
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
                    </center>
                </form>
            </div>

        </section>
    );
};

export default Contact;