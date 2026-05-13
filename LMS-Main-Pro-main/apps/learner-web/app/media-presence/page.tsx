import "./media-presence.css";

const supportPoints = [
  "AI-powered learning innovation",
  "Interactive and gamified learning experiences",
  "Scalable digital learning ecosystems",
  "Skill-based education and workforce development",
];

const leadershipTopics = [
  "The future of digital education",
  "AI in learning and content curation",
  "Modern LMS and LXP technologies",
  "Workforce upskilling and reskilling",
  "Digital transformation in education and enterprises",
];

const sectors = [
  "Higher education",
  "Corporate training",
  "Government workforce development",
  "Healthcare and professional education",
];

export default function MediaPresence() {
  return (
    <main className="media-page">
      <div className="media-breadcrumb-nav">
        <ol className="media-breadcrumb">
          <li className="media-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="media-breadcrumb-item active" aria-current="page">
            Media Presence
          </li>
        </ol>
      </div>

      <section className="media-hero">
        <div className="hero-content neumorphic-card hover-card">
          <span className="eyebrow">Media Presence</span>
          <h1>Recognized Innovation in Digital Learning</h1>
          <p>
            NeuroLXP is gaining recognition across the education and technology
            landscape for its innovative approach to digital learning,
            AI-powered content intelligence, and interactive learning experiences.
          </p>
          <p>
            Through industry collaborations, thought leadership, and product
            innovation, NeuroLXP continues to build a strong presence in the
            EdTech ecosystem.
          </p>
        </div>

        <div className="image-placeholder hero-image">
          <img
            src="/pexels-thefullonmonet-17609924.jpg"
            alt="Learners using digital learning resources"
            className="placeholder-image"
          />
        </div>
      </section>

      <section className="text-section">
        <h2>Building a Strong EdTech Presence</h2>
        <p>
          NeuroLXP continues to strengthen its position in the digital learning
          ecosystem through innovation, collaboration, and active participation
          in industry conversations.
        </p>
      </section>

      <section className="media-grid">
        <article className="neumorphic-card hover-card">
          <h2>Featured in Industry Conversations</h2>
          <p>
            NeuroLXP is actively contributing to discussions around the future of
            Learning Experience Platforms, AI-driven education, digital learning
            transformation, and workforce upskilling.
          </p>

          <div className="pill-wrap">
            {supportPoints.map((item) => (
              <span className="soft-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="neumorphic-card hover-card image-card">
          <div className="image-placeholder">
            <img
              src="/pexels-a-darmel-9040282.jpg"
              alt="Learners using digital learning resources"
              className="placeholder-image"
            />
          </div>
        </article>
      </section>

      <section className="open-content-section">
        <div>
          <span className="section-label">Thought Leadership</span>
          <h2>Shaping Modern Digital Learning</h2>
        </div>
        <p>
          By sharing expertise and insights, NeuroLXP contributes to the future
          of technology-enabled learning environments across education,
          enterprise learning, and workforce development.
        </p>
      </section>

      <section className="media-grid">
        <article className="neumorphic-card inset-card hover-card">
          <h2>Thought Leadership in EdTech</h2>
          <p>
            The NeuroLXP team regularly participates in industry dialogues
            focused on:
          </p>

          <ul>
            {leadershipTopics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="neumorphic-card hover-card">
          <h2>Partnerships and Collaborations</h2>
          <p>
            NeuroLXP collaborates with educational institutions, industry
            partners, training organizations, and technology innovators to
            advance digital learning solutions and improve learning outcomes.
          </p>

          <div className="sector-grid">
            {sectors.map((sector) => (
              <div className="sector-box" key={sector}>
                <h4>{sector}</h4>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="future-section neumorphic-card hover-card">
        <h2>Building the Future of Learning</h2>
        <p>
          As digital learning continues to evolve, NeuroLXP remains committed to
          innovation, collaboration, and excellence in learning technology. Our
          growing media presence reflects our mission to transform learning
          experiences and empower organizations to build smarter, more engaging
          learning ecosystems.
        </p>
        <h3>NeuroLXP — Driving Innovation in the Future of Digital Learning.</h3>
      </section>
    </main>
  );
}
