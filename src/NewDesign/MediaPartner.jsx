import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MediaPartner.css'
export default function SimpleSlider() {
     var settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div className="container">  
    <Slider {...settings}>
      <div className="partner">
      <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/>
      </div>
      <div className="partner">
      <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/>
      </div>
      <div className="partner">
      <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/>
      </div>
      <div className="partner">
      <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/>
      </div>
      <div className="partner">
      <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/>
      </div>
    </Slider>
    </div>
  );
}