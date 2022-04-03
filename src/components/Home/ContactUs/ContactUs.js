import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './ContactUs.css';

const ContactUs = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('myproject_01', 'template_4bq1gkp', form.current, 'yYcbHAr7q3sv-yk9O')
      .then((result) => {
          alert('Message sent successfully')
          console.log(result.text);

      }, (error) => {
          alert(error.message)
          console.log(error.text);
      });
      e.target.reset();
  };
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
                            <form ref={form} onSubmit={sendEmail}>
                            <input className='input-field mb-3' type="text" placeholder='Your Name' name="client_name" required />
                            <input className='input-field mb-3' type="email" placeholder='Your Email' name="email" required/>

                            <input className='input-field mb-3' type="number" placeholder='Your Phone Number' name="client_phone"/>
                            <textarea className='input-field mb-3' type="text" placeholder='Your Comment' name="message" required/>
                            <input className='input-field mb-3 submit-btn' type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;