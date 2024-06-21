import React from "react";
import "./Project.scss";
import { projects } from "../data";
import Item from "./Item";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <section className="project section-container" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="project__cards">
          {projects.map((item) => (
            <ProjectCard data={item} />
          ))}
        </div>
      </section>
    </>
  );
}
