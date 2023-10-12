/* eslint-disable no-unused-vars */
import React from "react";
import StudentHeadArea from "./StudentHeadArea";

import "./studentInfo.css";

// student information  data
import { studentInfoData } from "../../Data";

const StudentInfo = () => {
  return (
    <div className="student_info_page">
      <StudentHeadArea />
      <div className="table_container">
        <table
          className="table table-striped table-striped table-bordered"
          style={{ width: "100%", margin: "auto" }}
        >
          <thead>
            <tr>
              <th scope="col">Roll No</th>
              <th scope="col">Student Name</th>
              <th scope="col">Technology</th>
              <th scope="col">Semester</th>
              <th scope="col">Photo</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {studentInfoData.map((student, index) => {
              const { roll, studentName, technology, semester, photo } =
                student;
              return (
                <tr key={index}>
                  <td>{roll}</td>
                  <td>{studentName}</td>
                  <td>{technology}</td>
                  <td>{semester}</td>
                  <td>
                    <img src={photo} alt="photo" />
                  </td>
                  <td>
                    <a href="#">
                      <button type="button" className="btn btn-primary">
                        Detail
                      </button>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentInfo;
