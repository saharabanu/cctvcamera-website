import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import React from 'react';
import './Brands.css';

const data = [
    {
        id: 1,
        img:"https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png"
    },
    {
        id: 2,
        img:"https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png"
    },
    {
        id: 3,
        img:"https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png"
    },
    {
        id: 4,
        img:"https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png"
    },
    {
        id: 5,
        img:"https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png"
    },
    {
        id: 1,
        img:"https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png"
    },
    {
        id: 6,
        img:"https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png"
    },
    {
        id: 7,
        img:"https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png"
    },
    {
        id: 8,
        img:"https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png"
    },
    {
        id: 9,
        img:"https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png"
    }
]





const Brands = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
      };

    

    
    
    return (
        <div style={{marginBottom:'100px'}}>
            <div className='container'>
                <div style={{marginTop:'-50px'}}>
                <iframe className='w-75 h-100' src="https://www.youtube.com/embed/YfBwEaAKLTI?si=477ke_bj04gozNee" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                {/* <iframe className='w-75 h-100'  src="https://www.youtube.com/embed/6-9S3C_PSoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                </div>
                {/* <div className='row g-4 text-start'>
                    <div className='col-md-4'>
                        <h4 className='p-5'> <span className='text-white'>CCTV Cameras And Security Camera Systems For </span> <span style={{color:'#b22222'}}> Home Surveillance Applications.</span> </h4>
                    </div>
                    <div className='col-md-8'>
                        <p className='text-white p-5'>Our Security is a leading security systems company based in New York City. We specialize in planning and design, installation, repair and maintenance of full range security systems for business & commercial properties, residential buildings and industrial facilities throughout all five boroughs.</p>
                    </div>
                </div> */}
                
                <Slider {...settings}>
                {
                    data?.map((item)=><div className="brand-img mt-5" >
                            <img src={item.img} alt="" />
                        </div>
                    )
                }
                </Slider>
                {/* <div className="row g-4 mt-4">

                
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-1-copy-5-1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-6-copy-4.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-3-copy-5.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-4-copy-5.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-2-copy-4.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/IT-logo-7-copy-4.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/Vector-Smart-Object15.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/Vector-Smart-Object12.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/Vector-Smart-Object11.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/Vector-Smart-Object13.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"> 
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/Vector-Smart-Object14.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="brand-img" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                            <img src="https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/Vector-Smart-Object16.png" alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Brands;