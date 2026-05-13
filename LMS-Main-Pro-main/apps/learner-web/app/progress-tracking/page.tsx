import "./progress-tracking.css";
import {
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaBrain,
  FaRobot,
  FaRoute,
  FaChartBar,
  FaBolt,
  FaMedal,
  FaTrophy,
  FaSearch,
  FaUserGraduate,
  FaDatabase,
  FaLock,
} from "react-icons/fa";

const challengeItems = [
  {
    icon: <FaDatabase className="iconText" />,
    title: "Data Accuracy and Reliability",
    desc: "Incomplete data, inconsistencies in collection methods, and variations in learner engagement can affect the validity of tracking metrics. Robust quality assurance processes are essential.",
  },
  {
    icon: <FaLightbulb className="iconText" />,
    title: "Interpretation and Actionability",
    desc: "Interpreting insights into actionable interventions is challenging. Educators may struggle to identify meaningful patterns and translate them into targeted support strategies.",
  },
  {
    icon: <FaLock className="iconText" />,
    title: "Privacy and Ethical Considerations",
    desc: "Collecting learner data raises concerns about privacy, security, and ethics. Balancing tracking benefits with learner rights is critical to a safe, supportive environment.",
  },
];

const statsData = [
  { label: "Real-time Progress Updates", value: "38%", suffix: "Increase" },
  { label: "Performance Analytics", value: "25%", suffix: "Boost" },
  { label: "Learner Motivation", value: "30%", suffix: "Increase" },
  { label: "Time Management Skills", value: "18%", suffix: "Improvement" },
];

const whyItems = [
  {
    icon: <FaChartLine className="iconText" />,
    title: "Informed Decision-Making",
    desc: "Make data-driven decisions with a comprehensive view of performance. Learners gain insights into their strengths and areas for improvement.",
  },
  {
    icon: <FaBolt className="iconText" />,
    title: "Continuous Improvement",
    desc: "Implement continuous improvement strategies based on data trends. Enhance instructional design and content delivery for better learning outcomes.",
  },
  {
    icon: <FaUserGraduate className="iconText" />,
    title: "Enhanced Engagement",
    desc: "Personalized recommendations boost learner engagement. Gamification elements such as badges and certificates further motivate learners.",
  },
  {
    icon: <FaMedal className="iconText" />,
    title: "Certificates and Badges",
    desc: "Recognizes and rewards learner achievements. Boosts motivation and satisfaction with tangible accomplishments.",
  },
];

const moduleFeatures = [
  {
    icon: <FaBolt className="iconText" />,
    title: "Real-Time Data Insights",
    desc: "Receive instant updates on learner progress, enabling timely interventions. Monitor engagement levels, time spent on tasks, and overall participation in the learning process.",
  },
  {
    icon: <FaRoute className="iconText" />,
    title: "Individualized Learning Paths",
    desc: "Leverage AI algorithms to craft personalized learning paths for each learner. Dynamically adjust content delivery based on individual strengths, weaknesses, and preferences.",
  },
  {
    icon: <FaChartBar className="iconText" />,
    title: "Predictive Analytics",
    desc: "Utilize predictive analytics to forecast learner performance. Identify potential challenges early and implement proactive strategies for improvement.",
  },
  {
    icon: <FaBrain className="iconText" />,
    title: "Behavioral Analysis",
    desc: "Analyze learner behavior patterns to understand engagement and motivation. Customize learning experiences based on behavioral insights that evolve with learner needs.",
  },
  {
    icon: <FaTrophy className="iconText" />,
    title: "Competency-Based Assessments",
    desc: "AI-driven assessments evaluate competencies rather than just content consumption. Foster deeper understanding through competency-focused evaluation.",
  },
  {
    icon: <FaSearch className="iconText" />,
    title: "Smart Recommendations",
    desc: "AI-driven recommendations guide learners to supplementary materials, quizzes, or activities aligned with individual learning objectives.",
  },
];

