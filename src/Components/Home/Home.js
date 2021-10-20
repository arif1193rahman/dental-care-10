import React from 'react';
import Blog from '../Blog/Blog';
import Gallary from '../Gallary/Gallary';
// import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Gallary></Gallary>
            <Blog></Blog>

        </div>
    );
};

export default Home;