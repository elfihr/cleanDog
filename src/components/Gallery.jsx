import React, { useState } from 'react'



import Slider from "react-slick";
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ourGallery } from '../helper/helper';



const gallery = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1010,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {ourGallery.map((gallery, index) => {
          return (
            <div key={index}>
              <img className='h-60 w-80 select-none' src={gallery.image} />
            </div>

          )
        })}
      </Slider>

    </div>
  )
}

export default gallery