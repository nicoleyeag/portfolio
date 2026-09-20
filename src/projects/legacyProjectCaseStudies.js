import React from "react";

// Temporary home for the existing long-form project case study markup.
// This keeps the content recoverable while `/projects` becomes the overview page.

export function MtgCollectionManagerCaseStudy() {
  return (
    <div className="mtg-case">
      <header className="case-study-header">
        <div className="case-study-header-meta">
          <p className="case-study-header-type">
            Cross-Platform Mobile Engineering
          </p>
          <span className="case-study-header-status">Active Development</span>
        </div>

        <h1 className="case-study-header-title">MTG Collection Manager</h1>

        <p className="case-study-header-description">
          A React Native mobile application for scanning Magic: The Gathering
          cards, managing collections, building decks, and resolving card
          printings through an OCR-powered recognition pipeline.
        </p>

        <p className="case-study-header-role">
          <span className="case-study-header-role-label">My Role</span>
          <span className="case-study-header-role-values">
            Mobile Engineer · Interface Designer · API Integration · Testing
          </span>
        </p>

        <p className="case-study-header-role case-study-header-role--last">
          <span className="case-study-header-role-label">Technologies</span>
          <span className="case-study-header-role-values">
            React Native · TypeScript · Expo · SQLite · Scryfall API · Jest
          </span>
        </p>

        <div className="case-study-header-visual">
          <div className="mtg-hero">
            <figure className="mtg-hero-phone mtg-hero-phone--primary">
              <img
                src="/mtgPhotos/myCollectionPage.jpeg"
                alt="MTG Collection App — searchable card collection grid"
              />
              <figcaption className="media-caption">
                Collection grid — the core cataloging experience.
              </figcaption>
            </figure>
            <figure className="mtg-hero-phone mtg-hero-phone--accent">
              <img
                src="/mtgPhotos/homePage.jpeg"
                alt="MTG Collection App — home screen entry point"
              />
              <figcaption className="media-caption">
                App home — entry point to collection, decks, and scanner.
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      <section id="overview" className="case-section">
        <h2>Overview</h2>
        <p>
          MTG Collection Manager is a local-first React Native application for
          scanning, organizing, and managing Magic: The Gathering cards. The
          application combines collection management, deck building, deck
          importing, OCR-powered card recognition, and live Scryfall data
          within a mobile-first interface.
        </p>
        <p>
          What began as a collection-management tool evolved into a broader
          engineering challenge: reliably identifying physical cards, resolving
          specific printings, managing persistent local data, and keeping
          complex card and deck workflows responsive and understandable.
        </p>

        <h3>Tech Stack</h3>
        <ul>
          <li>
            <span className="bold">Mobile:</span> React Native, Expo, TypeScript
          </li>
          <li>
            <span className="bold">Navigation:</span> Expo Router
          </li>
          <li>
            <span className="bold">Persistence:</span> SQLite / expo-sqlite
          </li>
          <li>
            <span className="bold">API:</span> Scryfall REST API
          </li>
          <li>
            <span className="bold">Scanner:</span> expo-camera, Vision Camera +
            ML Kit
          </li>
          <li>
            <span className="bold">Testing:</span> Jest — 69 suites / 656 tests
            passing
          </li>
        </ul>
      </section>

      <section id="collection-management" className="case-section">
        <h2>Collection Management</h2>
        <p>
          Collection management is built around local-first persistence,
          allowing users to maintain a searchable library of owned Magic cards
          directly on-device. Collection data is stored in SQLite and surfaced
          through reusable interfaces for browsing, searching, filtering, and
          managing cards.
        </p>
        <ul className="mtg-callouts">
          <li>Local SQLite persistence</li>
          <li>Searchable collection grid</li>
          <li>Sorting and filtering</li>
          <li>Color identity filtering</li>
          <li>Card quantity and collection tracking</li>
          <li>Reusable card UI shared across collection and deck workflows</li>
        </ul>
        <div className="mtg-collection-gallery">
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/myCollectionPage.jpeg"
              alt="Searchable collection grid with filters, sorting, and quantity tracking"
            />
            <figcaption className="media-caption">
              Searchable collection grid with sorting, filtering, and quantity
              tracking.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="scanner-engineering" className="case-section">
        <h2>Scanner Engineering</h2>

        <h3>The Challenge</h3>
        <p>
          Reliable OCR becomes difficult with physical trading cards because of
          glare, card orientation, artwork, typography, borders, camera
          framing, and visually similar printings. Correctly identifying the
          card name is only part of the problem—the scanner also needs to
          resolve the appropriate card or printing without making the workflow
          frustrating when recognition is uncertain.
        </p>

        <h3>Recognition Approach</h3>
        <p>
          The scanner uses a multi-stage recognition pipeline rather than
          relying on a single OCR result. Camera input is processed for OCR,
          candidate cards are resolved against Scryfall data, image/art
          information can be used to distinguish candidates, and confidence
          logic determines whether a result can be surfaced directly or should
          be reviewed by the user.
        </p>

        <ol className="mtg-pipeline" aria-label="Scanner recognition pipeline">
          <li>
            <span>Camera / Live Scan</span>
          </li>
          <li>
            <span>OCR</span>
          </li>
          <li>
            <span>Candidate Generation</span>
          </li>
          <li>
            <span>Scryfall Resolution</span>
          </li>
          <li>
            <span>Image / Art Comparison</span>
          </li>
          <li>
            <span>Confidence Matching</span>
          </li>
          <li>
            <span>Review &amp; Correction</span>
          </li>
          <li>
            <span>Save to Collection</span>
          </li>
        </ol>

        <h3>Iteration &amp; Debugging</h3>
        <p>
          Scanner development has required continuous testing against real
          cards and real camera conditions. Recognition failures, false
          matches, crop behavior, caching, and performance have been
          iteratively investigated and refined rather than hidden behind
          automation. Android currently has the more advanced live OCR path,
          while printing and art-matching accuracy continue to be improved.
        </p>

        <div className="mtg-scanner-gallery">
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/scanCardPage.jpeg"
              alt="Scanner capture screen framing a physical Magic card"
            />
            <figcaption className="media-caption">
              <span className="bold">1. Capture</span> — live camera scan of a
              physical card
            </figcaption>
          </figure>
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/scanCardResults.jpeg"
              alt="Scanner OCR result with ranked Scryfall match candidates"
            />
            <figcaption className="media-caption">
              <span className="bold">2. Review</span> — OCR result and ranked
              Scryfall candidates
            </figcaption>
          </figure>
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/scanCardReview.jpeg"
              alt="Scanner confirm screen for resolving a Scryfall match"
            />
            <figcaption className="media-caption">
              <span className="bold">3. Confirm</span> — resolve the Scryfall
              match or correct it before saving
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="deck-management-import" className="case-section">
        <h2>Deck Management &amp; Import</h2>
        <p>
          Deck workflows use the same card, service, and repository
          architecture as collection management. Users can create and manage
          decks, add and remove cards, inspect deck composition, and import
          Archidekt-style card lists into a deck and/or their collection.
        </p>
        <ul className="mtg-callouts">
          <li>Create and manage decks</li>
          <li>Add and remove cards</li>
          <li>Deck card browsing</li>
          <li>Deck overview and statistics</li>
          <li>Text-based deck importing</li>
          <li>Shared card data and UI components</li>
        </ul>

        <div className="mtg-deck-gallery">
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/deckHomePage.jpeg"
              alt="Deck list home screen"
            />
            <figcaption className="media-caption">
              Deck list with create and manage actions.
            </figcaption>
          </figure>
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/deckPage.jpeg"
              alt="Individual deck detail screen"
            />
            <figcaption className="media-caption">
              Deck detail view with card-level breakdown.
            </figcaption>
          </figure>
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/deckCards.jpeg"
              alt="Deck cards list view"
            />
            <figcaption className="media-caption">
              Scrollable card list within a deck.
            </figcaption>
          </figure>
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/deckOverview.jpeg"
              alt="Deck statistics overview"
            />
            <figcaption className="media-caption">
              Deck statistics and composition overview.
            </figcaption>
          </figure>
          <figure className="mtg-phone-frame mtg-phone-frame--planned">
            <img
              src="/mtgPhotos/deckAI.jpeg"
              alt="Planned AI-assisted Deck Coach preview"
            />
            <figcaption className="media-caption">
              <span className="bold">Planned:</span> AI-assisted Deck Coach
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="architecture-testing" className="case-section">
        <h2>Architecture &amp; Testing</h2>

        <h3>Local-First Architecture</h3>
        <p>
          The application separates screens and reusable UI components from
          services, repositories, recognition logic, and persistence. SQLite
          provides on-device collection and deck storage, while Scryfall
          supplies external card and printing data. Keeping these
          responsibilities separated makes scanner, collection, and deck
          features easier to test and evolve independently.
        </p>

        <h3>Testing &amp; Reliability</h3>
        <div className="mtg-stats" aria-label="Testing status">
          <div className="mtg-stat">
            <p className="mtg-stat-value">69</p>
            <p className="mtg-stat-label">test suites</p>
          </div>
          <div className="mtg-stat">
            <p className="mtg-stat-value">656</p>
            <p className="mtg-stat-label">tests passing</p>
          </div>
          <div className="mtg-stat">
            <p className="mtg-stat-value">Clean</p>
            <p className="mtg-stat-label">TypeScript</p>
          </div>
        </div>
        <p>
          Automated tests cover recognition behavior, caching, scanner
          workflows, data handling, repositories, and collection/deck behavior.
          TypeScript validation is also kept clean with{" "}
          <code>tsc --noEmit</code>.
        </p>
      </section>

      <section id="engineering-decisions" className="case-section">
        <h2>Engineering Decisions &amp; Tradeoffs</h2>
        <ul className="mtg-decision-list">
          <li>
            <span className="bold">Recognition accuracy vs. automation</span>
            The scanner should solve as much as possible automatically without
            silently saving an incorrect card. Uncertain matches are surfaced
            for review.
          </li>
          <li>
            <span className="bold">Confidence vs. speed</span>
            Additional image comparison and candidate checking can improve
            recognition accuracy but increase processing time.
          </li>
          <li>
            <span className="bold">
              Card copy geometry vs. real-world camera variance
            </span>
            Consistent card regions improve matching, but physical cards
            introduce glare, framing, rotation, and perspective differences.
          </li>
          <li>
            <span className="bold">Local-first persistence</span>
            SQLite keeps collections and decks available on-device and
            separates persistent user data from external Scryfall lookups.
          </li>
          <li>
            <span className="bold">Debug visibility vs. production simplicity</span>
            Detailed scanner diagnostics have been valuable during development
            for understanding why recognition succeeds or fails.
          </li>
        </ul>
      </section>

      <section id="whats-next" className="case-section">
        <h2>What’s Next</h2>
        <div className="mtg-next-grid">
          <div className="mtg-next-group">
            <h3>Recognition</h3>
            <ul>
              <li>Improve art/printing matching reliability</li>
              <li>Improve adaptive crop handling</li>
              <li>Continue scanner performance improvements</li>
            </ul>
          </div>
          <div className="mtg-next-group">
            <h3>Persistence &amp; UX</h3>
            <ul>
              <li>Continue refining collection quantity/delete behavior</li>
              <li>Improve offline/local-first behavior</li>
            </ul>
          </div>
          <div className="mtg-next-group">
            <h3>Product Intelligence</h3>
            <ul>
              <li>AI-assisted deck coaching</li>
              <li>Future collection/deck intelligence</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="outcome" className="case-section">
        <h2>Outcome</h2>
        <p>
          MTG Collection Manager has evolved into a production-scale personal
          engineering project spanning mobile UI, local persistence, REST API
          integration, OCR/computer-vision workflows, caching, automated
          testing, and UX design. Building it has required balancing
          recognition accuracy, performance, maintainability, and user control
          while continuously iterating against real card-scanning behavior.
        </p>
      </section>
    </div>
  );
}

