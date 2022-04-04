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
                        <h5 className="text-muted fs-4">For Summer </h5>
                        <h1> <span className="text-muted">SALE UP</span> 40%</h1>
                        <p className="mb-1"> <span><i className="far fa-check-circle text-warning fs-5 me-2"></i></span> With full custom accessories</p>
                        <p className="mb-1"> <span><i className="far fa-check-circle text-warning fs-5 me-2"></i></span>  Power booster gamming GPS support</p>
                        <p className="mb-1"> <span><i className="far fa-check-circle text-warning fs-5 me-2"></i></span>  Motion activated cameras</p>
                        <p className="mb-1"> <span><i className="far fa-check-circle text-warning fs-5 me-2"></i></span> Line crossing, audio and face detection</p>
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