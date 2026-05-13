import "./accessibility-inclusivity.css";
import {
  FaUniversalAccess,
  FaEye,
  FaAssistiveListeningSystems,
  FaKeyboard,
  FaHandsHelping,
  FaBookOpen,
  FaVideo,
  FaImage,
  FaHeadphones,
  FaUsers,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

const accessibilityPoints = [
  "Navigate the platform with ease",
  "Access learning materials in multiple formats",
  "Engage with content through various interaction methods",
  "Participate in assessments without limitations",
];

const formats = [
  { icon: <FaBookOpen />, label: "Text & structured notes" },
  { icon: <FaVideo />, label: "Video lessons" },
  { icon: <FaImage />, label: "Visual learning aids" },
  { icon: <FaHeadphones />, label: "Audio-supported content" },
];

const inclusivityPoints = [
  "Equal participation in discussions",
  "Diverse perspectives and collaboration",
  "Respectful learning environments",
];

const institutionSupport = [
  "Deliver accessible online courses",
  "Create inclusive learning environments",
  "Support learners with diverse abilities",
  "Expand learning opportunities globally",
];

export default function AccessibilityInclusivity() {
  return (
    <main className="access-page">
      <div className="access-breadcrumb-nav">
        <ol className="access-breadcrumb">
          <li className="access-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="access-breadcrumb-item active" aria-current="page">
            Accessibility &amp; Inclusivity
          </li>
        </ol>
      </div>

      {/* HERO */}
      <section className="access-hero">
        <div>
          <span className="access-badge">Accessibility & Inclusivity</span>
          <h1>Learning Designed for Everyone</h1>
          <p>
            NeuroLXP ensures every learner can engage, learn, and succeed
            through inclusive design and accessible learning experiences.
          </p>
        </div>

        <div className="access-hero-icon">
          <FaUniversalAccess />
        </div>
      </section>

      {/* ACCESSIBILITY FEATURES */}
      <section className="access-section">
        <h2>Accessible Learning for Diverse Needs</h2>
        <p>
          Designed to make learning materials easier to access, navigate,
          and understand for all learners.
        </p>

        <div className="access-feature-grid">
          {accessibilityPoints.map((item) => (
            <div key={item}>
              <FaEye />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FORMATS */}
      <section className="access-formats">
        <h2>Multiple Content Formats for Flexible Learning</h2>

        <div className="access-format-grid">
          {formats.map((item) => (
            <div key={item.label}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INCLUSIVE LEARNING */}
      <section className="access-split">
        <div className="access-card">
          <FaUsers />
          <h3>Inclusive Learning Experiences</h3>
          <p>
            Collaborative tools allow learners to share ideas and contribute
            meaningfully to learning environments.
          </p>

          <ul>
            {inclusivityPoints.map((item) => (
              <li key={item}>
                <FaHandsHelping />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="access-visual">
          <FaGlobe />
          <span>Global & Inclusive Learning</span>
        </div>
      </section>

      {/* INSTITUTIONS */}
      <section className="access-section">
        <h2>Supporting Institutions in Inclusive Education</h2>

        <div className="access-institution-grid">
          {institutionSupport.map((item) => (
            <div key={item}>
              <FaKeyboard />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section className="access-final">
        <FaHeart />
        <h2>NeuroLXP — Empowering Inclusive Learning</h2>
        <p>
          NeuroLXP helps institutions create learning ecosystems where every
          learner has the opportunity to succeed without barriers.
        </p>
      </section>
    </main>
  );
}
