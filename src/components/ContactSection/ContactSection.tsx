import React from "react";
import classes from "./ContactSection.module.scss";

const ContactSection: React.FC = () => {
  return (
    <section className={classes.contact}>
      <div className={classes["contact--wrapper"]}>
        <p>YOU</p>
        <p>CAN</p>
        <p>REACH US</p>
      </div>
    </section>
  );
};

export default ContactSection;
