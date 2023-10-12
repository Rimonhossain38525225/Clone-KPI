/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./banner_area/Banner";
import Notice from "./Notice_area/Notice";
import Masters from "./master_area/Masters";
import "./home.css";
import CardArea from "./Card_area/CardArea";

const Home = () => {
  return (
    <>
      <div
        className="Home_page row fl1"
        style={{ justifyContent: "center", border: "1px solid #ddd" }}
      >
        <div className="col-md-9 fl2">
          <Banner />
          <Notice />
          <CardArea />
        </div>
        <div className="col-md-3 fl3">
          <Masters />
        </div>
      </div>
    </>
  );
};

export default Home;
