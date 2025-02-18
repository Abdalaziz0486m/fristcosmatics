import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OurProductsSliderSection from "./OurProductsSliderSection/OurProductsSliderSection";

export default function OurProducts() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="our-products mt-5">
        <h2 className="text-center fs-1">Our Products</h2>
        <div className="container mt-5">
          <Slider {...settings}>
            <OurProductsSliderSection />
            <OurProductsSliderSection />
            <OurProductsSliderSection />
            <OurProductsSliderSection />  
          </Slider>
        </div>
      </section>
    </>
  );
}
