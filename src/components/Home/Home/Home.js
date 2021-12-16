import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import AllFeatures from '../AllFeatures/AllFeatures';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
           <AllFeatures></AllFeatures>
            <Products/>
            <Reviews></Reviews>
            <Blogs/>

           <Footer></Footer>
        </div>
    );
};

export default Home;