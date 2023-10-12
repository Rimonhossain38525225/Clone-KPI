/* eslint-disable no-unused-vars */
import React from "react";
import Table from "../computer/table/Table";

// power
const tableData = [
  {
    name: "Engr. Syed Ahsan Ali",
    designation: "Cheif Instructor",
    technology: "Power",
    shift: "2nd",
    mobile: "01712203326",
    image: "Engr. Syed Ahsan Ali",
  },
  {
    name: "Engr. Syed Ahsan Ali",
    designation: "Cheif Instructor",
    technology: "Power",
    shift: "2nd",
    mobile: "01712203326",
    image: "Engr. Syed Ahsan Ali",
  },
];

const Power = () => {
  return (
    <div className="power_page">
      <h1 style={{ textAlign: "center" }}>Computer Science and Technology</h1>
      <img
        src="./src/assets/technology/power.jpg"
        alt="computer imgages"
        // height={"400px"}
        width={"100%"}
      />
      <Table tableData={tableData} />
    </div>
  );
};

export default Power;
