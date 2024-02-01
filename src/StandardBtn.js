import React from "react";

const StandardBtn = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default StandardBtn;
