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
          A React Native application for scanning and recognizing trading
          cards, managing collections, building decks, and exploring
          intelligent collection workflows.
        </p>

        <p className="case-study-header-role">
          <span className="case-study-header-role-label">My Role</span>
          <span className="case-study-header-role-values">
            Mobile Engineering · Interface Design · API Integration · Testing
          </span>
        </p>

        <p className="case-study-header-role case-study-header-role--last">
          <span className="case-study-header-role-label">Technologies</span>
          <span className="case-study-header-role-values">
            React Native · TypeScript · Expo · REST APIs · Jest
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
          MTG Collection Manager is a cross-platform React Native application
          for scanning, organizing, and managing Magic: The Gathering
          collections. I designed and built the application end to end,
          including the mobile UI, card-recognition workflow, Scryfall API
          integration, local data handling, deck-building features, caching,
          and automated testing.
        </p>
        <p>
          The project started as a collection-management tool and evolved into
          a broader engineering challenge: how to make card recognition fast,
          reliable, explainable, and easy to correct when automation fails.
        </p>

        <h3>Tech Stack</h3>
        <ul>
          <li><span className="bold">Mobile:</span> React Native, Expo, TypeScript</li>
          <li><span className="bold">Persistence:</span> SQLite</li>
          <li><span className="bold">APIs:</span> Scryfall API</li>
          <li><span className="bold">Scanner:</span> OCR-powered recognition pipeline</li>
          <li><span className="bold">Navigation & UI:</span> React Navigation, Reanimated</li>
          <li><span className="bold">Testing:</span> Jest (129 unit tests)</li>
        </ul>
      </section>

      <section id="collection-management" className="case-section">
        <h2>Collection Management</h2>
        <p>
          From the app home, users navigate to a searchable collection grid
          that serves as the hub for owned cards. Data is backed by SQLite,
          so reads and writes stay fast without a network connection.
        </p>
        <ul>
          <li>Local SQLite persistence as the source of truth</li>
          <li>Searchable collection grid for quick card lookup</li>
          <li>Scryfall API integration for accurate card metadata and images</li>
          <li>Reusable UI components shared across collection and deck screens</li>
        </ul>
      </section>

      <section id="scanner-engineering" className="case-section">
        <h2>Scanner Engineering</h2>

        <h3>The Challenge</h3>
        <p>
          Card-title OCR became reliable relatively quickly, but identifying
          the correct card printing and artwork was harder. Alternate artwork,
          visually similar candidates, imperfect image crops, and stale scan
          data could all produce incorrect matches.
        </p>

        <h3>Recognition Approach</h3>
        <p>
          I built a multi-stage recognition workflow that combines title OCR,
          Scryfall candidate search, image comparison, confidence checks,
          fallback logic, and manual correction. The goal was not only to
          return a match, but to avoid confidently returning the wrong one.
        </p>

        <h3>Iteration &amp; Debugging</h3>
        <p>
          I iterated on crop geometry, candidate filtering, caching, ambiguity
          thresholds, stale-result handling, and scanner instrumentation. I
          also added evaluation tooling to compare scan results across repeated
          tests and identify where failures were occurring.
        </p>

        <div className="mtg-scanner-gallery">
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/scanCardPage.jpeg"
              alt="Scanner — card capture screen"
            />
            <figcaption className="media-caption">
              <span className="bold">1. Capture</span> - photograph a physical card
            </figcaption>
          </figure>
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/scanCardReview.jpeg"
              alt="Scanner — OCR review screen"
            />
            <figcaption className="media-caption">
              <span className="bold">2. Review</span> - OCR parsing and match preview
            </figcaption>
          </figure>
          <figure className="mtg-phone-frame">
            <img
              src="/mtgPhotos/scanCardResults.jpeg"
              alt="Scanner — ranked match results"
            />
            <figcaption className="media-caption">
              <span className="bold">3. Confirm</span> - ranked Scryfall matches to select
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="deck-building" className="case-section">
        <h2>Deck Building</h2>
        <p>
          Deck flows follow the same Screen -&gt; Service -&gt; Repository architecture
          as the rest of the app. Users create and manage decks, review card
          composition and statistics, and explore a planned AI coaching
          surface for future deck analysis.
        </p>

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
              alt="Planned AI deck coaching screen"
            />
            <figcaption className="media-caption">
              <span className="bold">Planned:</span> AI deck coaching and analysis.
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="architecture-testing" className="case-section">
        <h2>Architecture & Testing</h2>

        <h3>Architecture</h3>
        <p>
          The app separates UI screens, services, and repository/data
          responsibilities so scanner logic, Scryfall integration, caching, and
          collection data can evolve independently from presentation
          components. Reusable React Native components handle shared UI, while
          modular service layers isolate scanner logic from the screens that
          display it. Caching, data handling, and local collection persistence
          live in their own layers so those concerns can change without
          rewriting presentation code.
        </p>

        <h3>Testing</h3>
        <p>
          Jest tests cover core recognition behavior, caching logic, scanner
          workflows, and data-layer behavior — currently{" "}
          <span className="bold">129+ unit tests</span>.
        </p>
      </section>

      <section id="next-iterations" className="case-section">
        <h2>Next Iterations</h2>
        <p>
          Current development is focused on improving recognition reliability,
          persistence, and higher-level collection intelligence.
        </p>

        <h3>Recognition</h3>
        <ul>
          <li>Improve art matching reliability</li>
          <li>Improve adaptive crop handling</li>
        </ul>

        <h3>Persistence</h3>
        <ul>
          <li>Expand SQLite-backed local persistence</li>
          <li>Improve offline collection behavior</li>
        </ul>

        <h3>Product Intelligence</h3>
        <ul>
          <li>AI-assisted deck coaching</li>
          <li>Future premium feature exploration</li>
        </ul>
      </section>

      <section id="engineering-decisions" className="case-section">
        <h2>Engineering Decisions &amp; Tradeoffs</h2>
        <ul>
          <li>
            <span className="bold">Recognition accuracy vs automation:</span>{" "}
            the scanner should avoid auto-selecting a weak match just to
            complete the flow.
          </li>
          <li>
            <span className="bold">Confidence vs speed:</span> additional image
            comparison and candidate checks can improve certainty, but they
            also increase processing time.
          </li>
          <li>
            <span className="bold">Fixed crop geometry vs real-world camera variance:</span>{" "}
            consistent crop regions improve matching, but card position and
            framing are not always identical.
          </li>
          <li>
            <span className="bold">Automation vs correction:</span> manual
            correction is intentionally part of the workflow because a
            recoverable uncertain result is better than a confidently wrong
            result.
          </li>
          <li>
            <span className="bold">Debug visibility vs production simplicity:</span>{" "}
            developer evaluation tools and timing instrumentation help diagnose
            recognition failures but should remain separate from the normal
            user experience.
          </li>
        </ul>
      </section>

      <section id="outcome" className="case-section">
        <h2>Outcome</h2>
        <p>
          The result is a working cross-platform mobile application that
          supports collection management, deck building, API-backed card data,
          OCR-assisted scanning, manual correction, caching, and automated
          testing.
        </p>
        <p>
          More importantly, the project has become an ongoing engineering
          testbed for recognition reliability, mobile architecture, UX recovery
          states, and performance tradeoffs—areas I continue to measure and
          refine rather than treating the first implementation as finished.
        </p>
      </section>

      <section id="demo" className="case-section">
        <h2>Demo</h2>
        <p>Demo video coming soon.</p>
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
