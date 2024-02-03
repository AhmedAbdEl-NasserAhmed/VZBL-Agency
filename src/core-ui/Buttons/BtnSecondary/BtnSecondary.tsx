import React from "react";
import { Link } from "react-router-dom";
import "./BtnSecondary.scss";

const BtnSecondary: React.FC<{ to: string }> = (props) => {
  return (
    <div className="btn-secondary">
      <Link to={props.to}>
        <span className="btn-secondary__left">&rarr;</span>
        <span className="btn-secondary__main">{props.children}</span>
        <span className="btn-secondary__right">&rarr;</span>
      </Link>
    </div>
  );
};

export default BtnSecondary;
