/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import { v4 as uuidv4 } from "uuid";
import SubRows from "./SubRows";

const TecharTableRow = ({ teacherStaffData }) => {
  const tableStyle = {
    border: "2",
  };
  return (
    <>
      {teacherStaffData.map((rowData) => {
        return (
          <tr key={uuidv4()}>
            <td valign="middle">
              <img src={rowData.img} alt="photo" />
            </td>
            <td>
              <table
                className="table table-bordered table-striped"
                style={tableStyle}
              >
                <tbody>
                  <SubRows rowData={rowData} />
                </tbody>
              </table>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TecharTableRow;
