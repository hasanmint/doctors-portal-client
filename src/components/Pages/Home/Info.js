import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle='Opening Hours' classColor='bg-primary' img={clock} cardDescription='Sun - Fri : 9.00 AM - 6.00 PM'></InfoCard>
            <InfoCard cardTitle='Visit our location' classColor='bg-accent' img={marker} cardDescription='Brooklyn, NY 10036, United States'></InfoCard>
            <InfoCard cardTitle='Contact us now' classColor='bg-secondary' img={phone} cardDescription='+000 123 456789'></InfoCard>
        </div>
    );
};

export default Info;