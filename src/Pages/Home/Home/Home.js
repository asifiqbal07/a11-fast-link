import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import HomePackages from '../HomePackages/HomePackages';
import Stat from '../Stat/Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stat></Stat>
            <HomePackages></HomePackages>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;