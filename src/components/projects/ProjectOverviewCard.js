import React from "react";
import { Link } from "react-router-dom";

import { getProjectPath } from "../../data/projects";

function renderProjectOverviewMedia(project) {
  if (project.cardHero?.variant === "mtg-static-image") {
    return (
      <div className="project-overview-card-hero project-overview-card-hero--mtg-static-image">
        <img
          className="project-overview-mtg-static-image"
          src={project.cardHero.src ?? project.heroImage}
          alt={project.heroImageAlt}
        />
      </div>
    );
  }

  return <img src={project.heroImage} alt={project.heroImageAlt} />;
}

export default function ProjectOverviewCard({
  project,
  enableLinks = true,
  ctaLabel = "View Case Study",
}) {
  const projectPath = getProjectPath(project.slug);
  const hasCustomHero = Boolean(project.cardHero);
  const cardClassName = hasCustomHero
    ? `project-overview-card card project-overview-card--${project.cardHero.variant}`
    : "project-overview-card card";
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
    <article className={cardClassName}>
      {enableLinks ? (
        <Link
          to={projectPath}
          className="project-overview-card-media"
          aria-label={`View ${project.title} case study`}
        >
          {renderProjectOverviewMedia(project)}
        </Link>
      ) : (
        <div
          className="project-overview-card-media"
          aria-label={project.cardHero?.ariaLabel ?? project.heroImageAlt}
        >
          {renderProjectOverviewMedia(project)}
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
