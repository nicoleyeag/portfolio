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
                I’m a <span className="bold">front-end engineer</span> and <span className="bold">UX designer</span> who builds thoughtful web and mobile products from concept through implementation, testing, and refinement. My background in UX shapes how I approach engineering: I care about architecture and maintainability, but also about how a product feels to the person using it.
                </p>
                <p>
                I work primarily with <span className="bold">React</span>, <span className="bold">React Native</span>, <span className="bold">TypeScript</span>, and <span className="bold">JavaScript</span>, with experience across API integration, automated testing, responsive design, and production development.
                </p>

                <h2><span className="highlight">What I Work With</span></h2>
                <p><span className="bold">Engineering</span></p>
                <p>React · React Native · TypeScript · JavaScript · REST APIs · Jest</p>
                <p><span className="bold">Design & Product</span></p>
                <p>Figma · Prototyping · Interaction Design · Accessibility · User Flows</p>
                <p><span className="bold">Quality & Workflow</span></p>
                <p>Testing · Debugging · QA · Git/GitHub · AI-Assisted Development</p>

                <h2><span className="highlight">My Journey</span></h2>
                <ol className="about-journey" aria-label="Background progression">
                  <li className="about-journey__stage">
                    <p className="about-journey__title">UX Design</p>
                    <p className="about-journey__meta">Designlab · 2022</p>
                  </li>
                  <li className="about-journey__stage">
                    <p className="about-journey__title">Software Engineering</p>
                    <p className="about-journey__meta">Hackbright Academy · 2024</p>
                  </li>
                  <li className="about-journey__stage">
                    <p className="about-journey__title">Front-End &amp; Product Engineering</p>
                    <p className="about-journey__meta">Web · Mobile · UX · Testing · Production</p>
                  </li>
                </ol>
                <p className="about-journey__summary">
                I started in UX design wanting to understand how digital products should work, then moved into software engineering to learn how to build them. Today, I bring those disciplines together—designing interfaces, building web and mobile applications, integrating APIs, testing complex workflows, and shipping production front-end work.
                </p>
                <h2><span className="highlight">Outside of Tech</span></h2>
                <p>
                Outside of tech, I’m usually creating something—baking macarons, painting, or getting outside to swim, bike, and paddleboard. Creativity has always been a big part of who I am, and that same curiosity naturally finds its way into how I design and build products.
                </p>
            <div className="about-connect">
              <h2><span className="highlight">Let’s Work Together ✨</span></h2>
              <p>
                I’m interested in front-end, design engineering, and UX-focused product work where thoughtful design and strong implementation go hand in hand.
              </p>
              <ul className="connect-links">
                <li>
                  <a href="/projects">View Projects</a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=nyeager95@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email Me
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nicoleyeager-thenydesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            </div>
        </section>
    </main>
  )

  
}
