import "./training-management.css";
import {
  FaBrain,
  FaDatabase,
  FaChartLine,
  FaLayerGroup,
  FaRocket,
  FaCheckCircle,
  FaCogs,
  FaUserGraduate,
  FaPlay,
} from "react-icons/fa";

export default function NeuroLXP() {
  return (
    <main className="nlxp-page">
      <div className="nlxp-breadcrumb-nav">
        <ol className="nlxp-breadcrumb">
          <li className="nlxp-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="nlxp-breadcrumb-item active" aria-current="page">
            Training Management
          </li>
        </ol>
      </div>

      {/* HERO */}
      <section className="nlxp-section">
        <div className="nlxp-container nlxp-center">
          <h1>Smarter Training Management with NeuroLXP</h1>
          <p>
            Transform how your organization learns with NeuroLXP, an AI-powered
            Learning Experience Platform built for personalized, scalable, and
            data-driven training management.
          </p>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="nlxp-section">
        <div className="nlxp-container">
          <span className="nlxp-badge">CORE FEATURES</span>

          <div className="nlxp-grid-4">
            <div className="nlxp-card">
              <FaBrain className="nlxp-icon" />
              <h3>AI-Powered Learning</h3>
              <p>Personalized training with adaptive learning paths.</p>
            </div>

            <div className="nlxp-card">
              <FaDatabase className="nlxp-icon" />
              <h3>Centralized Training</h3>
              <p>Manage all training content in one platform.</p>
            </div>

            <div className="nlxp-card">
              <FaChartLine className="nlxp-icon" />
              <h3>Real-Time Analytics</h3>
              <p>Track learner progress with actionable insights.</p>
            </div>

            <div className="nlxp-card">
              <FaLayerGroup className="nlxp-icon" />
              <h3>Skill Development</h3>
              <p>Upskill employees aligned with business goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="nlxp-section">
        <div className="nlxp-container nlxp-two">
          <div>
            <span className="nlxp-badge">WHY NEUROLXP</span>
            <h2>Upgrade from LMS to NeuroLXP</h2>
            <p>
              Unlike traditional systems, NeuroLXP focuses on learning experience,
              not just management. Drive higher engagement, faster onboarding,
              and continuous workforce development.
            </p>
          </div>

          <div className="nlxp-list">
            <div className="nlxp-pill"><FaCheckCircle /> Faster onboarding</div>
            <div className="nlxp-pill"><FaCheckCircle /> Scalable teams</div>
            <div className="nlxp-pill"><FaCheckCircle /> Compliance tracking</div>
            <div className="nlxp-pill"><FaCheckCircle /> Continuous learning</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="nlxp-section">
        <div className="nlxp-container">
          <span className="nlxp-badge">HOW IT WORKS</span>

          <div className="nlxp-timeline">
            <div className="nlxp-step">
              <FaCogs />
              <p>Create or integrate training content</p>
            </div>
            <div className="nlxp-step">
              <FaUserGraduate />
              <p>Assign personalized learning paths</p>
            </div>
            <div className="nlxp-step">
              <FaPlay />
              <p>Engage learners with AI-driven experiences</p>
            </div>
            <div className="nlxp-step">
              <FaChartLine />
              <p>Track and optimize with analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nlxp-section">
        <div className="nlxp-container">
          <div className="nlxp-cta">
            <FaRocket className="nlxp-cta-icon" />
            <h2>Ready to transform training with NeuroLXP?</h2>
            <p>
              Empower your workforce with a modern training system designed for the future.
            </p>

            <div className="nlxp-actions">
              <button className="nlxp-btn">Book a Demo</button>
              <button className="nlxp-btn nlxp-btn-primary">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
