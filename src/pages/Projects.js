import React, { useEffect } from "react";

import ProjectOverviewGrid from "../components/projects/ProjectOverviewGrid";
import { PROJECT_REGISTRY } from "../data/projects";
import { setFaviconColor } from "../favicon";
import usePageMetadata from "../hooks/usePageMetadata";

export default function Projects() {
  usePageMetadata(
    "Projects | Nicole Yeager",
    "Browse project case studies by Nicole Yeager, including front-end, full-stack, and UX work."
  );

  useEffect(() => {
    setFaviconColor("#F8C421");
  }, []);

  return (
    <main className="projects-page projects-overview-page">
      <section className="projects-overview-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-overview-intro">
          A selection of front-end, full-stack, and UX case studies that show
          how I approach product thinking, interface design, and implementation.
        </p>
        <p className="projects-overview-intro">
          Click any project card to open the full case study and explore the
          problem, solution, technical decisions, and outcome.
        </p>
      </section>

      <ProjectOverviewGrid projects={PROJECT_REGISTRY} />
    </main>
  );
}
