/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SubRows = ({ rowData }) => {
  const {
    name,
    email,
    designation,
    mobile,
    technology,
    PhoneOfiice,
    shift,
    phoneResidence,
  } = rowData;
  return (
    <>
      <tr>
        <td>Name</td>
        <td>{name}</td>
        <td>Email</td>
        <td>{email}</td>
      </tr>
      <tr>
        <td>Designation</td>
        <td>{designation}</td>
        <td>Mobile No.</td>
        <td>{mobile}</td>
      </tr>
      <tr>
        <td>Technology</td>
        <td>{technology}</td>
        <td>Phone(Office)</td>
        <td>{PhoneOfiice}</td>
      </tr>
      <tr>
        <td>Shift</td>
        <td>{shift}</td>
        <td>Phone(Residence)</td>
        <td>{phoneResidence}</td>
      </tr>
    </>
  );
};

export default SubRows;
