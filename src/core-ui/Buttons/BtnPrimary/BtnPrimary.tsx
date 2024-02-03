import React from "react";
import "./BtnPrimary.scss";

const BtnPrimary: React.FC<{ className?: string }> = (props) => {
  return (
    <button className={`btn-primary ${props.className}`}>
      {props.children}
    </button>
  );
};

export default BtnPrimary;
