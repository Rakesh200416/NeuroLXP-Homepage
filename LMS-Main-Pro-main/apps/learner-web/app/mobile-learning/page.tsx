import "./mobile-learning.css";
import {
  FaMobileAlt,
  FaTabletAlt,
  FaCloud,
  FaClock,
  FaBell,
  FaComments,
  FaGamepad,
  FaClipboardCheck,
  FaGraduationCap,
  FaBuilding,
  FaUniversity,
  FaRocket,
  FaArrowRight,
  FaWifi,
} from "react-icons/fa";

const deviceAccess = [
  "Access courses anytime and from any location",
  "Continue learning during travel or short breaks",
  "Review study materials quickly and conveniently",
  "Stay connected with instructors and peers",
];

const microlearning = [
  "Absorb information in small, manageable segments",
  "Revise concepts quickly before exams or tasks",
  "Maintain consistent learning habits",
  "Stay engaged without feeling overwhelmed",
];

const interactiveFeatures = [
  { icon: <FaClipboardCheck />, title: "Interactive quizzes" },
  { icon: <FaGamepad />, title: "Gamified activities" },
  { icon: <FaComments />, title: "Discussion forums" },
  { icon: <FaMobileAlt />, title: "Clickable explorations" },
];

const notifications = [
  "New course releases",
  "Assignment deadlines",
  "Discussion updates",
  "Assessment reminders",
  "Certification achievements",
];

const idealFor = [
  { icon: <FaUniversity />, title: "Universities" },
  { icon: <FaGraduationCap />, title: "Schools" },
  { icon: <FaBuilding />, title: "Corporate Training" },
  { icon: <FaWifi />, title: "Remote Learning" },
];

export default function MobileLearning() {
  return (
    <main className="mobile-page">
      <section className="mobile-hero">
        <div className="mobile-hero-content">
          <span className="mobile-badge">Mobile Learning</span>
          <h1>Learn Anytime, Anywhere with Mobile-First Learning</h1>
          <p>
            NeuroLXP enables seamless mobile learning, allowing learners to
            access courses, assessments, and learning resources anytime using
            smartphones or tablets.
          </p>
          <p>
            With a mobile-friendly LMS, NeuroLXP keeps learning flexible,
            accessible, and convenient for modern learners on the go.
          </p>
        </div>

        <div className="mobile-device-frame">
          <div className="mobile-phone">
            <div className="mobile-phone-top"></div>
            <div className="mobile-screen-card">
              <FaMobileAlt />
              <h3>Mobile LMS</h3>
              <p>Courses, quizzes, progress, and updates in one place.</p>
            </div>
            <div className="mobile-progress">
              <span></span>
            </div>
          </div>

          <div className="mobile-floating mobile-float-one">
            <FaCloud />
            <span>Cloud access</span>
          </div>

          <div className="mobile-floating mobile-float-two">
            <FaBell />
            <span>Live alerts</span>
          </div>
        </div>
      </section>

      <section className="mobile-intro">
        <span>Flexible Learning Access</span>
        <h2>Learning That Fits Daily Routines</h2>
        <p>
          NeuroLXP helps learners study during travel, short breaks, or
          self-paced sessions without depending on desktop access.
        </p>
      </section>

      <section className="mobile-access-section">
        <article className="mobile-card mobile-access-card">
          <div className="mobile-icon-box">
            <FaTabletAlt />
          </div>
          <h2>Access Learning on Any Device</h2>
          <p>
            NeuroLXP adapts smoothly across smartphones, tablets, and other
            mobile devices so learners can access courses and track progress
            anywhere.
          </p>

          <ul className="mobile-list">
            {deviceAccess.map((item) => (
              <li key={item}>
                <FaArrowRight />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="mobile-stats-panel">
          <div>
            <h3>24/7</h3>
            <p>Learning access</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>Responsive layout</p>
          </div>
          <div>
            <h3>Any</h3>
            <p>Device support</p>
          </div>
        </article>
      </section>

      <section className="mobile-micro-section">
        <div>
          <span className="mobile-badge">Microlearning</span>
          <h2>Short, Focused Lessons for Busy Learners</h2>
          <p>
            NeuroLXP supports quick lessons, quizzes, and activities that can be
            completed in a few minutes.
          </p>
        </div>

        <div className="mobile-micro-list">
          {microlearning.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="mobile-feature-section">
        <div className="mobile-section-heading">
          <h2>Interactive Mobile Learning Experiences</h2>
          <p>
            Mobile learning becomes more effective when learners can interact,
            practise, discuss, and receive immediate feedback.
          </p>
        </div>

        <div className="mobile-feature-grid">
          {interactiveFeatures.map((item) => (
            <article className="mobile-feature-card" key={item.title}>
              <div className="mobile-feature-icon">{item.icon}</div>
              <h4>{item.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="mobile-notification-section">
        <article className="mobile-notification-panel">
          <div className="mobile-bell-circle">
            <FaBell />
          </div>
          <h2>Stay Connected with Notifications and Updates</h2>
          <p>
            Real-time alerts help learners stay organized and actively engaged
            with their learning journey.
          </p>
        </article>

        <article className="mobile-notification-list">
          {notifications.map((item) => (
            <div key={item}>
              <FaBell />
              <span>{item}</span>
            </div>
          ))}
        </article>
      </section>

      <section className="mobile-ideal-section">
        <div className="mobile-section-heading">
          <h2>Ideal for Modern Education and Corporate Training</h2>
          <p>
            Mobile accessibility supports continuous learning across academic,
            professional, and remote learning environments.
          </p>
        </div>

        <div className="mobile-ideal-grid">
          {idealFor.map((item) => (
            <article className="mobile-ideal-card" key={item.title}>
              <div className="mobile-ideal-icon">{item.icon}</div>
              <h4>{item.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="mobile-final">
        <div className="mobile-final-icon">
          <FaRocket />
        </div>
        <h2>NeuroLXP — Learning Without Limits</h2>
        <p>
          With mobile-first design, interactive learning experiences, and
          seamless accessibility across devices, NeuroLXP empowers learners to
          learn anytime, anywhere, and at their own pace.
        </p>
      </section>
    </main>
  );
}
