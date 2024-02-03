import Marquee from "core-ui/Marquee/Marquee";
import React from "react";
import classes from "./CareerDetails.module.scss";

const CareerDetails: React.FC = (props) => {
  return (
    <div className={classes["career-details"]}>
      <Marquee>
        <div>Senior Graphic Designer</div>
        <div>Senior Graphic Designer</div>
        <div>Senior Graphic Designer</div>
        <div>Senior Graphic Designer</div>
      </Marquee>
      <div className={classes["career-details__basic-info"]}>
        <span>Full time</span>
        <span>Cairo</span>
      </div>
    </div>
  );
};

export default CareerDetails;
