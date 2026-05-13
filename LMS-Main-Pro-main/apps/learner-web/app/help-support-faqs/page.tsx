import "./help-page.css";
import {
  FaHeadset,
  FaUserGraduate,
  FaTools,
  FaChalkboardTeacher,
  FaQuestionCircle,
  FaBookOpen,
  FaChartLine,
  FaClipboardCheck,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

const supportServices = [
  {
    icon: <FaTools />,
    title: "Technical support",
    text: "Support for platform usage and technical questions.",
  },
  {
    icon: <FaUserGraduate />,
    title: "User onboarding",
    text: "Guided assistance for new users and teams.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Feature guidance",
    text: "Step-by-step support for platform capabilities.",
  },
  {
    icon: <FaHeadset />,
    title: "Troubleshooting help",
    text: "Help for resolving common platform issues.",
  },
];

const helpResources = [
  "Getting started guides",
  "Course creation tutorials",
  "Assessment and reporting instructions",
  "Content management guidance",
  "Platform configuration tips",
];

const faqTopics = [
  "How to create and manage courses",
  "How to enroll learners and assign training",
  "How to track learner progress and analytics",
  "How to create assessments and interactive modules",
  "How to access learning resources and certifications",
];

export default function SupportFaq() {
  return (
    <main className="support-page">
      <div className="support-breadcrumb-nav">
        <ol className="support-breadcrumb">
          <li className="support-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="support-breadcrumb-item active" aria-current="page">
            Help, Support & FAQs
          </li>
        </ol>
      </div>

      <section className="support-hero support-neumorphic-card">
        <div className="support-hero-content">
          <span className="support-eyebrow">Help, Support & FAQs</span>
          <h1>We’re Here to Help You Succeed</h1>
          <p>
            At NeuroLXP, we are committed to ensuring that every user—whether an
            administrator, educator, or learner—has a smooth and successful
            learning experience.
          </p>
          <p>
            Our Help, Support & FAQs section provides quick access to guidance,
            troubleshooting resources, and expert assistance whenever you need it.
          </p>
        </div>

        <div className="support-image-placeholder">
          <img
            src="/pexels-pixabay-221164.jpg"
            alt="Learners using digital learning resources"
            className="placeholder-image"
          />
        </div>
      </section>

      <section className="support-open-section">
        <span>Always Available</span>
        <h2>Guidance from Onboarding to Advanced Support</h2>
        <p>
          From platform onboarding to advanced feature support, NeuroLXP ensures
          that users can find answers quickly and continue their learning journey
          without interruption.
        </p>
      </section>

      <section className="support-services-section">
        <div className="support-section-heading">
          <h2>Comprehensive User Support</h2>
          <p>
            NeuroLXP offers multiple support channels to help users resolve
            questions or technical issues efficiently.
          </p>
        </div>

        <div className="support-services-grid">
          {supportServices.map((service, index) => (
            <article className="support-service-card" key={service.title}>
              <div className="support-service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
              <span className="support-card-number">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="support-resource-layout">
        <article className="support-neumorphic-card support-resource-card">
          <div className="support-icon-box">
            <FaBookOpen />
          </div>

          <h2>Knowledge Base and Help Resources</h2>
          <p>
            Our knowledge base provides detailed guides, tutorials, and
            documentation to help users understand platform features and best
            practices.
          </p>

          <ul className="support-list">
            {helpResources.map((item) => (
              <li key={item}>
                <FaArrowRight />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="support-neumorphic-card support-image-card">
          <div className="support-image-placeholder">
            <img
              src="/pexels-mart-production-7709105.jpg"
              alt="Learners using digital learning resources"
              className="placeholder-image"
            />
          </div>
        </article>
      </section>

      <section className="support-faq-section support-neumorphic-card">
        <div className="support-faq-content">
          <span className="support-eyebrow">FAQs</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            The FAQs section addresses common questions about using NeuroLXP,
            helping users quickly find answers without needing direct support.
          </p>
        </div>

        <div className="support-faq-grid">
          {faqTopics.map((topic, index) => (
            <div className="support-faq-item" key={topic}>
              <div className="support-faq-icon">
                {index === 0 && <FaBookOpen />}
                {index === 1 && <FaUserGraduate />}
                {index === 2 && <FaChartLine />}
                {index === 3 && <FaClipboardCheck />}
                {index === 4 && <FaCertificate />}
              </div>
              <h4>{topic}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="support-continuous-section">
        <span>Reliable Assistance</span>
        <h2>Continuous Support for Institutions and Organizations</h2>
        <p>
          NeuroLXP understands that learning platforms must operate smoothly to
          support educational and training initiatives. Our support systems are
          designed to provide reliable assistance, clear documentation, and
          responsive help channels that ensure uninterrupted learning experiences.
        </p>
      </section>

      <section className="support-final-section support-neumorphic-card">
        <div className="support-final-icon">
          <FaQuestionCircle />
        </div>
        <h2>NeuroLXP — Supporting Your Learning Journey</h2>
        <p>
          With dedicated support services, detailed knowledge resources, and
          comprehensive FAQs, NeuroLXP ensures that every user receives the
          guidance and assistance needed to fully benefit from the platform.
        </p>
      </section>
    </main>
  );
}
