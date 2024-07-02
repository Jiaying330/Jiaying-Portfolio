import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  function navOnClick(event) {
    const sectionId = event.target.innerText.toLowerCase();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item" onClick={navOnClick}>
            Home
          </li>
          <li className="navbar__item" onClick={navOnClick}>
            About
          </li>
          <li className="navbar__item" onClick={navOnClick}>
            Resume
          </li>
          <li className="navbar__item" onClick={navOnClick}>
            Projects
          </li>
        </ul>
      </nav>
    </>
  );
}
