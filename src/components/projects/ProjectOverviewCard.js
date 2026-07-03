import React from "react";
import { Link } from "react-router-dom";

import { getProjectPath } from "../../data/projects";

export default function ProjectOverviewCard({
  project,
  enableLinks = true,
  ctaLabel = "View Case Study",
}) {
  const projectPath = getProjectPath(project.slug);
  const titleContent = enableLinks ? (
    <Link to={projectPath} className="project-overview-card-title-link">
      {project.title}
    </Link>
  ) : (
    <span className="project-overview-card-title-text">{project.title}</span>
  );

  const ctaContent = enableLinks ? (
    <Link to={projectPath} className="project-overview-card-cta">
      {ctaLabel}
    </Link>
  ) : (
    <span
      className="project-overview-card-cta is-disabled"
      aria-disabled="true"
    >
      {ctaLabel}
    </span>
  );

  return (
    <article className="project-overview-card card">
      {enableLinks ? (
        <Link
          to={projectPath}
          className="project-overview-card-media"
          aria-label={`View ${project.title} case study`}
        >
          <img src={project.heroImage} alt={project.heroImageAlt} />
        </Link>
      ) : (
        <div className="project-overview-card-media">
          <img src={project.heroImage} alt={project.heroImageAlt} />
        </div>
      )}

      <div className="project-overview-card-body">
        <h2 className="project-overview-card-title">{titleContent}</h2>

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

        {ctaContent}
      </div>
    </article>
  );
}
