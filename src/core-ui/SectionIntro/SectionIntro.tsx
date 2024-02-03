import React from "react";
import classes from "./SectionIntro.module.scss";

const SectionIntro: React.FC<{ sectionTitle: string; paragraph?: string }> = (
  props
) => {
  return (
    <section className={classes["section-intro"]}>
      <h2 className={classes["section-intro__title"]}>{props.sectionTitle}</h2>
      <div className={classes["section-intro__image"]}>{props.children}</div>
      <p className={classes["section-intro__parag"]}>{props.paragraph}</p>
    </section>
  );
};

export default SectionIntro;
