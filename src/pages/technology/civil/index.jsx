/* eslint-disable no-unused-vars */
import React from "react";
import Table from "../computer/table/Table";

const tableData = [
  {
    name: "Md. Shofikul Islam",
    designation: "Cheif Instructor",
    technology: "Civil",
    shift: "2nd",
    mobile: "01913285641",
    image: "Md. Shofikul Islam",
  },
  {
    name: "Md. Shofikul Islam",
    designation: "Cheif Instructor",
    technology: "Civil",
    shift: "2nd",
    mobile: "01913285641",
    image: "Md. Shofikul Islam",
  },
];

const Civil = () => {
  return (
    <div className="civil_page">
      <h1 style={{ textAlign: "center", backgroundColor: "#ddd" }}>
        Civil Technology
      </h1>
      <img
        src="./src/assets/technology/civil.jpg"
        alt="civil imgages"
        // height={"400px"}
        width={"100%"}
      />
      <Table tableData={tableData} />
    </div>
  );
};

export default Civil;
