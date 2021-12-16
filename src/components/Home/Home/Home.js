import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import AllFeatures from '../AllFeatures/AllFeatures';
import Blogs from '../Blogs/Blogs';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
           <AllFeatures></AllFeatures>
            <Products/>
            <Blogs/>

           <Footer></Footer>
        </div>
    );
};

export default Home;