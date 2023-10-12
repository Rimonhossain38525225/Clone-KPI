/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Header from "../components/header";
import Footer from "../components/footer";
import About from "../pages/about";
import Contact from "../pages/contact";
import Error from "../pages/Error";
import ExamCell from "../pages/exam_cell";
import Gallery from "../pages/gallery";
import ExStudentInfo from "../pages/ex_student_info";
import ExStudentReg from "../pages/ex-student_reg";
import StudentInfo from "../pages/student_info";
import TeacherStaff from "../pages/teacher_staff";
import Computer from "../pages/technology/computer";
import Civil from "../pages/technology/civil";
import Electrical from "../pages/technology/electrical";
import Electronics from "../pages/technology/electronics";
import Mechanical from "../pages/technology/mechanical";
import Power from "../pages/technology/power";

const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main-area">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />

              <Route path="computer" element={<Computer />} />
              <Route path="civil" element={<Civil />} />
              <Route path="electrical" element={<Electrical />} />
              <Route path="electronics" element={<Electronics />} />
              <Route path="mechanical" element={<Mechanical />} />
              <Route path="power" element={<Power />} />

              <Route path="/teacher-staff" element={<TeacherStaff />} />
              <Route path="/student-info" element={<StudentInfo />} />
              <Route path="/ex-student-reg" element={<ExStudentReg />} />
              <Route path="/ex-student-info" element={<ExStudentInfo />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/exam-cell" element={<ExamCell />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routess;
