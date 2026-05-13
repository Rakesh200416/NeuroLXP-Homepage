import {
  FaUsers,
  FaProductHunt,
  FaQuestionCircle,
  FaChartLine,
  FaGlobe,
  FaHeadset,
  FaLightbulb,
  FaRoute,
  FaHandshake,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import "./CustomerTraining.css";

export default function Page() {
  return (
    <main className="customer-page">
      <div className="customer-breadcrumb-nav">
        <ol className="customer-breadcrumb">
          <li className="customer-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="customer-breadcrumb-item active" aria-current="page">
            Customer Training
          </li>
        </ol>
      </div>

      <section className="customer-hero">
        <div className="customer-hero-content">
          <span className="customer-badge">NeuroLXP Customer Training</span>

          <h1>Customer Training: Turning Product Challenges into Customer Success</h1>

          <h2>Empower Customers with Knowledge That Drives Adoption</h2>

          <p>
            Many organizations face a common challenge: customers purchase
            products or services but struggle to fully understand and utilize
            them. NeuroLXP enables structured Customer Training programs that
            help businesses educate customers effectively, improve product
            adoption, and enhance customer satisfaction.
          </p>

          <p>
            By delivering organized digital learning experiences, NeuroLXP
            transforms customer education into a scalable and measurable process.
          </p>
        </div>

        <div className="customer-visual">
          <div className="visual-card">
            <FaProductHunt />
            <span>Product Knowledge</span>
          </div>

          <div className="visual-line">
            <span></span>
            <strong>→</strong>
            <span></span>
          </div>

          <div className="visual-card success">
            <FaHandshake />
            <span>Customer Success</span>
          </div>
        </div>
      </section>

      <section className="customer-intro">
        <h2>Customer education that improves adoption, support, and success</h2>
        <p>
          NeuroLXP helps organizations turn product knowledge into structured,
          self-service learning experiences that customers can access anytime.
        </p>
      </section>

      <section className="customer-challenges">
        <article className="customer-challenge">
          <div className="challenge-icon">
            <FaQuestionCircle />
          </div>

          <div>
            <h2>The Challenge: Customers Struggle to Understand Complex Products</h2>
            <p>
              Modern products and platforms often include advanced features that
              can be difficult for customers to understand without proper
              guidance.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP allows organizations to create structured customer
              training modules, including step-by-step tutorials, interactive
              demonstrations, and product walkthroughs. Customers can learn how
              to use products effectively at their own pace, reducing confusion
              and support requests.
            </p>
          </div>
        </article>

        <article className="customer-challenge">
          <div className="challenge-icon">
            <FaHeadset />
          </div>

          <div>
            <h2>The Challenge: High Volume of Customer Support Requests</h2>
            <p>
              Without proper training resources, customers frequently rely on
              support teams for assistance with basic product usage.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              Through self-service learning portals, NeuroLXP enables customers
              to access product training videos, guides, FAQs, and tutorials
              anytime. This reduces dependency on support teams while empowering
              customers to resolve common issues independently.
            </p>
          </div>
        </article>

        <article className="customer-challenge">
          <div className="challenge-icon">
            <FaLightbulb />
          </div>

          <div>
            <h2>The Challenge: Low Product Adoption and Feature Utilization</h2>
            <p>
              Many customers use only a small portion of a product’s capabilities
              because they are unaware of its full potential.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP provides interactive learning experiences that introduce
              customers to advanced features and best practices. Through guided
              learning paths, customers can gradually explore the full value of
              the product and maximize its benefits.
            </p>
          </div>
        </article>

        <article className="customer-challenge">
          <div className="challenge-icon">
            <FaGlobe />
          </div>

          <div>
            <h2>The Challenge: Scaling Customer Education Globally</h2>
            <p>
              Organizations with large or global customer bases often find it
              difficult to provide consistent product training.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP enables businesses to deliver scalable digital customer
              training programs that reach thousands of users worldwide. With
              online learning modules, organizations can maintain consistent
              training quality regardless of location.
            </p>
          </div>
        </article>

        <article className="customer-challenge">
          <div className="challenge-icon">
            <FaChartLine />
          </div>

          <div>
            <h2>The Challenge: Measuring Training Effectiveness</h2>
            <p>
              Companies often lack visibility into whether customers actually
              understand the product after training.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP includes learning analytics and reporting tools that track
              customer progress, course completion, and assessment performance.
              These insights help organizations evaluate training effectiveness
              and continuously improve learning materials.
            </p>
          </div>
        </article>
      </section>

      <section className="benefits-section">
        <div className="benefits-heading">
          <span className="customer-badge">Benefits</span>
          <h2>Benefits of Customer Training with NeuroLXP</h2>
          <p>Organizations using NeuroLXP for customer education can:</p>
        </div>

        <div className="benefits-grid">
          <div>
            <FaUsers />
            <span>Improve product adoption and customer confidence</span>
          </div>

          <div>
            <MdSupportAgent />
            <span>Reduce support requests and operational costs</span>
          </div>

          <div>
            <FaGlobe />
            <span>Deliver consistent product training at scale</span>
          </div>

          <div>
            <FaRoute />
            <span>Help customers unlock the full value of their products</span>
          </div>

          <div>
            <FaHandshake />
            <span>Strengthen long-term customer relationships</span>
          </div>
        </div>

        <p className="benefits-note">
          Customer training becomes a powerful tool for both customer success
          and business growth.
        </p>
      </section>

      <section className="customer-final">
        <div className="final-visual">
          <img
            src="/pexels-mikhail-nilov-7681132.jpg"
            alt="Connected digital learning network"
            className="placeholder-image"
          />
        </div>

        <div>
          <span className="customer-badge">Customer Success</span>

          <h2>NeuroLXP — Transforming Customer Education into Customer Success</h2>

          <p>
            With structured training modules, scalable digital learning
            programs, and powerful analytics, NeuroLXP helps organizations
            educate customers effectively, increase product adoption, and build
            stronger customer experiences.
          </p>
        </div>
      </section>
    </main>
  );
}
