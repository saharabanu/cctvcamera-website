import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import AllFeatures from '../AllFeatures/AllFeatures';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Brands from '../Brands/Brands';
import CameraBanner from '../CameraBanner/CameraBanner';
import CcInfo from '../CcInfo/CcInfo';
import ContactUs from '../ContactUs/ContactUs';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

// #FFEBCD
const Home = () => {
    return (
        <div style={{backgroundColor:'black'}}>
            <Header></Header>
            <Banner></Banner>
           <AllFeatures></AllFeatures>
           <CameraBanner></CameraBanner>
            <Products/>
            <Reviews></Reviews>
            <CcInfo></CcInfo>
            <Brands></Brands>
            <Blogs/>
            <ContactUs></ContactUs>

           <Footer></Footer>
        </div>
    );
};

export default Home;