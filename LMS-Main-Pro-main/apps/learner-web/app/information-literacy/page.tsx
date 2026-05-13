import "./information-literacy.css";

const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
  </svg>
);

const IconCompass = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);

const IconCpu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);

const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon svg-icon--sm">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const IconTick = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon svg-icon--sm">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconStack = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className="svg-icon">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
);

const IMG = {
  hero: "/learners-beyond-classroom.jpeg",
  research: "/connected-world.jpeg",
  highlight: "/learners-beyond-classroom.jpeg",
};

const IPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"
    className="svg-icon svg-icon--sm">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);

export default function InformationLiteracyPage() {
  return (
    <main className="il">
      <div className="il-breadcrumb-nav">
        <ol className="il-breadcrumb">
          <li className="il-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="il-breadcrumb-item active" aria-current="page">
            Information Literacy
          </li>
        </ol>
      </div>

      <section className="il__hero">
        <div className="il__hero-text">
          <span className="il__eyebrow">NeuroLXP · Information Skills</span>
          <h1 className="il__title">Information Literacy</h1>
          <h2 className="il__subtitle">Find, Evaluate & Use Knowledge Responsibly</h2>
          <p className="il__body">
            NeuroLXP equips learners to cut through digital noise — identifying credible sources,
            thinking critically, and acting on information with confidence.
          </p>
          <div className="il__hero-stats">
            <div className="il__stat-block il__stat-block--primary">
              <span className="il__stat-num">4 Core</span>
              <span className="il__stat-lbl">Skill Domains</span>
            </div>
            <div className="il__stat-divider"/>
            <div className="il__stat-block il__stat-block--secondary">
              <span className="il__stat-num">100%</span>
              <span className="il__stat-lbl">Digital Ready</span>
            </div>
            <div className="il__stat-divider"/>
            <div className="il__stat-block il__stat-block--accent">
              <span className="il__stat-num">∞</span>
              <span className="il__stat-lbl">Lifelong Use</span>
            </div>
          </div>

          <div className="dl__hero-ctas">
            <button className="dl__btn dl__btn--primary"><IPlay/><span>Start Learning</span></button>
            <button className="dl__btn dl__btn--ghost">Request Demo</button>
          </div>
        </div>
      </section>

      <section className="il__band il__band--teal">
        <div className="il__band-content">
          <div className="il__icon-pill il__icon-pill--primary">
            <IconShield/><span>Evaluate & Verify</span>
          </div>
          <h3 className="il__section-title">Not all information is equal — <br/> learners need to know the difference</h3>
          <p className="il__body">
            From social media to research journals, learners encounter information everywhere.
            NeuroLXP trains them to assess reliability, spot bias, and distinguish fact from opinion.
          </p>
        </div>
        <div className="il__band-cards">
          {[
            { icon: <IconSearch/>,  title: "Source Credibility",    body: "Identify trustworthy sources across digital platforms.",   c: "primary"   },
            { icon: <IconShield/>,  title: "Bias Detection",        body: "Recognise perspective and intent behind information.",     c: "secondary" },
            { icon: <IconGlobe/>,   title: "Fact vs Opinion",       body: "Distinguish evidence-based claims from subjective views.", c: "accent"    },
            { icon: <IconCpu/>,     title: "Digital Verification",  body: "Use tools and techniques to validate online content.",     c: "support"   },
          ].map(({ icon, title, body, c }) => (
            <div className={`il__band-card il__band-card--${c}`} key={title}>
              <span className={`il__band-card-icon il__band-card-icon--${c}`}>{icon}</span>
              <h4 className="il__band-card-title">{title}</h4>
              <p className="il__band-card-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="il__split il__split--reverse">
        <div className="il__split-content">
          <div className="il__icon-pill il__icon-pill--secondary">
            <IconBook/><span>Research & Discovery</span>
          </div>
          <h3 className="il__section-title">From searching to synthesising — <br/> research done right</h3>
          <p className="il__body">
            Strong research skills drive academic success and professional growth.
            NeuroLXP guides learners from finding sources to building original insights.
          </p>
          <div className="il__metric-row">
            {[
              { val: "Academic", lbl: "Research",  c: "secondary" },
              { val: "Digital",  lbl: "Libraries", c: "primary"   },
              { val: "Synthesis", lbl: "Skills",   c: "accent"    },
            ].map(({ val, lbl, c }) => (
              <div className={`il__metric il__metric--${c}`} key={lbl}>
                <span className="il__metric-val">{val}</span>
                <span className="il__metric-lbl">{lbl}</span>
              </div>
            ))}
          </div>
          <ul className="il__checklist il__checklist--compact">
            {[
              "Search academic databases and digital libraries",
              "Organise and manage research across sources",
              "Synthesise multiple perspectives into clear analysis",
            ].map(pt => (
              <li key={pt}><span className="il__tick il__tick--secondary"><IconTick/></span><span>{pt}</span></li>
            ))}
          </ul>
        </div>
        <div className="il__split-img-wrap">
          <img src={IMG.research} alt="Research and analytics" className="il__split-img" loading="lazy"/>
          <div className="il__split-badge">
            <IconSearch/>
            <span>Smart Research</span>
          </div>
        </div>
      </section>

      <section className="il__trio">
        <div className="il__trio-text">
          <div className="il__icon-pill il__icon-pill--accent">
            <IconCompass/><span>Ethics & Integrity</span>
          </div>
          <h3 className="il__section-title">Using knowledge responsibly is a skill — <br/> not an afterthought</h3>
          <p className="il__body">
            Information literacy includes understanding intellectual property, proper citation,
            and the responsibilities that come with access to knowledge.
          </p>
          <ul className="il__checklist il__checklist--compact">
            {[
              "Cite sources accurately and consistently",
              "Respect intellectual property and copyright",
              "Avoid plagiarism in academic and professional work",
              "Share knowledge ethically and responsibly",
            ].map(pt => (
              <li key={pt}><span className="il__tick il__tick--accent"><IconTick/></span><span>{pt}</span></li>
            ))}
          </ul>
        </div>
        <div className="il__trio-stats">
          {[
            { val: "Citation",   lbl: "Accuracy",       icon: <IconAward/>,   c: "accent"    },
            { val: "IP",         lbl: "Respect",         icon: <IconShield/>,  c: "primary"   },
            { val: "Ethics",     lbl: "Framework",       icon: <IconCompass/>, c: "secondary" },
            { val: "Zero",       lbl: "Plagiarism",      icon: <IconStar/>,    c: "support"   },
          ].map(({ val, lbl, icon, c }) => (
            <div className={`il__trio-stat il__trio-stat--${c}`} key={lbl}>
              <span className={`il__trio-stat-icon il__trio-stat-icon--${c}`}>{icon}</span>
              <div>
                <span className="il__trio-stat-val">{val}</span>
                <span className="il__trio-stat-lbl">{lbl}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="il__journey">
        <div className="il__journey-header">
          <div className="il__icon-pill il__icon-pill--support">
            <IconAward/><span>Learning Journey</span>
          </div>
          <h3 className="il__section-title">Your path to information mastery</h3>
          <p className="il__body">Four progressive stages — from awareness to lifelong practice.</p>
        </div>
        <div className="il__journey-track">
          <div className="il__journey-line"/>
          {[
            { step: "01", label: "Discover",   desc: "Identify what information you need and where to find it.",        icon: <IconSearch/>,  c: "primary"   },
            { step: "02", label: "Evaluate",   desc: "Assess credibility, bias, and relevance of every source.",        icon: <IconShield/>,  c: "secondary" },
            { step: "03", label: "Synthesise", desc: "Connect ideas across sources to form your own perspective.",      icon: <IconBook/>,    c: "accent"    },
            { step: "04", label: "Apply",      desc: "Use knowledge ethically — cite, share, and act responsibly.",     icon: <IconCompass/>, c: "support"   },
          ].map(({ step, label, desc, icon, c }) => (
            <div className={`il__journey-node il__journey-node--${c}`} key={step}>
              <div className={`il__journey-bubble il__journey-bubble--${c}`}>
                <span className="il__journey-step">{step}</span>
              </div>
              <div className="il__journey-card">
                <h4 className={`il__journey-label il__journey-icon--${c}`}>{label}</h4>
                <p className="il__journey-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SPOTLIGHT: Image + ring stats ── */}
      <section className="il__spotlight">
        <div className="il__spotlight-img-col">
          <img src={IMG.highlight} alt="NeuroLXP platform in action" className="il__spotlight-img" loading="lazy"/>
        </div>
        <div className="il__spotlight-content">
          <span className="il__eyebrow">Why NeuroLXP</span>
          <h3 className="il__section-title" style={{marginTop:"8px"}}>Built for the way learners actually think</h3>
          <p className="il__body">
            NeuroLXP&apos;s information literacy modules combine structured skill-building with
            real-world practice — so learners don&apos;t just know the theory, they live it.
          </p>
          <div className="il__rings">
            {[
              { pct: 92, label: "Source Accuracy",   c: "primary",   r: 30 },
              { pct: 87, label: "Critical Thinking",  c: "secondary", r: 30 },
              { pct: 95, label: "Ethical Usage",      c: "accent",    r: 30 },
            ].map(({ pct, label, c, r }) => {
              const circ = 2 * Math.PI * r;
              const dash = (pct / 100) * circ;
              const gap = circ - dash;
              return (
                <div className={`il__ring il__ring--${c}`} key={label}>
                  <svg viewBox="0 0 72 72" className="il__ring-svg">
                    <circle cx="36" cy="36" r={r} className="il__ring-track"/>
                    <circle cx="36" cy="36" r={r} className={`il__ring-fill il__ring-fill--${c}`} strokeDasharray={`${dash} ${gap}`} strokeDashoffset={0} transform="rotate(-90 36 36)" />
                  </svg>
                  <div className="il__ring-inner">
                    <span className={`il__ring-pct il__ring-pct--${c}`}>{pct}%</span>
                  </div>
                  <span className="il__ring-label">{label}</span>
                </div>
              );
            })}
          </div>
          <div className="il__spotlight-features">
            {[
              { icon: <IconStack/>, text: "Progressive skill modules — foundational to advanced",   c: "primary"   },
              { icon: <IconZap/>,   text: "Interactive activities that mirror real research tasks",  c: "secondary" },
              { icon: <IconStar/>,  text: "Assessments that validate and reinforce every skill",     c: "accent"    },
            ].map(({ icon, text, c }) => (
              <div className={`il__spotlight-feat il__spotlight-feat--${c}`} key={text}>
                <span className={`il__spotlight-feat-icon il__spotlight-feat-icon--${c}`}>{icon}</span>
                <span className="il__spotlight-feat-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
