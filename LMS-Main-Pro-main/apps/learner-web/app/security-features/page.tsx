import "./security-features.css";
import {
  FaShieldAlt,
  FaUserLock,
  FaLock,
  FaDatabase,
  FaEye,
  FaUserCheck,
  FaUserShield,
  FaSyncAlt,
  FaUniversity,
  FaSchool,
  FaBuilding,
  FaCertificate,
} from "react-icons/fa";

const protectionPoints = [
  "Encrypted data storage and secure communication",
  "Protection of learner profiles and course data",
  "Secure handling of assessments and records",
];

const roleBenefits = [
  "Protect sensitive data and course materials",
  "Control who can view, edit, or manage content",
  "Maintain structured access hierarchies",
];

const authPoints = [
  "Secure login verification",
  "Protection from unauthorized access",
  "Safe access for learners and administrators",
];

const ecosystem = [
  { icon: <FaUniversity />, label: "Universities" },
  { icon: <FaSchool />, label: "Schools" },
  { icon: <FaBuilding />, label: "Corporate Training" },
  { icon: <FaCertificate />, label: "Certification Programs" },
];

export default function SecurityFeatures() {
  return (
    <main className="security-page">
      <div className="security-breadcrumb-nav">
        <ol className="security-breadcrumb">
          <li className="security-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="security-breadcrumb-item active" aria-current="page">
            Security Features
          </li>
        </ol>
      </div>

      {/* HERO */}
      <section className="security-hero security-card">
        <div>
          <span className="security-badge">Security Features</span>
          <h1>Secure, Reliable, and Trusted Learning Environment</h1>
          <p>
            NeuroLXP is built with advanced security mechanisms to protect learner data,
            institutional content, and platform access in modern digital learning environments.
          </p>
        </div>

        <div className="security-visual">
          <div className="security-shield">
            <FaShieldAlt />
            <span>Secure LMS</span>
          </div>
        </div>
      </section>

      {/* DATA PROTECTION */}
      <section className="security-section">
        <h2>Advanced Data Protection</h2>
        <p>
          Strong data security standards safeguard learning data, ensuring confidentiality,
          integrity, and secure communication.
        </p>

        <div className="security-grid">
          {protectionPoints.map((item) => (
            <div className="security-item" key={item}>
              <FaDatabase />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ROLE BASED */}
      <section className="security-split">
        <div className="security-card">
          <div className="security-icon"><FaUserLock /></div>
          <h2>Role-Based Access Control</h2>
          <p>
            Access permissions ensure users only interact with relevant features and data.
          </p>

          <ul>
            {roleBenefits.map((item) => (
              <li key={item}>
                <FaEye />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="security-diagram">
          <div>Admin</div>
          <div>Instructor</div>
          <div>Learner</div>
          <div>Manager</div>
        </div>
      </section>

      {/* AUTH */}
      <section className="security-section security-card">
        <h2>Secure User Authentication</h2>

        <div className="security-auth-grid">
          {authPoints.map((item) => (
            <div key={item}>
              <FaLock />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT PROTECTION */}
      <section className="security-split">
        <div className="security-protect-box">
          <FaUserShield />
          <h3>Content Protection</h3>
          <p>
            Learning materials, videos, and documents are protected from misuse
            and unauthorized distribution.
          </p>
        </div>

        <div className="security-protect-box alt">
          <FaUserCheck />
          <h3>Compliance & Privacy</h3>
          <p>
            Aligned with data privacy standards ensuring responsible data handling
            and regulatory compliance.
          </p>
        </div>
      </section>

      {/* MONITORING */}
      <section className="security-section">
        <h2>Continuous Monitoring & Reliability</h2>
        <p>
          Real-time monitoring ensures platform stability, threat detection,
          and uninterrupted learning.
        </p>

        <div className="security-monitor">
          <FaSyncAlt />
          <span>Real-time monitoring & system health tracking</span>
        </div>
      </section>

      {/* SCALE */}
      <section className="security-section">
        <h2>Designed for Diverse Institutions</h2>

        <div className="security-scale-grid">
          {ecosystem.map((item) => (
            <div key={item.label}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL */}
      <section className="security-final security-card">
        <FaShieldAlt />
        <h2>NeuroLXP — Secure Learning for the Digital Age</h2>
        <p>
          With advanced security, protected data, and controlled access,
          NeuroLXP delivers a safe and reliable LMS experience.
        </p>
      </section>
    </main>
  );
}
