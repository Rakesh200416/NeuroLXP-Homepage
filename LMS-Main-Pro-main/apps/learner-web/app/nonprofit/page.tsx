import React from "react";
import {
  FaHandsHelping,
  FaUsers,
  FaGlobe,
  FaBookOpen,
  FaChartLine,
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight,
  FaSeedling,
  FaBullhorn,
  FaClipboardCheck,
} from "react-icons/fa";
import "./Nonprofit.css";

export default function NonprofitPage() {
  const challenges = [
    {
      icon: <FaUsers />,
      title: "Distributed Volunteers and Staff",
      text: "Train teams working across different regions with consistent learning access.",
    },
    {
      icon: <FaSeedling />,
      title: "Limited Training Resources",
      text: "Create reusable digital modules that reduce cost and reach more learners.",
    },
    {
      icon: <FaBookOpen />,
      title: "Knowledge Transfer",
      text: "Capture institutional knowledge and share it with teams and volunteers.",
    },
    {
      icon: <FaChartLine />,
      title: "Measuring Training Impact",
      text: "Track participation, learner progress, and programme effectiveness.",
    },
  ];

  const useCases = [
    "Volunteer onboarding and orientation",
    "Community education programmes",
    "Leadership development for nonprofit teams",
    "Skill development for beneficiaries",
    "Awareness and advocacy training",
    "Compliance and policy education",
  ];

  const benefits = [
    "Train volunteers and staff across locations",
    "Share knowledge and best practices",
    "Deliver community education at scale",
    "Track participation and training impact",
    "Strengthen organisational capacity",
  ];

  return (
    <main className="nonprofit-page">
      <div className="nonprofit-breadcrumb-nav">
        <ol className="nonprofit-breadcrumb">
          <li className="nonprofit-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="nonprofit-breadcrumb-item active" aria-current="page">
            Nonprofit Organizations
          </li>
        </ol>
      </div>

      <section className="nonprofit-hero">
        <div className="nonprofit-hero-content">
          <span className="nonprofit-badge">
            <FaHandsHelping /> Nonprofit Organizations
          </span>

          <h1>Nonprofit Organizations</h1>

          <h2>Empowering Nonprofits Through Learning and Capacity Building</h2>

          <p>
            NeuroLXP helps nonprofit organizations train staff, volunteers,
            partners, and beneficiaries through scalable digital learning,
            knowledge sharing, and skill development initiatives.
          </p>

          <button className="nonprofit-btn">
            Build Learning Impact <FaArrowRight />
          </button>
        </div>

        <div className="nonprofit-impact-card">
          <FaGlobe />
          <h3>Learning for Social Impact</h3>
          <p>
            Support mission-driven teams with accessible, reusable, and
            measurable learning experiences.
          </p>
        </div>
      </section>

      <section className="nonprofit-intro">
        <div>
          <h3>Mission-Driven Learning at Scale</h3>
          <p>
            Nonprofit organizations operate with a strong mission — to create
            social impact and bring positive change to communities. To achieve
            this effectively, they need continuous training for staff,
            volunteers, partners, and beneficiaries.
          </p>
        </div>

        <div>
          <h3>Scalable Capacity Building</h3>
          <p>
            With scalable digital learning tools, NeuroLXP helps nonprofits
            deliver structured training programmes, knowledge sharing, and skill
            development initiatives that strengthen their impact.
          </p>
        </div>
      </section>

      <section className="nonprofit-section-heading">
        <span>Key Challenges</span>
        <h2>Addressing Key Challenges for Nonprofits</h2>
      </section>

      <section className="nonprofit-challenge-grid">
        {challenges.map((item, index) => (
          <article className="nonprofit-challenge-card" key={index}>
            <div className="nonprofit-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="nonprofit-detail-panel">
        <div className="nonprofit-detail-left">
          <span className="nonprofit-badge dark">
            <FaLightbulb /> How NeuroLXP Helps
          </span>

          <h2>Reusable, Accessible, and Collaborative Training</h2>

          <p>
            NeuroLXP enables nonprofits to deliver online training programmes
            and digital learning resources that volunteers and staff can access
            anytime, from anywhere.
          </p>

          <p>
            Organizations can create reusable training modules, interactive
            programmes, collaborative communities, and knowledge repositories
            that reduce training costs while improving reach.
          </p>

          <p>
            Learning analytics help nonprofits understand whether their training
            programmes are improving skills and contributing to their mission.
          </p>
        </div>

        <div className="nonprofit-image-frame">
          <img
            src="/pexels-gustavo-fring-7156186.jpg"
            alt="Nonprofit learning and volunteer training"
          />
        </div>
      </section>

      <section className="nonprofit-usecase-section">
        <div className="nonprofit-section-heading">
          <span>Learning Use Cases</span>
          <h2>How Nonprofits Can Use NeuroLXP</h2>
        </div>

        <div className="nonprofit-usecase-grid">
          {useCases.map((item, index) => (
            <div className="nonprofit-usecase" key={index}>
              {index % 2 === 0 ? <FaBullhorn /> : <FaClipboardCheck />}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="nonprofit-benefits-panel">
        <div>
          <span className="nonprofit-badge">Benefits</span>

          <h2>Benefits for Nonprofit Organizations</h2>

          <p>
            NeuroLXP helps nonprofits build stronger teams, empower communities,
            and amplify social impact through structured learning.
          </p>
        </div>

        <div className="nonprofit-benefits-list">
          {benefits.map((item, index) => (
            <span key={index}>
              <FaCheckCircle />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="nonprofit-footer">
        <h2>NeuroLXP — Enabling Learning for Social Impact</h2>

        <p>
          With flexible learning tools, collaborative knowledge sharing, and
          scalable training capabilities, NeuroLXP helps nonprofit organizations
          build stronger teams, empower communities, and amplify their social
          impact through learning.
        </p>
      </section>
    </main>
  );
}
