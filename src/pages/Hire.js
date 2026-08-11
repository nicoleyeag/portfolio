import React, { useEffect } from "react";
import DownloadCV from "../components/DownloadCV";
import { setFaviconColor } from "../favicon";

const EMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=nyeager95@gmail.com";

export default function Hire() {
  useEffect(() => {
    setFaviconColor("#49CC5C"); // Set the favicon color to match your theme
  }, []);

  const openEmailCompose = (event) => {
    event.preventDefault();
    const composeWindow = window.open(
      EMAIL_COMPOSE_URL,
      "_blank",
      "noopener,noreferrer"
    );
    if (composeWindow) {
      composeWindow.opener = null;
    }
  };

  return (
    <div className="hire">
      <h1>
        <span className="highlight">
          Let’s Build Something Awesome Together ✨
        </span>
      </h1>
      <p>
        I’m a front-end engineer with a background in UX design and
        quality-focused development. I build responsive web and mobile
        experiences from interface design through implementation, testing, and
        refinement.
      </p>
      <p>
        I’m especially interested in teams where thoughtful product design and
        strong front-end engineering go hand in hand.
      </p>

      <section
        className="hire-capabilities-section"
        aria-labelledby="hire-capabilities-heading"
      >
        <h2 id="hire-capabilities-heading">
          <span className="highlight">What I Bring</span>
        </h2>
        <div className="hire-capabilities" role="list">
          <article className="hire-capability-card" role="listitem">
            <h3 className="hire-capability-title">Front-End Engineering</h3>
            <p className="hire-capability-stack">
              React · React Native · TypeScript · JavaScript
            </p>
            <p className="hire-capability-description">
              Responsive interfaces, reusable components, and API-driven
              experiences.
            </p>
          </article>

          <article className="hire-capability-card" role="listitem">
            <h3 className="hire-capability-title">UX + Product</h3>
            <p className="hire-capability-stack">
              Figma · Interaction Design · Prototyping
            </p>
            <p className="hire-capability-description">
              Turning product ideas and designs into intuitive interfaces.
            </p>
          </article>

          <article className="hire-capability-card" role="listitem">
            <h3 className="hire-capability-title">Quality + Testing</h3>
            <p className="hire-capability-stack">
              Jest · QA · Debugging
            </p>
            <p className="hire-capability-description">
              Testing workflows, catching edge cases, and refining experiences
              before release.
            </p>
          </article>
        </div>
      </section>

      <section className="hire-cta" aria-labelledby="hire-cta-heading">
        <h2 id="hire-cta-heading">
          <span className="highlight">Have a project or role in mind?</span>
        </h2>
        <p>
          I’m open to front-end engineering, design engineering, and UX-focused
          product opportunities. If my work feels like a fit for your team, I’d
          love to hear from you.
        </p>
        <div className="hire-cta-actions">
          <a
            className="hero-cta hero-cta--primary"
            href={EMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openEmailCompose}
          >
            Email Me
          </a>
          <a
            className="hero-cta hero-cta--secondary"
            href="https://www.linkedin.com/in/nicoleyeager-thenydesign/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <DownloadCV />
        </div>
      </section>
    </div>
  );
}
