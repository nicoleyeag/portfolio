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
          <StatefulButton label="home" to="/" sparkleColor="red" />
          <StatefulButton label="about me" to="/about" sparkleColor="orange" />
          <StatefulButton label="projects" to="/projects" sparkleColor="yellow" />
          <StatefulButton label="hire me!" to="/hire" sparkleColor="green" />

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
