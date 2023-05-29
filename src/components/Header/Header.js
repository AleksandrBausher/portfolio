import React, { useState } from "react";
import "./Header.css";
import logo from "../images/logo.png";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  const [Mobile, setMobile] = useState(false);
  return (
    <header className="header">
      <div className="container d_flex">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>

        <div className="navLink">
          <ul
            className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
            onClick={() => setMobile(false)}
          >
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/portfolio">portfolio</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
            <li>
              <a href="./resume.pdf" download>resume</a>
            </li>
          </ul>
          <button className="toggle" onClick={() => setMobile(!Mobile)}>
            {Mobile ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;