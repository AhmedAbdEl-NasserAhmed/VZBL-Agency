import NavigationLinks from "components/NavigationLinks/NavigationLinks";
import Logo from "core-ui/Logo/Logo";
import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="footer--wrapper">
        <Logo />
        <NavigationLinks />
      </div>
    </section>
  );
};

export default Footer;
