import React from 'react';
import Banner from '../Banner/Banner';
import Campbd from '../Campbd/Campbd';
import Fascilities from '../Fascilities/Fascilities';
import Offerings from '../Offerings/Offerings';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Offerings></Offerings>
            <Fascilities></Fascilities>
            <Campbd></Campbd>
        </div>
    );
};

export default Home;