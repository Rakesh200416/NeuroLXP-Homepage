import {
  FaNetworkWired,
  FaUsers,
  FaGlobe,
  FaCheckCircle,
  FaChartBar,
  FaHandshake,
  FaBookOpen,
  FaBullseye,
  FaShieldAlt,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";
import "./ExtendedEnterpriseLearning.css";

export default function ExtendedEnterpriseLearning() {
  return (
    <main className="enterprise-page">
      <div className="enterprise-breadcrumb-nav">
        <ol className="enterprise-breadcrumb">
          <li className="enterprise-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="enterprise-breadcrumb-item active" aria-current="page">
            Extended Enterprise Learning
          </li>
        </ol>
      </div>

      <section className="enterprise-hero">
        <div className="enterprise-hero-content">
          <span className="enterprise-badge">Extended Enterprise Learning</span>
          <h1>Extended Enterprise Learning</h1>
          <h2>Expanding Learning Beyond Organizational Boundaries</h2>
          <p>
            Modern organizations no longer train only their internal employees.
            Businesses today must educate partners, distributors, vendors, and
            customers to ensure consistent knowledge, product understanding, and
            operational excellence.
          </p>
          <p>
            NeuroLXP enables Extended Enterprise Learning, allowing organizations
            to deliver structured training programs beyond their internal
            workforce.
          </p>
        </div>

        <div className="enterprise-hero-panel">
          <FaNetworkWired />
          <h4>Connected Learning Ecosystem</h4>
          <p>
            Train partners, vendors, distributors, and customers through one
            scalable learning platform.
          </p>
        </div>
      </section>

      <section className="enterprise-intro">
        <h2>Building a Scalable Extended Enterprise LMS</h2>
        <p>
          With a scalable Extended Enterprise Learning Management System,
          NeuroLXP helps organizations build a connected learning ecosystem that
          supports everyone involved in the value chain.
        </p>
      </section>

      <section className="enterprise-challenges">
        <article className="enterprise-card">
          <div className="enterprise-card-icon">
            <FaHandshake />
          </div>
          <div>
            <span>Challenge 01</span>
            <h3>Inconsistent Knowledge Across Partners and Vendors</h3>
            <p>
              Partners, resellers, and vendors often interact directly with
              customers, yet they may not always have the latest knowledge about
              products, services, or company processes.
            </p>
            <h4>How NeuroLXP Solves It</h4>
            <p>
              NeuroLXP enables centralized partner and vendor training programs,
              ensuring external stakeholders receive consistent and up-to-date
              learning materials.
            </p>
          </div>
        </article>

        <article className="enterprise-card">
          <div className="enterprise-card-icon">
            <FaGlobe />
          </div>
          <div>
            <span>Challenge 02</span>
            <h3>Training Distributed Global Networks</h3>
            <p>
              Organizations with global partner ecosystems often struggle to
              provide consistent training across different regions and locations.
            </p>
            <h4>How NeuroLXP Solves It</h4>
            <p>
              NeuroLXP supports scalable digital learning delivery, enabling
              partners, resellers, and distributors worldwide to access training
              anytime from anywhere.
            </p>
          </div>
        </article>

        <article className="enterprise-card">
          <div className="enterprise-card-icon">
            <FaCheckCircle />
          </div>
          <div>
            <span>Challenge 03</span>
            <h3>Ensuring Product Knowledge and Brand Consistency</h3>
            <p>
              External stakeholders represent the organization’s products and
              services. Without proper training, this can lead to inconsistent
              messaging or incorrect product usage.
            </p>
            <h4>How NeuroLXP Solves It</h4>
            <p>
              Through product training modules, certification programs, and
              knowledge assessments, NeuroLXP ensures partners understand product
              capabilities, brand guidelines, and best practices.
            </p>
          </div>
        </article>

        <article className="enterprise-card">
          <div className="enterprise-card-icon">
            <FaChartBar />
          </div>
          <div>
            <span>Challenge 04</span>
            <h3>Tracking Learning Progress Across External Networks</h3>
            <p>
              Managing training for large partner ecosystems can make it
              difficult to track completions, certifications, and compliance.
            </p>
            <h4>How NeuroLXP Solves It</h4>
            <p>
              NeuroLXP provides analytics and reporting dashboards to monitor
              learning progress, certification status, and completion rates.
            </p>
          </div>
        </article>
      </section>

      <section className="enterprise-benefits">
        <div className="enterprise-section-heading">
          <h2>Benefits of Extended Enterprise Learning with NeuroLXP</h2>
          <p>
            A unified learning environment strengthens collaboration and
            performance across the full enterprise network.
          </p>
        </div>

        <div className="enterprise-benefits-grid">
          <div>
            <FaBookOpen />
            <h4>Consistent Training</h4>
            <p>Deliver consistent training to partners, vendors, and distributors.</p>
          </div>

          <div>
            <FaBullseye />
            <h4>Product Knowledge</h4>
            <p>Improve product knowledge across the business ecosystem.</p>
          </div>

          <div>
            <FaShieldAlt />
            <h4>Brand Consistency</h4>
            <p>Strengthen brand representation and customer experience.</p>
          </div>

          <div>
            <FaGlobe />
            <h4>Global Scale</h4>
            <p>Scale training programs globally with ease.</p>
          </div>

          <div>
            <FaArrowUp />
            <h4>Compliance Tracking</h4>
            <p>Monitor certification and training compliance.</p>
          </div>
        </div>
      </section>

      <section className="enterprise-final">
        <div>
          <span className="enterprise-badge">NeuroLXP</span>
          <h2>Empowering the Extended Enterprise Through Learning</h2>
          <p>
            With powerful training tools, scalable learning delivery, and
            advanced analytics, NeuroLXP helps organizations extend their
            learning ecosystem beyond internal teams and empower their entire
            enterprise network with knowledge and expertise.
          </p>
        </div>

        <div className="enterprise-final-action">
          <img
            src="/pexels-divinetechygirl-1181435.jpg"
            alt="Learners using digital learning resources"
            className="placeholder-image"
          />
        </div>
      </section>
    </main>
  );
}
