import React from "react";
import "./ProgressBar.css";

const ProgressBar = props => {
  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} color={props.color} />
    </div>
  );
};

const Filler = props => {
  return (
    <div
      className="filler"
      style={{
        width: `${props.percentage}%`,
        backgroundColor: `${props.color}`
      }}
    />
  );
};

export default ProgressBar;
