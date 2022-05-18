import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import TreatmentFeature from './TreatmentFeature';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <TreatmentFeature></TreatmentFeature>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;