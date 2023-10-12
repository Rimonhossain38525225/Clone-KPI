/* eslint-disable no-unused-vars */
import React from "react";
import Table from "../computer/table/Table";
import { mechanicalTableData } from "../../../Data";
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
      <Table tableData={mechanicalTableData} />
    </div>
  );
};

export default Mechanical;
