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
                I’m a <span className="bold">front-end software engineer</span> with a passion for building sleek,
                engaging, and <span className="bold">intuitive digital experiences</span>. My background spans 
                <span className="bold">engineering</span>, accounting, teaching, and <span className="bold">design</span>, giving me a unique 
                mix  of analytical problem-solving and creative thinking that I 
                bring into my work. 
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
                Right now, I’m focused on leveling up my skills, sharing my 
                work on <span className="bold">GitHub</span>, and expanding my professional network.
                </p>
                <h2><span className="highlight">Outside of Tech</span></h2>
                <p>
                Outside of 
                tech, I’m always <span className="bold">learning</span> and <span className="bold">creating</span>—whether it’s baking macarons, 
                designing, painting, or picking up new skills just for fun. I also 
                spend a lot of time swimming, biking, paddleboarding, and exploring 
                the outdoors.
            </p>
            <p>
              Creativity and curiosity don’t stop at the screen—and they’re a big part of how I approach my work.
            </p>
            <h2><span className="highlight">Training and Certifications</span></h2>
            <ul>
              <li>Software Engineering Fellowship — <span className="bold">Hackbright Academy</span></li>
              <li>UX/UI Design Fellowship — <span className="bold">Designlab</span></li>
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
                <a href="/Nicole-Yeager-CV.pdf" download>
                  Download my CV
                </a>
              </li>
            </ul>

            
            
            </div>
        </section>
    </main>
  )

  
}
