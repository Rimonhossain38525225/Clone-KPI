/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { v4 as uuidv4 } from "uuid";

const MasterLinkList = ({ importentsLinks }) => {
  return (
    <>
      {importentsLinks.map((imprtentslink) => {
        const { link, linkName } = imprtentslink;
        return (
          <li key={uuidv4()}>
            <i className="fas fa-circle-check"></i>
            <a href={link}>{linkName}</a>
          </li>
        );
      })}
    </>
  );
};

export default MasterLinkList;
