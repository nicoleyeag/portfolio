import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import StatefulButton from "./StatefulButton";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";
import { PROJECT_REGISTRY, getProjectPath } from "../data/projects";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
  const projectsMenuRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const closeMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setMenuOpen(false);
    setProjectsMenuOpen(false);
  };

  const openProjectsMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setProjectsMenuOpen(true);
  };

  const scheduleProjectsMenuClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = setTimeout(() => {
      setProjectsMenuOpen(false);
      closeTimeoutRef.current = null;
    }, 240);
  };

  const handleProjectsBlur = (event) => {
    if (!projectsMenuRef.current?.contains(event.relatedTarget)) {
      setProjectsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Hamburger (hidden on desktop via CSS) */}
        <button
          type="button"
          className="hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Left / dropdown */}
        <div className={`nav-left ${menuOpen ? "is-open" : ""}`}>
          <StatefulButton label="home" to="/" sparkleColor="red" onClick={closeMenu} />
          <StatefulButton label="about me" to="/about" sparkleColor="orange" onClick={closeMenu} />
          <div
            ref={projectsMenuRef}
            className={`nav-projects ${projectsMenuOpen ? "is-open" : ""}`}
            onMouseEnter={openProjectsMenu}
            onMouseLeave={scheduleProjectsMenuClose}
            onFocusCapture={openProjectsMenu}
            onBlurCapture={handleProjectsBlur}
          >
            <StatefulButton
              label="projects"
              to="/projects"
              sparkleColor="yellow"
              onClick={closeMenu}
            />

            <div className={`nav-projects-dropdown ${projectsMenuOpen ? "is-open" : ""}`}>
              {PROJECT_REGISTRY.map((project) => (
                <Link
                  key={project.id}
                  to={getProjectPath(project.slug)}
                  className="nav-projects-dropdown-link"
                  onClick={closeMenu}
                >
                  {project.title}
                </Link>
              ))}
            </div>

            <div className="nav-projects-mobile-links">
              {PROJECT_REGISTRY.map((project) => (
                <Link
                  key={project.id}
                  to={getProjectPath(project.slug)}
                  className="nav-projects-mobile-link"
                  onClick={closeMenu}
                >
                  {project.title}
                </Link>
              ))}
            </div>
          </div>
          <StatefulButton label="hire me!" to="/hire" sparkleColor="green" onClick={closeMenu} />

          {/* MOBILE-ONLY social icons */}
          <div className="mobile-socials">
            <GitHubButton />
            <LinkedInButton />
          </div>
        </div>

        {/* Desktop-only social icons */}
        <div className="nav-right">
          <GitHubButton />
          <LinkedInButton />
        </div>
      </div>
    </nav>
  );
}
