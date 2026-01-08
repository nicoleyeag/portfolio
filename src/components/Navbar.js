import React from "react";
import "../css/style.css";
import StatefulButton from "./StatefulButton";
import GitHubButton from "./GitHubButton";
import LinkedInButton from "./LinkedInButton";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
      <StatefulButton label="home" to="/" sparkleColor="red" />
      <StatefulButton label="about me" to="/about" sparkleColor="orange" />
      <StatefulButton label="projects" to="/projects" sparkleColor="yellow" />
      <StatefulButton label="hire me!" to="/hire" sparkleColor="green" />
      </div>

      <div className="nav-right">
      <GitHubButton />
      <LinkedInButton />
      </div>
    </nav>
  );
}
