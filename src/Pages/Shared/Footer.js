import React from 'react';
import footerBg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <section
            style={{
                background: `url(${footerBg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                padding: '80px'

            }}

        >
            <footer className="footer p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:text-center">
                <div>
                    <span className="footer-title">Services</span>
                    <p className="link link-hover">Branding</p>
                    <p className="link link-hover">Design</p>
                    <p className="link link-hover">Marketing</p>
                    <p className="link link-hover">Advertisement</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <p className="link link-hover">About us</p>
                    <p className="link link-hover">Contact</p>
                    <p className="link link-hover">Jobs</p>
                    <p className="link link-hover">Press kit</p>
                </div>
                <div>
                    <div>
                        <span className="footer-title">OUR ADDRESS</span>
                        <p>New York - 101010 Hudson</p>
                    </div>
                </div>


            </footer>
            <div className='text-center'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </section>
    );
};

export default Footer;