import React, { useState } from "react";
import "../css/style.css";
import StatefulButton from "./StatefulButton";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Hamburger (mobile only via CSS) */}
        <button
          type="button"
          className="hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav links + mobile dropdown */}
        <div className={`nav-left ${menuOpen ? "is-open" : ""}`}>
          <StatefulButton
            label="home"
            to="/"
            sparkleColor="red"
            onClick={() => setMenuOpen(false)}
          />
          <StatefulButton
            label="about me"
            to="/about"
            sparkleColor="orange"
            onClick={() => setMenuOpen(false)}
          />
          <StatefulButton
            label="projects"
            to="/projects"
            sparkleColor="yellow"
            onClick={() => setMenuOpen(false)}
          />
          <StatefulButton
            label="hire me!"
            to="/hire"
            sparkleColor="green"
            onClick={() => setMenuOpen(false)}
          />

          {/* Mobile-only social icons */}
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
