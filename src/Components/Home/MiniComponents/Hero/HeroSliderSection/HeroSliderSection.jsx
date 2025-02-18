import React from "react";
import Image from "../../../../../Images/600x400.jpg";

export default function HeroSliderSection() {
  return (
    <>
      <div className="row justify-content-center align-items-center d-flex container-fluid">
        <div className="col-lg-7">
          <div className="d-flex justify-content-center p-5 heroImageSloder">
            <img src={Image} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-lg-5">
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              eos autem asperiores aperiam praesentium provident, earum
              temporibus doloremque placeat eligendi possimus quisquam a
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
    </>
  );
}
