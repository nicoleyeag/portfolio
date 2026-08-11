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
          A selection of web, mobile, and UX work spanning{" "}
          <span className="bold">front-end engineering</span>,{" "}
          <span className="bold">product design</span>, APIs, testing, and{" "}
          <span className="bold">full-stack development</span>.
        </p>
        <p className="projects-overview-intro">
          Each case study explores not just what I built, but the{" "}
          <span className="bold">problems, decisions, tradeoffs, and iterations</span>{" "}
          behind the final product.
        </p>
      </section>

      <ProjectOverviewGrid projects={PROJECT_REGISTRY} />
    </main>
  );
}
