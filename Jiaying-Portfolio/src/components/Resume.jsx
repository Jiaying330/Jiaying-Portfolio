import React from "react";
import "./Resume.scss";
import { useInView } from "react-intersection-observer";

import { education, experience, skills } from "../data";
import Item from "./Item";

export default function Resume() {
  const [resumeRef, resumeInView, resumeEntry] = useInView({
    threshold: 0.1,
  });
  return (
    <>
      <section
        ref={resumeRef}
        className={`resume section-container ${resumeInView ? "show" : ""}`}
        id="resume"
      >
        <h2 className={`section-title ${resumeInView ? "show" : ""}`}>
          Resume
        </h2>
        <div className="resume__educations" id="educations">
          <h3 className="resume__title">Education</h3>
          <div className="resume__items">
            {education.map((item) => (
              <Item data={item} />
            ))}
          </div>
        </div>

        <div className="resume__experiences" id="experiences">
          <h3 className="resume__title">
            Work <br />
            Experience
          </h3>
          <div className="resume__items">
            {experience.map((item) => (
              <Item data={item} />
            ))}
          </div>
        </div>

        <div className="resume__skills" id="skills">
          <h3 className="resume__title">
            Skills <br />
            &amp; Experties
          </h3>
          <div className="resume__items">
            {skills.map((item) => (
              <Item data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
