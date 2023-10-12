/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

import { v4 as uuidv4 } from "uuid";

const SelectOption = ({ selectData }) => {
  return (
    <>
      {selectData.map((item) => {
        const { value, name } = item;
        return (
          <option key={uuidv4()} value={value}>
            {name}
          </option>
        );
      })}
    </>
  );
};

export default SelectOption;
