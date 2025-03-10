import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSliderSection from "./HeroSliderSection/HeroSliderSection";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="hero mb-5">
      <Slider {...settings}>
        <HeroSliderSection />
        <HeroSliderSection />
        <HeroSliderSection />
        <HeroSliderSection />
        <HeroSliderSection />
        <HeroSliderSection />
      </Slider>
    </section>
  );
}
