import React from "react";
import {
  FaLandmark,
  FaUsers,
  FaGlobe,
  FaShieldAlt,
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaGraduationCap,
} from "react-icons/fa";
import "./State.css";

export default function StatesPage() {
  const highlights = [
    {
      icon: <FaUsers />,
      title: "Large Workforce Training",
      text: "Departments and regions",
    },
    {
      icon: <FaGraduationCap />,
      title: "Citizen Skill Development",
      text: "Career-ready programmes",
    },
    {
      icon: <FaShieldAlt />,
      title: "Policy Compliance",
      text: "Governance standards",
    },
  ];

  const challenges = [
    {
      icon: <FaUsers />,
      title: "Training Large Government Workforces",
      text: "State departments often need to train thousands of employees across administrative levels and geographic regions.",
      solution:
        "NeuroLXP enables centralized training management for structured learning, policy training, and administrative skill development.",
      color: "blue",
    },
    {
      icon: <FaGlobe />,
      title: "Skill Development for Citizens",
      text: "State governments run large skilling and vocational programmes to improve employability and workforce readiness.",
      solution:
        "NeuroLXP supports digital skilling programmes and career pathways through accessible online learning modules.",
      color: "green",
    },
    {
      icon: <FaShieldAlt />,
      title: "Policies and Regulations",
      text: "Government departments must ensure employees understand official procedures and regulatory frameworks.",
      solution:
        "NeuroLXP enables compliance training and policy education so staff stay informed about operational standards.",
      color: "orange",
    },
    {
      icon: <FaBuilding />,
      title: "Multiple Departments",
      text: "Departments such as education, healthcare, finance, administration, and public services have unique training needs.",
      solution:
        "The platform provides a centralized learning ecosystem with department-level management and unified reporting.",
      color: "purple",
    },
    {
      icon: <FaChartLine />,
      title: "Participation and Outcomes",
      text: "Monitoring participation and evaluating programme impact can be complex across large public systems.",
      solution:
        "Advanced analytics help administrators track engagement, completion, and assessment outcomes.",
      color: "cyan",
    },
  ];

  const benefits = [
    "Deliver large-scale training programmes efficiently",
    "Support workforce development and citizen skilling",
    "Maintain consistent policy and compliance training",
    "Monitor training performance through analytics",
    "Scale learning across departments and regions",
  ];

  return (
    <main className="states-page">
      <div className="states-breadcrumb-nav">
        <ol className="states-breadcrumb">
          <li className="states-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="states-breadcrumb-item active" aria-current="page">
            Government & State Institutions
          </li>
        </ol>
      </div>

      <section className="states-hero">
        <div className="states-hero-content">
          <span className="states-badge">
            <FaLandmark /> Government & State Institutions
          </span>

          <h1>Government & State Institutions</h1>

          <h2>Empowering State-Level Learning and Skill Development</h2>

          <p>
            State governments and public sector institutions play a critical
            role in education, workforce development, governance training, and
            citizen skill development programmes.
          </p>

          <p>
            NeuroLXP provides a scalable Learning Experience Platform designed
            for public institutions to deliver structured learning programmes,
            compliance training, and skill development initiatives at scale.
          </p>

          <button className="states-btn">
            Explore Public Sector Learning <FaArrowRight />
          </button>
        </div>

        <div className="states-terminal">
          <div className="terminal-top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="terminal-body">
            <p>$ start state-learning-platform</p>
            <p>&gt; Loading department training...</p>
            <p>&gt; Building citizen skilling pathways...</p>
            <p>&gt; Tracking compliance and outcomes...</p>
            <strong>Public sector learning activated.</strong>
          </div>
        </div>
      </section>

      <section className="states-highlight-strip">
        {highlights.map((item, index) => (
          <div className="states-highlight" key={index}>
            <div>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="states-section-heading">
        <h2>Addressing Key Challenges in State-Level Training</h2>
        <p>
          NeuroLXP helps governments manage learning across employees,
          departments, regions, and citizens through one scalable digital
          ecosystem.
        </p>
      </section>

      <section className="states-challenge-grid">
        {challenges.map((item, index) => (
          <article className={`states-challenge-card ${item.color}`} key={index}>
            <div className="states-card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>

            <div className="states-solution">
              <span>How NeuroLXP Helps</span>
              <p>{item.solution}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="states-skill-panel">
        <div>
          <span className="states-badge dark">Benefits for State Governments</span>
          <h2>State institutions using NeuroLXP can scale learning with clarity.</h2>
          <p>
            These capabilities help public institutions improve workforce
            readiness, citizen education, compliance, and service delivery.
          </p>
        </div>

        <div className="states-benefit-list">
          {benefits.map((benefit, index) => (
            <span key={index}>
              <FaCheckCircle />
              {benefit}
            </span>
          ))}
        </div>
      </section>

      <section className="states-bottom">
        <div className="states-image-placeholder">
          <img
            src="/pexels-droosmo-2982449.jpg"
            alt="Public sector learning dashboard"
          />
        </div>

        <div>
          <h2>Enabling Digital Transformation in Public Sector Learning</h2>
          <p>
            By leveraging modern learning technologies, state governments can
            strengthen workforce capabilities, improve service delivery, and
            empower citizens through accessible learning opportunities.
          </p>
          <p>
            NeuroLXP helps public institutions build scalable,
            technology-enabled learning ecosystems that support governance,
            workforce development, and citizen education.
          </p>
        </div>
      </section>

      <section className="states-footer">
        <h2>NeuroLXP — Powering Learning for State Governments and Public Institutions</h2>
        <p>
          With scalable digital learning capabilities, structured training
          programmes, and advanced analytics, NeuroLXP enables state governments
          to deliver impactful learning initiatives that drive workforce
          development and public sector excellence.
        </p>
      </section>
    </main>
  );
}
