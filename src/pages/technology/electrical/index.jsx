/* eslint-disable no-unused-vars */
import React from "react";
import Table from "../computer/table/Table";

import electricalImage from "../../.././assets/technology/electrical.jpg";

import { electricalData } from "../../../Data";

const Electrical = () => {
  return (
    <div className="electrical_page">
      <h1 style={{ textAlign: "center" }}>Electrical Technology</h1>
      <img
        src={electricalImage}
        alt="electrical imgages"
        // height={"400px"}
        width={"100%"}
      />
      <Table tableData={electricalData} />
    </div>
  );
};

export default Electrical;
