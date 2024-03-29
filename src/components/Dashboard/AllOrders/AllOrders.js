import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './AllOrders.css';

const AllOrders = () => {
    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([])
    const [orderUpdate, setOrderUpdate] = useState([]);
    const [updateModal, setUpdateModal] = useState(false);
    const closeUpdateModal = () => setUpdateModal(false);
    const showUpdateModal = () => setUpdateModal(true);
    const handleUpdate = (data) => {
        setOrderUpdate(data)
        showUpdateModal();
    }
    const { register, handleSubmit, } = useForm();
    const handleStatusUpdate = data => {
        const id = orderUpdate._id;

        axios.put(`https://cctv-camera-api.onrender.com/orderStatusUpdate/${id}`, data)
            .then(res => {
                if (res.data.modifiedCount) {
                    closeUpdateModal()
                    axios.get('https://cctv-camera-api.onrender.com/orders')
                        .then(res => {
                            setAllOrders(res.data)
                            alert("Status  updated successful");
                        })
                }
            })
    };
    const handleOrderDelete = (id) => {
        const sure = window.confirm("are you sure to delete this ?");
        if (sure) {
            axios.delete(`https://cctv-camera-api.onrender.com/orderDelete/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("deleted successful");
                        const updateOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(updateOrders)
                    }
                })
        }
    }
    useEffect(() => {
        axios.get('https://cctv-camera-api.onrender.com/orders')
            .then(res => setAllOrders(res.data))
    }, [])
    const handleOrderCatagories = category => {

        axios.get(`https://cctv-camera-api.onrender.com/catagoriesOrder?status=${category}`)
            .then(res => {
                setAllOrders(res.data)
            })
    }
    return (
        <div>
            <Container className="py-2 px-5">

                <div className="text-start mt-3 ">
                    <Button variant="light" className="mx-3 mb-4 fs-5" onClick={() => handleOrderCatagories("")}>All Orders <sup className='text-primary'>{allOrders.length}</sup></Button>
                    <Button variant="light" className="mx-3 mb-4 fs-5" onClick={() => handleOrderCatagories("pending")}>Pending Orders <sup className='text-primary'></sup></Button>
                    <Button variant="light" className="mx-3 mb-4 fs-5" onClick={() => handleOrderCatagories("shipped")}>Shipped orders <sup className='text-primary'></sup></Button>
                </div>
                <Row className="heading g-0 py-3">
                    <Col md={3} xs={6}><h3 className="mb-0 fs-5">Customer Name & Email</h3></Col>
                    <Col md={2} xs={6}><h3 className="mb-0 fs-5">Product Name</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Order Date</h3></Col>
                    <Col md={2} xs={6}><h3 className="mb-0 fs-5">Product Price</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 fs-5">Status</h3></Col>
                    <Col md={1} xs={6}><h3 className="mb-0 text-center fs-5">Action</h3></Col>
                    <Col md={2} xs={6}><h3 className="mb-0 text-center fs-5">Delete</h3></Col>
                </Row>
                {allOrders.length ? allOrders.map(order => <Row
                    key={order._id}
                    className="user-order-detail g-0">
                    <Col md={3} xs={12}><h5 className="mb-0 mt-2 fs-6 text-start ps-3"> Name: {order.name} <br />Email: {order.email}</h5></Col>
                    <Col md={2} xs={12}><h5 className="mb-0 mt-2  fs-6 ">{order.productName}</h5></Col>
                    <Col md={1} xs={12}><h5 className="mb-0 mt-2  fs-6 ">{order.orderData}</h5></Col>
                    <Col md={2} xs={6}><h5 className="mb-0 mt-2 fs-6 ">{order.price} Tk</h5></Col>
                    <Col md={1} xs={6}><h5 className="mb-0 mt-2 fs-6 ">{order.status} </h5></Col>
                    <Col md={1} xs={6}>
                        <h5 className="my-2 text-center"><Button onClick={() => handleUpdate(order)} variant="outline-dark" className=" ms-3" >Action</Button></h5>
                    </Col>
                    <Col md={2} xs={6}>
                        <h5 className="my-2 text-center"><Button variant="danger" className=" ms-3" onClick={() => handleOrderDelete(order._id)}>Delete <i className="fas fa-trash"  ></i></Button></h5>
                    </Col>
                </Row>)
                    : <p className="text-center fs-5"> No Orders</p>
                }
            </Container>
            <Modal show={updateModal} onHide={closeUpdateModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Hello {user.displayName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(handleStatusUpdate)}>
                        <p className=" pb-3">Product :{orderUpdate.productName}</p>
                        <label className="me-3 fs-5 pb-3">Status : </label>
                        <select {...register("Status")} className="p-1 fs-5">
                            <option value="pending">Pending</option>
                            <option value="shipped">Shipped</option>
                        </select>

                        <Button variant="primary" type="submit" style={{ padding: "5px", marginLeft: "20px", marginTop: "-10px" }}>
                            Save Changes
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeUpdateModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AllOrders;