import "./Government.css";
import {
  FaLandmark,
  FaChartLine,
  FaUsers,
  FaRegLightbulb,
  FaGraduationCap,
  FaClipboardCheck,
  FaCheck,
  FaRocket,
} from "react-icons/fa";

const challenges = [
  {
    number: "01",
    Icon: FaUsers,
    title: "Large and Distributed Government Workforces",
    text: "Government agencies often operate across multiple departments and geographical regions, making it difficult to deliver consistent training programs.",
    help: "NeuroLXP provides a centralized digital learning platform where government bodies can deliver standardized training programs to employees across departments, districts, and state-level offices.",
  },
  {
    number: "02",
    Icon: FaRegLightbulb,
    title: "Rapid Policy and Technology Changes",
    text: "Public sector employees must stay updated with evolving policies, regulations, digital governance initiatives, and administrative practices.",
    help: "NeuroLXP enables governments to deliver policy training, governance modules, and technology skill programs that ensure employees remain informed and capable of implementing new initiatives effectively.",
  },
  {
    number: "03",
    Icon: FaGraduationCap,
    title: "Continuous Skill Development for Public Sector Employees",
    text: "Government workforces increasingly require skills in areas such as digital governance, data management, public administration, and citizen service delivery.",
    help: "Through skill-based learning programs and career development pathways, NeuroLXP supports continuous professional development for government employees at all levels.",
  },
  {
    number: "04",
    Icon: FaClipboardCheck,
    title: "Monitoring Training Effectiveness",
    text: "Government institutions need clear insights into whether workforce training programs are delivering meaningful results.",
    help: "NeuroLXP provides advanced analytics and reporting dashboards that allow administrators to track participation, training completion, skill development, and program impact across departments.",
  },
];

const useCases = [
  "Public administration and governance training",
  "Policy awareness and regulatory compliance programs",
  "Digital governance and technology adoption training",
  "Leadership development for government officials",
  "Skill development for public service delivery",
  "Citizen-focused service training",
];

const benefits = [
  "Upskill employees across departments and regions",
  "Deliver consistent policy and governance training",
  "Support digital transformation initiatives",
  "Improve workforce efficiency and service delivery",
  "Track learning outcomes through data-driven insights",
];

export default function Government() {
  return (
    <main className="gov-page">
      <div className="gov-breadcrumb-nav">
        <ol className="gov-breadcrumb">
          <li className="gov-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="gov-breadcrumb-item active" aria-current="page">
            Government
          </li>
        </ol>
      </div>

      <section className="gov-hero">
        <div className="gov-container gov-hero-grid">
          <div className="gov-hero-content">
            <span className="gov-badge">Government</span>
            <h1>Enabling Governments to Upskill and Empower Their Workforce</h1>
            <p>
              Government institutions play a vital role in delivering public
              services, implementing policies, and driving national development.
              To perform these responsibilities effectively, public sector
              employees must continuously update their skills, adapt to new
              technologies, and stay informed about evolving policies and
              regulations.
            </p>
            <p>
              NeuroLXP enables governments to build a skilled, knowledgeable,
              and future-ready workforce through structured digital learning and
              upskilling programs.
            </p>
          </div>

          <div className="gov-image-placeholder">
            <div className="gov-placeholder-icon">
              <FaLandmark />
            </div>
            <h3>Government Workforce Learning</h3>
            <p>
              Image placeholder for public sector training, policy learning, and
              workforce transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container gov-two-column">
          <div className="gov-image-placeholder gov-image-green">
            <div className="gov-placeholder-icon">
              <FaChartLine />
            </div>
            <h3>Training Analytics Dashboard</h3>
            <p>
              Image placeholder for dashboards, reporting, employee progress,
              and department-level insights.
            </p>
          </div>

          <div className="gov-content-card">
            <span className="gov-badge">Scalable LXP</span>
            <h2>Structured Learning for Public Sector Teams</h2>
            <p>
              With a scalable Learning Experience Platform (LXP) for government
              training, NeuroLXP helps public sector organizations deliver
              training programs efficiently across departments, regions, and
              administrative levels.
            </p>
          </div>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container">
          <div className="gov-section-head">
            <span className="gov-badge">Challenges</span>
            <h2>Addressing Key Challenges in Government Workforce Development</h2>
          </div>

          <div className="gov-challenge-grid">
            {challenges.map(({ Icon, ...item }) => (
              <article className="gov-challenge-card" key={item.number}>
                <div className="gov-card-top">
                  <span className="gov-card-icon">
                    <Icon />
                  </span>
                </div>
                <h3>Challenge: {item.title}</h3>
                <p>{item.text}</p>
                <div className="gov-solution-box">
                  <h4>How NeuroLXP Helps</h4>
                  <p>{item.help}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container">
          <div className="gov-section-head">
            <span className="gov-badge">Use Cases</span>
            <h2>Key Government Learning Use Cases</h2>
            <p>
              Governments can use NeuroLXP to support a wide range of workforce
              development initiatives.
            </p>
          </div>

          <div className="gov-timeline">
            {useCases.map((useCase, index) => (
              <div className="gov-timeline-item" key={useCase}>
                <div className="gov-timeline-marker">{index + 1}</div>
                <div className="gov-timeline-card">
                  <h3>{useCase}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gov-section">
        <div className="gov-container">
          <div className="gov-section-head">
            <span className="gov-badge">Benefits</span>
            <h2>Benefits for Government Institutions</h2>
          </div>

          <div className="gov-benefits-list">
            {benefits.map((benefit) => (
              <div className="gov-benefit-item" key={benefit}>
                <span className="gov-check-icon">
                  <FaCheck />
                </span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gov-section gov-final-section">
        <div className="gov-container">
          <div className="gov-cta">
            <span className="gov-cta-icon">
              <FaRocket />
            </span>
            <h2>NeuroLXP — Powering Government Workforce Transformation</h2>
            <p>
              By enabling structured learning programs, scalable digital training
              delivery, and data-driven workforce development, NeuroLXP helps
              governments build capable public sector teams that are prepared to
              meet the challenges of modern governance.
            </p>
            <a href="/" className="gov-btn gov-btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
