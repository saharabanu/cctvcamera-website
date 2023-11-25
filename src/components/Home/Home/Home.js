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
import CounterUp from '../CounterUp/CounterUp';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Servicing from '../Servicing/Servicing';






// #FFEBCD
const Home = () => {
    return (
        <div >
            <Header></Header>
            
            <Banner></Banner>
           <AllFeatures></AllFeatures>
           <CameraBanner></CameraBanner>
            <Products/>
            <Offer/>
            <CounterUp/>
           <Servicing/>
            <CcInfo></CcInfo>
            <Brands></Brands>
            <Blogs/>
            <Reviews></Reviews>
            <ContactUs></ContactUs>

           <Footer></Footer>
        </div>
    );
};

export default Home;