import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            img: people1,
            info: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            img: people2,
            info: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            img: people3,
            info: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
        <section className='py-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className="text-primary text-xl">Testimonial</h3>
                    <h1 className="text-dark text-3xl">What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-20 lg:w-30' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;