/* eslint-disable no-unused-vars */
import React from "react";

import Style from "./carousel.module.css";

import carosuel1 from "../.././assets/images/carosusel-images/carousel1.gif";
import carosuel2 from "../.././assets/images/carosusel-images/carousel2.gif";
import carosuel3 from "../.././assets/images/carosusel-images/carousel3.jpg";
import carosuel4 from "../.././assets/images/carosusel-images/carousel4.jpg";
import carosuel5 from "../.././assets/images/carosusel-images/carousel5.jpg";
import carosuel6 from "../.././assets/images/carosusel-images/carousel6.jpg";
import carosuel7 from "../.././assets/images/carosusel-images/carousel7.jpg";
import carosuel8 from "../.././assets/images/carosusel-images/carousel8.jpg";
import carosuel9 from "../.././assets/images/carosusel-images/carousel9.jpg";
import carosuel10 from "../.././assets/images/carosusel-images/carousel10.jpg";
import carosuel11 from "../.././assets/images/carosusel-images/carousel11.jpg";
import carosuel12 from "../.././assets/images/carosusel-images/carousel12.jpg";
import carosuel13 from "../.././assets/images/carosusel-images/carousel13.jpg";
import carosuel14 from "../.././assets/images/carosusel-images/carousel14.jpg";
import logo from "../.././assets/images/logo.png";

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
                src={carosuel1}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel2}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel3}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel4}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel5}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel6}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel7}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel8}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel9}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel10}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel11}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel12}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel13}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
            <div className="carousel-item">
              <img
                src={carosuel14}
                className="d-block w-100"
                alt="carosul img is error"
              />
            </div>
          </div>
        </div>
        <div className={Style.slider_logo}>
          <img className={Style.slider_logo_img} src={logo} alt="logo" />
          <p className={Style.slider_p}> কুষ্টিয়া পলিটেকনিক ইনস্টিটিউট</p>
        </div>
      </div>
    </>
  );
};

export default Carousel;
