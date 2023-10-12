/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ExStdSelectOption = ({ ExStdSelectOptionData }) => {
  return (
    <>
      {ExStdSelectOptionData.map((value, index) => {
        return (
          <option key={index} value={value}>
            {value}
          </option>
        );
      })}
    </>
  );
};

export default ExStdSelectOption;
