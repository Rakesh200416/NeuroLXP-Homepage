import "./skilling-courses.css";
import {
  FaTools,
  FaBriefcase,
  FaLayerGroup,
  FaLaptopCode,
  FaChartLine,
  FaClock,
  FaGamepad,
  FaClipboardCheck,
  FaCertificate,
  FaUniversity,
  FaBuilding,
  FaGraduationCap,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

const skillBenefits = [
  "Develop job-ready technical and professional skills",
  "Apply theoretical knowledge through practice-based learning",
  "Gain expertise aligned with industry demands",
  "Prepare for certifications and career opportunities",
];

const pathwayItems = [
  "Core skill development modules",
  "Practical exercises and real-world case studies",
  "Interactive learning activities and simulations",
  "Assessments that measure skill mastery",
  "Capstone projects and practical evaluations",
];

const interactiveFormats = [
  {
    icon: <FaGamepad />,
    title: "Gamified activities",
  },
  {
    icon: <FaLaptopCode />,
    title: "Scenario-based exercises",
  },
  {
    icon: <FaTools />,
    title: "Hands-on assessments",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Practical evaluations",
  },
];

const idealFor = [
  {
    icon: <FaUniversity />,
    title: "Universities",
    text: "Higher education institutions building career-ready programmes.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Training Institutes",
    text: "Professional training organizations delivering focused skill tracks.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Learning",
    text: "Workforce development programmes for employee growth.",
  },
  {
    icon: <FaRocket />,
    title: "EdTech Providers",
    text: "Online education platforms supporting scalable skill development.",
  },
];

export default function SkillingCourses() {
  return (
    <main className="skilling-page">
      <div className="skilling-breadcrumb-nav">
        <ol className="skilling-breadcrumb">
          <li className="skilling-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="skilling-breadcrumb-item active" aria-current="page">
            Skilling Courses
          </li>
        </ol>
      </div>

      <section className="skilling-hero skilling-neumorphic-card">
        <div className="skilling-hero-content">
          <span className="skilling-eyebrow">Skilling Courses</span>
          <h1>Build Skills That Matter in the Real World</h1>
          <p>
            In today’s rapidly evolving job market, learning must go beyond
            theory. NeuroLXP enables institutions and organizations to deliver
            skill-focused courses that build practical knowledge and
            career-ready abilities.
          </p>
          <p>
            Through structured skilling courses and competency-based learning
            programs, NeuroLXP helps learners gain the expertise required to
            succeed in modern careers.
          </p>
        </div>

        <div className="skilling-visual-card">
          <div className="skilling-skill-ring">
            <span>Future</span>
            <strong>Ready</strong>
          </div>

          <div className="skilling-floating-pill skilling-pill-one">
            <FaBriefcase />
            <span>Job-ready skills</span>
          </div>

          <div className="skilling-floating-pill skilling-pill-two">
            <FaCertificate />
            <span>Certifications</span>
          </div>

          <div className="skilling-floating-pill skilling-pill-three">
            <FaChartLine />
            <span>Progress tracking</span>
          </div>
        </div>
      </section>

      <section className="skilling-open-section">
        <span>Future-Ready Learners</span>
        <h2>Skills That Convert Learning into Career Growth</h2>
        <p>
          NeuroLXP helps institutions design learning experiences where outcomes
          are tied to practical expertise, professional confidence, and
          measurable competency growth.
        </p>
      </section>

      <section className="skilling-industry-layout">
        <article className="skilling-neumorphic-card skilling-industry-card">
          <div className="skilling-icon-box">
            <FaBriefcase />
          </div>

          <h2>Industry-Aligned Skill Development</h2>
          <p>
            NeuroLXP supports industry-relevant skilling programs that prepare
            learners for real-world challenges through foundational knowledge and
            practical application.
          </p>

          <div className="skilling-benefit-grid">
            {skillBenefits.map((item) => (
              <div key={item}>
                <FaCheckCircle />
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </article>

        <article className="skilling-progress-panel">
          <div className="skilling-progress-header">
            <span>Competency Growth</span>
            <FaChartLine />
          </div>

          <div className="skilling-progress-row">
            <p>Technical skills</p>
            <div>
              <strong className="skilling-progress-one"></strong>
            </div>
            <span>84%</span>
          </div>

          <div className="skilling-progress-row">
            <p>Practical application</p>
            <div>
              <strong className="skilling-progress-two"></strong>
            </div>
            <span>78%</span>
          </div>

          <div className="skilling-progress-row">
            <p>Career readiness</p>
            <div>
              <strong className="skilling-progress-three"></strong>
            </div>
            <span>89%</span>
          </div>

          <div className="skilling-progress-summary">
            <FaRocket />
            <h3>Workforce Preparation</h3>
            <p>
              Skill-focused pathways help learners build confidence for
              professional opportunities.
            </p>
          </div>
        </article>
      </section>

      <section className="skilling-pathway-section skilling-neumorphic-card">
        <div>
          <span className="skilling-eyebrow">Structured Programs</span>
          <h2>Skill-Based Learning Pathways</h2>
          <p>
            NeuroLXP allows educators to design structured skilling pathways
            that guide learners from beginner-level knowledge to advanced
            competency.
          </p>
        </div>

        <div className="skilling-pathway-list">
          {pathwayItems.map((item, index) => (
            <div className="skilling-pathway-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="skilling-flexible-section">
        <article className="skilling-flex-card">
          <div className="skilling-icon-box skilling-clock-icon">
            <FaClock />
          </div>
          <h2>Flexible Learning for Continuous Skill Development</h2>
          <p>
            Skilling courses in NeuroLXP support flexible, self-paced learning.
            Learners can access training materials, complete activities, and
            practise skills at their own pace.
          </p>
        </article>

        <article className="skilling-flex-card skilling-flex-card-alt">
          <div className="skilling-icon-box skilling-tools-icon">
            <FaTools />
          </div>
          <h2>Practical Learning Through Interactive Experiences</h2>
          <p>
            NeuroLXP integrates simulations, scenario-based exercises, gamified
            activities, and hands-on assessments to help learners practise skills
            in realistic situations.
          </p>
        </article>
      </section>

      <section className="skilling-interactive-section">
        <div className="skilling-section-heading">
          <h2>Interactive Formats That Strengthen Practice</h2>
          <p>
            Interactive experiences improve learner understanding, confidence,
            and real-world application.
          </p>
        </div>

        <div className="skilling-interactive-grid">
          {interactiveFormats.map((format) => (
            <article className="skilling-interactive-card" key={format.title}>
              <div className="skilling-interactive-icon">{format.icon}</div>
              <h4>{format.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="skilling-tracking-section skilling-neumorphic-card">
        <div>
          <span className="skilling-eyebrow">Analytics</span>
          <h2>Tracking Skill Progress and Competency Growth</h2>
          <p>
            NeuroLXP provides analytics and reporting tools that help
            institutions and educators monitor skill acquisition, learner
            progress, and areas that require additional support.
          </p>
        </div>

        <div className="skilling-tracking-list">
          <div>
            <FaChartLine />
            <h4>Track skill acquisition over time</h4>
          </div>
          <div>
            <FaClipboardCheck />
            <h4>Identify competency gaps early</h4>
          </div>
          <div>
            <FaCertificate />
            <h4>Record achievements and certifications</h4>
          </div>
        </div>
      </section>

      <section className="skilling-ideal-section">
        <div className="skilling-section-heading">
          <h2>Ideal for Universities, Training Institutes, and Corporate Learning</h2>
          <p>
            NeuroLXP supports large-scale skill development initiatives aimed at
            preparing learners for the demands of the modern workforce.
          </p>
        </div>

        <div className="skilling-ideal-grid">
          {idealFor.map((item) => (
            <article className="skilling-ideal-card" key={item.title}>
              <div className="skilling-ideal-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="skilling-final-section skilling-neumorphic-card">
        <div className="skilling-final-icon">
          <FaRocket />
        </div>
        <h2>NeuroLXP — Empowering Skill Development for the Future Workforce</h2>
        <p>
          By enabling institutions to design and deliver industry-relevant
          skilling courses, NeuroLXP helps learners build practical expertise,
          strengthen career readiness, and succeed in a competitive global
          economy.
        </p>
      </section>
    </main>
  );
}
