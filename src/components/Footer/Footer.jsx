import React from "react";
import "./Footer.scss";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import instagram from "../../assets/icon-instagram.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="right">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="links">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
        </ul>
      </div>
      <div className="left">
        <div className="socials">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
          <img src={instagram} alt="" />
        </div>
        <div className="copyrights">
          <p> C 2021 Loopstudios, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
