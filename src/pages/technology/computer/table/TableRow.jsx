/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { v4 as uuidv4 } from "uuid";

const TableRow = ({ tableData }) => {
  return (
    <>
      {tableData.map((rowData) => {
        const { name, designation, technology, shift, mobile, image } = rowData;
        return (
          <tr key={uuidv4()}>
            <td>{name}</td>
            <td>
              Designation:{designation}
              <br />
              Technology:{technology}
              <br />
              Shift :{shift} <br />
              Mobile:{mobile}
              <br />
            </td>
            <td>
              <img src={image} alt="photo" />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableRow;
