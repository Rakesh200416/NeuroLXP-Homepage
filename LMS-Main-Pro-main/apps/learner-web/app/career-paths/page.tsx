import "./career-paths.css";
import {
  FaRoute,
  FaUserGraduate,
  FaBrain,
  FaChartLine,
  FaBriefcase,
  FaCertificate,
  FaBullseye,
  FaLayerGroup,
  FaClipboardCheck,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const pathwayBenefits = [
  "Identify required skills for a career path",
  "Follow guided learning tracks",
  "Monitor progress toward career readiness",
  "Gain clarity on required competencies",
];

const skillPathways = [
  "Foundational knowledge modules",
  "Advanced skill development courses",
  "Practice-based assessments",
  "Real-world projects and case studies",
  "Industry-relevant certifications",
];

const aiRecommendations = [
  "Relevant courses and training modules",
  "Skill areas that need improvement",
  "Learning opportunities aligned with career goals",
  "Certifications that strengthen professional profiles",
];

const readinessMetrics = [
  "Skill development progress",
  "Career pathway milestones",
  "Assessment performance",
  "Certification achievements",
  "Readiness for industry roles",
];

const bridgeOutcomes = [
  "Student career preparedness",
  "Workforce readiness",
  "Industry-relevant skill development",
  "Long-term professional growth",
];

export default function CareerPathways() {
  return (
    <main className="career-page">
      <div className="career-breadcrumb-nav">
        <ol className="career-breadcrumb">
          <li className="career-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="career-breadcrumb-item active" aria-current="page">
            Career Pathways
          </li>
        </ol>
      </div>

      <section className="career-hero career-neumorphic-card">
        <div className="career-hero-content">
          <span className="career-eyebrow">Career Pathways for Learners</span>
          <h1>Guiding Learners from Education to Career Success</h1>
          <p>
            Learning becomes truly meaningful when it leads to real-world
            opportunities. NeuroLXP empowers learners with structured Career
            Pathways that connect skills, knowledge, and competencies to career
            goals.
          </p>
          <p>
            Through intelligent learning design and AI-driven guidance, NeuroLXP
            connects education with career outcomes, helping learners progress
            from foundational knowledge to professional readiness.
          </p>
        </div>

        <div className="career-path-visual">
          <div className="career-step">
            <FaUserGraduate />
            <span>Learn</span>
          </div>
          <div className="career-path-line"></div>
          <div className="career-step">
            <FaLayerGroup />
            <span>Build Skills</span>
          </div>
          <div className="career-path-line"></div>
          <div className="career-step">
            <FaBriefcase />
            <span>Career Ready</span>
          </div>
        </div>
      </section>

      <section className="career-open-section">
        <span>Purposeful Learning</span>
        <h2>Clear Learning Journeys Aligned with Career Goals</h2>
        <p>
          Career pathways help learners understand what to study, which skills
          to build, and how each learning milestone contributes to future
          professional opportunities.
        </p>
      </section>

      <section className="career-planning-section">
        <article className="career-neumorphic-card career-planning-card">
          <div className="career-icon-box">
            <FaRoute />
          </div>
          <h2>Personalized Career Path Planning</h2>
          <p>
            NeuroLXP enables institutions to design personalized career pathways
            that guide learners through the right sequence of courses, skills,
            and assessments for their chosen career.
          </p>

          <div className="career-check-grid">
            {pathwayBenefits.map((item) => (
              <div key={item}>
                <FaCheckCircle />
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </article>

        <article className="career-progress-card">
          <div className="career-progress-header">
            <span>Career Readiness</span>
            <FaChartLine />
          </div>

          <div className="career-progress-row">
            <p>Technical skills</p>
            <div>
              <strong className="career-progress-one"></strong>
            </div>
            <span>82%</span>
          </div>

          <div className="career-progress-row">
            <p>Project readiness</p>
            <div>
              <strong className="career-progress-two"></strong>
            </div>
            <span>74%</span>
          </div>

          <div className="career-progress-row">
            <p>Certification progress</p>
            <div>
              <strong className="career-progress-three"></strong>
            </div>
            <span>68%</span>
          </div>

          <div className="career-mini-card">
            <FaBullseye />
            <h3>Goal Tracking</h3>
            <p>Visual progress insights help learners stay focused.</p>
          </div>
        </article>
      </section>

      <section className="career-skill-section career-neumorphic-card">
        <div>
          <span className="career-eyebrow">Skill-Based Pathways</span>
          <h2>Build Skills Employers Are Looking For</h2>
          <p>
            NeuroLXP maps courses and training programmes directly to the
            competencies required in real-world professions.
          </p>
        </div>

        <div className="career-skill-timeline">
          {skillPathways.map((item, index) => (
            <div key={item} className="career-timeline-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="career-ai-layout">
        <article className="career-ai-panel career-neumorphic-card">
          <div className="career-icon-box career-ai-icon">
            <FaBrain />
          </div>
          <h2>AI-Guided Career Recommendations</h2>
          <p>
            With intelligent analytics and AI-powered insights, NeuroLXP can
            recommend career paths and learning tracks based on learner
            performance, interests, and academic progress.
          </p>
        </article>

        <article className="career-recommendation-grid">
          {aiRecommendations.map((item, index) => (
            <div key={item} className="career-recommendation-card">
              {index === 0 && <FaRocket />}
              {index === 1 && <FaClipboardCheck />}
              {index === 2 && <FaRoute />}
              {index === 3 && <FaCertificate />}
              <h4>{item}</h4>
            </div>
          ))}
        </article>
      </section>

      <section className="career-readiness-layout">
        <article className="career-neumorphic-card career-readiness-card">
          <div className="career-icon-box">
            <FaChartLine />
          </div>
          <h2>Progress Tracking for Career Readiness</h2>
          <p>
            NeuroLXP allows learners and educators to monitor pathway progress
            through visual dashboards and learning analytics.
          </p>

          <ul className="career-list">
            {readinessMetrics.map((item) => (
              <li key={item}>
                <FaArrowRight />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="career-neumorphic-card career-bridge-card">
          <div className="career-icon-box career-briefcase-icon">
            <FaBriefcase />
          </div>
          <h2>Bridging Education and Employment</h2>
          <p>
            NeuroLXP helps institutions prepare learners academically and
            professionally by connecting learning programmes with career
            pathways.
          </p>

          <div className="career-outcome-grid">
            {bridgeOutcomes.map((item) => (
              <div key={item}>
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="career-institution-section">
        <span>For Institutions and Educators</span>
        <h2>Outcome-Driven Education Programmes</h2>
        <p>
          Career pathway features help institutions align programmes with
          industry needs. Educators can design structured learning journeys that
          ensure learners graduate with both knowledge and practical skills.
        </p>
      </section>

      <section className="career-final-section career-neumorphic-card">
        <div className="career-final-icon">
          <FaRocket />
        </div>
        <h2>NeuroLXP — Enabling Learning Pathways that Lead to Real Careers</h2>
        <p>
          With structured career pathways, AI-guided learning recommendations,
          and skill-based progress tracking, NeuroLXP empowers learners to move
          confidently from learning to career success.
        </p>
      </section>
    </main>
  );
}
