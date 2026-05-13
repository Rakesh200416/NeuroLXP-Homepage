import "./page.css";
import {
  FaRobot,
  FaChartLine,
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaLaptopCode,
  FaBookOpen,
  FaBullseye,
  FaArrowRight,
} from "react-icons/fa";

const blogTopics = [
  {
    icon: <FaRobot />,
    title: "AI-powered LMS trends",
    text: "Explore how artificial intelligence is shaping modern learning systems.",
  },
  {
    icon: <FaLightbulb />,
    title: "Interactive learning",
    text: "Discover trends in gamified, engaging, and learner-centred experiences.",
  },
  {
    icon: <FaUsers />,
    title: "Corporate training",
    text: "Learn strategies for employee upskilling and workforce development.",
  },
  {
    icon: <FaLaptopCode />,
    title: "E-learning innovation",
    text: "Understand blended learning, digital courses, and flexible delivery models.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Digital education",
    text: "Review best practices for online course design and education delivery.",
  },
  {
    icon: <FaChartLine />,
    title: "Learning analytics",
    text: "Use data-driven insights to improve learning and training outcomes.",
  },
];

const practicalInsights = [
  "How AI is transforming digital learning platforms",
  "Methods to improve learner engagement and retention",
  "Strategies for implementing modern LMS and LXP platforms",
  "Building skill-based learning programs for the future workforce",
  "Leveraging analytics to improve training effectiveness",
];

export default function Blogs() {
  return (
    <main className="blogs-page">
      <div className="blogs-breadcrumb-nav">
        <ol className="blogs-breadcrumb">
          <li className="blogs-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="blogs-breadcrumb-item active" aria-current="page">
            Blogs
          </li>
        </ol>
      </div>

      <section className="blogs-hero blogs-neumorphic-card">
        <div className="blogs-hero-content">
          <span className="blogs-eyebrow">Blogs</span>
          <h1>Insights, Trends, and Ideas Shaping the Future of Learning</h1>
          <p>
            The NeuroLXP Blog is a knowledge hub where educators, learning
            leaders, and organizations can explore the latest ideas, innovations,
            and best practices in digital learning.
          </p>
          <p>
            Our blogs cover emerging trends in Learning Experience Platforms,
            AI-powered education, corporate training, and modern learning
            technologies.
          </p>
        </div>

        <div className="blogs-image-placeholder">
          <img
            src="/pexels-cottonbro-3584969.jpg"
            alt="Learners using digital learning resources"
            className="placeholder-image"
          />
        </div>
      </section>

      <section className="blogs-open-section">
        <span>Knowledge Hub</span>
        <h2>Expert Insights for Modern Learning Teams</h2>
        <p>
          Through expert insights and practical perspectives, NeuroLXP blogs help
          readers stay informed about how technology is transforming learning
          across industries.
        </p>
      </section>

      <section className="blogs-topics-section">
        <div className="blogs-section-heading">
          <h2>What You’ll Find on the NeuroLXP Blog</h2>
          <p>
            Articles explore education technology, digital transformation, and
            workforce learning for institutions and organizations building
            effective learning ecosystems.
          </p>
        </div>

        <div className="blogs-topics-grid">
          {blogTopics.map((topic) => (
            <article className="blogs-topic-card" key={topic.title}>
              <div className="blogs-topic-icon">{topic.icon}</div>
              <h4>{topic.title}</h4>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="blogs-insights-layout">
        <article className="blogs-neumorphic-card blogs-insights-card">
          <div className="blogs-icon-box">
            <FaBookOpen />
          </div>

          <h2>Practical Learning and Training Insights</h2>
          <p>
            NeuroLXP blogs deliver actionable ideas that help organizations
            improve learning experiences and outcomes.
          </p>

          <ul className="blogs-insight-list">
            {practicalInsights.map((item) => (
              <li key={item}>
                <FaArrowRight />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="blogs-neumorphic-card blogs-image-card">
          <div className="blogs-image-placeholder">
            <img
              src="/pexels-ivan-s-4240497.jpg"
              alt="Learners using digital learning resources"
              className="placeholder-image"
            />
          </div>
        </article>
      </section>

      <section className="blogs-innovation-section blogs-neumorphic-card">
        <div>
          <span className="blogs-eyebrow">Latest Innovations</span>
          <h2>Stay Updated with the Latest Learning Innovations</h2>
          <p>
            The learning landscape continues to evolve with new technologies,
            methodologies, and industry trends. The NeuroLXP blog keeps readers
            informed about the latest developments in digital learning, education
            technology, and workforce development.
          </p>
        </div>

        <div className="blogs-innovation-grid">
          <div>
            <FaBullseye />
            <h3>Actionable Ideas</h3>
            <p>
              Practical guidance for educators, training professionals, and
              decision-makers.
            </p>
          </div>

          <div>
            <FaLightbulb />
            <h3>Emerging Trends</h3>
            <p>
              Clear perspectives on the technologies shaping the future of
              digital learning.
            </p>
          </div>
        </div>
      </section>

      <section className="blogs-final-section">
        <h2>NeuroLXP Blog — Knowledge for the Future of Learning</h2>
        <p>
          Explore our blog to discover expert insights, emerging trends, and
          innovative ideas that help institutions and organizations create
          smarter, more engaging learning experiences.
        </p>
      </section>
    </main>
  );
}
