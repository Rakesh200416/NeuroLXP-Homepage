import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  FaShoppingCart,
  FaUsers,
  FaBookOpen,
  FaStore,
  FaClipboardCheck,
  FaChartLine,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaHeartbeat,
  FaUserMd,
  FaHospital,
  FaShieldAlt,
} from "react-icons/fa";
import "./RetailHealthcare.css";

const heroIllustration = "/Retail-&-Healthcare.jpg";

export const metadata: Metadata = {
  title: "Retail & Healthcare Solutions | Industries We Serve",
  description:
    "Scalable learning solutions for retail and healthcare industries. NeuroLXP provides training platforms for store associates, healthcare professionals, compliance, and continuous development.",
};

interface Challenge {
  id: number;
  icon: React.ReactNode;
  challenge: string;
  shortText: string;
}

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function RetailHealthcarePage() {
  const retailChallenges: Challenge[] = [
    {
      id: 1,
      icon: <FaUsers />,
      challenge: "High Employee Turnover",
      shortText: "Simplify onboarding for new retail staff.",
    },
    {
      id: 2,
      icon: <FaShoppingCart />,
      challenge: "Product Knowledge",
      shortText: "Keep teams updated on products and promotions.",
    },
    {
      id: 3,
      icon: <FaStore />,
      challenge: "Distributed Stores",
      shortText: "Deliver consistent training across locations.",
    },
  ];

  const retailBenefits: Benefit[] = [
    {
      id: 1,
      icon: <FaShoppingCart />,
      title: "Consistent Training",
      description: "Deliver product and service training across all stores.",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Better Customer Experience",
      description: "Equip employees with stronger customer-facing skills.",
    },
    {
      id: 3,
      icon: <FaGraduationCap />,
      title: "Quick Onboarding",
      description: "Help new employees become productive faster.",
    },
    {
      id: 4,
      icon: <FaBookOpen />,
      title: "Continuous Development",
      description: "Support ongoing learning for retail teams.",
    },
    {
      id: 5,
      icon: <FaChartLine />,
      title: "Performance Tracking",
      description: "Monitor training progress with analytics.",
    },
  ];

  const healthcareChallenges: Challenge[] = [
    {
      id: 1,
      icon: <FaClipboardCheck />,
      challenge: "Compliance & Certification",
      shortText: "Keep staff aligned with clinical standards.",
    },
    {
      id: 2,
      icon: <FaHeartbeat />,
      challenge: "Continuous Medical Education",
      shortText: "Support ongoing professional growth.",
    },
    {
      id: 3,
      icon: <FaHospital />,
      challenge: "Large Healthcare Teams",
      shortText: "Coordinate training across departments.",
    },
  ];

  const healthcareBenefits: Benefit[] = [
    {
      id: 1,
      icon: <FaHeartbeat />,
      title: "Compliance Training",
      description: "Deliver structured clinical and regulatory learning.",
    },
    {
      id: 2,
      icon: <FaUserMd />,
      title: "Professional Development",
      description: "Support continuous development for medical staff.",
    },
    {
      id: 3,
      icon: <FaHospital />,
      title: "Better Patient Care",
      description: "Improve care quality through better-trained teams.",
    },
    {
      id: 4,
      icon: <FaCheckCircle />,
      title: "Certification Tracking",
      description: "Track certification completion automatically.",
    },
    {
      id: 5,
      icon: <FaChartLine />,
      title: "Scalable Programmes",
      description: "Scale learning across healthcare networks.",
    },
  ];

  return (
    <main className="retail-health-page">
      <div className="rh-breadcrumb-nav">
        <ol className="rh-breadcrumb">
          <li className="rh-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="rh-breadcrumb-item active" aria-current="page">
            Retail & Healthcare
          </li>
        </ol>
      </div>

      <section className="rh-hero">
        <div className="rh-hero-text">
          <span className="rh-label">
            <FaShieldAlt />
            Retail & Healthcare Solutions
          </span>

          <h1>
            Retail & <span>Healthcare</span>
          </h1>

          <h2>Scalable Learning for Service-Driven Industries</h2>

          <p>
            NeuroLXP helps retail and healthcare organizations train distributed
            teams, improve compliance, accelerate onboarding, and strengthen
            service quality through flexible digital learning.
          </p>

          <div className="rh-actions">
            <button className="rh-btn">
              Request Demo <FaArrowRight />
            </button>
            <button className="rh-btn rh-btn-secondary">
              Watch Overview <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="rh-hero-image-card">
          <Image
            src={heroIllustration}
            alt="Retail and healthcare learning dashboard"
            width={800}
            height={520}
            className="rh-hero-image"
            priority
          />
        </div>
      </section>

      <section className="rh-stats">
        <div>
          <strong>10K+</strong>
          <span>Retail Locations</span>
        </div>
        <div>
          <strong>500+</strong>
          <span>Healthcare Facilities</span>
        </div>
        <div>
          <strong>5M+</strong>
          <span>Trained Employees</span>
        </div>
        <div>
          <strong>4.9</strong>
          <span>Average Rating</span>
        </div>
      </section>

      <section className="rh-content-section">
        <div className="rh-section-header">
          <span className="rh-label">Retail Learning</span>
          <h2>Empowering Retail Teams with Continuous Learning</h2>
          <p>
            Retail teams need fast onboarding, updated product knowledge, and
            consistent training across multiple locations.
          </p>
        </div>

        <div className="rh-card-grid three">
          {retailChallenges.map((item) => (
            <article className="rh-challenge-card" key={item.id}>
              <div className="rh-icon">{item.icon}</div>
              <h3>{item.challenge}</h3>
              <p>{item.shortText}</p>
            </article>
          ))}
        </div>

        <div className="rh-text-panel">
          <h3>How NeuroLXP Supports Retail Organizations</h3>
          <p>
            NeuroLXP enables structured onboarding and induction programmes that
            help new hires quickly understand company policies, store operations,
            product lines, promotions, and customer service expectations.
          </p>
          <p>
            Retailers can deliver product training modules, interactive
            activities, and quick microlearning lessons to keep teams informed
            across stores and regions.
          </p>
        </div>
      </section>

      <section className="rh-content-section">
        <div className="rh-section-header">
          <span className="rh-label">Retail Benefits</span>
          <h2>Benefits for Retail Organizations</h2>
        </div>

        <div className="rh-benefits-grid">
          {retailBenefits.map((benefit) => (
            <article className="rh-benefit-card" key={benefit.id}>
              <div className="rh-benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rh-content-section">
        <div className="rh-section-header">
          <span className="rh-label">Healthcare Learning</span>
          <h2>Continuous Learning for Healthcare Professionals</h2>
          <p>
            Healthcare organizations need reliable training for compliance,
            certification, clinical skills, and ongoing professional development.
          </p>
        </div>

        <div className="rh-card-grid three">
          {healthcareChallenges.map((item) => (
            <article className="rh-challenge-card healthcare" key={item.id}>
              <div className="rh-icon">{item.icon}</div>
              <h3>{item.challenge}</h3>
              <p>{item.shortText}</p>
            </article>
          ))}
        </div>

        <div className="rh-text-panel healthcare">
          <h3>How NeuroLXP Supports Healthcare Organizations</h3>
          <p>
            NeuroLXP supports compliance training modules and certification
            programmes that help healthcare staff remain aligned with industry
            regulations, clinical guidelines, and patient-care standards.
          </p>
          <p>
            Administrators can manage training programmes, distribute resources,
            and monitor staff progress across hospitals, departments, and
            healthcare networks.
          </p>
        </div>
      </section>

      <section className="rh-content-section">
        <div className="rh-section-header">
          <span className="rh-label">Healthcare Benefits</span>
          <h2>Benefits for Healthcare Organizations</h2>
        </div>

        <div className="rh-benefits-grid">
          {healthcareBenefits.map((benefit) => (
            <article className="rh-benefit-card healthcare" key={benefit.id}>
              <div className="rh-benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rh-cta">
        <h2>NeuroLXP — Powering Learning for Retail and Healthcare</h2>
        <p>
          With AI-powered learning tools, mobile accessibility, and advanced
          analytics, NeuroLXP empowers retail and healthcare organizations to
          build knowledgeable, compliant, and future-ready workforces.
        </p>

        <button className="rh-btn">
          Get Started Today <FaArrowRight />
        </button>
      </section>
    </main>
  );
}
