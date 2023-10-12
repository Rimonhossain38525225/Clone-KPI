/* eslint-disable no-unused-vars */
import React from "react";
import "./notice.css";
import LinkList from "../master_area/LinkList";

import noticeImage from "../../.././assets/Notice_image/bg-notice-board.png";
// const noticeLinks
const Notice = () => {
  return (
    <>
      <div className="notice_bord">
        <div className="notice">
          <p>নোটিশ বোর্ড</p>
          <img src={noticeImage} alt="bg-notice-board image" />
          <ul>
            <li>
              <i className="fas fa-circle-check"></i>
              <a href="#">
                &quot;জাতীয় শুদ্ধাচার কৌশল বাস্তবায়ন&quot; শীর্ষক আলোচনা সভা
              </a>
            </li>
            <li>
              <i className="fas fa-circle-check"></i>
              <a href="#">সেশন চার্জ সংক্রান্ত</a>
            </li>
            <li>
              <i className="fas fa-circle-check"></i>
              <a href="#">অনিয়মিত শিক্ষার্থীদের পুনঃভর্তি সংক্রান্ত</a>
            </li>
            <li>
              <i className="fas fa-circle-check"></i>
              <a href="#">শিক্ষার্থীদের বদলী সংক্রান্ত নোটিশ</a>
            </li>
            <li>
              <i className="fas fa-circle-check"></i>
              <a href="#">&quot;জাতীয় শোক দিবস - ২০২৩&quot; উদযাপন সংক্রান্ত</a>
            </li>
          </ul>

          <a href="#" style={{ float: "right" }} className="btn btn-success">
            সকল
          </a>
        </div>
      </div>
    </>
  );
};

export default Notice;
