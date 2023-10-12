/* eslint-disable no-unused-vars */
import React from "react";
import Table from "../computer/table/Table";

// Electronics table data
const tableData = [
  {
    name: "Engr. Md. Abdur Rahman",
    designation: "Cheif Instructor",
    technology: "Electronics",
    shift: "1st",
    mobile: "01927024957",
    image: "Engr. Md. Yakub Ali",
  },
  {
    name: "Engr. Md. Abdur Rahman",
    designation: "Cheif Instructor",
    technology: "Electronics",
    shift: "1st",
    mobile: "01927024957",
    image: "Engr. Md. Yakub Ali",
  },
];
const Electronics = () => {
  return (
    <div className="electronics_page">
      <h1 style={{ textAlign: "center" }}>Electronics Technology</h1>
      <img
        src="./src/assets/technology/electronics.jpg"
        alt="electronics imgages"
        // height={"400px"}
        width={"100%"}
      />
      <Table tableData={tableData} />
    </div>
  );
};

export default Electronics;
