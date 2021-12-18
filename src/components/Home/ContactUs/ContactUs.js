import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='w-100 h-100' style={{backgroundColor:'#fafad2'}}>
        <div className="container mb-5">
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="text-start" style={{marginTop:'80px'}}>
                        <h2>Get in Touch With Us And We’ll Help Your Business.</h2>
                        <p className='mt-5'>Please complete the form right and one of our Security Consultants will be in touch with you to gather further information and to learn more about how we can help you achieve your security goals.</p>
                    </div>
                    
                </div>
                <div className="col-md-6">
                    <div className='input-box mb-5'>
                        <h4 style={{color:'#b22222'}}>Need to Make an Equiry?</h4>
                        <div>
                            <input className='input-field mb-3' type="text" placeholder='Your Name' />
                            <input className='input-field mb-3' type="email" placeholder='Your Email'/>
                            <input className='input-field mb-3' type="number" placeholder='Your Phone Number'/>
                            <input className='input-field mb-3' type="text" placeholder='Your Comment'/>
                            <input className='input-field mb-3' type="submit" value="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;