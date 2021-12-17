import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"  style={{height:'400px'}}
      src="https://media.istockphoto.com/photos/tracking-graphs-and-surveillance-cameras-of-polymeric-micelles-drugs-picture-id1337413444?b=1&k=20&m=1337413444&s=170667a&w=0&h=ncxYSYSQjZTp8TFGg-7LuZ-8ZK1nkvhM9JyPNyX0cbE="
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
      src="https://media.istockphoto.com/photos/smartphone-and-surveillance-camera-picture-id1252848657?b=1&k=20&m=1252848657&s=170667a&w=0&h=hqfhxzlRVKQAgcpV3GdV4K8X1L-G0QS_BUByO1QBpVM="
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


