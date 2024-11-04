import React from "react";
import logo from "../../images/web3applogo.png";
import "../styles/Footer.css";

const Footer = () => (
  <div className="footerMainContainer">
    <div className="footerNavContainer">
      <div className="footerImageContainer">
        <img src={logo} alt="logo" className="footerImage" />
      </div>
      <div className="footerNavCards">
        <p className="footerCard">Market</p>
        <p className="footerCard">Exchange</p>
        <p className="footerCard">Tutorials</p>
        <p className="footerCard">Wallets</p>
      </div>
    </div>

    <div className="footerReachContainer">
      <p className="footerReachInfo">Come join us and hear for the unexpected miracle</p>
      <p className="footerReachInfo footerReachEmail">info@web3app.com</p>
    </div>

    <div className="footerDivider" />

    <div className="footerAdditionalInfoContainer">
      <p className="additionalInfo additionalInfoLeft">@web3app</p>
      <p className="additionalInfo additionalInfoRight">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
