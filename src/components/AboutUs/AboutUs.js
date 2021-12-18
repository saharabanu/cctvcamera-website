import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
           <Header></Header>
            <div className=''>
                <div className='about d-flex justify-content-center align-items-center'>
                    <div className='about-img w-100'>

                    <div className='about-para  text-white '>
                        <h3>About Us</h3>
                        <p>We are global organisation operating at the local level and committed to providing state-of-the-art solutions to all of our customers. Our strength lies in ou reliability and commitment to customer service.</p>
                    </div>
                       
                        
                    </div>
                   
                </div>

                <div className="container mt-5 mb-5">
                        <div>
                            <h3>
                            Our Executive <span className='text-danger'>Team</span>
                            </h3>
                            <p>Innovative security agency for everyday needs. Guaranteed your safety with highly trained manpower. Any dangerous situation under our control.</p>
                        </div>
                    <div className="row g-4">
                        <div className="col-md-3 ">
                            <div className='border shadow-lg'>
                            <div>
                                <img  className='w-100 rounded' src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/06/team1.png" alt="" /></div>
                            <div className='text-center'>
                            <h4>Kathy Hawkins</h4>
                            <p>Coordinator Manager</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className='border shadow-lg'>
                           <div>
                           <img className='w-100' src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/06/team2.png" alt="" />
                           </div>
                            <div className='text-center'>
                            <h4>Worker</h4>
                            <p>Coordinator Manager</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className='border shadow-lg'>
                           <div>
                           <img className='w-100' src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/06/team3.png" alt="" />
                           </div>
                            <div className='text-center'>
                            <h4>Bharat Timilsina</h4>
                            <p>Bharat Timilsina</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <div className='border shadow-lg'>
                           <div>
                           <img className='w-100' src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/06/team4.png" alt="" />
                           </div>
                            <div className='text-center'>
                            <h4>Billy Anderson</h4>
                            <p>Electrical Engineer</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;