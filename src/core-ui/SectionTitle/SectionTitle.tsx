import React from "react";
import "./SectionTitle.scss";

const SectionTitle: React.FC<{ title: string }> = (props) => {
  return <div className="section-title">{props.title}</div>;
};

export default SectionTitle;
