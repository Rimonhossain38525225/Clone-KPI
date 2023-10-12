/* eslint-disable no-unused-vars */
import React from "react";
import Table from "../computer/table/Table";

import powerImage from "../../.././assets/technology/power.jpg";
import { powerTableData } from "../../../Data";

const Power = () => {
  return (
    <div className="power_page">
      <h1 style={{ textAlign: "center" }}>Computer Science and Technology</h1>
      <img
        src={powerImage}
        alt="computer imgages"
        // height={"400px"}
        width={"100%"}
      />
      <Table tableData={powerTableData} />
    </div>
  );
};

export default Power;
