import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';
import TreatmentFeature from './TreatmentFeature';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <TreatmentFeature></TreatmentFeature>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;