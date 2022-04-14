import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import './Details.css';

const Details = () => {
    const { user,admin } = useAuth();
    const navigate= useNavigate();
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const [showProductBuyModal, setShowProductBuyModal] = useState(false);
    const [BuyingProduct, setBuyingProduct] = useState([]);
    const handleProductBuyModalClose = () => setShowProductBuyModal(false);
    const handleProductBuyModalShow = () => setShowProductBuyModal(true);
    const onSubmit = data => {
        const orderData = new Date();
        data.status = "pending"
        data.img = selectedProduct.img;
        data.orderData = orderData.toLocaleDateString();
        setBuyingProduct(data)
        reset();
        handleProductBuyModalShow();
    };
    useEffect(() => {
        axios.get(`https://lit-badlands-25658.herokuapp.com/products/${id}`)
            .then(res => setSelectedProduct(res.data))
    }, [id])
    const handleReviewsToServer = () => {
        handleProductBuyModalClose()

        axios.post('https://lit-badlands-25658.herokuapp.com/orders', BuyingProduct)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Congrats Your order has been added successfully.")
                    if (!admin) {
                        navigate('/dashboard')
                    } else (
                        navigate('/home')
                    )

                }
            })
    }
    return (
        <div>
        
            <Header/>

            {selectedProduct.name && <Container>
                <Row className="my-5" >
                    <Col md={8} className="d-flex justify-content-center align-items-center">
                        <div className="">
                            <Row className="product-background">
                                <Col md={6}>
                                    <Image src={selectedProduct.img} fluid />
                                    <p className="fs-2 text-start">{selectedProduct.name} </p>
                                    <p className="fs-5">Price :<span className="fw-bold">${selectedProduct.price}</span> </p>
                                </Col>
                                <Col md={6} className="text-start">

                                    
                                    <p className="fs-5">Details :  {selectedProduct.description} </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    {
                        (selectedProduct.name  && user?.displayName) ? <Col md={4} className="product-buy-form">
                            <h4 className="mb-3 text-start">Fill the form to confirm order</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" defaultValue={user?.displayName} {...register("name")} />
                                <input type="email"  defaultValue={user?.email} readOnly {...register("email")} />
                                <input type="number" placeholder="Mobile number at least 11 digit " {...register("mobile", { required: true})} />
                                <textarea placeholder="Address" type="text" {...register("address", { required: true })} />
                                <input type="text" defaultValue={selectedProduct.name} readOnly {...register("productName")} />
                                <input type="number" defaultValue={selectedProduct.price} readOnly {...register("price")} />

                                <Button variant="dark" type="submit" className="my-3">Place Order</Button>

                            </form>
                        </Col>

                            : <p>Your form is loading</p>
                    }
                </Row>
            </Container>}
            <Modal
                show={showProductBuyModal}
                onHide={handleProductBuyModalClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Hello {user?.displayName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className=" g-0">

                        <Col md={12} className="d-flex align-items-center">
                            <div className="text-start">
                                <h4 className="fs-2 fw-light">Name : {BuyingProduct.productName} </h4>
                                <p className="fs-5 fw-light mb-0"> Price : $ {selectedProduct.price} </p>
                                <p className="fs-5 fw-light mb-0"> Mobile : {BuyingProduct.mobile}</p>
                                <p className="fs-5 fw-light"> Address : {BuyingProduct.address}</p>

                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleProductBuyModalClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleReviewsToServer}>Buy Product</Button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </div>
    );
};

export default Details;