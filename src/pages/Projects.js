import React, { useMemo, useRef, useState } from "react";

const PROJECTS = [
  {
    id: "project-1",
    name: "OMW Fullstack Web App",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "key-features-implementation", label: "Key Features & Implementation" },
      { id: "user-authentication", label: "User Authentication" },
      { id: "database-design", label: "Database Design" },
      { id: "trip-creation-management", label: "Trip Creation & Management" },
      { id: "excursion-search-tripadvisor-api", label: "Excursion Search (TripAdvisor API)" },
      { id: "user-profile", label: "User Profile" },
      { id: "editing-updates", label: "Editing & Updates" },
      { id: "ui-styling", label: "UI & Styling" },
      { id: "challenges-learnings", label: "Challenges & Learnings" },
      { id: "outcome", label: "Outcome" },
    ],
    content: (
      <>
        <section id="overview" className="case-section">
          <h2>Overview</h2>
          <p>
            On My Way is a full-stack trip planning application that helps users
            create, organize, and personalize travel itineraries. Users can create
            trips with key details such as dates, budget, and descriptions, search
            for excursions by location, and save selected activities with notes and
            scheduled dates.
          </p>
        </section>

        <section id="problem" className="case-section">
          <h2>Problem</h2>
          <p>
            Planning trips often requires juggling multiple tools—notes, calendars,
            booking sites, and spreadsheets—making it difficult to keep everything
            organized in one place.
          </p>
          <h3>Goal:</h3>
          <p>Create a centralized platform where users can plan trips end-to-
            end, discover excursions, and manage all trip details in a single, 
            intuitive interface.</p>
        </section>

        <section id="solution" className="case-section">
          <h2>Solution</h2>
          <p>
            I designed and built a full-stack web application that allows users 
            to:
          </p>
          <ul>
            <li>Create and edit trips with custom details</li>
            <li>Search for excursions using a third-party API</li>
            <li>Save excursions to specific trips with notes and dates</li>
            <li>View and manage all trips from a personalized profile</li>
          </ul>
          <p>The application emphasizes clarity, reusability, and scalability, 
            with thoughtful frontend components and a structured backend.</p>
        </section>

        <section id="tech-stack" className="case-section">
          <h2>Tech Stack</h2>
          <ul>
            <li><span className="bold">Frontend:</span> React, JavaScript, HTML, 
            CSS, Bootstrap</li>
            <li><span className="bold">Backend:</span> Flask, SQLAlchemy, 
            PostgreSQL</li>
            <li><span className="bold">APIs:</span> TripAdvisor API</li>
            <li><span className="bold">Authentication:</span> bcrypt password 
            hashing</li>
            <li><span className="bold">Version Control:</span> Git & GitHub</li>
          </ul>
        </section>

        <section id="key-features-implementation" className="case-section">
          <h2>Key Features & Implementation</h2>
          <p>
            Core functionality and how major features were implemented across the
            stack.
          </p>
        </section>

        <section id="user-authentication" className="case-section">
          <h2>User Authentication</h2>
          <p>
            Users can sign up and sign in through React forms connected to Flask 
            endpoints. Passwords are securely hashed using bcrypt before being 
            stored in the database.
          </p>
         <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/OMW-signin.png"
              alt="react sign in card"
              />
              <figcaption className="media-caption">
                React sign-in and sign-up UI connected to Flask authentication endpoints.
              </figcaption>
            <img
              src="/omwPhotos/Screenshot 2026-01-08 145109.png"
              alt="bcrypt code"
              />
              <figcaption className="media-caption">
                Passwords are securely hashed using bcrypt before being stored in the database.
              </figcaption>
            </div>
        </div>
        </section>

        <section id="database-design" className="case-section">
          <h2>Database Design</h2>
          <p>
            I began by defining core user actions and translating them into 
            database relationships. The primary tables include Users, Trips, and 
            Excursions, with additional tables planned for future feature 
            expansion.
          </p>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/Copy of Travel App data model.png"
              alt="database ERD"
              />
              <figcaption className="media-caption">
                Database Entity-Relationship Diagram (ERD) for the application.
              </figcaption>
              </div>
            </div>
        </section>

        <section id="trip-creation-management" className="case-section">
          <h2>Trip Creation & Management</h2>
          <p>
            Users can create trips with custom details and edit them at any 
            time. Each trip serves as a container for saved excursions, notes, 
            and scheduled dates.
          </p>
         <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/OMW-createtrip.png"
              alt="react create trip card"
              />
              <figcaption className="media-caption">
                React create trip UI connected to Flask endpoints.
              </figcaption>
            <img
              src="/omwPhotos/OMW-viewtrip.png"
              alt="trip detail view"
              />
              <figcaption className="media-caption">
                React trip detail view UI connected to Flask endpoints.
              </figcaption>
            </div>
        </div>
        </section>

        <section id="excursion-search-tripadvisor-api" className="case-section">
          <h2>Excursion Search (TripAdvisor API)</h2>
          <p>
            To provide rich excursion data, I integrated the TripAdvisor API. 
            The implementation required a two-step request process:
          </p>
          <ol>
            <li>Retrieve a location ID</li>
            <li>Fetch excursion details including names, descriptions, and photos</li>
          </ol>
          <p>Results are displayed using reusable React cards in a responsive grid layout.</p>
         <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/Screenshot 2026-01-08 155809.png"
              alt="Backend route resolving user search queries into TripAdvisor location IDs"
              />
              <figcaption className="media-caption">
                Backend route resolving user search queries into TripAdvisor location IDs.
              </figcaption>
            <img
              src="/omwPhotos/OMW-exploreexcursions.png"
              alt="react explore excursions card"
              />
              <figcaption className="media-caption">
                Excursion search results grid rendered with reusable React cards.
              </figcaption>
            <img
              src="/omwPhotos/OMW-exploreexcursions2.png"
              alt="react explore excursions card expansion"
              />
              <figcaption className="media-caption">
                Excursion search results card expansion to show full description.
              </figcaption>
            </div>
        </div>
        </section>

        <section id="user-profile" className="case-section">
          <h2>User Profile</h2>
          <p>
            The profile page consolidates user information and all created 
            trips. Reusable React components render both trip summaries and 
            excursion cards, ensuring visual consistency and maintainability.
          </p>
         <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/OMW-tripdash.png"
              alt="user profile trip dashboard"
              />
              <figcaption className="media-caption">
                User profile trip dashboard displaying all created trips.
              </figcaption>
            </div>
        </div>
        </section>

        <section id="editing-updates" className="case-section">
          <h2>Editing & Updates</h2>
          <p>
            Users can update trip details and excursions through modals built 
            with React forms. Changes trigger AJAX requests that update the 
            database and immediately re-render the UI.
          </p>
         <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/OMW-edittrip.png"
              alt="react edit trip card"
              />
              <figcaption className="media-caption">
                React edit trip UI connected to Flask endpoints.
              </figcaption>
            </div>
        </div>
        </section>

        <section id="ui-styling" className="case-section">
          <h2>UI & Styling</h2>
          <p>
            I created a cohesive visual system using a defined color palette, 
            reusable buttons, and consistent card layouts. Modals were 
            refactored into React components for consistency. A “Read More” 
            interaction was added to excursion cards to maintain uniform sizing 
            while preserving content readability.
          </p>
         <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/UI Kit (1).png"
              alt="ui kit"
              />
              <figcaption className="media-caption">
                UI kit showcasing reusable components and styles.
              </figcaption>
            </div>
        </div>
        </section>

        <section id="challenges-learnings" className="case-section">
          <h2>Challenges & Learnings</h2>
          <ul>
            <li>Designing a scalable database early helped support future features</li>
            <li>Reusable React components significantly reduced code duplication</li>
            <li>Integrating a third-party API required careful handling of asynchronous data flows</li>
          </ul>
        </section>

        <section id="outcome" className="case-section">
          <h2>Outcome</h2>
          <p>
            On My Way successfully delivers a complete trip planning 
            workflow—from account creation to itinerary management—within a 
            polished, responsive interface. The project strengthened my full-
            stack development skills and reinforced the importance of thoughtful 
            component architecture and API integration.
          </p>
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
    // On desktop: scroll inside right panel
    const el = contentRef.current?.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

    // On mobile: scroll the page to the section
    const el2 = document.getElementById(id);
    if (el2) el2.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="projects-page">
      {/* MOBILE HEADER CONTROLS (shows on mobile only) */}
      <div className="projects-mobile-controls">
        <h1 className="projects-title">Projects</h1>

        <button
          className="project-button mobile"
          onClick={() =>
            setOpenProjectId((prev) => (prev === activeProjectId ? "" : activeProjectId))
          }
          type="button"
        >
          <span>{activeProject.name}</span>
          <span className="chevron">{openProjectId ? "▾" : "▸"}</span>
        </button>

        {openProjectId === activeProjectId && (
          <div className="projects-mobile-sections">
            {activeProject.sections.map((section) => (
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
        )}
      </div>

      {/* DESKTOP LAYOUT (shows on desktop only) */}
      <div className="projects-layout">
        <aside className="projects-nav">
          <h1 className="projects-title">Projects</h1>

          {PROJECTS.map((project) => (
            <div key={project.id} className="project-group">
              <button
                className={`project-button ${
                  activeProjectId === project.id ? "active" : ""
                }`}
                onClick={() => handleProjectClick(project.id)}
                type="button"
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
                      type="button"
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

        <div className="projects-divider" />

        <main className="projects-content">
          <div ref={contentRef} className="case-scroll">
            <h2 className="case-title">{activeProject.name}</h2>
            {activeProject.content}
          </div>
        </main>
      </div>

      {/* MOBILE CONTENT (shows on mobile only) */}
      <div className="projects-mobile-content">
        <h2 className="case-title">{activeProject.name}</h2>
        {activeProject.content}
      </div>
    </div>
  );
}
