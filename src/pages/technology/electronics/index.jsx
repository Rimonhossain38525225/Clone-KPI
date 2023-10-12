/* eslint-disable no-unused-vars */
import React from "react";
import Table from "../computer/table/Table";

import electronicsImage from "../../.././assets/technology/electronics.jpg";
import { electronicsTableData } from "../../../Data";
const Electronics = () => {
  return (
    <div className="electronics_page">
      <h1 style={{ textAlign: "center" }}>Electronics Technology</h1>
      <img
        src={electronicsImage}
        alt="electronics imgages"
        // height={"400px"}
        width={"100%"}
      />
      <Table tableData={electronicsTableData} />
    </div>
  );
};

export default Electronics;
