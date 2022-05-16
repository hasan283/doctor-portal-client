import banner from '../../assets/images/chair.png';
import bannerBg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const ApntBanner = ({ date, setDate }) => {

    return (
        <div
            style={{ background: `url(${bannerBg})` }}
            className="hero min-h-screen py-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div className='shadow-lg mt-5 lg:mx-12'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default ApntBanner;