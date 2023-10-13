/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const StudentsInfoSelect = ({ labelName, selectOption }) => {
  return (
    <>
      <td>
        <label
          htmlFor="technology"
          style={{
            fontSize: "20px",
            display: "inline-block",
          }}
        >
          {labelName}
        </label>

        <br />
        <select
          name="technology"
          required
          aria-label="technology"
          id="Teacher_and_Staff_Information"
        >
          {selectOption.map((optionItem, index) => {
            return (
              <option key={index} value={optionItem}>
                {optionItem}
              </option>
            );
          })}
        </select>
      </td>
    </>
  );
};

export default StudentsInfoSelect;
