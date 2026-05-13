import "./digital-literacy.css";

const IMonitor = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const ICpu = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const IBarChart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon"
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const ISmartphone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const IZap = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IUsers = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ITarget = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon dl-svg-icon--sm"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ITick = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon dl-svg-icon--sm"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IAward = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const IBookOpen = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="dl-svg-icon"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IPlay = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className="dl-svg-icon dl-svg-icon--sm"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const IMG = {
  hero: "/pexels-photo-3184291.webp",
  skills: "/pexels-photo-4144923.jpeg",
};

export default function DigitalLiteracyPage() {
  return (
    <main className="dl">
      <div className="dl-breadcrumb-nav">
        <ol className="dl-breadcrumb">
          <li className="dl-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="dl-breadcrumb-item active" aria-current="page">
            Digital Literacy
          </li>
        </ol>
      </div>

      <section className="dl__hero">
        <div className="dl__hero-text">
          <span className="dl__eyebrow">Digital Literacy</span>
          <h1 className="dl__title">Build Digital Skills</h1>
          <h2 className="dl__subtitle">
            Equip every employee with the digital competencies they need
          </h2>
          <p className="dl__body">
            NeuroLXP delivers AI-powered digital literacy training — from foundational tools to advanced workplace technologies — through personalised, engaging experiences.
          </p>

          <div className="dl__hero-stats">
            <div className="dl__stat-block dl__stat-block--primary">
              <span className="dl__stat-num">87%</span>
              <span className="dl__stat-lbl">Skill Adoption</span>
            </div>
            <div className="dl__stat-divider" />
            <div className="dl__stat-block dl__stat-block--secondary">
              <span className="dl__stat-num">3×</span>
              <span className="dl__stat-lbl">Faster Upskilling</span>
            </div>
            <div className="dl__stat-divider" />
            <div className="dl__stat-block dl__stat-block--accent">
              <span className="dl__stat-num">4.7★</span>
              <span className="dl__stat-lbl">Learner Score</span>
            </div>
          </div>

          <div className="dl__hero-ctas">
            <button className="dl__btn dl__btn--primary">
              <IPlay />
              <span>Start Learning</span>
            </button>
            <button className="dl__btn dl__btn--ghost">Request Demo</button>
          </div>
        </div>
      </section>

      <section className="dl__band">
        <div className="dl__band-content">
          <div className="dl__icon-pill dl__icon-pill--primary">
            <ICpu />
            <span>Core Capabilities</span>
          </div>
          <h3 className="dl__section-title">Every workforce needs to go digital</h3>
          <p className="dl__body">
            From basic tool literacy to AI-ready skills — one platform covers the full spectrum.
          </p>
        </div>

        <div className="dl__band-cards">
          {[
            {
              icon: <IMonitor />,
              title: "Digital Skills Training",
              body: "Core tools to advanced tech — structured for every role.",
              c: "primary",
            },
            {
              icon: <ICpu />,
              title: "AI-Personalised Paths",
              body: "Learning journeys adapted to each person's skill level.",
              c: "secondary",
            },
            {
              icon: <IBarChart />,
              title: "Progress Tracking",
              body: "Real-time visibility into competency and completion.",
              c: "accent",
            },
            {
              icon: <ISmartphone />,
              title: "Mobile-First Access",
              body: "Learn anytime, anywhere — fully optimised for any device.",
              c: "support",
            },
          ].map(({ icon, title, body, c }) => (
            <div className={`dl__band-card dl__band-card--${c}`} key={title}>
              <span className={`dl__band-card-icon dl__band-card-icon--${c}`}>
                {icon}
              </span>
              <h4 className="dl__band-card-title">{title}</h4>
              <p className="dl__band-card-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dl__split">
        <div className="dl__split-content">
          <div className="dl__icon-pill dl__icon-pill--secondary">
            <ITarget />
            <span>Close the Skills Gap</span>
          </div>
          <h3 className="dl__section-title">Accelerate org-wide tech adoption</h3>
          <p className="dl__body">
            Smart skill mapping identifies gaps before they slow you down — and fills them fast.
          </p>

          <div className="dl__metric-row">
            {[
              { val: "300+", lbl: "Digital Courses", c: "secondary" },
              { val: "99%", lbl: "Uptime", c: "primary" },
              { val: "10×", lbl: "ROI", c: "accent" },
            ].map(({ val, lbl, c }) => (
              <div className={`dl__metric dl__metric--${c}`} key={lbl}>
                <span className="dl__metric-val">{val}</span>
                <span className="dl__metric-lbl">{lbl}</span>
              </div>
            ))}
          </div>

          <ul className="dl__checklist">
            {[
              "Role-based skill gap analysis",
              "Automated learning assignments",
              "Compliance & certification tracking",
            ].map((pt) => (
              <li key={pt}>
                <span className="dl__tick dl__tick--secondary">
                  <ITick />
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dl__split-img-wrap">
          <img
            src={IMG.skills}
            alt="Digital upskilling workshop"
            className="dl__split-img"
            loading="lazy"
          />
          <div className="dl__split-badge">
            <IUsers />
            <span>Team Ready</span>
          </div>
        </div>
      </section>

      <section className="dl__trio">
        <div className="dl__trio-text">
          <div className="dl__icon-pill dl__icon-pill--accent">
            <IBarChart />
            <span>Real-Time Analytics</span>
          </div>
          <h3 className="dl__section-title">Track every learner. Prove every outcome.</h3>
          <p className="dl__body">
            Live dashboards give L&D teams the confidence to make data-backed decisions.
          </p>

          <ul className="dl__checklist dl__checklist--compact">
            {[
              "Live competency dashboards",
              "Spot at-risk learners early",
              "Exportable compliance reports",
              "Benchmark across departments",
            ].map((pt) => (
              <li key={pt}>
                <span className="dl__tick dl__tick--accent">
                  <ITick />
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dl__trio-stats">
          {[
            {
              val: "Live",
              lbl: "Dashboards",
              icon: <IBarChart />,
              c: "accent",
            },
            {
              val: "99%",
              lbl: "Data Accuracy",
              icon: <ITarget />,
              c: "primary",
            },
            {
              val: "∞",
              lbl: "Report History",
              icon: <IBookOpen />,
              c: "secondary",
            },
            {
              val: "Auto",
              lbl: "Compliance Cert",
              icon: <IAward />,
              c: "support",
            },
          ].map(({ val, lbl, icon, c }) => (
            <div className={`dl__trio-stat dl__trio-stat--${c}`} key={lbl}>
              <span className={`dl__trio-stat-icon dl__trio-stat-icon--${c}`}>
                {icon}
              </span>
              <div>
                <span className="dl__trio-stat-val">{val}</span>
                <span className="dl__trio-stat-lbl">{lbl}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dl__steps">
        <div className="dl__steps-header">
          <div className="dl__icon-pill dl__icon-pill--support">
            <IArrowRight />
            <span>How It Works</span>
          </div>
          <h3 className="dl__section-title">From assessment to mastery in four steps</h3>
        </div>

        <div className="dl__steps-row">
          {[
            {
              num: "01",
              title: "Assess",
              body: "Identify each employee's current digital skill level.",
              c: "primary",
            },
            {
              num: "02",
              title: "Assign",
              body: "Auto-assign personalised learning paths by role and gap.",
              c: "secondary",
            },
            {
              num: "03",
              title: "Learn",
              body: "Deliver interactive, bite-sized digital training content.",
              c: "accent",
            },
            {
              num: "04",
              title: "Optimise",
              body: "Track progress and continuously refine for better outcomes.",
              c: "support",
            },
          ].map(({ num, title, body, c }, i, arr) => (
            <div className="dl__step-wrap" key={num}>
              <div className={`dl__step dl__step--${c}`}>
                <span className={`dl__step-num dl__step-num--${c}`}>
                  {num}
                </span>
                <h4 className={`dl__step-title dl__step-title--${c}`}>
                  {title}
                </h4>
                <p className="dl__step-body">{body}</p>
              </div>
              {i < arr.length - 1 && (
                <span className="dl__step-arrow">
                  <IArrowRight />
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="dl__bento">
        <div className="dl__bento-main">
          <span className="dl__eyebrow">Why NeuroLXP</span>
          <h3 className="dl__bento-title">
            The smarter way to build a digitally-ready workforce
          </h3>
          <p className="dl__body">
            Built around the learner — driving engagement, closing gaps, and proving ROI from day one.
          </p>

          <div className="dl__bento-tags">
            {[
              "Skill Mapping",
              "Personalised Paths",
              "Competency Tracking",
              "Gap Analysis",
            ].map((t) => (
              <span className="dl__tag" key={t}>
                <IArrowRight />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="dl__bento-side">
          <div className="dl__bento-card dl__bento-card--primary">
            <span className="dl__bento-icon dl__bento-icon--primary">
              <IZap />
            </span>
            <h4 className="dl__bento-card-title">Faster Tool Adoption</h4>
            <p className="dl__bento-card-body">
              Get teams productive with new tech in record time.
            </p>
          </div>

          <div className="dl__bento-card dl__bento-card--secondary">
            <span className="dl__bento-icon dl__bento-icon--secondary">
              <IAward />
            </span>
            <h4 className="dl__bento-card-title">Compliance Built-In</h4>
            <p className="dl__bento-card-body">
              Automated certification tracking across every regulation.
            </p>
          </div>
        </div>
      </section>

      <section className="dl__cta">
        <div className="dl__cta-content">
          <h2 className="dl__cta-title">
            Ready to build a digitally-skilled workforce?
          </h2>
          <p className="dl__body">
            Transform your organisation with NeuroLXP digital literacy solutions.
          </p>

          <div className="dl__cta-btns">
            <button className="dl__btn dl__btn--primary dl__btn--lg">
              <IPlay />
              <span>Book a Demo</span>
            </button>
            <button className="dl__btn dl__btn--ghost dl__btn--lg">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
