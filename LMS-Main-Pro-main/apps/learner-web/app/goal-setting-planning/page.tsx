import "./goal-setting-planning.css";
import Image from "next/image";
import { FaBullseye, FaChartLine, FaCalendarAlt, FaRoute, FaUsers, FaLightbulb, FaExclamationTriangle, FaSortAmountDown, FaRunning, FaCompass, FaFire, FaClock, FaSyncAlt, FaRocket, } from "react-icons/fa";

const whyConsiderPoints = [
  {
    icon: <FaCompass className="iconText" />,
    label: "Direction in Learning",
    color: "primary",
    body: "Clear goals act as guiding beacons, helping learners define their educational path and career trajectory aligned with their aspirations and learning preferences.",
  },
  {
    icon: <FaFire className="iconText" />,
    label: "Motivation & Engagement",
    color: "secondary",
    body: "A well-defined plan, coupled with achievable goals, fuels intrinsic motivation and sustains engagement throughout the learning journey.",
  },
  {
    icon: <FaClock className="iconText" />,
    label: "Efficient Resource Utilization",
    color: "accent",
    body: "Planning enables learners to allocate time and resources effectively, ensuring a streamlined and productive learning experience.",
  },
  {
    icon: <FaSyncAlt className="iconText" />,
    label: "Adaptability",
    color: "support",
    body: "With the flexibility to reassess and adjust goals, learners can navigate evolving interests and industry requirements seamlessly.",
  },
];

const challengeItems = [
  {
    icon: <FaExclamationTriangle className="iconText" />,
    title: "Lack of Clarity",
    color: "primary",
    desc: "Many individuals struggle with setting clear and specific goals. Without clarity about what they want to achieve and how to get there, it's challenging to create actionable plans and stay motivated.",
  },
  {
    icon: <FaSortAmountDown className="iconText" />,
    title: "Prioritization Issues",
    color: "secondary",
    desc: "With numerous goals and tasks competing for attention, individuals often find it difficult to prioritize effectively — leading to overwhelm, indecision, and a lack of focus on what matters most.",
  },
  {
    icon: <FaRunning className="iconText" />,
    title: "Gaps in Delivery",
    color: "accent",
    desc: "Even with well-defined goals and plans, execution and follow-through remains challenging. Procrastination, distractions, and obstacles can derail even the best intentions.",
  },
];

const moduleFeatures = [
  {
    icon: <FaBullseye className="iconText" />,
    label: "Personalize Goal",
    desc: "Define academic and professional objectives tailored to your unique aspirations with smart algorithm suggestions.",
  },
  {
    icon: <FaChartLine className="iconText" />,
    label: "Progress Tracking",
    desc: "Real-time dashboards keep learners informed with a comprehensive overview of achievements and milestones.",
  },
  {
    icon: <FaCalendarAlt className="iconText" />,
    label: "Integrated Planning",
    desc: "Calendar integration facilitates seamless scheduling of study sessions, assessments, and project timelines.",
  },
  {
    icon: <FaRoute className="iconText" />,
    label: "Adaptive Learning Paths",
    desc: "Dynamic paths adjust based on goal progress and performance, ensuring learners always receive relevant content.",
  },
  {
    icon: <FaUsers className="iconText" />,
    label: "Collaborative Learning Plans",
    desc: "Users can co-create learning plans, fostering a sense of community and shared achievement.",
  },
  {
    icon: <FaLightbulb className="iconText" />,
    label: "Reflection & Feedback",
    desc: "Built-in reflection tools encourage learners to assess their experiences and continuously adjust goals.",
  },
];

export default function GoalSettingPlanningPage() {
  return (
    <main className="goal-setting-page page">
      <div className="goal-breadcrumb-nav">
        <ol className="goal-breadcrumb">
          <li className="goal-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="goal-breadcrumb-item active" aria-current="page">
            Goal Setting &amp; Planning
          </li>
        </ol>
      </div>

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">

            <h1 className="heroTitle">Goal Setting &amp; Planning</h1>

            <h2 className="heroSubtitle">
              Empower Your Learning Journey:<br/> Set, Track, and Achieve with
              Purpose
            </h2>

            <p className="heroText">
              The Goal Setting and Planning module of NeuroLXP is designed to
              empower learners with the tools and framework necessary to set and
              achieve their learning objectives effectively.
            </p>

            <p className="heroText">
              By facilitating goal clarity, progress monitoring, action
              planning, reflection, and alignment with learning content, this
              module empowers learners to take ownership of their learning
              journey and achieve their desired outcomes.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imageWrapper">
              <Image
                src="/photo-1484480974693-6ca0a78fb36b.webp"
                alt="A person writing goals and planning in a notebook"
                width={640}
                height={380}
                className="heroImage"
                priority
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaChartLine className="iconText" />
                <span>95% Personalization Rate</span>
              </div>
              <div className="statPill">
                <FaRocket className="iconText" />
                <span>30% Efficiency Gain</span>
              </div>
              <div className="statPill">
                <FaBullseye className="iconText" />
                <span>50% Career Advancement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="challengesSection">
        <div className="sectionHeader">
          <h2 className="sectionTitle">The Challenges of Goal Setting</h2>
          <p className="sectionSubtext">
            Effective goal setting and planning are critical components of
            personal and professional success. Understanding these challenges is
            the first step to overcoming them.
          </p>
        </div>

        <div className="challengeGrid">
          {challengeItems.map((item) => (
            <article
              className={`challengeCard challenge-${item.color}`}
              key={item.title}
            >
              <div className="cardHeader">
                <div className={`iconWrap iconWrap-${item.color}`}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cardsSection">
        {whyConsiderPoints.map((pt) => (
          <article
            className={`contentCard contentCard-${pt.color}`}
            key={pt.label}
          >
            <div className="cardHeader">
              <div className={`iconWrap iconWrap-${pt.color}`}>{pt.icon}</div>
              <h3>{pt.label}</h3>
            </div>
            <p>{pt.body}</p>
          </article>
        ))}
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap iconWrap-primary">
                <FaRocket className="iconText" />
              </div>
              <h3>NeuroLXP — The Complete Goal Setting &amp; Planning Module</h3>
            </div>

            <p>
              NeuroLXP goes beyond traditional learning management systems,
              introducing a robust feature set designed to foster personalized
              growth with a structured approach to navigate ever-changing
              complexity.
            </p>

            <div className="featureGrid">
              {moduleFeatures.map((f) => (
                <div className="miniFeature" key={f.label}>
                  <div className="miniFeatureIcon">{f.icon}</div>
                  <div>
                    <span className="miniFeatureLabel">{f.label}</span>
                    <span className="miniFeatureDesc">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imageWrapperAlt">
              <Image src="/photo-1552664730-d307ca884978.webp" alt="Team collaborating on learning plans and goals"
                width={560} height={380} className="secondaryImage" />
            </div>

            <div className="statsRow">
              <div className="statBubble">
                <span className="statValue">95%</span>
                <span className="statDesc">Personalization</span>
              </div>
              <div className="statBubble">
                <span className="statValue">30%</span>
                <span className="statDesc">Efficiency</span>
              </div>
              <div className="statBubble">
                <span className="statValue">15%</span>
                <span className="statDesc">Reflection</span>
              </div>
              <div className="statBubble">
                <span className="statValue">50%</span>
                <span className="statDesc">Career Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
