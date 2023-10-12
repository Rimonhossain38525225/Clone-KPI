/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
const labelStyle = {
  width: "150px",
  display: "inline-block",
  fontSize: "20px",
  // color: "#fff",
};
const FormLabel = ({ id, extra = "" }) => {
  return (
    <>
      <label htmlFor={id} style={labelStyle}>
        {id.charAt(0).toUpperCase() + id.slice(1) + extra}:
      </label>
    </>
  );
};

export default FormLabel;
