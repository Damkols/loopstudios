import React, { useState } from "react";
import "./NavBar.scss";
import Logo from "../../assets/logo.svg";
import Close from "../../assets/icon-close.svg";
import Hamburger from "../../assets/icon-hamburger.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className={`navItems ${isOpen && "open"}`}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
        <div className="btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen && <img src={Close} alt="" />}
          {!isOpen && <img src={Hamburger} alt="" />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
