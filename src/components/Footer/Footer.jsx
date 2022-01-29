import React from "react";
import "./Footer.scss";
import Facebook from "../../assets/icon-facebook.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Pinterest from "../../assets/icon-pinterest.svg";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
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
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div className="left">
          <div className="socials">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Instagram} alt="" />
          </div>
          <div className="copyrights">
            <p> &copy; 2021 Loopstudios, All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
