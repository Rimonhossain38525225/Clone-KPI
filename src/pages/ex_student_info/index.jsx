/* eslint-disable no-unused-vars */
import React from "react";
import ExStdRow from "./ExStdRow";

// ex Student Informetion Data
import { exStudentInfoData } from "../../Data";

const ExStudentInfo = () => {
  return (
    <div className="ex_student_info_page">
      <h1 style={{ textAlign: "center" }}>EX student Info</h1>

      <div className="table_container">
        <table className="table table-light table-striped table-bordered">
          <thead>
            <tr className="table-primary" style={{ textAlign: "center" }}>
              <th scope="col">Name</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Technology</th>
              <th scope="col">Passing Year</th>
              <th scope="col">Job Information</th>
              <th scope="col">Photo</th>
            </tr>
          </thead>
          <tbody>
            <ExStdRow exStudentInfoData={exStudentInfoData} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExStudentInfo;
