import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products/>
           <Footer></Footer>
        </div>
    );
};

export default Home;