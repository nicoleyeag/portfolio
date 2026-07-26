import React, { useEffect } from "react";
import { setFaviconColor } from "../favicon";

export default function About() {
  useEffect(() => {
      setFaviconColor("#FB6640"); // Set the favicon color to match your theme
    }, []);

  return (
    <main className="about">
        <section className = "about">
            <div className = "about">
                <h1><span className="highlight">About Me 🌟</span></h1>
                <img
                  src="/assets/Yeager Sisters Test Shoot - 20210915_19_50_34-2L2A8892.jpg"
                  alt="Nicole Yeager, front-end software engineer"
                  className="about-photo"
                />
                 <p>
                I’m a <span className="bold">front-end software engineer</span> specializing in<span className="bold"> React</span> who loves building
                <span className="bold"> clean, intuitive UI</span>that feels effortless to use. With experience across 
                <span className="bold"> UX design</span> and <span className="bold">QA testing</span>,I bring a 
                detail-oriented, user-first approach to every feature I ship.
                </p>

                <h2><span className="highlight">What I Work With</span></h2>
                <p><span className="bold">Front End & UX</span></p>
                <p>React · JavaScript · HTML · CSS · Responsive Design · Accessibility · Figma</p>
                <p><span className="bold">Engineering & QA</span></p>
                <p>Python · Flask · SQL · Git · GitHub · Selenium · Manual & Automated Testing</p>

                <h2><span className="highlight">My Journey</span></h2>
                <p>
                I started my software engineering journey as a 
                self-taught developer, fueled by curiosity and a love for tech. Over 
                the years, I’ve worked on <span className="bold">full-stack applications</span>, <span className="bold">UX/UI design</span>, and 
                <span className="bold"> QA automation</span>, constantly pushing myself to learn, build, and 
                refine. 
                </p>
                <p>
                Right now, I’m focused on building polished front-end projects, 
                sharing consistent work on GitHub, and connecting with teams that 
                care about thoughtful UI.
                </p>
                <h2><span className="highlight">Outside of Tech</span></h2>
                <p>
                Outside of tech, I’m always creating — baking macarons, painting, 
                and exploring the outdoors through swimming, biking, and paddleboarding. 
                That same curiosity and creativity shows up in how I approach design and development.
            </p>
            <p>
              Creativity and curiosity don’t stop at the screen—and they’re a big part of how I approach my work.
            </p>
            <h2><span className="highlight">Training and Certifications</span></h2>
            <ul>
              <li><span className="bold">Hackbright Academy</span> - Software Engineering Fellowship</li>
              <li><span className="bold">Designlab</span> - UX/UI Design Fellowship</li>
            </ul>
            <h2><span className="highlight">Let’s Connect!</span></h2>
            <p>
              I’m currently open to front-end, UX-focused, and QA-related roles.
            </p>
            <p>
              If you’d like to collaborate, chat about a project, or learn more about my work:
            </p>
            <ul className="connect-links">
              <li>
                <a href="/projects">View my projects</a>
              </li>
              <li>
                <a
                  href="https://github.com/nicoleyeag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out my GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nicoleyeager-thenydesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nyeager95@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send me an email
                </a>
              </li>
              <li>
                <a
                  href="/assets/masterResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download my CV
                </a>
              </li>
            </ul>

            
            
            </div>
        </section>
    </main>
  )

  
}
