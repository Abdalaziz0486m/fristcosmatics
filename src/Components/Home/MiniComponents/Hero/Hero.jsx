import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../../../../Images/600x400.jpg";

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
        <div className="row justify-content-center align-items-center d-flex">
          <div className="col-7">
            <div className="d-flex justify-content-center p-5 heroImageSloder">
              <img src={Image} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-5">
            <div>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid eos autem asperiores aperiam praesentium provident,
                earum temporibus doloremque placeat eligendi possimus quisquam a
                reiciendis voluptatibus adipisci vero, voluptatum quae quis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dolore debitis ex.
              </p>
              <div>
                <button className="btn btnPrimary"> Discover More </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center d-flex">
          <div className="col-7">
            <div className="d-flex justify-content-center p-5 heroImageSloder">
              <img src={Image} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-5">
            <div>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid eos autem asperiores aperiam praesentium provident,
                earum temporibus doloremque placeat eligendi possimus quisquam a
                reiciendis voluptatibus adipisci vero, voluptatum quae quis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dolore debitis ex.
              </p>
              <div>
                <button className="btn btnPrimary"> Discover More </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center d-flex">
          <div className="col-7">
            <div className="d-flex justify-content-center p-5 heroImageSloder">
              <img src={Image} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-5">
            <div>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid eos autem asperiores aperiam praesentium provident,
                earum temporibus doloremque placeat eligendi possimus quisquam a
                reiciendis voluptatibus adipisci vero, voluptatum quae quis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dolore debitis ex.
              </p>
              <div>
                <button className="btn btnPrimary"> Discover More </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center d-flex">
          <div className="col-7">
            <div className="d-flex justify-content-center p-5 heroImageSloder">
              <img src={Image} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-5">
            <div>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid eos autem asperiores aperiam praesentium provident,
                earum temporibus doloremque placeat eligendi possimus quisquam a
                reiciendis voluptatibus adipisci vero, voluptatum quae quis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dolore debitis ex.
              </p>
              <div>
                <button className="btn btnPrimary"> Discover More </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center d-flex">
          <div className="col-7">
            <div className="d-flex justify-content-center p-5 heroImageSloder">
              <img src={Image} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-5">
            <div>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid eos autem asperiores aperiam praesentium provident,
                earum temporibus doloremque placeat eligendi possimus quisquam a
                reiciendis voluptatibus adipisci vero, voluptatum quae quis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dolore debitis ex.
              </p>
              <div>
                <button className="btn btnPrimary"> Discover More </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center d-flex">
          <div className="col-7">
            <div className="d-flex justify-content-center p-5 heroImageSloder">
              <img src={Image} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-5">
            <div>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid eos autem asperiores aperiam praesentium provident,
                earum temporibus doloremque placeat eligendi possimus quisquam a
                reiciendis voluptatibus adipisci vero, voluptatum quae quis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                dolore debitis ex.
              </p>
              <div>
                <button className="btn btnPrimary"> Discover More </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}
