/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TableRow from "./TableRow";

const Table = ({ tableData }) => {
  return (
    <>
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Photo</th>
          </tr>
        </thead>
        <tbody>
          <TableRow tableData={tableData} />
          {/* <TableRow /> */}
        </tbody>
      </table>
    </>
  );
};

export default Table;
