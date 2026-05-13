import {
  FaNetworkWired,
  FaUsers,
  FaPlug,
  FaChartLine,
  FaUniversity,
  FaBuilding,
  FaLaptopHouse,
  FaGraduationCap,
  FaCheck,
  FaArrowRight,
  FaProjectDiagram,
  FaDatabase,
} from "react-icons/fa";
import "./interconnectivity.css";

const coreFeatures = [
  {
    icon: <FaProjectDiagram />,
    title: "Unified Learning Ecosystem",
    text: "Integrate multiple learning systems, content sources, and tools into one connected platform.",
  },
  {
    icon: <FaUsers />,
    title: "Collaborative Learning Experience",
    text: "Foster peer-to-peer learning, discussions, and knowledge sharing across academic and training environments.",
  },
  {
    icon: <FaPlug />,
    title: "System Integrations",
    text: "Seamlessly connect with LMS, HRMS, content libraries, and third-party tools for smooth data flow.",
  },
  {
    icon: <FaDatabase />,
    title: "Centralized Data & Insights",
    text: "Bring all learner data into one place for better tracking, analytics, and decision-making.",
  },
];

const benefits = [
  "Unified platform for all learning activities",
  "Seamless integration across systems",
  "Improved collaboration and engagement",
  "Enhanced visibility into learning performance",
];

const useCases = [
  {
    icon: <FaUniversity />,
    title: "Universities & Higher Education Institutions",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Training Academies",
  },
  {
    icon: <FaGraduationCap />,
    title: "Skill Development Centers",
  },
  {
    icon: <FaLaptopHouse />,
    title: "Hybrid & Remote Learning Environments",
  },
];

const steps = [
  "Integrate existing systems and tools",
  "Connect learners, educators, and admins",
  "Enable collaborative and social learning",
  "Track and optimize through unified analytics",
];

export default function InterconnectivityPage() {
  return (
    <main className="interconnectivity-page">
      <div className="interconnectivity-breadcrumb-nav">
            <ol className="interconnectivity-breadcrumb">
              <li className="interconnectivity-breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="interconnectivity-breadcrumb-item active"
                aria-current="page"
              >
                Interconnectivity
              </li>
            </ol>
          </div>

      <section className="interconnectivity-hero">
        <div className="interconnectivity-hero-content">
          <span className="interconnectivity-eyebrow">
            <FaNetworkWired />
            Learning Platform Integration
          </span>

          <h1>Enable Seamless Interconnectivity with NeuroLXP</h1>

          <p>
            Connect learners, educators, and training ecosystems through
            NeuroLXP, the AI-powered Learning Experience Platform designed for
            unified, collaborative, and scalable learning.
          </p>

          <div className="interconnectivity-hero-actions">
            <a href="#demo" className="interconnectivity-btn primary">
              Request Demo
              <FaArrowRight />
            </a>
            <a href="#start" className="interconnectivity-btn secondary">
              Get Started
            </a>
          </div>
        </div>

        <div className="interconnectivity-visual-panel">
          <div className="network-center">
            <FaNetworkWired />
            <span>NeuroLXP</span>
          </div>

          <div className="network-node node-one">
            <FaUsers />
            <span>Learners</span>
          </div>

          <div className="network-node node-two">
            <FaUniversity />
            <span>Educators</span>
          </div>

          <div className="network-node node-three">
            <FaPlug />
            <span>Systems</span>
          </div>

          <div className="network-node node-four">
            <FaChartLine />
            <span>Insights</span>
          </div>
        </div>
      </section>

      <section className="interconnectivity-core">
        <div className="interconnectivity-section-heading">
          <span>Core Features</span>
          <h2>One connected platform for modern learning ecosystems</h2>
        </div>

        <div className="interconnectivity-feature-grid">
          {coreFeatures.map((feature, index) => (
            <article
              className="interconnectivity-feature-card"
              data-index={index}
              key={feature.title}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interconnectivity-why">
        <div className="why-left">
          <span className="interconnectivity-eyebrow">
            <FaProjectDiagram />
            Why NeuroLXP
          </span>

          <h2>Break Silos. Build Connected Learning.</h2>

          <p>
            Academic institutions and training organizations often operate in
            disconnected systems. NeuroLXP bridges these gaps by enabling
            interconnected learning environments where content, users, and
            systems work together—driving efficiency, engagement, and smarter
            outcomes.
          </p>
        </div>

        <div className="why-benefits">
          <h3>Key Benefits</h3>

          <div className="benefit-list">
            {benefits.map((item) => (
              <div className="benefit-item" key={item}>
                <span>
                  <FaCheck />
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="interconnectivity-usecases">
        <div className="interconnectivity-section-heading">
          <span>Use Cases</span>
          <h2>Built for institutions, enterprises, and hybrid learning teams</h2>
        </div>

        <div className="usecase-grid">
          {useCases.map((item) => (
            <div className="usecase-card" key={item.title}>
              <div>{item.icon}</div>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="interconnectivity-process">
        <div className="process-content">
          <span className="interconnectivity-eyebrow">
            <FaPlug />
            How It Works
          </span>

          <h2>Connect your ecosystem in four clear steps</h2>

          <p>
            NeuroLXP helps organizations move from disconnected learning tools
            to a unified, insight-driven digital learning ecosystem.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div className="process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="interconnectivity-keywords">
        <span>Learning Platform Integration</span>
        <span>Interconnected Learning Systems</span>
        <span>Academic Learning Platform</span>
        <span>Training Ecosystem</span>
        <span>LMS Integration</span>
        <span>Collaborative Learning Platform</span>
        <span>Digital Learning Ecosystem</span>
      </section>

      <section className="interconnectivity-cta" id="demo">
        <div>
          <h2>Ready to connect your learning ecosystem?</h2>
          <p>
            Unlock the power of interconnectivity with NeuroLXP and create a
            connected, collaborative, and data-driven learning environment.
          </p>
        </div>

        <div className="interconnectivity-cta-actions">
          <a href="#book-demo" className="interconnectivity-btn primary">
            Book a Demo
            <FaArrowRight />
          </a>
          <a href="#trial" className="interconnectivity-btn secondary">
            Start Free Trial
          </a>
        </div>
      </section>
    </main>
  );
}
