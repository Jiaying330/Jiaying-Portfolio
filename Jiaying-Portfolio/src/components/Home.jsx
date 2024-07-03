import React from "react";
import "./Home.scss";
import { roles, social } from "../data";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <section className="home" id="home">
        <h1 className="home__name">Hi! I'm Jiaying</h1>
        <h2 className="home__role">
          a{" "}
          <Typewriter cursor={true} loop={true} typeSpeed={60} words={roles} />
        </h2>
        <ul className="home__socials">
          {social.map((item) => {
            return (
              <li className="home__socials-item">
                <a
                  href={item.link}
                  target="_blank"
                  className="home__socials-link"
                >
                  <ion-icon name={item.ion_icon_name}></ion-icon>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
