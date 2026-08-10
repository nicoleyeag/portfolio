import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SkillCard from "../components/SkillCard";
import DownloadCV from "../components/DownloadCV";
import FeaturedWork from "../components/FeaturedWork";
import HowIBuild from "../components/HowIBuild";
import { setFaviconColor } from "../favicon";

export default function Home() {
  useEffect(() => {
    setFaviconColor("#F82553"); // Set the favicon color to match your theme
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="heroLeft">
          <h1>
            👋 hi I’m <span className="highlight">Nicole Yeager</span>
          </h1>

          <p>
            I’m a <span className="highlight">front-end engineer</span> building
            thoughtful web and mobile products with React, React Native, and
            TypeScript — combining engineering, UX, and testing to create
            interfaces that work as well as they look.
          </p>

          <p>
            I take products from design through implementation, testing, and
            refinement, with experience in API integration, application
            architecture, automated testing, and production development.
          </p>

          <div className="cv-button-wrapper">
            <Link to="/projects" className="hero-cta hero-cta--primary">
              View My Work
            </Link>
            <DownloadCV label="Download CV" />
          </div>
        </div>

        <div className="heroRight">
          <img
            src="/assets/Yeager Sisters Test Shoot - 20210915_19_47_58-2L2A8724-1000.jpg"
            alt="Nicole Yeager"
            />
        </div>
      </section>

      <FeaturedWork />

      <HowIBuild />

      <section className="skills" aria-label="Capabilities">
        <SkillCard
          title="Front-End & Mobile"
          skills={[
            "React",
            "React Native",
            "TypeScript",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "Responsive UI",
            "Expo",
          ]}
        />

        <SkillCard
          title="UX & Product Design"
          skills={[
            "Figma",
            "Interaction Design",
            "Prototyping",
            "User Flows",
            "Accessibility",
            "Design Systems",
            "Usability Testing",
          ]}
        />

        <SkillCard
          title="Testing & Quality"
          skills={[
            "Jest",
            "Unit Testing",
            "Workflow Validation",
            "Debugging",
            "QA",
            "Performance Optimization",
            "Accessibility Testing",
          ]}
        />

        <SkillCard
          title="APIs & Architecture"
          skills={[
            "REST APIs",
            "API Integration",
            "Caching",
            "Modular Services",
            "Reusable Components",
            "PostgreSQL",
            "SQLite",
          ]}
        />
      </section>
    </div>
  );
}
