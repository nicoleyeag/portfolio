import React, { useEffect, useMemo, useRef, useState } from "react";
import { setFaviconColor } from "../favicon";

const PROJECTS = [
  {
    id: "project-1",
    name: "OMW Fullstack Web App",
    bg: {
      base: "rgba(144, 164, 128, 0.65)",
      accent: "rgba(11, 60, 73, 0.35)",
    },
    sections: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "key-features-implementation", label: "Key Features & Implementation" },
      { id: "user-authentication", label: "User Authentication" },
      { id: "database-design", label: "Database Design" },
      { id: "trip-creation-management", label: "Trip Creation & Management" },
      { id: "excursion-search-tripadvisor-api", label: "Excursion Search (TripAdvisor API)" },
      { id: "user-profile", label: "User Profile" },
      { id: "editing-updates", label: "Editing & Updates" },
      { id: "ui-styling", label: "UI & Styling" },
      { id: "challenges-learnings", label: "Challenges & Learnings" },
      { id: "outcome", label: "Outcome" },
      { id: "demo", label: "Demo" }
    ],
    content: (
      <>
        <section id="overview" className="case-section">
          <div className="case-hero">
            <img
              src="/omwPhotos/OMW-exploreexcursions.png"
              alt="location-based trip planning webapp"
            />
          </div>
          <h2>Overview</h2>
          <p>
            On My Way is a full-stack trip planning application that helps users
            create, organize, and personalize travel itineraries. Users can create
            trips with key details such as dates, budget, and descriptions, search
            for excursions by location, and save selected activities with notes and
            scheduled dates.
          </p>
        </section>

        <section id="problem" className="case-section">
          <h2>Problem</h2>
          <p>
            Planning trips often requires juggling multiple tools—notes, calendars,
            booking sites, and spreadsheets—making it difficult to keep everything
            organized in one place.
          </p>
          <h3>Goal:</h3>
          <p>Create a centralized platform where users can plan trips end-to-
            end, discover excursions, and manage all trip details in a single, 
            intuitive interface.</p>
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
          <p>The application emphasizes clarity, reusability, and scalability, 
            with thoughtful frontend components and a structured backend.</p>
        </section>

        <section id="tech-stack" className="case-section">
          <h2>Tech Stack</h2>
          <ul>
            <li><span className="bold">Frontend:</span> React, JavaScript, HTML, 
            CSS, Bootstrap</li>
            <li><span className="bold">Backend:</span> Flask, SQLAlchemy, 
            PostgreSQL</li>
            <li><span className="bold">APIs:</span> TripAdvisor API</li>
            <li><span className="bold">Authentication:</span> bcrypt password 
            hashing</li>
            <li><span className="bold">Version Control:</span> Git & GitHub</li>
          </ul>
        </section>

        <section id="key-features-implementation" className="case-section">
          <h2>Key Features & Implementation</h2>
          <p>
            Core functionality and how major features were implemented across the
            stack.
          </p>
        </section>

        <section id="user-authentication" className="case-section">
          <h2>User Authentication</h2>
          <p>
            Users can sign up and sign in through React forms connected to Flask 
            endpoints. Passwords are securely hashed using bcrypt before being 
            stored in the database.
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

        <section id="database-design" className="case-section">
          <h2>Database Design</h2>
          <p>
            I began by defining core user actions and translating them into 
            database relationships. The primary tables include Users, Trips, and 
            Excursions, with additional tables planned for future feature 
            expansion.
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

        <section id="trip-creation-management" className="case-section">
          <h2>Trip Creation & Management</h2>
          <p>
            Users can create trips with custom details and edit them at any 
            time. Each trip serves as a container for saved excursions, notes, 
            and scheduled dates.
          </p>
         <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/OMW-createtrip.png"
              alt="react create trip card"
              />
              <figcaption className="media-caption">
                React create trip UI connected to Flask endpoints.
              </figcaption>
            <img
              src="/omwPhotos/OMW-viewtrip.png"
              alt="trip detail view"
              />
              <figcaption className="media-caption">
                React trip detail view UI connected to Flask endpoints.
              </figcaption>
            </div>
        </div>
        </section>

        <section id="excursion-search-tripadvisor-api" className="case-section">
          <h2>Excursion Search (TripAdvisor API)</h2>
          <p>
            To provide rich excursion data, I integrated the TripAdvisor API. 
            The implementation required a two-step request process:
          </p>
          <ol>
            <li>Retrieve a location ID</li>
            <li>Fetch excursion details including names, descriptions, and photos</li>
          </ol>
          <p>Results are displayed using reusable React cards in a responsive grid layout.</p>
         <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/Screenshot 2026-01-08 155809.png"
              alt="Backend route resolving user search queries into TripAdvisor location IDs"
              />
              <figcaption className="media-caption">
                Backend route resolving user search queries into TripAdvisor location IDs.
              </figcaption>
            <img
              src="/omwPhotos/OMW-exploreexcursions.png"
              alt="react explore excursions card"
              />
              <figcaption className="media-caption">
                Excursion search results grid rendered with reusable React cards.
              </figcaption>
            <img
              src="/omwPhotos/OMW-exploreexcursions2.png"
              alt="react explore excursions card expansion"
              />
              <figcaption className="media-caption">
                Excursion search results card expansion to show full description.
              </figcaption>
            </div>
        </div>
        </section>

        <section id="user-profile" className="case-section">
          <h2>User Profile</h2>
          <p>
            The profile page consolidates user information and all created 
            trips. Reusable React components render both trip summaries and 
            excursion cards, ensuring visual consistency and maintainability.
          </p>
         <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/OMW-tripdash.png"
              alt="user profile trip dashboard"
              />
              <figcaption className="media-caption">
                User profile trip dashboard displaying all created trips.
              </figcaption>
            </div>
        </div>
        </section>

        <section id="editing-updates" className="case-section">
          <h2>Editing & Updates</h2>
          <p>
            Users can update trip details and excursions through modals built 
            with React forms. Changes trigger AJAX requests that update the 
            database and immediately re-render the UI.
          </p>
         <div className="media-row">
          <div className="media-card">
            <img
              src="/omwPhotos/OMW-edittrip.png"
              alt="react edit trip card"
              />
              <figcaption className="media-caption">
                React edit trip UI connected to Flask endpoints.
              </figcaption>
            </div>
        </div>
        </section>

        <section id="ui-styling" className="case-section">
          <h2>UI & Styling</h2>
          <p>
            I created a cohesive visual system using a defined color palette, 
            reusable buttons, and consistent card layouts. Modals were 
            refactored into React components for consistency. A “Read More” 
            interaction was added to excursion cards to maintain uniform sizing 
            while preserving content readability.
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

        <section id="challenges-learnings" className="case-section">
          <h2>Challenges & Learnings</h2>
          <ul>
            <li>Designing a scalable database early helped support future features</li>
            <li>Reusable React components significantly reduced code duplication</li>
            <li>Integrating a third-party API required careful handling of asynchronous data flows</li>
          </ul>
        </section>

        <section id="outcome" className="case-section">
          <h2>Outcome</h2>
          <p>
            On My Way successfully delivers a complete trip planning 
            workflow—from account creation to itinerary management—within a 
            polished, responsive interface. The project strengthened my full-
            stack development skills and reinforced the importance of thoughtful 
            component architecture and API integration.
          </p>
        </section>

        <section id="demo" className="case-section">
          <h2>Demo</h2>
            <div className="video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/gZG9oJgQPjc?si=m2tFswJq4dYQZLF7" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            </div>

        </section>

      </>
    ),
  },
  {
    id: "project-2",
    name: "Living Local",
    bg: {
      base: "rgba(225, 157, 142, 0.65)",
      accent: "rgba(188, 191, 176, 1)",
    },
      sections: [
        { id: "overview", label: "Overview" },
        { id: "problem", label: "Problem" },
        { id: "wireframes", label: "Wireframes" },
        { id: "solution", label: "Solution" },
        { id: "my-role", label: "My Role" },
        { id: "key-design-decisions", label: "Key Design Decisions" },
        { id: "outcome", label: "Outcome" },
        { id: "demo", label: "Demo" },
      ],
    content: (
      <>
        <section id="overview" className="case-section">
          <div className="case-hero">
            <img
              src="/livingLocalPhotos/Group 2.png"
              alt="Living Local homepage and browsing experience"
            />
          </div>
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

        <section id="problem" className="case-section">
          <h2>Problem</h2>
          <p>
            Many local businesses lack the time, budget, or technical expertise 
            to create standalone online stores. At the same time, shoppers 
            struggle to find and confidently purchase from local businesses 
            using existing e-commerce platforms.
          </p>
          <p>
            Users needed a way to:
          </p>
          <ul>
            <li>Easily discover nearby businesses</li>
            <li>Browse products from multiple vendors without confusion</li>
            <li>Complete purchases through a familiar, trustworthy checkout flow</li>
          </ul>
        </section>
        <section id="wireframes" className="case-section">
          <h2>Wireframes</h2>
          <p>Early wireframes explored how users could discover local businesses 
            and complete purchases using familiar e-commerce patterns, without 
            overwhelming choice or complexity.
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
        </section>

        <section id="solution" className="case-section">
          <h2>Solution</h2>
          <p>
            Living Local centralizes local businesses into one intuitive 
            platform that mirrors common e‑commerce patterns while highlighting 
            location-based discovery.</p>
            <p>Key solutions included:
          </p>
          <ul>
            <li>Location-first browsing to surface relevant businesses immediately</li>
            <li>Standardized product cards across vendors to reduce cognitive load</li>
            <li>A unified checkout experience that feels familiar and trustworthy</li>
          </ul>
        </section>

        <section id="my-role" className="case-section">
          <h2>My Role</h2>
          <p>As the UX Researcher and UX/UI Designer, I owned the end-to-end design process.</p>
          <p>Responsibilities included:</p>
          <ul>
            <li>Conducting user research to understand pain points around shopping local</li>
            <li>Mapping user flows from discovery through checkout</li>
            <li>Creating wireframes and high-fidelity prototypes in Figma</li>
            <li>Running usability tests and iterating designs based on feedback</li>
            <li>Designing responsive layouts for desktop and mobile</li>
          </ul>
        </section>

        <section id="key-design-decisions" className="case-section">
          <h2>Key Design Decisions</h2>
          <div className="media-row">
            <div className="media-card">
              <img
                src="/livingLocalPhotos/products.png"
                alt="products page"
                />
                <figcaption className="media-caption">
                  Browsing surfaces nearby businesses using consistent product layouts.
                </figcaption>
                <img
                  src="/livingLocalPhotos/item page.png"
                  alt="item page"
                />
                <figcaption className="media-caption">
                  The product page supports confident purchasing through rich imagery, reviews, and seller transparency.
                </figcaption>
     {/* Checkout grid */}
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

          <h2>Key Design Decisions</h2>
          <ul>
            <li><span className="bold">Location-first discovery:</span> Prioritized proximity to help users quickly find relevant businesses.</li>
            <li><span className="bold">Consistent UI patterns:</span> Standardized layouts, product cards, and navigation created trust across multiple vendors and reduced cognitive load when browsing.</li>
            <li><span className="bold">Product-focused evaluation:</span> Detailed product pages emphasized imagery, reviews, pricing clarity, and seller attribution to support confident purchasing decisions.</li>
            <li><span className="bold">Streamlined checkout flow:</span> A multi-step checkout process mirrored familiar e-commerce experiences, reducing friction and helping users complete purchases with confidence.</li>
          </ul>
        </section>

        <section id="outcome" className="case-section">
          <h2>Outcome</h2>
          <p>
            Living Local is a location-based e-commerce platform that helps 
            users discover and shop from nearby small businesses. The product 
            removes friction for both shoppers and vendors by centralizing local 
            storefronts into a single, intuitive experience. By combining 
            familiar e-commerce patterns with location-first discovery, Living 
            Local makes supporting local businesses easy and approachable.
          </p>
        </section>

        <section id="demo" className="case-section">
          <h2>Demo</h2>
            <div className="video-wrapper">
              <iframe  
                src="https://www.youtube.com/embed/Cm7OS1kXuPs?si=o2171YVgcGE_N-m0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            </div>

        </section>
      </>
    ),
  },
  {
    id: "project-3",
    name: "Lindi Tilli",
    bg: {
      base: "rgba(93, 22, 2, 0.45)",
      accent: "rgba(169, 104, 41, 0.95)",
    },
      sections: [
        { id: "overview", label: "Overview" },
        { id: "problem", label: "Problem" },
        { id: "goals", label: "Goals" },
        { id: "research&insights", label: "Research & Insights" },
        { id: "key-ux-decisions", label: "Key UX Decisions" },
        { id: "visual-brand-direction", label: "Visual & Brand Direction" },
        { id: "wireframes-prototype", label: "Wireframes → Prototype" },
        { id: "usability-testing", label: "Usability Testing" },
        { id: "outcome", label: "Outcome" },
        { id: "demo", label: "Demo" },
      ],
    content: (
      <>
        <section id="overview" className="case-section">
          <div className="case-hero">
            <img
              src="/lindiTilli/Homepage.png"
              alt="Lindi Tilli homepage"
            />
          </div>
          <h2>Overview</h2>
          <p>
            LindiTilli is a floral designer and personal brand specializing in 
            custom arrangements for weddings, events, and floral gifts. I designed 
            a responsive website and interactive prototype that showcases her 
            work and guides potential clients toward booking a consultation.
          </p>
          <p>
            This project was completed for a real client looking to grow a 
            part-time floral practice into a future full-time business.
          </p>
        </section>

        <section id="problem" className="case-section">
          <h2>Problem</h2>
          <p>
            The client lacked an online presence that could:
          </p>
          <ul>
            <li>Clearly showcase her floral work</li>
            <li>Support multiple use cases (weddings, events, gifts)</li>
            <li>Feel personal, warm, and trustworthy</li>
            <li>Make it easy for users to initiate contact</li>
          </ul>
          <p>
            The initial vision focused only on weddings, which limited the 
            business’s growth potential.
          </p>
        </section>

        <section id="goals" className="case-section">
          <h2>Goals</h2>
          <p>The website needed to:</p>
          <ul>
            <li>Create a cohesive brand experience</li>
            <li>Allow users to browse floral work by event or gift type</li>
            <li>Prioritize contact and consultation as the primary conversion</li>
            <li>Make it easy for users to initiate contact and consultations</li>
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

        <section id="reasearch&insights" className="case-section">
          <h2>Research & Insights</h2>
          <p>Competitive analysis of local Denver-based florists revealed that:</p>
          <ul>
            <li>Florists are most often hired for weddings</li>
            <li>Flowers are most frequently purchased as gifts</li>
            </ul>
          <p><span className="bold">Key insight:</span> The site needed to support 
          both planned events and spontaneous gifting, leading to a pivot from a 
          wedding-only experience to a more flexible floral platform.</p>
  
        </section>

        <section id="key-ux-decisions" className="case-section">
        <h2>Key UX Decisions</h2>
          <div className="media-row">
            <div className="media-card">
                  <img
                    src="/lindiTilli/Screenshot 2026-01-12 235933.png"
                    alt="Shipping information step"
                  />
                  <img
                    src="/lindiTilli/Screenshot 2026-01-12 235922.png"
                    alt="Payment information step"
                  />

                <figcaption className="media-caption">
                  Users can browse floral work by event type or gift, supporting both planned and spontaneous purchases.
                </figcaption>
                </div>
          </div>
          <ul>
            <li>Designed two primary browsing paths: by event and by gift</li>
            <li>Structured navigation to reduce decision fatigue</li>
            <li>Positioned contact and consultation as the main call-to-action</li>
            <li>Kept layouts minimal to let floral photography lead</li>
          </ul>
          <p>
            Multiple logo and color explorations were tested before finalizing a 
            grounded, refined direction aligned with the client’s vision.
            </p>

        </section>

        <section id="visual-brand-direction" className="case-section">
          <h2>Visual & Brand Direction</h2>
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
            The visual design reflects the client’s floral style and personality:
          </p>
          <ul>
            <li>Earthy tones inspired by greenery-forward arrangements</li>
            <li>Serif typeface to convey craftsmanship and care</li>
            <li>Soft contrast and spacing to create a calm, welcoming feel</li>
          </ul>
          <p>
            Multiple logo and color explorations were tested before finalizing a 
            grounded, refined direction aligned with the client’s vision.
          </p>
        </section>

        <section id="wireframes-prototype" className="case-section">
          <h2>Wireframes → Prototype</h2>

          <p>
            I created low-fidelity wireframes for key pages (Home, About, Pricing, 
            Contact), then translated them into high-fidelity responsive designs.
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
            The final deliverable was a fully interactive prototype designed for 
            desktop and mobile, ready to support future development.
          </p>
        </section>

        <section id="usability-testing" className="case-section">
          <h2>Usability Testing</h2>
          <p>
            Users completed task-based testing while thinking aloud.
          </p>
          <p>
            <span className="bold">Key improvements made:</span>
          </p>
          <ul>
            <li>Added clear calls to action on the homepage to guide users toward booking a consultation</li>
            <li>Refined navigation labels to better reflect user mental models</li>
            <li>Introduced hover states to provide context for past floral work</li>
          </ul>
          <div className="media-row">
            <div className="media-card">
              <img
                src="/lindiTilli/Contact me.png"
                alt="contact page"
                />
              <img
                src="/lindiTilli/Contact Me other.png"
                alt="contact pag other"
                />
                <figcaption className="media-caption">
                  Contact page with clear call-to-action to book a consultation.
                </figcaption>
              </div>
          </div>
        </section>

        <section id="outcome" className="case-section">
          <h2>Outcome</h2>
          <ul>
            <li>Delivered a polished, interactive prototype</li>
            <li>Validated usability through testing</li>
            <li>Provided the client with a scalable foundation for launching her business</li>
          </ul>
          <p>
            This project strengthened my experience working with real clients 
            and adapting designs to evolving business needs.
          </p>
        </section>

        <section id="demo" className="case-section">
          <h2>Demo</h2>
            <div className="video-wrapper">
              <iframe  
                src="https://www.youtube.com/embed/QAmfz25-598?si=kY8mQYJzOzOgfJZa" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
              </iframe>
            </div>

        </section>

      </>
    ),
  },
];

