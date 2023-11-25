import React from "react";
import "./Blogs.css";
import Slider from "react-slick";

const Blogs = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div id="blogs" className="blog-head">
      <h5 className="text-primary">Latest Blog News</h5>
      <div className="container">
        <Slider {...settings}>
          <div className=" blogs g-4">
            <div className="blog-part border pointer rounded ">
              <div className="blog-img1 "></div>
              <div className="blog">
                <h6>Rumnet Website Audit by a Website Maintenance Company</h6>
                <p>
                  by <span className="text-primary">Juku Buker</span> 3 weeks ago
                </p>
                {/* <p>Accessibility shouldn’t be overlooked when creating a website you intend to be widely used. A good website has capabilities that allow differently-abled users to access it and use its features as fully as possible.Additionally, your website needs to have a responsive, ‘mobile-friendly design.</p> */}
              </div>
            </div>
          </div>
          <div className=" blogs  ">
<div className="blog-part border pointer rounded">
<div className="blog-img2">
    
    </div>
    <div className='blog'>
        <h6>Custo recognizes student success at Sheridan College</h6>
        <p>by <span className='text-primary'>Katty Nguyen</span>  1 week ago</p>
        {/* <p>Let us elaborate with an example, the content of your website is like the embellishments you put on a building; the coats of paint, fancy Victorian windows, revolving doors, etc. While this is vital from an aesthetic point of view, your building needs to have a solid foundation; the web design of your building is the bricks, metal frames, and cement that constitute your building.</p> */}
        </div>
</div>
</div>
          <div className=" blogs ">
    <div className="blog-part border rounded">
    <div className="blog-img6">
    
    </div>
    <div className='blog'>
        <h6>Marie-Michèle’s sharp eye prevents a case of fraud</h6>
        <p>by <span className="text-primary">Row Strick</span>  8 months ago</p>
        {/* <p>A smart home security system is a set of internet-connected security gadgets, which typically include a combination of wireless security cameras, sirens, motion detectors, door locks, and sensors that detect when a door or window has been opened.The specific gadgets bundled together to make a security system vary between the different kits and brands, but most manufacturers offer a range of different kits, plus the option to buy additional compatible gadgets separately.</p> */}
        </div>
    </div>
</div>
<div className=" blogs ">
    <div className="blog-part border rounded">
    <div className="blog-img6">
    
    </div>
    <div className='blog'>
        <h6>Marie-Michèle’s sharp eye prevents a case of fraud</h6>
        <p>by <span className="text-primary">Row Strick</span>  8 months ago</p>
        {/* <p>A smart home security system is a set of internet-connected security gadgets, which typically include a combination of wireless security cameras, sirens, motion detectors, door locks, and sensors that detect when a door or window has been opened.The specific gadgets bundled together to make a security system vary between the different kits and brands, but most manufacturers offer a range of different kits, plus the option to buy additional compatible gadgets separately.</p> */}
        </div>
    </div>
</div>
<div className=" blogs ">
    <div className="blog-part border rounded">
    <div className="blog-img3">
    
    </div>
    <div className='blog'>
        <h6>Custo recognizes student success at Sheridan College</h6>
        <p>by <span className='text-primary'>Row Strick</span>  8 months ago </p>
        {/* <p>All home security systems work on the same basic principle of securing entry points, like doors and windows, as well as interior space containing valuables like art, computers, guns, and coin collections. Regardless of the size of your home, or the number of doors and windows or interior rooms a homeowner decides to protect, the only real difference is in the number of security components deployed throughout the home and monitored by the control panel.</p> */}
        </div>
    </div>
</div>
<div className=" blogs ">
    <div className='blog-part border pointer rounded '>
    <div className="blog-img1 ">
        
        </div>
        <div className='blog'>
           
            <h6>Rumnet Website Audit by a Website Maintenance Company</h6>
            <p>by <span className='text-primary'>Juku Buker</span>  3 weeks ago</p>
            {/* <p>Accessibility shouldn’t be overlooked when creating a website you intend to be widely used. A good website has capabilities that allow differently-abled users to access it and use its features as fully as possible.Additionally, your website needs to have a responsive, ‘mobile-friendly design.</p> */}
            </div>
    </div>
</div>
<div className=" blogs ">
    <div className="blog-part border rounded">
    <div className="blog-img5">
    </div>
    <div className='blog'>
        <h6>Outdoor Security Cameras</h6>
        <p>by <span className='text-primary'>Katty Nguyen</span>  8 months ago </p>
        {/* <p>Out of 127.59 million households in the United States, only 36 million have security systems, according to an article from the New York Times. That’s slightly less than 30 percent! We thought that was a shockingly low number and were unsure why more people didn’t want to know if they were being robbed. After much consideration, we attributed this statistic to the lack of education available regarding home security.</p> */}
    </div>
    </div>
</div>
<div className=" blogs ">
    <div className="blog-part border rounded">
    <div className="blog-img4">
</div>
    <div className='blog'>
        <h6>What risk does your online profile pose to you and your family?</h6>
        <p>by <span className='text-primary'>Christo Lebute</span>  8 months ago </p>
        {/* <p>Nearly 80% of all burglars enter through a door. By making the garage and exterior doors into your home more secure, you’ve taken effective steps to heighten home security.Another effective home security measure is to fortify sliding glass doors by installing a sliding glass door lock.</p> */}
    </div>
    </div>
</div>

        </Slider>
      </div>
    </div>
  );
};

export default Blogs;



