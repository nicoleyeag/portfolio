import React, { useEffect } from "react";
import SkillCard from "../components/SkillCard";
import DownloadCV from "../components/DownloadCV";
import { setFaviconColor } from "../favicon";

export default function Home() {
  useEffect(() => {
    setFaviconColor("#F82553"); // Set the favicon color to match your theme
  }, []);

  return (
    <main className="home">
      <section className="hero">
        <div className="heroLeft">
          <h1>
            👋 hi I’m <span className="highlight">Nicole Yeager</span>
          </h1>

            <p>
            I’m a <span className="highlight">front-end software engineer</span> with a
            passion for building bright, intuitive, and engaging{" "}
            <span className="highlight">user experiences</span>. I love crafting clean,
            accessible designs that make technology feel effortless. Whether it’s coding
            sleek interfaces, optimizing performance, or experimenting with the latest web
            technologies, I’m always eager to{" "}
            <span className="highlight">learn and create</span>.
            </p>

        {/* button */}
        <div className="cv-button-wrapper">
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

    <section className="skills">
        <SkillCard
            title="Front-End Development"
            skills={[
                "React",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
                "Responsive Design",
                "CSS Grid & Flexbox",
                "Bootstrap",
                "Jinja Templating",
                "UX-Focused UI Development",
            ]}
            />

            <SkillCard
            title="Back-End Development"
            skills={[
                "Python",
                "Flask",
                "RESTful APIs",
                "PostgreSQL",
                "SQL & Relational Data Modeling",
                "User Authentication (Bcrypt)",
                "API Integration",
                "Server-Side Logic"
            ]}
            />
        </section>
    </main>
  );
}
