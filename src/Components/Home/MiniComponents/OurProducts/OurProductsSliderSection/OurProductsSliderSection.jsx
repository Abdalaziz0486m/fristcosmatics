import React from "react";
import { Link } from "react-router-dom";
import ProductImage from "../../../../../Images/1-1-instagram-1024x1024.jpg";

export default function OurProductsSliderSection() {
  return (
    <>
      <div className="p-3">
        <div class="card">
          <img src={ProductImage} class="card-img-top" alt="ProductImage" />
          <div class="card-body">
            <h5 class="card-title">Product title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="#" class="btn btnSecondary">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
