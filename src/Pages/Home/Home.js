import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Exceptional from './Exceptional';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <Exceptional></Exceptional>
                <MakeAppointment></MakeAppointment>
                <Testimonial></Testimonial>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;