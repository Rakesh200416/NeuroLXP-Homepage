import {
  FaBookOpen,
  FaGraduationCap,
  FaChartBar,
  FaUsers,
  FaBuilding,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";
import "./standards-training.css";

export default function StandardsTraining() {
  return (
    <main className="standards-page">
      <div className="standards-breadcrumb-nav">
        <ol className="standards-breadcrumb">
          <li className="standards-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="standards-breadcrumb-item active" aria-current="page">
            Standards Training
          </li>
        </ol>
      </div>

      <section className="standards-hero">
        <div className="standards-hero-content">
          <span className="standards-badge">Standards Training</span>
          <h1>Standards Training</h1>
          <h2>Empowering Institutions with Industry-Ready Learning Standards</h2>
          <p>
            Standards Training is designed to elevate the quality, consistency,
            and effectiveness of learning across universities, colleges,
            training institutes, and corporate environments.
          </p>
          <p>
            By aligning educational delivery with globally recognised standards,
            institutions can ensure better learning outcomes, improved
            employability, and scalable academic excellence.
          </p>
        </div>

        <div className="standards-visual">
          <FaGraduationCap />
          <h4>Faculty and students in a structured learning environment</h4>
          <div className="standards-tags">
            <span>Outcome-Based Learning</span>
            <span>Accreditation Ready</span>
            <span>Faculty Development</span>
          </div>
        </div>
      </section>

      <section className="standards-intro">
        <h2>Why Standards Training Matters</h2>
        <p>
          Consistent quality across courses and faculty is essential for
          institutional success. A structured standards framework helps
          institutions improve delivery, outcomes, and long-term academic value.
        </p>

        <div className="standards-points">
          <div>
            <FaCheckCircle />
            <p>Align curriculum with accreditation and industry requirements</p>
          </div>
          <div>
            <FaCheckCircle />
            <p>Improve student performance and faculty development</p>
          </div>
          <div>
            <FaCheckCircle />
            <p>Ensure compliance with academic and regulatory frameworks</p>
          </div>
        </div>

        <p>
          A well-structured standards framework is the foundation of
          institutional excellence and learner success.
        </p>
      </section>

      <section className="standards-features">
        <article className="standards-card">
          <div className="standards-icon">
            <FaBookOpen />
          </div>
          <div>
            <h3>Standardised Curriculum Framework</h3>
            <p>
              Design and implement structured, outcome-based curricula that
              align with global education standards. A cohesive curriculum
              framework ensures every course, module, and assessment meets
              defined quality benchmarks.
            </p>
            <span>Curriculum framework planning with structured modules</span>
            <p>
              Outcome-based design connects each learning activity to measurable
              competencies, making programmes easier to evaluate and improve.
            </p>
          </div>
        </article>

        <article className="standards-card">
          <div className="standards-icon">
            <FaUsers />
          </div>
          <div>
            <h3>Faculty Training & Development</h3>
            <p>
              Equip educators with modern teaching strategies, digital tools,
              and assessment techniques that align with evolving academic
              standards and student expectations.
            </p>
            <ul>
              <li>Improved teaching effectiveness and methodology</li>
              <li>Access to standardised resources and digital tools</li>
              <li>Better student engagement and feedback loops</li>
            </ul>
            <p>
              Empowered educators are the cornerstone of any successful
              standards-driven institution.
            </p>
          </div>
        </article>

        <article className="standards-card">
          <div className="standards-icon">
            <FaChartBar />
          </div>
          <div>
            <h3>Assessment, Evaluation & Accreditation</h3>
            <p>
              Create consistent evaluation models with automated grading and
              analytics. Simplify accreditation processes with structured
              reporting and documentation that meet regulatory frameworks.
            </p>
            <span>Assessment analytics dashboard for accreditation</span>
            <p>
              Automated reporting reduces administrative burden, letting
              educators focus on teaching while staying fully compliant.
            </p>
          </div>
        </article>
      </section>

      <section className="benefits-section">
        <div className="benefits-heading">
          <h2>Benefits for Stakeholders</h2>
          <p>
            Standards Training delivers measurable value across every role in
            the educational ecosystem.
          </p>
        </div>

        <div className="benefits-grid">
          <div>
            <FaGraduationCap />
            <h4>For Students</h4>
            <p>High-quality structured learning</p>
            <p>Better career readiness</p>
            <p>Transparent evaluation and grading</p>
          </div>

          <div>
            <FaBuilding />
            <h4>For Universities & Colleges</h4>
            <p>Academic consistency across departments</p>
            <p>Improved rankings and reputation</p>
            <p>Faster accreditation processes</p>
          </div>

          <div>
            <FaUsers />
            <h4>For Faculty & Trainers</h4>
            <p>Improved teaching effectiveness</p>
            <p>Standardised resources and tools</p>
            <p>Better engagement and feedback</p>
          </div>

          <div>
            <FaBriefcase />
            <h4>For Training Institutes</h4>
            <p>Industry-aligned training programs</p>
            <p>Scalable training delivery</p>
            <p>Higher placement success rates</p>
          </div>
        </div>
      </section>

      <section className="standards-final">
        <div className="final-visual">
          <img
            src="/pexels-pavel-danilyuk-8761325.jpg"
            alt="Learners using digital learning resources"
            className="placeholder-image"
          />
        </div>

        <div>
          <h2>LearnHub — Transform Your Learning Ecosystem</h2>
          <p>
            Adopt Standards Training to build a future-ready learning
            environment that meets global benchmarks. LearnHub delivers
            structured, high-quality training programmes supported by powerful
            digital tools and outcome-based analytics.
          </p>
          <p>
            Start implementing structured, high-quality training today and
            position your institution at the forefront of academic excellence
            and industry relevance.
          </p>

          <div className="final-tags">
            <span>Standardised Curriculum</span>
            <span>OBE Analytics</span>
            <span>Accreditation Support</span>
          </div>
        </div>
      </section>
    </main>
  );
}