export default function ProgressTrackingPage() {
  return (
    <main className="progress-tracking-page page">
      <div className="progress-breadcrumb-nav">
        <ol className="progress-breadcrumb">
          <li className="progress-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="progress-breadcrumb-item active" aria-current="page">
            Progress Tracking
          </li>
        </ol>
      </div>

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            <h1 className="heroTitle">Progress Tracking</h1>

            <h2 className="heroSubtitle">
              Unlocking Learner Potential Through Data-Driven Insights
            </h2>

            <p className="heroText">
              The Progress Tracking module of NeuroLXP is a comprehensive
              feature designed to monitor and evaluate learners&apos; progress
              throughout their educational journey.
            </p>

            <p className="heroText">
              The module empowers learners with actionable insights, personalized
              feedback, and adaptive learning support — enhancing their ability
              to monitor, evaluate, and optimize their learning progress
              effectively.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <img
                src="/photo-1551288049-bebda4e38f71.jpeg"
                alt="Learning analytics dashboard showing progress charts and metrics"
                className="heroImage"
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaChartLine className="iconText" />
                <span>Live Analytics</span>
              </div>
              <div className="statPill">
                <FaRobot className="iconText" />
                <span>AI / ML Powered</span>
              </div>
              <div className="statPill">
                <FaShieldAlt className="iconText" />
                <span>Privacy First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="challengesSection">
        <div className="sectionHeader">
          <h2 className="sectionTitle">The Challenges of Progress Tracking</h2>
          <p className="sectionDesc">
            Progress tracking enables real-time assessment of learner
            performance and alignment with learning objectives. However,
            implementing it effectively comes with its own set of challenges.
          </p>
        </div>

        <div className="challengeCards">
          {challengeItems.map((item, i) => (
            <article key={i} className="challengeCard">
              <div className="cardHeader">
                <div className="iconWrap">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statsSection">
        <div className="statsGrid">
          <div className="statsTextBlock">
            <h2 className="statsTitle">Progress Tracking Module</h2>
            <p className="statsDesc">
              NeuroLXP&apos;s Progress Tracking module harnesses the power of
              Learning Analytics and AI/ML algorithms, providing educators and
              learners with unparalleled insights and personalized
              recommendations. It goes beyond completion rates, delivering a
              rich tapestry of data points.
            </p>
            <p className="statsDesc">
              These numerical metrics not only measure progress but contribute
              to an enriched learning experience, fostering continuous
              improvement and engagement among learners.
            </p>
          </div>

          <div className="statsCards">
            {statsData.map((s, i) => (
              <div key={i} className="statCard">
                <div className="statValue">{s.value}</div>
                <div className="statSuffix">{s.suffix}</div>
                <div className="statLabel">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="whySection">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Why You Should Consider Progress Tracking?</h2>
        </div>

        <div className="cardsSection">
          {whyItems.map((item, i) => (
            <article key={i} className="contentCard">
              <div className="cardHeader">
                <div className="iconWrap">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featuresSection">
        <div className="sectionHeader centerHeader">
          <h2 className="sectionTitle">NeuroLXP Progress Tracking Module</h2>
          <p className="sectionDesc">
            A sophisticated toolset that redefines how educators and learners
            navigate the educational landscape.
          </p>
        </div>

        <div className="featuresGrid">
          {moduleFeatures.map((feat, i) => (
            <article key={i} className="featureCard">
              <div className="featureIconWrap">{feat.icon}</div>
              <h4>{feat.title}</h4>
              <p>{feat.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaBrain className="iconText" />
              </div>
              <h3>NeuroLXP — Transforming Progress Monitoring</h3>
            </div>

            <p>
              The Progress Tracking module in NeuroLXP LMS is not just about
              monitoring progress — it&apos;s about empowering learners with
              personalized, data-driven insights that contribute to their
              success in today&apos;s dynamic educational landscape.
            </p>

            <p>
              NeuroLXP transforms traditional progress monitoring into a
              dynamic, AI-driven learning experience. By harnessing Learning
              Analytics and AI/ML algorithms, it ensures a path to success as
              unique as each learner.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaRobot className="iconText" />
                <span>AI/ML Algorithms</span>
              </div>
              <div className="miniFeature">
                <FaChartBar className="iconText" />
                <span>Learning Analytics</span>
              </div>
              <div className="miniFeature">
                <FaUserGraduate className="iconText" />
                <span>Personalized Paths</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1620712943543-bcc4688e7485.jpeg"
                alt="AI-powered student performance prediction and analytics visualization"
                className="heroImage"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
