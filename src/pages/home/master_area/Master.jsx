/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import LinkList from "./LinkList";
import MasterLinkList from "./LinkList";
import { mastersData } from "../../../Data";

const importentsLinks = [
  { link: "#", linkName: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার" },
  { link: "#", linkName: "কারিগরি ও মাদ্‌রাসা শিক্ষা বিভাগ" },
  { link: "#", linkName: "কারিগরি শিক্ষা অধিদপ্তর" },
  { link: "#", linkName: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড" },
  { link: "#", linkName: "ASSET Project" },
  { link: "#", linkName: "আইএলও" },
];
const Master = () => {
  console.log(mastersData);
  return (
    <>
      {mastersData.map((master) => {
        const { id, title, img, name } = master;
        return (
          <div className="single_master" key={id}>
            <h3>{title}</h3>
            <img src={img} alt="" />
            <a href="/">{name}</a>
          </div>
        );
      })}
      <div className="single_master">
        <h3>Important Link</h3>
        <ul className="msr_ul">
          <MasterLinkList importentsLinks={importentsLinks} />
        </ul>
      </div>
      <div className="single_master ex_height">
        <h3>Gov: Emergancy Service</h3>
        <img
          src="https://i.ibb.co/fF40cxL/helpline.png"
          alt="Gov: Emergancy Service"
        />
      </div>
    </>
  );
};

export default Master;
