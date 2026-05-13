import {
  FaUniversity,
  FaShieldAlt,
  FaFileContract,
  FaChartLine,
  FaUsersCog,
  FaPiggyBank,
  FaClipboardCheck,
  FaCheckCircle,
  FaLightbulb,
  FaImage,
  FaLock,
} from "react-icons/fa";
import "./BFSI.css";

export default function BFSI() {
  const challenges = [
    {
      icon: <FaFileContract />,
      title: "Compliance Updates",
      point: "Structured compliance modules with tracking, certification, and audit records.",
      color: "blue",
    },
    {
      icon: <FaChartLine />,
      title: "Skill Development",
      point: "Role-based learning for financial analysis, digital banking, and risk management.",
      color: "green",
    },
    {
      icon: <FaUsersCog />,
      title: "Distributed Workforce",
      point: "Consistent training delivery across branches, regions, teams, and partners.",
      color: "orange",
    },
    {
      icon: <FaPiggyBank />,
      title: "Product Knowledge",
      point: "Interactive product training for banking, finance, and insurance offerings.",
      color: "purple",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Training Effectiveness",
      point: "Analytics dashboards for progress, engagement, assessment, and certification.",
      color: "cyan",
    },
  ];

  const benefits = [
    "Structured compliance and regulatory training",
    "Industry-relevant employee upskilling",
    "Efficient branch-network training",
    "Improved product and advisory knowledge",
    "Advanced training-performance analytics",
    "Audit-ready compliance records",
  ];

  return (
    <section className="bfsi-page">
      <div className="bfsi-breadcrumb-nav">
        <ol className="bfsi-breadcrumb">
          <li className="bfsi-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="bfsi-breadcrumb-item active" aria-current="page">
            BFSI
          </li>
        </ol>
      </div>

      <div className="bfsi-hero">
        <h1>BFSI</h1>

        <h2>Secure, Scalable Learning for the BFSI Industry</h2>

        <p>
          NeuroLXP helps banking, financial services, and insurance organisations
          deliver secure, scalable, and compliant digital learning programmes
          for workforce development and regulatory readiness.
        </p>
      </div>

      <div className="bfsi-image-row single">
        <div className="bfsi-image-box">
          <img
            src="/pexels-polina-tankilevitch-6927375.jpg"
            alt="BFSI training and compliance learning"
          />
        </div>
      </div>

      <div className="bfsi-content-block">
        <div>
          <span className="bfsi-label">Regulated Learning Ecosystem</span>
          <h3>Built for Banking, Financial Services, and Insurance Teams</h3>
          <p>
            The BFSI sector operates in a highly regulated and rapidly evolving
            environment. Organisations must continuously train employees,
            partners, and stakeholders on regulatory compliance, financial
            products, risk management, cybersecurity, and customer service.
          </p>
          <p>
            NeuroLXP provides an AI-driven Learning Experience Platform for BFSI
            organisations, helping them maintain workforce capability,
            compliance readiness, and consistent learning delivery.
          </p>
        </div>

        <div className="bfsi-mini-panel">
          <FaLock />
          <h4>Secure Learning Delivery</h4>
          <p>
            Support compliance, certification, policy training, and audit-ready
            learning records from one secure platform.
          </p>
        </div>
      </div>

      <div className="bfsi-intro-grid">
        <div className="bfsi-intro-card">
          <FaShieldAlt />
          <h3>Compliance Ready</h3>
          <p>Keep employees aligned with regulations and policy updates.</p>
        </div>

        <div className="bfsi-intro-card">
          <FaChartLine />
          <h3>Skill Focused</h3>
          <p>Build role-based capabilities for a changing financial sector.</p>
        </div>

        <div className="bfsi-intro-card">
          <FaClipboardCheck />
          <h3>Audit Friendly</h3>
          <p>Track completion, certification, and training effectiveness.</p>
        </div>
      </div>

      <div className="bfsi-section-title">
        <span>Challenges & Solutions</span>
        <h3>Addressing Key Challenges in BFSI Training</h3>
        <p>
          NeuroLXP supports BFSI organisations by simplifying compliance
          training, skill development, branch-level training, and learning
          measurement.
        </p>
      </div>

      <div className="bfsi-challenge-grid">
        {challenges.map((item, index) => (
          <article className={`bfsi-challenge-card ${item.color}`} key={index}>
            <div className="bfsi-challenge-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.point}</p>
          </article>
        ))}
      </div>

      <div className="bfsi-text-section">
        <h3>How NeuroLXP Helps BFSI Organisations Train Better</h3>
        <p>
          NeuroLXP enables financial institutions to deliver structured
          compliance training modules with automated tracking, certification,
          and reporting. This helps employees stay updated while maintaining
          complete records for audits.
        </p>
        <p>
          The platform supports continuous skill development across financial
          analysis, digital banking, risk management, customer relationship
          management, and product advisory roles.
        </p>
        <p>
          For banks, insurance companies, and financial institutions operating
          across many locations, NeuroLXP enables consistent training delivery
          across branches, departments, and regions.
        </p>
      </div>

      <div className="bfsi-benefits-section">
        <div className="bfsi-benefits-heading">
          <span>Organisation Benefits</span>
          <h3>Benefits of NeuroLXP for BFSI Organisations</h3>
        </div>

        <div className="bfsi-benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="bfsi-benefit-card" key={index}>
              <FaCheckCircle />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bfsi-future-card">
        <div>
          <span className="bfsi-label">Future Ready</span>
          <h3>Future-Ready Learning for the Financial Sector</h3>
          <p>
            As the BFSI industry embraces digital transformation, organisations
            require learning platforms that support continuous professional
            development, regulatory compliance, and workforce readiness.
            NeuroLXP helps financial institutions build secure, intelligent,
            and scalable learning ecosystems.
          </p>
        </div>

        <div className="bfsi-future-icon">
          <FaLightbulb />
        </div>
      </div>

      <div className="bfsi-closing-card">
        <h3>NeuroLXP — Enabling Smarter Learning for the BFSI Industry</h3>
        <p>
          With AI-powered learning tools, compliance-ready training modules, and
          advanced analytics, NeuroLXP empowers BFSI organisations to build
          knowledgeable, compliant, and future-ready workforces.
        </p>
      </div>
    </section>
  );
}
