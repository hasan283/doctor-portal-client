import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.info}</p>

                <div className="flex justify-left align-middle items-center py-4">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt="people" />
                        </div>
                    </div>
                    <div className='px-5'>
                        <h3 className="card-title">{review.name}</h3>
                        <p>{review.location}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;