/* eslint-disable no-unused-vars */
import React from "react";

import FormLabel from "./FormLabel";
import ExStdSelectOption from "./ExStdSelectOption";

const AllInput = () => {
  const ExStdSelectOptionData = [
    "Computer Science and Technology",
    "Civil Technology",
    "Electrical Technology",
    "Electronics Technology",
    "Mechanical Technology",
    "Power Technology",
  ];
  return (
    <>
      <div className="mb-3">
        <FormLabel id="name" />
        <input
          type="text"
          name="name"
          id="name"
          className="inputStyle form-control-inline"
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <FormLabel id="mobile" extra=" No" />
        <input
          type="text"
          name="mobile"
          id="mobile"
          className="inputStyle form-control-inline"
          placeholder="Mobile No"
          spellCheck={false}
          data-ms-editor={true}
        />
      </div>
      <div className="mb-3">
        <FormLabel id="technology" />
        <select
          name="technology"
          id="technology"
          className="inputStyle form-select-inline"
        >
          <ExStdSelectOption ExStdSelectOptionData={ExStdSelectOptionData} />
        </select>
      </div>
      <div className="mb-3">
        <FormLabel id="passing" extra=" Year" />
        <input
          type="text"
          name="passingYear"
          id="passingYear"
          className="inputStyle form-control-inline"
          placeholder="Passing Year"
          spellCheck={false}
          data-ms-editor={true}
        />
      </div>
      <div className="mb-3">
        <FormLabel id="Job" extra=" Information" />
        <textarea
          rows={4}
          name="jobinformation"
          id="jobinformation"
          className="inputStyle form-control-inline"
          spellCheck={false}
          data-ms-editor={true}
        />
      </div>

      <div className="mb-3">
        <FormLabel
          id=""
          extra={
            Math.floor(Math.random() * 10 + 1) +
            "+" +
            Math.floor(Math.random() * 10 + 1) +
            "=?"
          }
        />
        <input
          type="number"
          name="captche"
          id="captche"
          className="inputStyle form-control-inline"
          placeholder="Captche"
          spellCheck={false}
          data-ms-editor={true}
        />
      </div>
      <div className="mb-3">
        <FormLabel id="upload" extra=" Photo" />
        <input
          type="file"
          name="uploadPhoto"
          id="uploadPhoto"
          className="inputStyle form-control-inline"
          style={{ border: "none" }}
          spellCheck={false}
          data-ms-editor={true}
        />
      </div>
    </>
  );
};

export default AllInput;
