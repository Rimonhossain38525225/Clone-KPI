/* eslint-disable no-unused-vars */
import React from "react";
import Photos from "./Photos";

const style1 = {
  textAlign: "center",
  backgroundColor: "#eee",
  paddingTop: "15px",
};
const style2 = {
  textAlign: "center",
  backgroundColor: "#ddd",
  paddingTop: "15px",
};
const Gallery = () => {
  return (
    <div className="gallery_page">
      <h1 style={{ textAlign: "center" }}>Photo Gallery</h1>
      <div className="row">
        <Photos style={style1} />
        <Photos style={style2} />
        <Photos style={style1} />
        <Photos style={style2} />
      </div>
    </div>
  );
};

export default Gallery;
