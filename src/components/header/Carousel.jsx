/* eslint-disable no-unused-vars */
import React from "react";

import Style from "./carousel.module.css";

const Carousel = () => {
  return (
    <>
      <div className={Style.slider}>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./src/assets/images/carosusel-images/carousel1.gif"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel2.gif"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel3.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel4.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel5.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel6.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel7.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel8.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel9.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel10.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel11.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel12.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel13.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/images/carosusel-images/carousel14.jpg"
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
          </div>
        </div>
        <div className={Style.slider_logo}>
          <img
            className={Style.slider_logo_img}
            src="./src/assets/images/logo.png"
            alt="logo"
          />
          <p className={Style.slider_p}> কুষ্টিয়া পলিটেকনিক ইনস্টিটিউট</p>
        </div>
      </div>
    </>
  );
};

export default Carousel;
