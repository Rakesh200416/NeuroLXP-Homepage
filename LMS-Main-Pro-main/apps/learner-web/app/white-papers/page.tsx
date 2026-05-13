import "./white-papers.css";
import {
  FaBrain,
  FaChartLine,
  FaGraduationCap,
  FaLightbulb,
  FaUsersCog,
  FaRobot,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

const keyTopics = [
  {
    icon: <FaRobot />,
    title: "AI-powered Learning Experience Platforms",
  },
  {
    icon: <FaGraduationCap />,
    title: "Digital transformation in education and corporate training",
  },
  {
    icon: <FaUsersCog />,
    title: "Workforce upskilling and reskilling strategies",
  },
  {
    icon: <FaChartLine />,
    title: "Learning analytics and data-driven education",
  },
  {
    icon: <FaLightbulb />,
    title: "Interactive and gamified learning environments",
  },
  {
    icon: <FaBrain />,
    title: "Personalized and adaptive learning technologies",
  },
];

const decisionInsights = [
  "Implementing modern LMS and LXP platforms",
  "Designing effective digital learning strategies",
  "Leveraging AI-driven content and analytics",
  "Enhancing learner engagement through interactive technologies",
  "Building scalable training programs",
];

export default function WhitePapers() {
  return (
    <main className="white-paper-page">
      <div className="white-paper-breadcrumb-nav">
        <ol className="white-paper-breadcrumb">
          <li className="white-paper-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="white-paper-breadcrumb-item active" aria-current="page">
            White Papers
          </li>
        </ol>
      </div>

      <section className="white-paper-hero neumorphic-card">
        <div className="hero-text">
          <span className="eyebrow">White Papers</span>
          <h1>Insights and Research on the Future of Learning</h1>
          <p>
            At NeuroLXP, we believe that innovation in education and workforce
            development must be supported by research, data, and industry
            insights.
          </p>
          <p>
            Our white papers explore key trends, technologies, and strategies
            shaping digital learning, AI-powered education, and workforce
            upskilling.
          </p>
        </div>

        <div className="image-placeholder hero-image">
          <img
            src="/pexels-pixabay-159682.jpg"
            alt="Learners using digital learning resources"
            className="placeholder-image"
          />
        </div>
      </section>

      <section className="intro-section">
        <span>Research-driven learning intelligence</span>
        <h2>Built for Educators, Leaders, and Decision Makers</h2>
        <p>
          These in-depth reports provide valuable perspectives for educators,
          institutional leaders, corporate training professionals, and
          policymakers looking to improve learning outcomes and organizational
          performance.
        </p>
      </section>

      <section className="topics-section">
        <div className="section-heading">
          <h2>Exploring Key Topics in Modern Learning</h2>
          <p>
            NeuroLXP white papers focus on critical areas influencing the
            evolution of digital learning.
          </p>
        </div>

        <div className="topics-grid">
          {keyTopics.map((topic) => (
            <article className="topic-card" key={topic.title}>
              <div className="topic-icon">{topic.icon}</div>
              <h4>{topic.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="insight-wrapper">
        <article className="neumorphic-card insight-card">
          <div className="icon-box">
            <FaBookOpen />
          </div>
          <h2>Practical Insights for Decision Makers</h2>
          <p>
            NeuroLXP white papers support leaders who are planning, modernizing,
            or improving their learning ecosystems.
          </p>

          <ul>
            {decisionInsights.map((item) => (
              <li key={item}>
                <FaArrowRight />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="neumorphic-card image-card">
          <div className="image-placeholder">
            <img
              src="/pexels-anna-nekrashevich-8534050.jpg"
              alt="Learners using digital learning resources"
              className="placeholder-image"
            />
          </div>
        </article>
      </section>

      <section className="innovation-section neumorphic-card">
        <div>
          <span className="eyebrow">Innovation</span>
          <h2>Supporting Innovation in Education and Training</h2>
          <p>
            Through research publications, NeuroLXP contributes to discussions
            around EdTech, digital transformation in learning, and workforce
            development.
          </p>
        </div>

        <div className="innovation-points">
          <div>
            <h3>Inclusive Learning</h3>
            <p>
              Supporting institutions and enterprises in creating effective
              learning environments.
            </p>
          </div>
          <div>
            <h3>Strategic Growth</h3>
            <p>
              Helping organizations make informed decisions about digital
              learning technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="access-section">
        <h2>Access NeuroLXP White Papers</h2>
        <p>
          Explore our collection of white papers to gain deeper insights into
          emerging trends, best practices, and innovative strategies transforming
          digital learning.
        </p>
        <h3>
          NeuroLXP White Papers — Research-Driven Insights for the Future of
          Learning.
        </h3>
      </section>
    </main>
  );
}
