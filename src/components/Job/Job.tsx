import React from "react";
import { Link } from "react-router-dom";
import classes from "./Job.module.scss";

const Job: React.FC<{
  title: string;
  description: string;
  type: string;
  location: string;
}> = (props) => {
  const jobTttle = props.title.split(" ");
  return (
    <div className={classes["job"]}>
      <Link to="/career/1">
        <h2 className={classes["job__title"]}>
          <span>{jobTttle[0]}</span>
          <span>{jobTttle[1]}</span>
        </h2>
        <p className={classes["job__desc"]}>{props.description}</p>
        <p className={classes["job__type"]}>
          {props.type}/ {props.location}
        </p>
      </Link>
    </div>
  );
};

export default Job;
