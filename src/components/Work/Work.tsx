import SectionTitle from "core-ui/SectionTitle/SectionTitle";
import React from "react";
import { Link } from "react-router-dom";

import "./Work.scss";

const Work: React.FC<{ title: string; description: string; image: string }> = (
  props
) => {
  return (
    <div className="work-wrapper">
      <div className="work">
        <div className="work__image">
          <Link to="/work/1">
            <img
              src={props.image}
              alt="work1"
              className="work__img img-fluid"
            />
          </Link>
        </div>
        <div className="work__details">
          <div className="work__details--wrapper">
            <h2 className="work__title">{props.title}</h2>
            <p className="work__description">{props.description}</p>
            <p className="work__description">{props.description}</p>
            <p className="work__description">{props.description}</p>
            <p className="work__description">{props.description}</p>
          </div>
        </div>
      </div>
      <SectionTitle title={props.title} />
    </div>
  );
};

export default Work;
