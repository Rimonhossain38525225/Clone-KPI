/* eslint-disable no-unused-vars */
import React from "react";

import StudentsInfoSelect from "./StudentsInfoSelect";

const StudentHeadArea = () => {
  const technologySelectOption = [
    "Select Any Technology",
    "Civil",
    "Electrical",
    "Computer",
    "Computer Science and Technology",
    "Mechanical",
    "Power",
    "Electronics",
  ];
  const semesterSelectOption = [
    "Select Any Semester",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
  ];
  const shiftSelectOption = ["Select Any Shift", "1st", "2nd"];
  const groupSelectOption = ["Select Any Group", "A", "B"];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Student List</h1>
      <h1 style={{ textAlign: "center", color: "#00f" }}>
        No. Of Student= 4568
      </h1>
      <hr style={{ height: "3px", backgroundColor: "black" }} />

      <form action="" onSubmit={handleSubmit}>
        <table style={{ width: "100%" }}>
          <tr className="grid_layout">
            <StudentsInfoSelect
              labelName={"Technology:"}
              selectOption={technologySelectOption}
            />
            <StudentsInfoSelect
              labelName={"Semester:"}
              selectOption={semesterSelectOption}
            />
            <StudentsInfoSelect
              labelName={"Shift:"}
              selectOption={shiftSelectOption}
            />
            <StudentsInfoSelect
              labelName={"Group:"}
              selectOption={groupSelectOption}
            />
            <td>
              <label
                htmlFor="technology"
                style={{
                  fontSize: "20px",
                  display: "inline-block",
                }}
              >
                Roll:
              </label>
              <br />
              <input
                type="text"
                name="roll"
                placeholder="Enter Roll No"
                required
                style={{ fontSize: "20px", width: "150px" }}
              />
            </td>
            <td>
              <button type="submit" className="btn btn-info">
                Search
              </button>
            </td>
          </tr>
        </table>
      </form>
      <hr style={{ height: "3px", backgroundColor: "black" }} />
    </>
  );
};

export default StudentHeadArea;
