/* eslint-disable no-unused-vars */
import React from "react";
import "./banner.css";

import myImage from "../../.././assets/banner_image/padmabanner.jpg";
const Banner = () => {
  return (
    <>
      <div className="banner_area">
        <div className="banner">
          <img src={myImage} alt="banner image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
