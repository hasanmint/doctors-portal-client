import React from 'react';

const InfoCard = ({ cardTitle, img, classColor, cardDescription }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${classColor}`}>
            <figure className='p-7'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDescription}</p>
            </div>
        </div>
    );
};

export default InfoCard;