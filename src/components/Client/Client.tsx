import React from "react";
import classes from "./Client.module.scss";

const Client: React.FC = (props) => {
  return <div className={classes.client}>{props.children}</div>;
};

export default Client;
