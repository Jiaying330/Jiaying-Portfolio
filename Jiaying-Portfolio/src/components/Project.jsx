import React from "react";
import "./Project.scss";
import { projects } from "../data";
import Item from "./Item";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const [projectsRef, projectsInView, projectsEntry] = useInView({
    threshold: 0.1,
  });
  return (
    <>
      <section
        ref={projectsRef}
        className={`project section-container ${projectsInView ? "show" : ""}`}
        id="projects"
      >
        <h2 className={`section-title ${projectsInView ? "show" : ""}`}>
          Projects
        </h2>
        <div className="project__cards">
          {projects.map((item) => (
            <ProjectCard data={item} />
          ))}
        </div>
      </section>
    </>
  );
}
