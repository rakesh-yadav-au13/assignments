import React from "react";

const HeadSection = ({ title }) => {
  return (
    <div className="child_heading">
      <h1>{title}</h1>
      <div className="underline"></div>
    </div>
  );
};

export default HeadSection;
