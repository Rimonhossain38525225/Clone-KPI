/* eslint-disable no-unused-vars */
import React from "react";
import Table from "../computer/table/Table";

const tableData = [
  {
    name: "Engr. Md. Nurul Islam",
    designation: "Cheif Instructor",
    technology: "Mechanical ",
    shift: "First Shift",
    mobile: "01917517293",
    image: "Engr. Md. Nurul Islam",
  },
  {
    name: "Engr. Md. Nurul Islam",
    designation: "Cheif Instructor",
    technology: "Mechanical ",
    shift: "First Shift",
    mobile: "01917517293",
    image: "Engr. Md. Nurul Islam",
  },
];
const Mechanical = () => {
  return (
    <div className="mechanical_page">
      <h1 style={{ textAlign: "center" }}>Mechanical Technology</h1>
      {/* <img
        src="./src/assets/technology/computer.gif"
        alt="computer imgages"
        height={"400px"}
        width={"100%"}
      /> */}
      <Table tableData={tableData} />
    </div>
  );
};

export default Mechanical;
