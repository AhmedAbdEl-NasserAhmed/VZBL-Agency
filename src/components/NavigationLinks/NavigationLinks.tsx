import React from "react";
import { Link } from "react-router-dom";
import "./NavigationLinks.scss";

const NavigationLinks: React.FC = () => {
  return (
    <ul className="navigation__links">
      <li className="navigation__link">
        <Link to="/work">Work</Link>
      </li>
      <li className="navigation__link">
        <Link to="/about">About</Link>
      </li>
      {/* <li className="navigation__link">
        <Link to="/services">Services</Link>
      </li> */}
      <li className="navigation__link">
        <Link to="/career">Career</Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
