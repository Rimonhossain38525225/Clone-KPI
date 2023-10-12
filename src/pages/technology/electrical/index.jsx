/* eslint-disable no-unused-vars */
import React from "react";
import Table from "../computer/table/Table";

const tableData = [
  {
    name: "Engr. Md. Yakub Ali",
    designation: "Cheif Instructor",
    technology: "Electrical",
    shift: "1st",
    mobile: "01927024957",
    image: "Engr. Md. Yakub Ali",
  },
  {
    name: "Engr. Md. Yakub Ali",
    designation: "Cheif Instructor",
    technology: "Electrical",
    shift: "1st",
    mobile: "01927024957",
    image: "Engr. Md. Yakub Ali",
  },
];

const Electrical = () => {
  return (
    <div className="electrical_page">
      <h1 style={{ textAlign: "center" }}>Electrical Technology</h1>
      <img
        src="./src/assets/technology/electrical.jpg"
        alt="electrical imgages"
        // height={"400px"}
        width={"100%"}
      />
      <Table tableData={tableData} />
    </div>
  );
};

export default Electrical;
