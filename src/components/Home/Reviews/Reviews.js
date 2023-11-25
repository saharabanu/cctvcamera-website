import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import Slider from "react-slick";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState({});
  useEffect(() => {
    axios
      .get("https://cctv-camera-api.onrender.com/reviews")
      .then((res) => setAllReviews(res.data));
  }, []);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container className="my-5">
        <Row>
          <Col>
            <h6 className="fs-5 my-3">
              {" "}
              <span className="text-primary">REVIEWS</span> <span>FROM CLIENT</span>{" "}
            </h6>
          </Col>
        </Row>
        <div  className=" mt-4 ">
        <Slider {...settings}>
          {allReviews?.length ? (
            allReviews.map((review) => (
              <div key={review._id}>
                <Card className="m-2 border-0 shadow-lg">
                  {review?.img ? (
                    <div className="">
                      <Image src={review.img} style={{ height: "100px", marginTop: "10px" }} />
                    </div>
                  ) : (
                    <div className="">
                      <Image
                        src={review.img}
                        alt="img"
                        style={{ height: "100px", marginTop: "10px" }}
                      />
                    </div>
                  )}
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <p className=" mb-1 fs-5">
                      {" "}
                      <Rating
                        initialRating={review.rating}
                        emptySymbol="far fa-star text-primary"
                        fullSymbol="fas fa-star text-primary"
                        readonly
                      ></Rating>
                    </p>
                    <Card.Text>{review.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div>
              {" "}
              <Spinner animation="border" variant="dark" />
            </div>
          )}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Reviews;
