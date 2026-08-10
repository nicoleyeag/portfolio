import React from "react";

const STEPS = [
  {
    title: "Design",
    description: "Understand the problem and prototype the experience.",
  },
  {
    title: "Build",
    description: "Develop reusable interfaces and integrate data and APIs.",
  },
  {
    title: "Test",
    description: "Validate workflows and automate critical tests.",
  },
  {
    title: "Refine",
    description: "Debug edge cases and improve performance and UX.",
  },
];

export default function HowIBuild() {
  return (
    <section className="how-i-build" aria-labelledby="how-i-build-heading">
      <div className="how-i-build-inner">
        <h2 id="how-i-build-heading" className="how-i-build-heading">
          How I Build
        </h2>

        <ol className="how-i-build-steps">
          {STEPS.map((step, index) => (
            <li key={step.title} className="how-i-build-step-item">
              <article className="how-i-build-step">
                <span className="how-i-build-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="how-i-build-step-title">{step.title}</h3>
                <p className="how-i-build-step-description">{step.description}</p>
              </article>

              {index < STEPS.length - 1 && (
                <span className="how-i-build-connector" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
