/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./teacherStaff.css";
import SelectOption from "./SelectOption";
import TecharTableRow from "./TecherTableRow/TecharTableRow";

// techer and staff information data
import { teacherStaffData } from "../../Data";

// select techer and staff information data
const selectData = [
  { value: "Select Any Technology", name: "Select Any Technology" },
  { value: "all teacher", name: "All Teacher" },
  { value: "all staff", name: "All Staff" },
  { value: "all head", name: "All Head of Dept" },
  { value: "civil", name: "Civil" },
  { value: "electrical", name: "Electrical" },
  {
    value: "computer science and technology",
    name: "Computer Science and Technology",
  },
  { value: "mechanical", name: "Mechanical" },
  { value: "power", name: "Power" },
  { value: "electronics", name: "Electronics" },
  { value: "office section", name: "Office Section" },
  { value: "non tech", name: "Non Tech" },
];

const TeacherStaff = () => {
  const [select, setSelect] = useState("");
  const [searchData, setSearchData] = useState(teacherStaffData);

  const handleOnChange = (e) => {
    setSelect(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(select);
    const newSearchData = teacherStaffData.filter((data) => {
      return select === data.catagory.toLowerCase();
    });

    if (select === "select any technology") {
      setSearchData(teacherStaffData);
    } else {
      setSearchData(newSearchData);
    }
  };
  return (
    <div className="teacher_staff">
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "aliceblue",
          borderRadius: "5px",
        }}
      >
        Teacher and Staff Information
      </h1>
      <hr style={{ height: "3px", backgroundColor: "black" }} />
      <form action="" onSubmit={handleSubmit}>
        <table style={{ width: "100%" }}>
          <tr>
            <td>
              <label
                htmlFor="technology"
                style={{
                  fontSize: "20px",
                  display: "inline-block",
                }}
              >
                Technology:
              </label>
              <select
                name="technology"
                aria-label="technology"
                id="Teacher_and_Staff_Information"
                onChange={handleOnChange}
                value={select}
              >
                <SelectOption selectData={selectData} />
              </select>
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
      <div className="table_container">
        <table
          style={{ maxWidth: "100%" }}
          className="table table-light table-striped"
        >
          <tbody>
            <TecharTableRow teacherStaffData={searchData} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherStaff;