export function OnMyWayCaseStudy() {
  return (
    <div className="omw-case">
      <header className="case-study-header">
        <div className="case-study-header-meta">
          <p className="case-study-header-type">Full-Stack Web Application</p>
        </div>

        <h1 className="case-study-header-title">On My Way</h1>

        <p className="case-study-header-description">
          A full-stack travel planning application that brings trip
          organization, excursion discovery, authentication, and itinerary
          management into one connected experience.
        </p>

        <p className="case-study-header-role">
          <span className="case-study-header-role-label">My Role</span>
          <span className="case-study-header-role-values">
            Full-Stack Development · Front-End Development · UX/UI Design ·
            Database Design
          </span>
        </p>

        <p className="case-study-header-role case-study-header-role--last">
          <span className="case-study-header-role-label">Technologies</span>
          <span className="case-study-header-role-values">
            React · JavaScript · Flask · PostgreSQL · SQLAlchemy · TripAdvisor
            API
          </span>
        </p>

        <div className="case-study-header-visual">
          <img
            className="case-study-header-hero-image"
            src="/omwPhotos/OMW-exploreexcursions.png"
            alt="On My Way excursion search results page"
          />
        </div>
      </header>

      <section id="overview" className="case-section">
        <h2>Overview</h2>
        <p>
          Planning a trip often means switching between travel sites, saved
          links, notes, and itinerary tools. I built On My Way to bring those
          workflows together in one application where users can create trips,
          discover excursions, save activities, and manage their itinerary.
        </p>
        <p>
          I developed the application across the stack, building the React
          interface, Flask server, PostgreSQL data model, authentication flows,
          and external travel API integration.
        </p>
      </section>

      <section id="problem" className="case-section">
        <h2>Problem</h2>
        <p>
          Planning trips often requires juggling multiple tools—notes,
          calendars, booking sites, and spreadsheets—making it difficult to keep
          everything organized in one place.
        </p>
        <h3>Goal:</h3>
        <p>
          Create a centralized platform where users can plan trips end-to-end,
          discover excursions, and manage all trip details in a single,
          intuitive interface.
        </p>
      </section>

      <section id="solution" className="case-section">
        <h2>Solution</h2>
        <p>
          I designed and built a full-stack web application that allows users
          to:
        </p>
        <ul>
          <li>Create and edit trips with custom details</li>
          <li>Search for excursions using a third-party API</li>
          <li>Save excursions to specific trips with notes and dates</li>
          <li>View and manage all trips from a personalized profile</li>
        </ul>
        <p>
          The application emphasizes clarity, reusability, and scalability,
          with thoughtful frontend components and a structured backend.
        </p>
      </section>

      <section id="tech-stack" className="case-section">
        <h2>Tech Stack</h2>
        <ul>
          <li><span className="bold">Frontend:</span> React, JavaScript, HTML, CSS, Bootstrap</li>
          <li><span className="bold">Backend:</span> Flask, SQLAlchemy, PostgreSQL</li>
          <li><span className="bold">APIs:</span> TripAdvisor API</li>
          <li><span className="bold">Authentication:</span> bcrypt password hashing</li>
          <li><span className="bold">Version Control:</span> Git & GitHub</li>
        </ul>
      </section>

      <section id="authentication-user-state" className="case-section">
        <h2>Authentication &amp; User State</h2>
        <p>
          Account creation and login associate trip data with individual users
          so each person only sees and manages their own itineraries.
          Authentication is handled through Flask backend endpoints, while the
          React frontend provides the login, registration, and error flows that
          guide users through those interactions.
        </p>
        <p>
          Passwords are hashed with bcrypt before storage, matching the
          backend implementation shown below.
        </p>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/OMW-signin.png"
              alt="react sign in card"
            />
            <figcaption className="media-caption">
              React sign-in and sign-up UI connected to Flask authentication endpoints.
            </figcaption>
            <img
              src="/omwPhotos/Screenshot 2026-01-08 145109.png"
              alt="bcrypt code"
            />
            <figcaption className="media-caption">
              Passwords are securely hashed using bcrypt before being stored in the database.
            </figcaption>
          </div>
        </div>
      </section>

      <section id="data-model-relationships" className="case-section">
        <h2>Data Model &amp; Relationships</h2>
        <p>
          The application persists user, trip, and excursion data in PostgreSQL
          through SQLAlchemy models. Users own trips, and each trip can hold
          saved excursions with notes and scheduled dates so itinerary details
          stay attached to a specific trip rather than floating as standalone
          records.
        </p>
        <p>
          That relational structure supports the core workflow: create an
          account, build a trip, discover activities, and save selected
          excursions into the trip for later review and editing.
        </p>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/Copy of Travel App data model.png"
              alt="database ERD"
            />
            <figcaption className="media-caption">
              Database Entity-Relationship Diagram (ERD) for the application.
            </figcaption>
          </div>
        </div>
      </section>

      <section id="trip-discovery-management" className="case-section">
        <h2>Trip Discovery &amp; Management</h2>
        <p>
          The core application workflow connects trip setup, external activity
          discovery, and itinerary management in one loop: users create and
          manage trips, search for excursions, retrieve travel data through the
          TripAdvisor API, save relevant activities to a trip, and return later
          to view or update that itinerary.
        </p>

        <h3>Trip Creation &amp; Editing</h3>
        <p>
          Users create trips with custom details and can revise those details
          over time. Each trip acts as the container for saved excursions,
          notes, and scheduled dates. Edit flows use React forms that send
          updates to Flask endpoints and refresh the UI after the database
          changes.
        </p>
        <div className="case-evidence-gallery">
          <figure>
            <img
              src="/omwPhotos/OMW-createtrip.png"
              alt="react create trip card"
            />
            <figcaption className="media-caption">
              React create trip UI connected to Flask endpoints.
            </figcaption>
          </figure>
          <figure>
            <img
              src="/omwPhotos/OMW-edittrip.png"
              alt="react edit trip card"
            />
            <figcaption className="media-caption">
              React edit trip UI for updating trip details after creation.
            </figcaption>
          </figure>
          <figure>
            <img
              src="/omwPhotos/OMW-viewtrip.png"
              alt="trip detail view"
            />
            <figcaption className="media-caption">
              Trip detail view with saved itinerary context.
            </figcaption>
          </figure>
        </div>

        <h3>Excursion Search &amp; TripAdvisor API</h3>
        <p>
          Excursion discovery depends on a backend TripAdvisor integration
          rather than hardcoded activity data. The Flask route handles a
          two-step request process: first resolving a user search into a
          TripAdvisor location ID, then fetching excursion details such as
          names, descriptions, and photos for that location.
        </p>
        <p>
          Those results are returned to the React client and rendered as
          reusable cards in a responsive grid, including an expansion state for
          longer descriptions.
        </p>
        <figure className="case-evidence-feature">
          <img
            src="/omwPhotos/Screenshot 2026-01-08 155809.png"
            alt="Backend route resolving user search queries into TripAdvisor location IDs"
          />
          <figcaption className="media-caption">
            Backend route resolving user search queries into TripAdvisor location IDs.
          </figcaption>
        </figure>
        <div className="case-evidence-gallery">
          <figure>
            <img
              src="/omwPhotos/OMW-exploreexcursions.png"
              alt="react explore excursions card"
            />
            <figcaption className="media-caption">
              Excursion search results grid rendered with reusable React cards.
            </figcaption>
          </figure>
          <figure>
            <img
              src="/omwPhotos/OMW-exploreexcursions2.png"
              alt="react explore excursions card expansion"
            />
            <figcaption className="media-caption">
              Excursion card expansion for reading the full description before saving.
            </figcaption>
          </figure>
        </div>

        <h3>Saving &amp; Reviewing Trips</h3>
        <p>
          After discovery, users can save relevant activities to a trip and
          revisit that itinerary from their profile. The profile dashboard
          consolidates created trips so users can return to trip summaries and
          continue managing their plans.
        </p>
        <figure className="case-evidence-feature">
          <img
            src="/omwPhotos/OMW-tripdash.png"
            alt="user profile trip dashboard"
          />
          <figcaption className="media-caption">
            Profile trip dashboard displaying created trips for later review and management.
          </figcaption>
        </figure>
      </section>

      <section id="ui-system-responsive-design" className="case-section">
        <h2>UI System &amp; Responsive Design</h2>
        <p>
          I created a consistent visual system for the application covering
          typography, color, reusable interface patterns, and responsive
          behavior. Drawing on my UX background, I treated the visual system
          and React frontend implementation as one concern—shared buttons,
          cards, and modal patterns carried the same design decisions into the
          working interface rather than leaving styling as a separate
          afterthought.
        </p>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/UI Kit (1).png"
              alt="ui kit"
            />
            <figcaption className="media-caption">
              UI kit showcasing reusable components and styles.
            </figcaption>
          </div>
        </div>
      </section>

      <section id="engineering-decisions-challenges" className="case-section">
        <h2>Engineering Decisions &amp; Challenges</h2>
        <ul>
          <li>
            <span className="bold">TripAdvisor lookup as a two-step backend flow:</span>{" "}
            search could not be treated as a single frontend call. I routed
            discovery through Flask so the server could resolve a location ID
            first, then request excursion details before returning data to
            React.
          </li>
          <li>
            <span className="bold">External search results vs owned itinerary data:</span>{" "}
            TripAdvisor results are useful for discovery, but trips need durable
            user-owned records. To handle this, selected activities are saved
            into the trip’s own excursion data with notes and scheduled dates
            rather than depending on a live search result as the itinerary
            source of truth.
          </li>
          <li>
            <span className="bold">User-scoped trip state:</span> trip planning
            only works if each itinerary belongs to an authenticated user. I
            chose Flask-backed account creation/login with bcrypt-hashed
            passwords so trip data could be associated with individual users and
            surfaced through React login, registration, and error flows.
          </li>
          <li>
            <span className="bold">Frontend forms coordinated with Flask mutations:</span>{" "}
            create, view, and edit flows repeatedly required keeping React UI
            state aligned with PostgreSQL updates. This required wiring trip and
            excursion forms to Flask endpoints that persist changes and then
            refresh the corresponding views.
          </li>
          <li>
            <span className="bold">Shared UI patterns across trip workflows:</span>{" "}
            create, explore, edit, and profile screens needed consistent
            behavior. I chose reusable React cards, modals, and a small visual
            system so the frontend implementation carried the same interaction
            patterns across those workflows.
          </li>
        </ul>
      </section>

      <section id="outcome" className="case-section">
        <h2>Outcome</h2>
        <p>
          On My Way became a complete full-stack travel-planning application
          connecting a React interface, Flask backend, PostgreSQL database,
          authentication, and external travel data in one cohesive user
          workflow.
        </p>
        <p>
          The project gave me experience owning both product design and
          implementation across the stack, and it became an important bridge
          between my UX background and the front-end engineering work I focus
          on today.
        </p>
      </section>

      <section id="demo" className="case-section">
        <h2>Demo</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/gZG9oJgQPjc?si=m2tFswJq4dYQZLF7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}

export function LivingLocalCaseStudy() {
  return (
    <div className="living-local-case">
      <header className="case-study-header">
        <div className="case-study-header-meta">
          <p className="case-study-header-type">
            UX / Product Design Case Study
          </p>
        </div>

        <h1 className="case-study-header-title">Living Local</h1>

        <p className="case-study-header-description">
          A location-based e-commerce concept designed to help shoppers
          discover and support nearby small businesses through a more
          intuitive local shopping experience.
        </p>

        <p className="case-study-header-role">
          <span className="case-study-header-role-label">My Role</span>
          <span className="case-study-header-role-values">
            UX/UI Design · Interaction Design · Wireframing · Prototyping
          </span>
        </p>

        <p className="case-study-header-role case-study-header-role--last">
          <span className="case-study-header-role-label">Tools</span>
          <span className="case-study-header-role-values">Figma</span>
        </p>

        <div className="case-study-header-visual">
          <img
            className="case-study-header-hero-image"
            src="/livingLocalPhotos/Group 2.png"
            alt="Living Local homepage and browsing experience"
          />
        </div>
      </header>

      <section id="overview" className="case-section">
        <h2>Overview</h2>
        <p>
          Living Local is a location-based e-commerce platform designed to
          help users discover and shop from nearby small businesses. The goal
          was to make supporting local shops as seamless as traditional online
          shopping—without requiring each business to build or maintain its
          own website. The product prioritizes clarity, trust, and ease of
          use, especially for first-time users.
        </p>
      </section>

      <section id="the-problem" className="case-section">
        <h2>The Problem</h2>
        <p>
          Shoppers who want to support local businesses often have to discover
          those businesses individually, move between separate websites or
          social profiles, and determine for themselves what products are
          available nearby. That friction makes local shopping less convenient
          than larger centralized e-commerce platforms.
        </p>
        <p>
          <span className="bold">Design challenge:</span> How might we make
          discovering and purchasing from local businesses feel as simple and
          familiar as shopping through a larger online marketplace?
        </p>
      </section>

      <section id="from-structure-to-interface" className="case-section">
        <h2>From Structure to Interface</h2>
        <p>
          I used low-fidelity wireframes to establish the core shopping flow
          before introducing visual styling. The early designs focused on
          homepage discovery, product browsing and details, and profile
          structure so I could validate the information hierarchy and
          navigation first.
        </p>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/livingLocalPhotos/homepageWireframe.PNG"
              alt="homepage wireframes"
            />
            <figcaption className="media-caption">
              Homepage wireframes
            </figcaption>
            <img
              src="/livingLocalPhotos/productsWrireframe.png"
              alt="product page wireframes"
            />
            <figcaption className="media-caption">
              Product page wireframes
            </figcaption>
            <img
              src="/livingLocalPhotos/profileWireframe.PNG"
              alt="profile page wireframes"
            />
            <figcaption className="media-caption">
              Profile page wireframes
            </figcaption>
          </div>
        </div>
        <ul>
          <li>
            The homepage structure established how users would begin discovery
            and enter browsing without an overloaded landing layout.
          </li>
          <li>
            Product-page wireframes defined how listing and detail views would
            carry a consistent browsing hierarchy into purchase consideration.
          </li>
          <li>
            The profile wireframe confirmed that account/profile context needed
            a clear place in the overall navigation, separate from shopping
            surfaces.
          </li>
        </ul>
      </section>

      <section id="design-direction" className="case-section">
        <h2>Design Direction</h2>
        <p>
          The design brings nearby businesses into one browsing experience that
          still feels like familiar e-commerce. Location-first discovery sits
          at the center of the product, while clear product layouts and a
          recognizable checkout path keep evaluation and purchasing
          straightforward. The overall approach balances local shopping
          personality with the interaction patterns people already trust in
          larger marketplaces.
        </p>
        <p>
          The decisions below show how that direction shows up across browsing,
          product detail, and checkout.
        </p>
      </section>

      <section id="key-design-decisions" className="case-section">
        <h2>Key Design Decisions</h2>

        <h3>Location-first browsing with consistent product layouts</h3>
        <p>
          When shopping spans many small businesses, discovery can feel
          fragmented and visually inconsistent. I designed browsing around
          proximity-first surfacing and standardized product cards so users
          could scan nearby inventory without relearning a different layout for
          every vendor.
        </p>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/livingLocalPhotos/products.png"
              alt="products page"
            />
            <figcaption className="media-caption">
              Browsing surfaces nearby businesses using consistent product layouts.
            </figcaption>
          </div>
        </div>

        <h3>Product details that support confident evaluation</h3>
        <p>
          Once a shopper opens an item, they need enough clarity to decide
          without losing trust in the seller behind it. I structured product
          pages around rich imagery, pricing clarity, reviews, and seller
          attribution so evaluation and local-business context sit together in
          the same view.
        </p>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/livingLocalPhotos/item page.png"
              alt="item page"
            />
            <figcaption className="media-caption">
              The product page supports confident purchasing through rich imagery, reviews, and seller transparency.
            </figcaption>
          </div>
        </div>

        <h3>Familiar multi-step checkout</h3>
        <p>
          Completing a purchase across local vendors only works if checkout
          feels recognizable and manageable. I used a multi-step shipping,
          payment, and review flow that mirrors common e-commerce patterns,
          breaking the process into focused steps instead of presenting all
          of the required information at once.
        </p>
        <div className="media-row">
          <div className="media-card">
            <div className="checkout-grid">
              <img
                src="/livingLocalPhotos/shipping info.png"
                alt="Shipping information step"
              />
              <img
                src="/livingLocalPhotos/payment info.png"
                alt="Payment information step"
              />
              <img
                src="/livingLocalPhotos/review.png"
                alt="Order review step"
              />
            </div>
            <figcaption className="media-caption">
              A multi-step checkout flow reduces cognitive load and mirrors familiar e-commerce patterns.
            </figcaption>
          </div>
        </div>
      </section>

      <section id="outcome" className="case-section">
        <h2>Outcome</h2>
        <p>
          Living Local resulted in a complete responsive e-commerce concept
          spanning early structure, interaction design, and high-fidelity
          interface work. The project strengthened the product-design
          foundation I now bring into front-end engineering—thinking about
          user flows, hierarchy, and interaction before treating
          implementation as the final goal.
        </p>
      </section>

      <section id="demo" className="case-section">
        <h2>Demo</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/Cm7OS1kXuPs?si=o2171YVgcGE_N-m0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}

export function LindiTilliCaseStudy() {
  return (
    <div className="lindi-tilli-case">
      <header className="case-study-header">
        <div className="case-study-header-meta">
          <p className="case-study-header-type">
            Branding / UX Design Case Study
          </p>
        </div>

        <h1 className="case-study-header-title">Lindi Tilli</h1>

        <p className="case-study-header-description">
          A responsive portfolio and consultation website designed to showcase
          a floral designer’s work, communicate her brand, and help
          prospective clients explore services and get in touch.
        </p>

        <p className="case-study-header-role">
          <span className="case-study-header-role-label">My Role</span>
          <span className="case-study-header-role-values">
            UX/UI Design · Brand Design · Interaction Design · Prototyping
          </span>
        </p>

        <p className="case-study-header-role case-study-header-role--last">
          <span className="case-study-header-role-label">Tools</span>
          <span className="case-study-header-role-values">Figma</span>
        </p>

        <div className="case-study-header-visual">
          <img
            className="case-study-header-hero-image"
            src="/lindiTilli/Homepage.png"
            alt="Lindi Tilli homepage"
          />
        </div>
      </header>

      <section id="overview" className="case-section">
        <h2>Overview</h2>
        <p>
          Lindi Tilli is a floral designer building a professional online
          presence for a real creative business. I designed a responsive
          website and interactive prototype that keeps her floral work as the
          visual focus while communicating the brand and helping prospective
          clients understand her services and get in touch.
        </p>
        <p>
          The project supported a client looking to grow a part-time floral
          practice into a more established business presence.
        </p>
      </section>

      <section id="the-design-challenge" className="case-section">
        <h2>The Design Challenge</h2>
        <p>
          The client needed an online presence that could do more than
          announce a business name. It had to keep floral photography at the
          center, communicate a personal and trustworthy identity, help
          prospective clients understand the work and services available, and
          make contact or consultation requests easy to start.
        </p>
        <p>
          An early wedding-only direction risked narrowing that story. The
          design challenge was to support a broader creative offering while
          staying clear, warm, and simple to navigate.
        </p>
      </section>

      <section id="project-goals" className="case-section">
        <h2>Project Goals</h2>
        <ul>
          <li>
            <span className="bold">Keep the floral work visually central.</span>{" "}
            The site needed to showcase arrangements and photography so the
            craft remains the main impression of the brand.
          </li>
          <li>
            <span className="bold">Communicate a cohesive brand personality.</span>{" "}
            Visual and written presentation needed to feel personal, warm, and
            trustworthy rather than generic or template-like.
          </li>
          <li>
            <span className="bold">Clarify services and a path to contact.</span>{" "}
            Prospective clients needed to understand the offering and easily
            start a consultation or inquiry without hunting for next steps.
          </li>
        </ul>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/lindiTilli/Prices.png"
              alt="prices page"
            />
            <figcaption className="media-caption">
              Pricing page designed to set clear expectations and build trust.
            </figcaption>
          </div>
        </div>
      </section>

      <section id="research-insights" className="case-section">
        <h2>Research & Insights</h2>
        <p>Competitive analysis of local Denver-based florists revealed that:</p>
        <ul>
          <li>Florists are most often hired for weddings</li>
          <li>Flowers are most frequently purchased as gifts</li>
        </ul>
        <p>
          <span className="bold">Key insight:</span> The site needed to support
          both planned events and spontaneous gifting, leading to a pivot from a
          wedding-only experience to a more flexible floral platform.
        </p>
      </section>

      <section id="key-ux-decisions" className="case-section">
        <h2>Key UX Decisions</h2>

        <h3>Two browsing paths for different intents</h3>
        <p>
          Prospective clients arrive with different reasons for hiring a
          florist—planned events and spontaneous gifts are not the same entry
          point. I designed two primary browsing paths, by event and by gift,
          so people could start from the intent that matches their need instead
          of forcing every visitor through a single wedding-centered journey.
        </p>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/lindiTilli/Screenshot 2026-01-12 235933.png"
              alt="Event-focused browsing path"
            />
            <img
              src="/lindiTilli/Screenshot 2026-01-12 235922.png"
              alt="Gift-focused browsing path"
            />
            <figcaption className="media-caption">
              Users can browse floral work by event type or gift, supporting both planned and spontaneous purchases.
            </figcaption>
          </div>
        </div>

        <h3>Photography-first hierarchy</h3>
        <p>
          In a floral portfolio, dense interface chrome can compete with the
          work itself. I kept layouts minimal and let floral photography lead
          the hierarchy so the arrangements remain the primary message while
          navigation and supporting copy stay secondary.
        </p>

        <h3>Clear path to inquiry</h3>
        <p>
          Browsing alone does not help if interested visitors cannot tell how
          to continue. I positioned contact and consultation as the main
          call-to-action so the path from looking at the work to starting a
          conversation stays visible and straightforward.
        </p>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/lindiTilli/Contact me.png"
              alt="contact page"
            />
            <img
              src="/lindiTilli/Contact Me other.png"
              alt="alternate contact page"
            />
            <figcaption className="media-caption">
              Contact page with clear call-to-action to book a consultation.
            </figcaption>
          </div>
        </div>
      </section>

      <section id="brand-visual-system" className="case-section">
        <h2>Brand &amp; Visual System</h2>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/lindiTilli/MacBook Pro - 1.jpg"
              alt="logo design"
            />
            <figcaption className="media-caption">
              Logo explorations reflecting the client’s floral style and personality.
            </figcaption>
          </div>
        </div>
        <p>
          The brand system and interface were designed together so the site
          feels like an extension of the floral work rather than a separate
          visual layer. Earthy tones drawn from greenery-forward arrangements,
          a serif typeface for craftsmanship and care, and soft contrast with
          generous spacing create a calm frame around the photography.
        </p>
        <p>
          That system supports photography-first layouts: logo and color
          choices stay refined enough to carry identity without competing with
          the arrangements, while interface styling stays quiet so browsing and
          contact pathways remain clear.
        </p>
      </section>

      <section id="from-structure-to-visual-direction" className="case-section">
        <h2>From Structure to Visual Direction</h2>
        <p>
          Low-fidelity layouts came first so structure could be settled before
          branding. The homepage wireframe established content hierarchy,
          primary navigation, how floral work would be introduced, and where
          service and contact pathways would sit on the page.
        </p>
        <div className="media-row">
          <div className="media-card">
            <img
              src="/lindiTilli/1Homepage.png"
              alt="wireframe design"
            />
            <figcaption className="media-caption">
              Low-fidelity wireframe of the homepage.
            </figcaption>
          </div>
        </div>
        <p>
          From that structural foundation, the project moved into the branded
          interface: high-fidelity responsive screens and an interactive
          prototype that carried the same hierarchy into the final visual
          direction.
        </p>
      </section>

      <section id="design-iteration" className="case-section">
        <h2>Design Iteration</h2>
        <p>
          As the high-fidelity designs developed, I refined key interface
          details so browsing and inquiry stayed clear and intentional.
        </p>
        <ul>
          <li>
            Strengthened homepage calls to action toward booking a consultation
          </li>
          <li>Refined navigation labels for clearer wayfinding</li>
          <li>
            Added hover states to provide additional context for past floral
            work
          </li>
        </ul>
      </section>

      <section id="outcome" className="case-section">
        <h2>Outcome</h2>
        <p>
          Lindi Tilli resulted in a cohesive responsive website concept that
          brings the floral work, brand identity, portfolio, and inquiry
          experience into one system. Delivered as an interactive prototype for
          desktop and mobile, the project strengthened my ability to balance
          visual expression with practical interface decisions—an approach that
          continues to influence how I design and build front-end experiences.
        </p>
      </section>

      <section id="demo" className="case-section">
        <h2>Demo</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/QAmfz25-598?si=kY8mQYJzOzOgfJZa"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}

export const LEGACY_PROJECT_CASE_STUDIES_BY_ID = {
  "project-4": MtgCollectionManagerCaseStudy,
  "project-1": OnMyWayCaseStudy,
  "project-2": LivingLocalCaseStudy,
  "project-3": LindiTilliCaseStudy,
};
