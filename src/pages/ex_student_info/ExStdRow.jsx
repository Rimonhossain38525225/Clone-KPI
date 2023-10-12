/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ExStdRow = ({ exStudentInfoData }) => {
  return (
    <>
      {exStudentInfoData.map((exStudent, index) => {
        const { name, mobile, technology, passingYear, jobIfo, photo } =
          exStudent;
        return (
          <tr key={index}>
            <td>{name}</td>
            <td>{mobile}</td>
            <td>{technology}</td>
            <td>{passingYear}</td>
            <td>{jobIfo}</td>
            <td style={{ textAlign: "center" }}>
              <img src={photo} alt="photo" width={"70"} />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ExStdRow;
