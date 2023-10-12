/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import galleryImage from "../.././assets/gallery_images/11.jpg";
const Photos = ({ style }) => {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-12  img-hvr " style={style}>
        <img
          className="rounded-4 border border-4"
          width={"250"}
          height={"200"}
          src={galleryImage}
          alt="galary images"
        />
        <h4>Adminstrative Building</h4>
      </div>
    </>
  );
};

export default Photos;
