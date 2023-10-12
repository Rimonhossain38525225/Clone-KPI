/* eslint-disable no-unused-vars */
import React from "react";
import Table from "../computer/table/Table";

import CivilImage from "../../../assets/technology/civil.jpg";
import { CivilTableData } from "../../../Data";

const Civil = () => {
  return (
    <div className="civil_page">
      <h1 style={{ textAlign: "center", backgroundColor: "#ddd" }}>
        Civil Technology
      </h1>
      <img
        src={CivilImage}
        alt="civil imgages"
        // height={"400px"}
        width={"100%"}
      />
      <Table tableData={CivilTableData} />
    </div>
  );
};

export default Civil;
