import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({ data }) {
  const { title, time, descriptions, github, live } = data;

  return (
    <>
      <div className="project-card">
        <h4 className="project-card__title">{title}</h4>
        <p className="project-card__time">{time}</p>
        <p className="project-card__descriptions">{descriptions[0]}</p>
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
    </>
  );
}
