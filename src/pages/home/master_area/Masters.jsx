/* eslint-disable no-unused-vars */
import React from "react";
import "./master.css";
import Master from "./Master";

const mastersData = [
  {
    id: 1,
    title: "মাননীয় মন্ত্রী",
    img: "./src/assets/master_area_images/shikhkha_montri.jpg",
    name: "ডা. দীপু মনি এম.পি",
  },
  {
    id: 2,
    title: "মাননীয় উপমন্ত্রী",
    img: "./src/assets/master_area_images/protimontri.jpg",
    name: "মহিবুল হাসান চৌধুরী, এম.পি",
  },
  {
    id: 3,
    title: "সচিব",
    img: "./src/assets/master_area_images/shochib.jpg",
    name: "মোঃ কামাল হোসেন",
  },
  {
    id: 4,
    title: "মহাপরিচালক",
    img: "./src/assets/master_area_images/shikhkh_montri.jpg",
    name: "মোঃ মহসিন",
  },
  {
    id: 5,
    title: "অধ্যক্ষ",
    img: "./src/assets/master_area_images/zahidul.jpg",
    name: "ইঞ্জিনিয়ার মোঃ জাহেদুল কবির খান",
  },
];

const Masters = () => {
  return (
    <>
      <div className="master_area">
        <Master mastars={mastersData} />
      </div>
    </>
  );
};

export default Masters;
