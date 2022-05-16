import React from 'react';
import banner from '../../assets/images/chair.png'
import bannerBg from '../../assets/images/bg.png'
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <section style={{
            background: `url(${bannerBg})`
        }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <Button>get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;