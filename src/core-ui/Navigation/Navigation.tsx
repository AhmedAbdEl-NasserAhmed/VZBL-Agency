import NavigationLinks from "components/NavigationLinks/NavigationLinks";
import React from "react";
import BtnPrimary from "../Buttons/BtnPrimary/BtnPrimary";
import Logo from "../Logo/Logo";
import "./Navigation.scss";

const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <Logo />
      <NavigationLinks />
      <BtnPrimary>Contact Us</BtnPrimary>
    </div>
  );
};

export default Navigation;
