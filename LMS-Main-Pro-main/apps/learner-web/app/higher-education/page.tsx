import {
  FaUniversity,
  FaChalkboardTeacher,
  FaBookOpen,
  FaChartLine,
  FaBriefcase,
  FaMobileAlt,
  FaRobot,
  FaUsers,
  FaGraduationCap,
  FaCheckCircle,
  FaLightbulb,
  FaImage,
} from "react-icons/fa";
import "./HigherEducation.css";

export default function HigherEducation() {
  // 🔹 SHORT CARD TEXT ONLY
  const challenges = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Passive Learning",
      point: "Make learning interactive and engaging.",
      color: "blue",
    },
    {
      icon: <FaBookOpen />,
      title: "Content Overload",
      point: "Organize learning content efficiently.",
      color: "orange",
    },
    {
      icon: <FaChartLine />,
      title: "Progress Tracking",
      point: "Track student performance clearly.",
      color: "green",
    },
    {
      icon: <FaBriefcase />,
      title: "Career Readiness",
      point: "Build job-ready student skills.",
      color: "purple",
    },
    {
      icon: <FaMobileAlt />,
      title: "Flexible Learning",
      point: "Enable learning anytime, anywhere.",
      color: "cyan",
    },
  ];

  const benefits = [
    "Digital and blended learning programmes",
    "Improved student engagement",
    "AI-powered learning resources",
    "Advanced performance analytics",
    "Career-focused skill development",
    "Scalable learning across institutions",
  ];

  return (
    <section className="higher-page">
      <div className="higher-breadcrumb-nav">
        <ol className="higher-breadcrumb">
          <li className="higher-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="higher-breadcrumb-item active" aria-current="page">
            Higher Education
          </li>
        </ol>
      </div>

      {/* HERO */}
      <div className="higher-hero">
        <h1>Higher Education</h1>

        <h2>
          Empowering Universities with Modern Learning Platforms
        </h2>

        <p>
          NeuroLXP enables institutions to deliver flexible, engaging, and
          technology-driven learning experiences that prepare students for
          real-world success.
        </p>
      </div>

      {/* IMAGES */}
      <div className="higher-image-row">
        <div className="higher-image-box">
          <img
            src="/pexels-clmcdk-fejcn-2057437867-29646491.jpg"
            alt="University campus learning environment"
          />
        </div>

        <div className="higher-image-box">
          <img
            src="/pexels-zandatsu-31367512.jpg"
            alt="Digital learning platform for higher education"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="higher-content-block">
        <div>
          <span className="higher-label">Digital Learning</span>

          <h3>Modern Learning for Universities and Colleges</h3>

          <p>
            Higher education institutions are rapidly evolving. Students now
            expect flexible, digital-first learning environments that go beyond
            traditional classrooms.
          </p>

          <p>
            NeuroLXP helps universities deliver structured, scalable, and
            engaging learning experiences using AI-powered tools and
            interactive content.
          </p>
        </div>

        <div className="content-mini-panel">
          <FaRobot />
          <h4>AI-Powered Learning</h4>
          <p>
            Convert content into summaries, assessments, and interactive modules.
          </p>
        </div>
      </div>

      {/* INTRO CARDS */}
      <div className="higher-intro-grid">
        <div className="higher-intro-card">
          <FaUsers />
          <h3>Engagement</h3>
          <p>Encourage active student participation.</p>
        </div>

        <div className="higher-intro-card">
          <FaChartLine />
          <h3>Analytics</h3>
          <p>Track performance with real-time insights.</p>
        </div>

        <div className="higher-intro-card">
          <FaGraduationCap />
          <h3>Outcomes</h3>
          <p>Focus on skills and career readiness.</p>
        </div>
      </div>

      {/* CHALLENGES HEADER */}
      <div className="higher-section-title">
        <span>Challenges</span>
        <h3>Key Challenges in Higher Education</h3>
        <p>
          Institutions face multiple challenges in delivering effective,
          scalable, and engaging learning experiences.
        </p>
      </div>

      {/* CHALLENGE CARDS (SHORT TEXT) */}
      <div className="challenge-grid">
        {challenges.map((item, index) => (
          <article className={`challenge-card ${item.color}`} key={index}>
            <div className="challenge-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.point}</p>
          </article>
        ))}
      </div>

      {/* FULL EXPLANATION HERE (NOT IN CARDS) */}
      <div className="higher-text-section">
        <h3>How NeuroLXP Solves These Challenges</h3>

        <p>
          NeuroLXP transforms passive learning into interactive experiences
          through quizzes, simulations, discussions, and collaborative modules,
          helping students stay engaged and retain knowledge more effectively.
        </p>

        <p>
          Institutions can manage large volumes of academic content through a
          centralized system, making it easier to organize lecture notes,
          videos, and study materials while using AI to simplify complex topics.
        </p>

        <p>
          Educators gain real-time insights into student engagement,
          performance, and course completion, enabling better decision-making
          and personalized support for learners.
        </p>

        <p>
          The platform also supports career readiness by aligning learning with
          industry skills, ensuring students are prepared for real-world roles.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="benefits-section">
        <div className="benefits-heading">
          <span>Benefits</span>
          <h3>Key Benefits for Institutions</h3>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <FaCheckCircle />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FUTURE */}
      <div className="future-card">
        <div>
          <span className="higher-label">Future Ready</span>

          <h3>Supporting the Future of Education</h3>

          <p>
            NeuroLXP helps institutions build flexible, scalable, and
            intelligent learning ecosystems that adapt to evolving educational
            needs.
          </p>
        </div>

        <div className="future-icon">
          <FaLightbulb />
        </div>
      </div>

      {/* CLOSING */}
      <div className="closing-card">
        <h3>NeuroLXP — Intelligent Learning for Modern Education</h3>
        <p>
          Deliver engaging, flexible, and future-ready learning experiences for
          students and educators.
        </p>
      </div>
    </section>
  );
}
