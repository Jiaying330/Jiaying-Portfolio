import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <a href="#home" className="navbar__link">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="#about" className="navbar__link">
              About
            </a>
          </li>

          <li className="navbar__item">
            <a href="#resume" className="navbar__link">
              Resume
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
