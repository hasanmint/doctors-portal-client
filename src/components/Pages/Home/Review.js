import React from 'react';

const Review = ({ review }) => {

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>{review.review}</p>
                    <div className='flex items-center'>
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                                <img src={review.img} />
                            </div>
                        </div>
                        <div>
                            <h4>{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;