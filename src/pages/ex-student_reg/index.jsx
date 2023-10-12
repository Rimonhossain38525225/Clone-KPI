/* eslint-disable no-unused-vars */
import React from "react";

import "./exStudentInfo.css";
import AllInput from "./AllInput";

const ExStudentReg = () => {
  return (
    <div className="ex_student_reg_page">
      <h1 style={{ textAlign: "center" }}>Add your Infomation</h1>
      <form action="#" className="p-3 bg-success">
        <input
          type="hidden"
          name="_token"
          value="Blt9L11KpF5E5qPpjJfGS3WLMgS0ufMEh5TGyXh2"
        />
        <AllInput />
        <button type="submit" value="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExStudentReg;
