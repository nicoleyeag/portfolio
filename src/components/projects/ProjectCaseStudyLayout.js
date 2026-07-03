import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { getProjectPath } from "../../data/projects";

export default function ProjectCaseStudyLayout({
  project,
  projects,
  children,
}) {
  const navigate = useNavigate();
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: "auto" });
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [project.slug]);

  const scrollToSection = (sectionId) => {
    const section = contentRef.current?.querySelector(`[id="${sectionId}"]`);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navigateToProject = (slug) => {
    navigate(getProjectPath(slug));
  };

  return (
    <div className="projects-page projects-detail-page">
      <div className="projects-mobile-controls">
        <h1 className="projects-title">Projects</h1>

        <select
          className="project-select"
          value={project.slug}
          onChange={(event) => navigateToProject(event.target.value)}
        >
          {projects.map((projectOption) => (
            <option key={projectOption.id} value={projectOption.slug}>
              {projectOption.title}
            </option>
          ))}
        </select>

        <div className="projects-mobile-sections">
          {project.sections.map((section) => (
            <button
              key={section.id}
              className="section-pill"
              type="button"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-layout projects-detail-layout">
        <aside className="projects-nav">
          <h1 className="projects-title">Projects</h1>
          <div className="project-group">
            <button
              className="project-button active"
              onClick={() => navigateToProject(project.slug)}
              type="button"
            >
              <span>{project.title}</span>
              <span className="chevron">▾</span>
            </button>

            <div className="project-sections">
              {project.sections.map((section) => (
                <button
                  key={section.id}
                  className="section-link"
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="projects-divider" />

        <main className="projects-content">
          <div ref={contentRef} className="case-scroll">
            <h2 className="case-title">{project.title}</h2>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
