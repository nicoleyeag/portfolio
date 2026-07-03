import React from "react";
import { Link } from "react-router-dom";

import { getProjectPath } from "../../data/projects";

export default function ProjectOverviewCard({ project }) {
  const projectPath = getProjectPath(project.slug);

  return (
    <article className="project-overview-card card">
      <Link
        to={projectPath}
        className="project-overview-card-media"
        aria-label={`View ${project.title} case study`}
      >
        <img src={project.heroImage} alt={project.heroImageAlt} />
      </Link>

      <div className="project-overview-card-body">
        <h2 className="project-overview-card-title">
          <Link to={projectPath} className="project-overview-card-title-link">
            {project.title}
          </Link>
        </h2>

        <p className="project-overview-card-description">
          {project.shortDescription}
        </p>

        <ul
          className="project-overview-card-stack"
          aria-label={`${project.title} technologies`}
        >
          {project.techStack.map((tech) => (
            <li key={tech} className="project-overview-card-chip">
              {tech}
            </li>
          ))}
        </ul>

        <Link to={projectPath} className="project-overview-card-cta">
          View Case Study
        </Link>
      </div>
    </article>
  );
}
