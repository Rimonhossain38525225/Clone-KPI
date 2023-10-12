/* eslint-disable no-unused-vars */
import React from "react";

import "./footer.css";
import myImage from "../../assets/footer.png";

const Footer = () => {
  return (
    <>
      <div className="footer-area">
        <div className="container-fluid">
          <div className="footer_top">
            <img src={myImage} alt="footer image" />
          </div>
          <div className="footer_bottom">
            <p>
              © 2022 All right reserved Rimon hossain.
              <a
                href="https://www.facebook.com/rimonhossain38525225"
                rel="noreferrer"
                target="_blank"
              >
                Developing Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
