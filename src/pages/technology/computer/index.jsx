/* eslint-disable no-unused-vars */
import React from "react";
import Table from "./table/Table";

import computerImage from "../../../assets/technology/computer.gif";
import { computerTableData } from "../../../Data";

const Computer = () => {
  return (
    <div className="conputer_page">
      <h1 style={{ textAlign: "center" }}>Computer Science and Technology</h1>
      <img
        src={computerImage}
        alt="computer imgages"
        // height={"400px"}
        width={"100%"}
      />
      <Table tableData={computerTableData} />
    </div>
  );
};

export default Computer;
