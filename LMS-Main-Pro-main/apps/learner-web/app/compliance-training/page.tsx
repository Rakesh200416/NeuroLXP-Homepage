import "./compliance-training.css";
import {
  FaShieldAlt,
  FaClipboardCheck,
  FaUsersCog,
  FaBuilding,
  FaLock,
  FaBalanceScale,
  FaLeaf,
  FaHeartbeat,
  FaChartBar,
  FaCertificate,
  FaFileAlt,
  FaCheckCircle,
  FaArrowRight,
  FaUserShield,
} from "react-icons/fa";

const managementPoints = [
  "Maintain consistent compliance training across teams",
  "Deliver mandatory regulatory courses efficiently",
  "Monitor training completion and certification status",
  "Maintain documentation for audits and inspections",
];

const complianceTypes = [
  {
    icon: <FaHeartbeat />,
    title: "Workplace Safety",
    text: "Health, safety, and workplace regulation training.",
  },
  {
    icon: <FaLock />,
    title: "Data Privacy",
    text: "Cybersecurity and privacy compliance learning.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Corporate Ethics",
    text: "Code of conduct and ethical workplace practices.",
  },
  {
    icon: <FaUserShield />,
    title: "Workplace Conduct",
    text: "Anti-harassment and conduct policy training.",
  },
  {
    icon: <FaBuilding />,
    title: "Financial Compliance",
    text: "Regulatory and financial standards training.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    text: "Environmental and sustainability compliance.",
  },
];

const interactiveModules = [
  "Scenario-based learning activities",
  "Interactive quizzes and assessments",
  "Case studies based on real-world situations",
  "Gamified learning elements",
  "Knowledge checks and certification tests",
];

const reportItems = [
  "Course completion rates",
  "Certification status",
  "Assessment performance",
  "Compliance participation",
  "Department-level compliance metrics",
];

const organizationTypes = [
  "Corporate enterprises",
  "Healthcare organizations",
  "Financial institutions",
  "Manufacturing industries",
  "Government agencies",
  "Educational institutions",
];

export default function ComplianceTraining() {
  return (
    <main className="compliance-page">
      <div className="compliance-breadcrumb-nav">
        <ol className="compliance-breadcrumb">
          <li className="compliance-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="compliance-breadcrumb-item active" aria-current="page">
            Compliance Training
          </li>
        </ol>
      </div>

      <section className="compliance-hero compliance-card">
        <div className="compliance-hero-content">
          <span className="compliance-eyebrow">Compliance Training Modules</span>
          <h1>Ensure Regulatory Compliance with Structured Digital Training</h1>
          <p>
            Organizations today must comply with numerous industry regulations,
            safety standards, and legal requirements.
          </p>
          <p>
            NeuroLXP enables institutions and enterprises to deliver structured
            Compliance Training Modules that help employees and learners
            understand policies, follow guidelines, and maintain organizational
            standards.
          </p>
        </div>

        <div className="compliance-hero-visual">
          <div className="compliance-shield">
            <FaShieldAlt />
            <span>Compliant</span>
          </div>

          <div className="compliance-mini-tile compliance-tile-one">
            <FaCertificate />
            <span>Certified</span>
          </div>

          <div className="compliance-mini-tile compliance-tile-two">
            <FaChartBar />
            <span>Tracked</span>
          </div>

          <div className="compliance-mini-tile compliance-tile-three">
            <FaFileAlt />
            <span>Audit Ready</span>
          </div>
        </div>
      </section>

      <section className="compliance-intro">
        <span>Smart Compliance LMS</span>
        <h2>Systematic, Measurable, and Easy to Manage</h2>
        <p>
          Through a robust LMS for compliance training, NeuroLXP ensures that
          compliance learning becomes structured, trackable, and scalable across
          teams and departments.
        </p>
      </section>

      <section className="compliance-management-layout">
        <article className="compliance-card compliance-management-card">
          <div className="compliance-icon-box">
            <FaUsersCog />
          </div>
          <h2>Centralized Compliance Training Management</h2>
          <p>
            Administrators can design, assign, and track mandatory training
            modules across departments, ensuring every learner completes the
            required courses.
          </p>

          <div className="compliance-check-list">
            {managementPoints.map((point) => (
              <div key={point}>
                <FaCheckCircle />
                <h4>{point}</h4>
              </div>
            ))}
          </div>
        </article>

        <article className="compliance-status-panel">
          <div className="compliance-status-header">
            <span>Compliance Readiness</span>
            <FaClipboardCheck />
          </div>

          <div className="compliance-status-row">
            <p>Training completion</p>
            <div>
              <strong className="compliance-progress-one"></strong>
            </div>
            <span>92%</span>
          </div>

          <div className="compliance-status-row">
            <p>Certification status</p>
            <div>
              <strong className="compliance-progress-two"></strong>
            </div>
            <span>86%</span>
          </div>

          <div className="compliance-status-row">
            <p>Audit documentation</p>
            <div>
              <strong className="compliance-progress-three"></strong>
            </div>
            <span>95%</span>
          </div>
        </article>
      </section>

      <section className="compliance-section-heading">
        <h2>Industry-Specific Compliance Training</h2>
        <p>
          NeuroLXP supports compliance programmes aligned with local regulations,
          global standards, and industry best practices.
        </p>
      </section>

      <section className="compliance-type-grid">
        {complianceTypes.map((item) => (
          <article className="compliance-type-card" key={item.title}>
            <div className="compliance-type-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="compliance-learning-section compliance-card">
        <div>
          <span className="compliance-eyebrow">Interactive Learning</span>
          <h2>Make Compliance Training Engaging</h2>
          <p>
            NeuroLXP transforms traditional compliance learning into engaging
            digital training experiences using interactive formats.
          </p>
        </div>

        <div className="compliance-module-list">
          {interactiveModules.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="compliance-report-layout">
        <article className="compliance-card compliance-report-card">
          <div className="compliance-icon-box compliance-report-icon">
            <FaChartBar />
          </div>
          <h2>Automated Tracking and Reporting</h2>
          <p>
            Advanced analytics and reporting tools allow organizations to monitor
            compliance training progress in real time and simplify regulatory
            audits.
          </p>

          <ul className="compliance-report-list">
            {reportItems.map((item) => (
              <li key={item}>
                <FaArrowRight />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="compliance-card compliance-certificate-card">
          <div className="compliance-icon-box compliance-certificate-icon">
            <FaCertificate />
          </div>
          <h2>Certification and Audit Readiness</h2>
          <p>
            NeuroLXP can automatically issue digital certificates and maintain
            verifiable training records for regulatory audits, internal reviews,
            and compliance checks.
          </p>
        </article>
      </section>

      <section className="compliance-scale-section">
        <div className="compliance-section-heading">
          <h2>Scalable Compliance Training for Organizations</h2>
          <p>
            NeuroLXP supports compliance learning across thousands of learners
            while maintaining regulatory standards.
          </p>
        </div>

        <div className="compliance-scale-grid">
          {organizationTypes.map((item) => (
            <div key={item}>
              <FaBuilding />
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="compliance-final compliance-card">
        <div className="compliance-final-icon">
          <FaShieldAlt />
        </div>
        <h2>NeuroLXP — Simplifying Compliance Training Through Smart Digital Learning</h2>
        <p>
          With structured compliance modules, automated tracking, and powerful
          analytics, NeuroLXP helps organizations maintain regulatory compliance
          while building a culture of awareness, responsibility, and ethical
          practice.
        </p>
      </section>
    </main>
  );
}
