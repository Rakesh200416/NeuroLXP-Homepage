import "./analytics-reporting.css";
import {
  FaChartLine,
  FaChartPie,
  FaChartBar,
  FaUserGraduate,
  FaClipboardList,
  FaBrain,
  FaExclamationTriangle,
  FaGraduationCap,
  FaUniversity,
  FaBuilding,
  FaSchool,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

const analyticsBenefits = [
  "Monitor learner progress in real time",
  "Identify knowledge gaps early",
  "Track course engagement and completion rates",
  "Evaluate assessment performance and trends",
  "Improve curriculum effectiveness through data insights",
];

const dashboardInsights = [
  "Learner activity and engagement tracking",
  "Course completion rates",
  "Time spent on learning modules",
  "Assessment scores and performance trends",
  "Participation in discussions and collaborative learning",
  "Gamification progress and achievements",
];

const reportingCapabilities = [
  "Learner performance reports",
  "Course effectiveness reports",
  "Assessment analytics and exam results",
  "Instructor activity reports",
  "Department-level learning analytics",
  "Program and curriculum performance reports",
];

const learningGaps = [
  "Learners falling behind in courses",
  "Low engagement with learning materials",
  "Assessment performance patterns",
  "Topics where learners consistently struggle",
];

const outcomeBenefits = [
  "Enhance course design and curriculum quality",
  "Improve teaching strategies",
  "Increase learner engagement",
  "Boost course completion rates",
  "Achieve stronger academic and training outcomes",
];

const environments = [
  {
    icon: <FaUniversity />,
    title: "Universities",
    text: "Higher education institutions managing academic programmes.",
  },
  {
    icon: <FaSchool />,
    title: "Schools",
    text: "Digital learning platforms for structured education delivery.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Training",
    text: "Professional development and workforce learning programmes.",
  },
  {
    icon: <FaGraduationCap />,
    title: "EdTech Providers",
    text: "Online course providers and scalable learning businesses.",
  },
];

export default function LearningAnalytics() {
  return (
    <main className="analytics-page">
      <div className="analytics-breadcrumb-nav">
        <ol className="analytics-breadcrumb">
          <li className="analytics-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="analytics-breadcrumb-item active" aria-current="page">
            Analytics &amp; Reporting
          </li>
        </ol>
      </div>

      <section className="analytics-hero analytics-neumorphic-card">
        <div className="analytics-hero-content">
          <span className="analytics-eyebrow">
            Learning Analytics & Reporting
          </span>
          <h1>Turn Learning Data into Actionable Insights</h1>
          <p>
            In modern digital education, success depends on more than delivering
            content—it depends on understanding how learners engage, progress,
            and perform.
          </p>
          <p>
            NeuroLXP’s advanced Learning Analytics and Reporting system empowers
            institutions, educators, and training leaders with real-time data
            insights that support smarter, evidence-based decisions.
          </p>
        </div>

        <div className="analytics-chart-card">
          <div className="analytics-chart-header">
            <span>Learning Performance</span>
            <FaChartLine />
          </div>

          <div className="analytics-bar-row">
            <span>Engagement</span>
            <div>
              <strong className="analytics-bar analytics-bar-one"></strong>
            </div>
            <b>86%</b>
          </div>

          <div className="analytics-bar-row">
            <span>Completion</span>
            <div>
              <strong className="analytics-bar analytics-bar-two"></strong>
            </div>
            <b>74%</b>
          </div>

          <div className="analytics-bar-row">
            <span>Assessment</span>
            <div>
              <strong className="analytics-bar analytics-bar-three"></strong>
            </div>
            <b>91%</b>
          </div>

          <div className="analytics-mini-stats">
            <div>
              <h3>12k+</h3>
              <p>Learners tracked</p>
            </div>
            <div>
              <h3>98%</h3>
              <p>Report accuracy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="analytics-open-section">
        <span>AI-Powered LMS Intelligence</span>
        <h2>Transform Learning Data into Meaningful Analytics</h2>
        <p>
          NeuroLXP converts learning activity into insights that help improve
          learning effectiveness, learner engagement, course quality, and
          academic outcomes.
        </p>
      </section>

      <section className="analytics-benefits-section">
        <div className="analytics-section-heading">
          <h2>Why Learning Analytics Matters in Modern LMS Platforms</h2>
          <p>
            Educational institutions and training organizations generate large
            volumes of learning data every day. NeuroLXP helps convert that data
            into better learning strategies.
          </p>
        </div>

        <div className="analytics-benefits-grid">
          {analyticsBenefits.map((item, index) => (
            <article className="analytics-benefit-card" key={item}>
              <div className="analytics-benefit-icon">
                {index === 0 && <FaUserGraduate />}
                {index === 1 && <FaExclamationTriangle />}
                {index === 2 && <FaChartBar />}
                {index === 3 && <FaClipboardList />}
                {index === 4 && <FaBrain />}
              </div>
              <h4>{item}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="analytics-dashboard-layout">
        <article className="analytics-neumorphic-card analytics-dashboard-card">
          <div className="analytics-icon-box">
            <FaChartPie />
          </div>
          <h2>Comprehensive Learning Analytics Dashboard</h2>
          <p>
            NeuroLXP consolidates key metrics into clear visual insights so
            administrators, instructors, and training managers can monitor the
            entire learning ecosystem.
          </p>

          <ul className="analytics-list">
            {dashboardInsights.map((item) => (
              <li key={item}>
                <FaArrowRight />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="analytics-neumorphic-card analytics-visual-card">
          <h3>Dashboard Snapshot</h3>

          <div className="analytics-donut-wrap">
            <div className="analytics-donut">
              <span>78%</span>
            </div>
            <p>Average learner activity</p>
          </div>

          <div className="analytics-small-metrics">
            <div>
              <span></span>
              <p>Course completion</p>
            </div>
            <div>
              <span></span>
              <p>Assessment performance</p>
            </div>
            <div>
              <span></span>
              <p>Discussion participation</p>
            </div>
          </div>
        </article>
      </section>

      <section className="analytics-report-section analytics-neumorphic-card">
        <div>
          <span className="analytics-eyebrow">Advanced Reporting</span>
          <h2>Reports for Institutions and Educators</h2>
          <p>
            NeuroLXP supports detailed LMS reporting tools that generate
            customized reports across learners, courses, departments,
            instructors, programmes, and assessments.
          </p>
          <p>
            Reports can be exported and shared with stakeholders to support
            transparency, accountability, and continuous improvement.
          </p>
        </div>

        <div className="analytics-report-grid">
          {reportingCapabilities.map((item) => (
            <div key={item}>
              <FaDownload />
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="analytics-gap-layout">
        <article className="analytics-neumorphic-card analytics-gap-card">
          <div className="analytics-icon-box analytics-warning-icon">
            <FaExclamationTriangle />
          </div>
          <h2>Early Identification of Learning Gaps</h2>
          <p>
            AI-driven learning analytics help institutions detect struggling
            learners early and provide timely support, targeted interventions,
            and improved instructional strategies.
          </p>

          <ul className="analytics-gap-list">
            {learningGaps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="analytics-neumorphic-card analytics-outcome-card">
          <div className="analytics-icon-box analytics-success-icon">
            <FaChartLine />
          </div>
          <h2>Improve Learning Outcomes with Data-Driven Decisions</h2>
          <p>
            Decision-makers can evaluate what works, what needs improvement, and
            how to optimize courses for stronger outcomes.
          </p>

          <ul className="analytics-list">
            {outcomeBenefits.map((item) => (
              <li key={item}>
                <FaArrowRight />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="analytics-environments-section">
        <div className="analytics-section-heading">
          <h2>Scalable Analytics for Every Learning Environment</h2>
          <p>
            NeuroLXP supports large-scale learning analytics for institutions and
            organizations managing thousands of learners.
          </p>
        </div>

        <div className="analytics-environment-grid">
          {environments.map((env) => (
            <article className="analytics-environment-card" key={env.title}>
              <div className="analytics-environment-icon">{env.icon}</div>
              <h4>{env.title}</h4>
              <p>{env.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="analytics-final-section analytics-neumorphic-card">
        <div className="analytics-final-icon">
          <FaBrain />
        </div>
        <h2>Beyond Traditional LMS Reporting</h2>
        <p>
          NeuroLXP goes further than basic activity logs and simple reports by
          delivering intelligent analytics, real-time dashboards, and AI-powered
          reporting insights.
        </p>
        <h3>
          NeuroLXP — The AI-Powered LMS for Smarter Learning Analytics and
          Data-Driven Education.
        </h3>
      </section>
    </main>
  );
}
