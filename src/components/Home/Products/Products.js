import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://lit-badlands-25658.herokuapp.com/products')
            .then(res => setProducts(res.data))
       
    },[])
    return (


<Container className="my-5">
            <Row>
                <Col>
                    <h4 className="fs-3 my-3"><span className="text-warning">FEATURED PRODUCTS</span></h4>

                </Col>
            </Row>
            <Row xs={1} md={3} className="g-4">

                {products.length ? products.map(product => <Col
                    key={product._id}>
                    <Card className="bg-light product-background">
                        <Card.Img variant="top" src={product.img} className="px-5 pt-3 product-img" style={{ height: "200px" }} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <p className="fs-5 mb-0">Price : <span className="fw-bold">$ {product.price} </span> </p>
                            
                            <Link to={`/details/${product._id}`}><Button variant="dark" >Buy Now</Button></Link>
                        </Card.Body>

                    </Card>
                </Col>) : <div>  <Spinner animation="border" variant="dark" /></div>

                }

            </Row>
           
        </Container>























        // <div className="bg-products py-3">
        //     <h1>My Projects</h1>
        //     <div className="row mx-auto py-3">
        //         {
        //             products?.map(product =><Product
        //                 key={product.id}
        //                 product={product}></Product>)
        //         }
        //     </div>
        // </div>
    );
};

export default Products;