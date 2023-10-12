/* eslint-disable no-unused-vars */
import React from "react";
import Table from "./table/Table";

// computer
const tableData = [
  {
    name: "Md. Robiul Islam Khan",
    designation: "Cheif Instructor",
    technology: "Computer Science and Technology",
    shift: "1st",
    mobile: "01711270796",
    image: "rimon hossain",
  },
  {
    name: "Md. Robiul Islam Khan",
    designation: "Cheif Instructor",
    technology: "Computer Science and Technology",
    shift: "1st",
    mobile: "01711270796",
    image: "rimon hossain",
  },
];
const Computer = () => {
  return (
    <div className="conputer_page">
      <h1 style={{ textAlign: "center" }}>Computer Science and Technology</h1>
      <img
        src="./src/assets/technology/computer.gif"
        alt="computer imgages"
        // height={"400px"}
        width={"100%"}
      />
      <Table tableData={tableData} />
    </div>
  );
};

export default Computer;
