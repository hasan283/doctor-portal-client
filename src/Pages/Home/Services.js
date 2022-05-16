import React from 'react';
import ServicesCard from './ServicesCard';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    return (
        <div className='mt-12'>
            <div className="title text-center py-10">
                <h4 className="text-primary">OUR SERVICES</h4>
                <h1 className='text-2xl'>Services We Provide</h1>
            </div>
            <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <ServicesCard img={fluoride} cardTitle='Fluoride Treatment' cardInfo='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></ServicesCard>
                <ServicesCard img={cavity} cardTitle='Cavity Filling' cardInfo='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></ServicesCard>
                <ServicesCard img={whitening} cardTitle='Teeth Whitening' cardInfo='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'></ServicesCard>
            </div>
        </div>
    );
};

export default Services;