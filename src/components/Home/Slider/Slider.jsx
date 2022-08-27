import React from 'react'
import { SliderData } from './SliderData'
//________________import SliderSlick to slider__________________
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>

      <div className='container slide'>
        <SliderSlick {...settings}>
          {SliderData.map((item) => (
            <div className="slider-img" key={item.id}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </SliderSlick>
      </div>
    </>
  )
}

export default Slider