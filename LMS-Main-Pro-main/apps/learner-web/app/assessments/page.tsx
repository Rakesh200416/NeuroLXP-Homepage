import "./assessments.css";
import {
  FaBrain,
  FaChartLine,
  FaCheckCircle,
  FaClipboardList,
  FaGraduationCap,
  FaPuzzlePiece,
  FaRobot,
  FaSchool,
  FaUsers,
  FaVideo,
  FaProjectDiagram,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const assessmentBenefits = [
  "Interactive and engaging",
  "Aligned with learning outcomes",
  "Suitable for online education and remote learning",
  "Scalable for universities, schools, and corporate training",
  "Optimized for exam preparation and skill development",
];

const assessmentCategories = [
  {
    icon: <FaClipboardList />,
    title: "Popular Online Quiz Formats",
    color: "blue",
    items: [
      "Multiple Choice Questions",
      "True or False",
      "Fill in the Blanks",
      "One-Word Answers",
      "Short Answer Questions",
      "Long Descriptive Answers",
    ],
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Interactive Assessment Types",
    color: "green",
    items: [
      "Drag and Drop",
      "Match the Following",
      "Sequencing and Ordering",
      "Clickable Hotspots",
      "Puzzle-Based Questions",
      "Memory Games",
    ],
  },
  {
    icon: <FaVideo />,
    title: "Multimedia-Based Assessments",
    color: "orange",
    items: [
      "Image-Based Questions",
      "Audio-Based Assessments",
      "Video-Based Questions",
      "Visual Concept Identification",
    ],
  },
  {
    icon: <FaProjectDiagram />,
    title: "Real-World Application Assessments",
    color: "purple",
    items: [
      "Case Study Evaluations",
      "Scenario-Based Assessments",
      "Project-Based Submissions",
      "Assignment Evaluations",
      "Reflection-Based Assessments",
    ],
  },
  {
    icon: <FaUsers />,
    title: "Collaborative and Continuous Learning",
    color: "cyan",
    items: [
      "Peer Assessments",
      "Self-Assessments",
      "Discussion-Based Evaluations",
      "Continuous Learning Quizzes",
      "Timed Quiz Challenges",
    ],
  },
];

const aiFeatures = [
  "Generate exam-style questions from study materials",
  "Create practice quizzes from uploaded content",
  "Recommend questions based on historical exam patterns",
  "Support adaptive testing based on learner performance",
];

const idealFor = [
  "Universities and higher education institutions",
  "Schools and online education platforms",
  "Corporate learning and development programs",
  "EdTech companies and online course providers",
  "Professional certification programs",
];

export default function Assessments() {
  return (
    <main className="assessments-page">
      <div className="assessments-breadcrumb-nav">
        <ol className="assessments-breadcrumb">
          <li className="assessments-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="assessments-breadcrumb-item active" aria-current="page">
            Assessments
          </li>
        </ol>
      </div>

      <section className="assessments-hero assessments-neumorphic-card">
        <div className="assessments-hero-content">
          <span className="assessments-eyebrow">Advanced Online Assessments</span>
          <h1>60+ Assessment Types in a Powerful AI-Driven LMS</h1>
          <p>
            Assessments are a critical part of effective digital learning.
            NeuroLXP offers 60+ online assessment formats designed to evaluate
            knowledge, measure skills, and improve learner engagement.
          </p>
          <p>
            Unlike traditional LMS platforms, NeuroLXP provides a comprehensive
            online assessment ecosystem for interactive quizzes, skill-based
            evaluations, exam preparation, and continuous learning assessments.
          </p>
        </div>

        <div className="assessments-image-placeholder">
          <img
            src="/pexels-andy-barbour-6684255.jpg"
            alt="Descriptive image text"
            className="placeholder-image"
          />
        </div>
      </section>

      <section className="assessments-stats-card assessments-neumorphic-card">
        <div className="assessments-stat-item">
          <h2>60+</h2>
          <p>Assessment formats</p>
        </div>
        <div className="assessments-stat-item">
          <h2>AI</h2>
          <p>Question generation</p>
        </div>
        <div className="assessments-stat-item">
          <h2>5+</h2>
          <p>Learning sectors</p>
        </div>
      </section>

      <section className="assessments-open-section">
        <span>Why Assessments Matter</span>
        <h2>Modern LMS Assessments Go Beyond Simple Tests</h2>
        <p>
          Effective online learning platforms must support interactive,
          gamified, and adaptive assessments that evaluate critical thinking,
          application of knowledge, and real-world problem solving.
        </p>
      </section>

      <section className="assessments-benefits-grid">
        {assessmentBenefits.map((benefit, index) => (
          <article className="assessments-benefit-card" key={benefit}>
            <FaCheckCircle />
            <h4>{benefit}</h4>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </article>
        ))}
      </section>

      <section className="assessments-section-heading">
        <h2>60+ Online Assessment Formats</h2>
        <p>
          NeuroLXP enables instructors to create flexible, engaging, and
          meaningful evaluation experiences across multiple learning contexts.
        </p>
      </section>

      <section className="assessments-category-grid">
        {assessmentCategories.map((category) => (
          <article
            className={`assessments-category-card assessments-${category.color}`}
            key={category.title}
          >
            <div className="assessments-category-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}>
                  <FaArrowRight />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="assessments-ai-section assessments-neumorphic-card">
        <div>
          <span className="assessments-eyebrow">AI Intelligence</span>
          <h2>AI-Powered Assessment Intelligence</h2>
          <p>
            NeuroLXP goes beyond basic LMS testing features by integrating
            AI-driven assessment capabilities for smarter evaluation and
            adaptive learning.
          </p>
        </div>

        <div className="assessments-ai-list">
          {aiFeatures.map((feature, index) => (
            <div key={feature}>
              <div className="assessments-ai-icon">
                {index === 0 && <FaRobot />}
                {index === 1 && <FaBrain />}
                {index === 2 && <FaChartLine />}
                {index === 3 && <FaClock />}
              </div>
              <h4>{feature}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="assessments-ideal-layout">
        <article className="assessments-neumorphic-card assessments-ideal-card">
          <div className="assessments-icon-box">
            <FaSchool />
          </div>
          <h2>Perfect for Schools, Universities, and Corporate Training</h2>
          <p>
            NeuroLXP is designed for organizations that want to build modern
            digital learning environments with online exams, skill evaluation,
            training assessments, and certification testing.
          </p>

          <ul className="assessments-list">
            {idealFor.map((item) => (
              <li key={item}>
                <FaGraduationCap />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="assessments-neumorphic-card assessments-image-card">
          <div className="assessments-image-placeholder">
            <img
              src="/pexels-pavel-danilyuk-6716014.jpg"
              alt="Learners using digital learning resources"
              className="placeholder-image"
            />
          </div>
        </article>
      </section>

      <section className="assessments-final-section assessments-neumorphic-card">
        <div className="assessments-final-icon">
          <FaBrain />
        </div>
        <h2>A Smarter LMS for Digital Learning</h2>
        <p>
          Traditional LMS platforms often limit educators to only a few question
          types. NeuroLXP changes that with 60+ assessment formats, enabling
          institutions to create interactive, engaging, and meaningful online
          evaluations.
        </p>
        <h3>
          NeuroLXP — The AI-Powered LMS for Smarter Assessments, Engaging
          Learning, and Modern Education.
        </h3>
      </section>
    </main>
  );
}
