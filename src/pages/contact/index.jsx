/* eslint-disable no-unused-vars */
import React from "react";
import gmail from "../.././assets/contactus_images/email.png";
import teliphone from "../.././assets/contactus_images/teliphone.png";
import Gmailpng from "../.././assets/contactus_images/Gmailpng.png";
const Contact = () => {
  return (
    <>
      <div className="contact_us">
        <h1 style={{ textAlign: "center" }}>Kushtia Polytechnic Institute</h1>
        <div className="row mt-5" style={{ textAlign: "center" }}>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3 style={{ textAlign: "center" }}>Mailing Address</h3>
            <img
              src={gmail}
              alt="contact image"
              height={"60px"}
              width={"60px"}
            />
            <h6>02477783104</h6>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3 style={{ textAlign: "center" }}>Telephone</h3>
            <img
              src={teliphone}
              alt="contact image"
              height={"60px"}
              width={"60px"}
            />
            <h6>02477783104</h6>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h3 style={{ textAlign: "center" }}>Email Address</h3>
            <img
              src={Gmailpng}
              alt="contact image"
              height={"60px"}
              width={"60px"}
            />
            <h6>02477783104</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
