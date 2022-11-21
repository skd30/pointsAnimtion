import React from "react";
import ReactDOM from "react-dom/client";

const NumericData = (props) => {
  const { displayNumber, noToBeAnimated } = props;
  return (
    <>
      <div className="wrapper">
        <div className="noToBeAnimated">+{noToBeAnimated}</div>
        <div className="displayNumber">{displayNumber}</div>
      </div>
    </>
  );
};

export default NumericData;
