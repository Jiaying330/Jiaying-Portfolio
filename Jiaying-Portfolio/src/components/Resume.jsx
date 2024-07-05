import React from "react";
import "./Resume.scss";
import { useInView } from "react-intersection-observer";

import { education, experience, skills } from "../data";
import Item from "./Item";

export default function Resume() {
  const [resumeRef, resumeInView, resumeEntry] = useInView({
    threshold: 0.1,
  });
  const [eduTitleRef, eduTitleInView, eduTitleEntry] = useInView({
    threshold: 0.1,
  });
  const [workTitleRef, workTitleInView, workTitleEntry] = useInView({
    threshold: 0.1,
  });
  const [skillTitleRef, skillTitleInView, skillTitleEntry] = useInView({
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
          <h3
            ref={eduTitleRef}
            className={`resume__title ${eduTitleInView ? "show" : ""}`}
          >
            Education
          </h3>
          <div className="resume__items">
            {education.map((item) => (
              <Item data={item} />
            ))}
          </div>
        </div>

        <div className="resume__experiences" id="experiences">
          <h3
            ref={workTitleRef}
            className={`resume__title ${workTitleInView ? "show" : ""}`}
          >
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
          <h3
            ref={skillTitleRef}
            className={`resume__title ${skillTitleInView ? "show" : ""}`}
          >
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
