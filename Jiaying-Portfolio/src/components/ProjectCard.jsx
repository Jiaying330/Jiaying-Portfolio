import React from "react";
import "./ProjectCard.scss";
import { useInView } from "react-intersection-observer";

export default function ProjectCard({ data }) {
  const { title, time, descriptions, github, live, tech } = data;
  const [cardRef, cardInView, cardEntry] = useInView({
    threshold: 0.1,
  });

  return (
    <>
      <div ref={cardRef} className={`project-card ${cardInView ? "show" : ""}`}>
        <h4 className="project-card__title">{title}</h4>
        <p className="project-card__tech">
          {tech.map((item, i) => {
            if (i != tech.length - 1) {
              return item + " | ";
            }
            return item;
          })}
        </p>
        <p className="project-card__descriptions">{descriptions[0]}</p>
        <div className="project-card__links">
          {github && (
            <a href={github} className="project-card__link" target="_blank">
              GitHub
            </a>
          )}
          {live && (
            <a href={live} className="project-card__link" target="_blank">
              Live
            </a>
          )}
        </div>
      </div>
    </>
  );
}
