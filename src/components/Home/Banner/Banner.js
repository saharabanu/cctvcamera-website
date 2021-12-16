import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"  style={{height:'400px'}}
      src="https://i.ibb.co/k1C07FJ/Camera-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>CCTV SYSTEM & ACCESS CONTROL</h2>
      <p>We will select the optimum solution for all your problems.With us you will always feel safe.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"  style={{height:'400px'}}
      src="https://i.ibb.co/zS6dptK/Camera-3.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2>SMART GUARD SECURITY SYSTEM</h2>
      <p>Professional security system that leaves trouble behind the scene.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  
    <img
      className="d-block w-100"  style={{height:'400px'}}
      src="https://i.ibb.co/k1C07FJ/Camera-2.jpg
      "
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2>WHOLE HOME PROTECTION</h2>
      <p>All monitored 24/7 by professional ready to dispatch police.</p>
    </Carousel.Caption>

    
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;


