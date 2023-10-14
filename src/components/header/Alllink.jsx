/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./header.css";
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div
        className={`marquee-container ${isHovered ? "paused" : ""}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="marquee">
          ২য়, ৪র্থ এবং ৬ষ্ঠ পর্বের পর্বমধ্য পরীক্ষা চলমান।
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light nav-bar-bg-color">
        <div className="container-fluid" style={{ textAlign: "center" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse nav_itemss"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link header_link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header_link" to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle header_link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Technology
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item custom_css_dropdown_item"
                      to="computer"
                    >
                      computer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item custom_css_dropdown_item"
                      to="civil"
                    >
                      civil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item custom_css_dropdown_item"
                      to="electrical"
                    >
                      Electrical
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item custom_css_dropdown_item"
                      to="electronics"
                    >
                      Electronics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item custom_css_dropdown_item"
                      to="mechanical"
                    >
                      Mechanical
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item custom_css_dropdown_item"
                      to="power"
                    >
                      power
                    </NavLink>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header_link" to="/teacher-staff">
                  Teacher Staff
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header_link" to="/student-info">
                  Student Info
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header_link" to="/ex-student-reg">
                  Ex Student Reg
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header_link" to="/ex-student-info">
                  Ex Student Info
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header_link" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header_link" to="/exam-cell">
                  Exam Cell
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link header_link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
