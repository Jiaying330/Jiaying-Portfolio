import React from "react";
import "./Resume.scss";

import { education, experience, skills } from "../data";
import Item from "./Item";

export default function Resume() {
  return (
    <>
      <section className="resume section-container" id="resume">
        <h2 className="section-title">Resume</h2>
        <div className="resume__educations">
          <h3 className="resume__title">Education</h3>
          <div className="resume__items">
            {education.map((item) => (
              <Item data={item} />
            ))}
          </div>
        </div>

        <div className="resume__experiences">
          <h3 className="resume__title">Work Experience</h3>
          <div className="resume__items">
            {experience.map((item) => (
              <Item data={item} />
            ))}
          </div>
        </div>

        <div className="resume__skills">
          <h3 className="resume__title">Skills &amp; Experties</h3>
          <div className="resume__items">
            {skills.map((item) => {
              return (
                <div className="resume__item">
                  <div className="resume__item-left">
                    {/* <p className="resume__time">{item.time}</p> */}
                  </div>
                  <div className="resume__item-right">
                    <h4 className="resume__item-title">{item.type}</h4>
                    {/* <h5 className="resume__item-subtitle">{item.degree}</h5> */}
                    <p className="resume__item-description">{item.list}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
