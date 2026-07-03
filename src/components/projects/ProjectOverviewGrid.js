import React from "react";

import ProjectOverviewCard from "./ProjectOverviewCard";

export default function ProjectOverviewGrid({ projects }) {
  return (
    <section className="projects-overview" aria-label="Project case studies">
      <div className="projects-overview-grid">
        {projects.map((project) => (
          <ProjectOverviewCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
