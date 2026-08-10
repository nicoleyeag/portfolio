import React from "react";
import { Link } from "react-router-dom";
import { getProjectBySlug, getProjectPath } from "../data/projects";

const FEATURED_SLUG = "mtg-collection-manager";

const FEATURED_CONTENT = {
  title: "Magic: The Gathering Collection Manager",
  label: "Cross-Platform Mobile Application",
  description:
    "Designed and built a React Native application for scanning and recognizing trading cards, managing collections, building decks, and supporting intelligent search and automation.",
  techTags: ["React Native", "TypeScript", "Expo", "REST APIs", "Jest"],
  highlights: [
    {
      title: "OCR Recognition",
      body: "Built a multi-stage recognition workflow with matching, fallback search, confidence handling, and manual correction.",
    },
    {
      title: "Application Architecture",
      body: "Designed modular services, caching strategies, reusable components, and local-first collection workflows.",
    },
    {
      title: "Quality & Testing",
      body: "Built automated Jest coverage for recognition, caching, and core application workflows.",
    },
  ],
};

export default function FeaturedWork() {
  const project = getProjectBySlug(FEATURED_SLUG);

  if (!project) {
    return null;
  }

  const projectPath = getProjectPath(project.slug);
  const imageSrc = project.cardHero?.src ?? project.heroImage;

  return (
    <section className="featured-work" aria-labelledby="featured-work-heading">
      <div className="featured-work-inner">
        <h2 id="featured-work-heading" className="featured-work-heading">
          Featured Work
        </h2>

        <article className="featured-work-card card">
          <Link
            to={projectPath}
            className="featured-work-media"
            aria-label={`View ${FEATURED_CONTENT.title} case study`}
          >
            <div className="featured-work-media-frame">
              <img src={imageSrc} alt="" />
            </div>
          </Link>

          <div className="featured-work-body">
            <p className="featured-work-label">{FEATURED_CONTENT.label}</p>
            <h3 className="featured-work-title">
              <Link to={projectPath}>{FEATURED_CONTENT.title}</Link>
            </h3>

            <p className="featured-work-description">
              {FEATURED_CONTENT.description}
            </p>

            <ul className="featured-work-tags" aria-label="Technologies used">
              {FEATURED_CONTENT.techTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <ul className="featured-work-highlights">
              {FEATURED_CONTENT.highlights.map((highlight) => (
                <li key={highlight.title} className="featured-work-highlight">
                  <h4>{highlight.title}</h4>
                  <p>{highlight.body}</p>
                </li>
              ))}
            </ul>

            <Link to={projectPath} className="featured-work-cta">
              View Case Study
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
