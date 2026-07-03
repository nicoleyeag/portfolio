import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import ProjectCaseStudyLayout from "../components/projects/ProjectCaseStudyLayout";
import { PROJECT_REGISTRY, getProjectBySlug } from "../data/projects";
import { setFaviconColor } from "../favicon";
import usePageMetadata from "../hooks/usePageMetadata";
import { LEGACY_PROJECT_CASE_STUDIES_BY_ID } from "../projects/legacyProjectCaseStudies";

const DEFAULT_BG_BASE = "rgba(255, 247, 243, 1)";
const DEFAULT_BG_ACCENT = "rgba(248, 196, 33, 0.22)";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const CaseStudyComponent = project
    ? LEGACY_PROJECT_CASE_STUDIES_BY_ID[project.id]
    : null;

  usePageMetadata(
    project?.seo?.title ?? "Project Not Found | Nicole Yeager",
    project?.seo?.description ??
      "The requested project case study could not be found."
  );

  const bgBase = project?.bg?.base ?? DEFAULT_BG_BASE;
  const bgAccent = project?.bg?.accent ?? DEFAULT_BG_ACCENT;

  useEffect(() => {
    setFaviconColor("#F8C421");
    document.body.classList.add("page-projects");
    document.body.style.setProperty("--bg-base", bgBase);
    document.body.style.setProperty("--bg-accent", bgAccent);

    return () => {
      document.body.classList.remove("page-projects");
      document.body.style.removeProperty("--bg-base");
      document.body.style.removeProperty("--bg-accent");
    };
  }, [bgBase, bgAccent]);

  if (!project || !CaseStudyComponent) {
    return (
      <main className="projects-page">
        <section className="projects-not-found card">
          <h1 className="projects-title">Project Not Found</h1>
          <p className="projects-overview-intro">
            The case study you requested does not exist, or the route has not
            been added yet.
          </p>
          <Link to="/projects" className="project-overview-card-cta">
            Back to Projects
          </Link>
        </section>
      </main>
    );
  }

  return (
    <ProjectCaseStudyLayout project={project} projects={PROJECT_REGISTRY}>
      <CaseStudyComponent />
    </ProjectCaseStudyLayout>
  );
}
