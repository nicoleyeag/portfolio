import React, { useMemo, useRef, useState } from "react";

const PROJECTS = [
  {
    id: "project-1",
    name: "OMW Fullstack Web App",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "process", label: "Process" },
      { id: "outcome", label: "Outcome" },
    ],
    content: (
      <>
        <section id="overview" className="case-section">
          <h2>Overview</h2>
          <p>On My Way is a full-stack trip planning application that helps 
            users create, organize, and personalize travel itineraries. Users 
            can create trips with key details such as dates, budget, and 
            descriptions, search for excursions by location, and save selected 
            activities with notes and scheduled dates. A centralized profile 
            allows users to review and edit all trips in one place, creating a 
            flexible and dynamic planning experience.</p>
        </section>

        <section id="problem" className="case-section">
          <h2>Problem</h2>
          <p>Planning trips often requires juggling multiple tools—notes, 
            calendars, booking sites, and spreadsheets—making it difficult to 
            maintain a clear and organized itinerary in one place.</p>
        </section>

        <section id="process" className="case-section">
          <h2>Process</h2>
          <div className="image-placeholder" />
        </section>

        <section id="outcome" className="case-section">
          <h2>Outcome</h2>
          <p>Results, learnings, next steps.</p>
        </section>
      </>
    ),
  },
  {
    id: "project-2",
    name: "Project 2",
    sections: [{ id: "overview", label: "Overview" }],
    content: (
      <section id="overview" className="case-section">
        <h2>Overview</h2>
        <p>Second project description.</p>
      </section>
    ),
  },
];

export default function Projects() {
  const [openProjectId, setOpenProjectId] = useState(PROJECTS[0].id);
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);
  const contentRef = useRef(null);

  const activeProject = useMemo(
    () => PROJECTS.find((p) => p.id === activeProjectId),
    [activeProjectId]
  );

  const handleProjectClick = (id) => {
    setOpenProjectId(id);
    setActiveProjectId(id);

    requestAnimationFrame(() => {
      contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const scrollToSection = (id) => {
    const el = contentRef.current?.querySelector(`#${id}`);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="projects-page">
      <div className="projects-layout">
        {/* LEFT NAV */}
        <aside className="projects-nav">
          <h1 className="projects-title">Projects</h1>

          {PROJECTS.map((project) => (
            <div key={project.id} className="project-group">
              <button
                className={`project-button ${
                  activeProjectId === project.id ? "active" : ""
                }`}
                onClick={() => handleProjectClick(project.id)}
              >
                <span>{project.name}</span>
                <span className="chevron">
                  {openProjectId === project.id ? "▾" : "▸"}
                </span>
              </button>

              {openProjectId === project.id && (
                <div className="project-sections">
                  {project.sections.map((section) => (
                    <button
                      key={section.id}
                      className="section-link"
                      onClick={() => scrollToSection(section.id)}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* DIVIDER */}
        <div className="projects-divider" />

        {/* RIGHT CONTENT */}
        <main className="projects-content">
          <div ref={contentRef} className="case-scroll">
            <h2 className="case-title">{activeProject.name}</h2>
            {activeProject.content}
          </div>
        </main>
      </div>
    </div>
  );
}