export default function Projects() {
  useEffect(() => {
        setFaviconColor("#F8C421"); // Set the favicon color to match your theme
      }, []);

  const contentRef = useRef(null);
  const mobileContentRef = useRef(null);

  const [openProjectId, setOpenProjectId] = useState(PROJECTS[0].id);
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);

  // rest of your code...



  const activeProject = useMemo(
    () => PROJECTS.find((p) => p.id === activeProjectId),
    [activeProjectId]
  );

  const handleProjectClick = (id) => {
    setOpenProjectId(id);
    setActiveProjectId(id);

    requestAnimationFrame(() => {
      contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

const scrollToSection = (id) => {
  const isMobile = window.matchMedia("(max-width: 900px)").matches;

  if (isMobile) {
    const mobileEl = mobileContentRef.current?.querySelector(`#${id}`);
    if (mobileEl) mobileEl.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const desktopEl = contentRef.current?.querySelector(`#${id}`);
  if (desktopEl) desktopEl.scrollIntoView({ behavior: "smooth", block: "start" });
};


  const bgBase = activeProject?.bg?.base ?? "rgba(255,250,245,1)";
  const bgAccent = activeProject?.bg?.accent ?? "rgba(240,230,255,0.6)";

  useEffect(() => {
  document.body.classList.add("page-projects");

  // Set the CSS variables on the body so the whole page background updates
  document.body.style.setProperty("--bg-base", bgBase);
  document.body.style.setProperty("--bg-accent", bgAccent);

  return () => {
    document.body.classList.remove("page-projects");
    document.body.style.removeProperty("--bg-base");
    document.body.style.removeProperty("--bg-accent");
  };
}, [bgBase, bgAccent]);

  return (
      <div className="projects-page">

      {/* MOBILE HEADER CONTROLS (shows on mobile only) */}
        <div className="projects-mobile-controls">
          <h1 className="projects-title">Projects</h1>

          <select
            className="project-select"
            value={activeProjectId}
            onChange={(e) => {
              const id = e.target.value;
              setActiveProjectId(id);
              setOpenProjectId(id); // optional — keeps desktop accordion in sync
              requestAnimationFrame(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              });
            }}
          >
            {PROJECTS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          <div className="projects-mobile-sections">
            {activeProject.sections.map((section) => (
              <button
                key={section.id}
                className="section-pill"
                type="button"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>



      {/* DESKTOP LAYOUT (shows on desktop only) */}
      <div className="projects-layout">
        <aside className="projects-nav">
          <h1 className="projects-title">Projects</h1>

          {PROJECTS.map((project) => (
            <div key={project.id} className="project-group">
              <button
                className={`project-button ${
                  activeProjectId === project.id ? "active" : ""
                }`}
                onClick={() => handleProjectClick(project.id)}
                type="button"
              >
                <span>{project.name}</span>
                <span className="chevron">
                  {openProjectId === project.id ? "▾" : "▸"}
                </span>
              </button>

              {openProjectId === project.id && (
                <div className="project-sections">
                  {project.sections.map((section) => (
                    <button
                      key={section.id}
                      className="section-link"
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        <div className="projects-divider" />

        <main className="projects-content">
          <div ref={contentRef} className="case-scroll">
            <h2 className="case-title">{activeProject.name}</h2>
            {activeProject.content}
          </div>
        </main>
      </div>


      {/* MOBILE CONTENT (shows on mobile only) */}
      <div ref={mobileContentRef} className="projects-mobile-content">
        <h2 className="case-title">{activeProject.name}</h2>
        {activeProject.content}
      </div>

    </div>
  );
}
