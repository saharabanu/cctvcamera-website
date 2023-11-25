import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { default as cctv1, default as cctv3 } from '../../../img/cctvimage1.jfif';
import cctv2 from '../../../img/cctvimage2.jfif';

const Offer = () => {
    return (
        <Container className="my-5 text-white">
            
            <Row className="pt-5">
                <Col md={4} className="d-flex  text-start align-items-center">
                    <div >
                        <h5 className="text-black fs-4">For Summer </h5>
                        <h2 className='text-black'> <span className="text-primary">SALE UP</span> 40%</h2>
                        <p className="mb-1 text-black" > <span><i className="far fa-check-circle text-primary fs-5 me-2"></i></span> With full custom accessories</p>
                        <p className="mb-1 text-black"> <span><i className="far fa-check-circle text-primary fs-5 me-2"></i></span>  Power booster gaming GPS support</p>
                        <p className="mb-1 text-black"> <span><i className="far fa-check-circle text-primary fs-5 me-2"></i></span>  Motion activated cameras</p>
                        <p className="mb-1 text-black"> <span><i className="far fa-check-circle text-primary fs-5 me-2"></i></span> Line crossing, audio and face detection</p>
                    </div>
                </Col>
                <Col md={8} className="">
                    <Carousel variant="dark">
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100 p-5"
                                src={cctv1}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100 p-5"
                                src={cctv2}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 p-5"
                                src={cctv3}
                                alt="Third slide"

                            />

                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default Offer;