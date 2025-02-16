import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ProductImage from "../../../../Images/1-1-instagram-1024x1024.jpg";

export default function OurProducts() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <>
      <section className="our-products mt-5">
        <h2 className="text-center fs-1">Our Products</h2>
        <div className="container mt-5">
          <Slider {...settings}>
            <div className="p-3">
              <div class="card">
                <img
                  src={ProductImage}
                  class="card-img-top"
                  alt="ProductImage"
                />
                <div class="card-body">
                  <h5 class="card-title">Product title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="#" class="btn btnSecondary">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div class="card">
                <img
                  src={ProductImage}
                  class="card-img-top"
                  alt="ProductImage"
                />
                <div class="card-body">
                  <h5 class="card-title">Product title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="#" class="btn btnSecondary">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div class="card">
                <img
                  src={ProductImage}
                  class="card-img-top"
                  alt="ProductImage"
                />
                <div class="card-body">
                  <h5 class="card-title">Product title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="#" class="btn btnSecondary">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div class="card">
                <img
                  src={ProductImage}
                  class="card-img-top"
                  alt="ProductImage"
                />
                <div class="card-body">
                  <h5 class="card-title">Product title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="#" class="btn btnSecondary">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
