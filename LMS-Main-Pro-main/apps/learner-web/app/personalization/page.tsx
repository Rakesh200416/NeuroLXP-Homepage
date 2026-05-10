'use client';
import { useState } from "react";
import "./personalization.css";

type BenefitTab = "learners" | "institutions" | "corporate";

interface AccordionItem {
  id: string;
  title: string;
  body: string;
}

interface ApproachCard {
  num: string;
  title: string;
  desc: string;
}

interface StepData {
  tag: string;
  tagClass: string;
  circleClass: string;
  dotClass: string;
  title: string;
  subtitle: string;
  items: string[];
  closing: string;
}

interface BenefitItem {
  text: string;
}

interface BenefitsData {
  learners: { title: string; subtitle: string; items: BenefitItem[]; closing: string };
  institutions: { title: string; subtitle: string; items: BenefitItem[]; closing: string };
  corporate: { title: string; subtitle: string; items: BenefitItem[]; closing: string };
}

interface IntelCard {
  title: string;
  desc: string;
}

const heroProgress = [
  { label: "Knowledge Mastery", pct: "78%", fillClass: "fill1" },
  { label: "Skill Development", pct: "64%", fillClass: "fill2" },
  { label: "Goal Progress", pct: "91%", fillClass: "fill3" },
  { label: "Engagement Score", pct: "85%", fillClass: "fill4" },
];

const heroStats = [
  { num: "3×", label: "Faster Growth" },
  { num: "92%", label: "Completion" },
  { num: "40%", label: "Retention" },
];

const statCards = [
  { num: "3×", label: "Faster skill development vs. unstructured learning" },
  { num: "92%", label: "Learner completion rate on personalized paths" },
  { num: "40%", label: "Better knowledge retention with adaptive design" },
  { num: "10k+", label: "Learners empowered through NeuroLXP" },
];

const whatIsItems: string[] = [
  "Current knowledge level",
  "Learning pace and engagement",
  "Skill gaps and competency needs",
  "Individual learning goals",
  "Performance and progress metrics",
];

const accordionItems: AccordionItem[] = [
  {
    id: "a1",
    title: "What is personalized learning?",
    body: "Personalized learning is a modern digital approach where the learning journey adapts to the individual learner rather than forcing the learner to adapt to the system. The platform continuously analyzes progress, performance, and engagement to deliver the most relevant experience.",
  },
  {
    id: "a2",
    title: "How does NeuroLXP adapt to my pace?",
    body: "NeuroLXP's adaptive engine tracks your engagement patterns, skill assessment scores, and completion rates in real time. Advanced learners accelerate through familiar content while additional support surfaces automatically wherever knowledge gaps are detected.",
  },
  {
    id: "a3",
    title: "Is NeuroLXP suitable for corporate training?",
    body: "Absolutely. NeuroLXP is designed for educational institutions and corporate training organizations alike. It delivers efficient workforce skill development programs with measurable capability improvement and higher training completion rates.",
  },
];

const approachCards: ApproachCard[] = [
  {
    num: "01",
    title: "AI-Driven Recommendations",
    desc: "Smart content suggestions surface based on your progress, pace, and learning preferences.",
  },
  {
    num: "02",
    title: "Adaptive Pathways",
    desc: "Dynamic learning journeys that evolve with every interaction and assessment result.",
  },
  {
    num: "03",
    title: "Automated Skill-Gap Analysis",
    desc: "Instant identification of capability gaps with precision-targeted remediation content.",
  },
  {
    num: "04",
    title: "Progress-Based Delivery",
    desc: "Content unlocks and adapts as you demonstrate mastery and advance your competencies.",
  },
];

const steps: StepData[] = [
  {
    tag: "Step 01",
    tagClass: "tagColor1",
    circleClass: "circle1",
    dotClass: "dot1",
    title: "Initial Capability Understanding",
    subtitle: "Identify the Learner's Starting Point",
    items: [
      "Knowledge and competency assessment",
      "Skill baseline analysis",
      "Learning goal mapping",
    ],
    closing: "This step ensures learning begins at exactly the right level for each learner.",
  },
  {
    tag: "Step 02",
    tagClass: "tagColor2",
    circleClass: "circle2",
    dotClass: "dot2",
    title: "Adaptive Learning Pathways",
    subtitle: "Dynamically Adjust the Learning Journey",
    items: [
      "Advanced learners accelerate through familiar topics",
      "Support surfaces where knowledge gaps exist",
      "Practice adapts to current skill level",
    ],
    closing: "The learning experience stays challenging, engaging, and achievable at every stage.",
  },
  {
    tag: "Step 03",
    tagClass: "tagColor3",
    circleClass: "circle3",
    dotClass: "dot3",
    title: "Continuous Learning Analytics",
    subtitle: "Monitor and Optimize in Real Time",
    items: [
      "Learning engagement patterns",
      "Skill development progress",
      "Assessment and performance metrics",
    ],
    closing: "These insights allow the platform to optimize the learning journey in real time.",
  },
  {
    tag: "Step 04",
    tagClass: "tagColor4",
    circleClass: "circle4",
    dotClass: "dot4",
    title: "Targeted Skill Development",
    subtitle: "Focus on What Matters Most",
    items: [
      "Identify and close skill gaps",
      "Reinforce weaker knowledge areas",
      "Strengthen advanced capabilities",
    ],
    closing: "Learners build balanced, job-ready competencies focused on real professional needs.",
  },
];

const outcomesItems: string[] = [
  "Knowledge Absorption Speed",
  "Learner Engagement & Motivation",
  "Knowledge Retention Rates",
  "Skill Development Efficiency",
  "Learning Completion Rates",
  "Job-Ready Competencies",
];

const benefitsData: BenefitsData = {
  learners: {
    title: "For Learners",
    subtitle: "Move from understanding concepts to mastering real-world skills.",
    items: [
      { text: "Personalized learning journeys based on individual needs" },
      { text: "Faster and more effective skill development" },
      { text: "Higher motivation and learning engagement" },
      { text: "Reduced learning frustration" },
      { text: "Stronger confidence and professional competence" },
    ],
    closing: "Learning becomes more meaningful, efficient, and rewarding.",
  },
  institutions: {
    title: "For Educational Institutions",
    subtitle: "Build a future-ready adaptive learning ecosystem.",
    items: [
      { text: "AI-driven adaptive learning environments" },
      { text: "Improved student engagement and academic outcomes" },
      { text: "Better support for diverse learning needs" },
      { text: "Scalable digital learning ecosystems" },
    ],
    closing: "Institutions gain a modern personalized learning framework for future-ready education.",
  },
  corporate: {
    title: "For Corporate Training Organizations",
    subtitle: "Transform training into intelligent, results-driven programs.",
    items: [
      { text: "Efficient workforce skill development programs" },
      { text: "Higher training completion rates" },
      { text: "Measurable capability improvement" },
      { text: "Highly engaging employee learning experiences" },
    ],
    closing: "Training becomes more intelligent, responsive, and results-driven.",
  },
};

const intelCards: IntelCard[] = [
  { title: "Real-Time Optimization", desc: "Learning paths adjust dynamically as data flows in." },
  { title: "AI-Powered Insights", desc: "Deep analytics surface hidden patterns in learner behavior." },
  { title: "Precision Targeting", desc: "Content delivered at exactly the right moment for each learner." },
  { title: "Continuous Feedback Loop", desc: "Every interaction improves the next recommendation." },
];

const pills: string[] = ["Structured", "Flexible", "Adaptive", "Engaging", "Motivating", "Skill-focused"];

const eraCards = [
  { title: "Scientific Learning Design", desc: "Every pathway is built on evidence-based pedagogy and proven learning science principles." },
  { title: "AI-Powered Adaptive Technology", desc: "Machine learning models continuously refine content delivery based on real-time data." },
  { title: "Competency-Based Paths", desc: "Structured learning journeys tied directly to measurable skill outcomes and growth." },
];

export default function PersonalizationPage() {
  const [activeTab, setActiveTab] = useState<BenefitTab>("learners");
  const [openId, setOpenId] = useState<string>(accordionItems[0].id);
  const [activePill, setActivePill] = useState<string>("Adaptive");
  const [futureExpanded, setFutureExpanded] = useState(false);

  const tabs: { id: BenefitTab; label: string }[] = [
    { id: "learners", label: "For Learners" },
    { id: "institutions", label: "For Educational Institutions" },
    { id: "corporate", label: "For Training Organizations" },
  ];

  const activeData = benefitsData[activeTab];

  return (
    <div className="personalization-page page">
      <section className="hero">
        <div>
          <h1 className="heroTitle">
            Learning That{" "}
            <span className="highlight">Adapts to You</span>
            {" "}— Powered by NeuroLXP
          </h1>

          <p className="heroText">
            Every learner is different. People learn at different speeds, bring different
            backgrounds, and pursue different goals. Yet many traditional Learning Management
            Systems (LMS) still follow a one-size-fits-all learning model.
          </p>

          <p className="heroText">
            NeuroLXP introduces a new generation of personalized learning through an
            AI-powered Learning Experience Platform (LXP) — an intelligent digital
            environment that adapts to each learner's needs, progress, and potential.
          </p>

          <p className="heroTextLast">
            Through adaptive learning technology, intelligent recommendations, and structured
            learning paths, NeuroLXP creates a learning experience that is responsive,
            data-driven, and truly learner-centric.
          </p>

          <div className="heroActions">
            <a href="#how-it-works" className="btnPrimary">See How It Works</a>
            <a href="#benefits" className="btnSecondary">View Benefits</a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroCard">
            <div className="heroCardHeader">
              <div className="heroCardTitle">Your Learning Journey</div>
              <div className="heroCardSub">Active Progress</div>
            </div>

            <div className="heroProgressList">
              {heroProgress.map((item) => (
                <div key={item.label} className="heroProgressItem">
                  <div className="heroProgressLabel">
                    <span>{item.label}</span>
                    <span className="heroProgressPct">{item.pct}</span>
                  </div>
                  <div className="heroProgressBar">
                    <div className={`heroProgressFill ${item.fillClass}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="heroCardFooter">
              {heroStats.map((stat) => (
                <div key={stat.label} className="heroCardStat">
                  <div className="heroCardStatNum">{stat.num}</div>
                  <div className="heroCardStatLabel">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <div className="statsBar">
        <div className="statsGrid">
          {statCards.map((stat) => (
            <div key={stat.label} className="statCard">
              <div className="statNumber">{stat.num}</div>
              <div className="statLabel">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      <section className="section">
        <div className="whatIsGrid">
          <div>
            <h2 className="whatIsTitle">What is Personalized Learning?</h2>

            <p className="bodyText">
              <strong>Personalized Learning</strong> is a modern digital learning approach where
              the learning journey adapts to the individual learner rather than forcing the
              learner to adapt to the system.
            </p>

            <p className="bodyText">
              In an AI-powered learning platform, the system continuously analyzes learner
              progress, performance, and engagement to deliver the most relevant experience —
              creating a smart learning environment.
            </p>

            <p className="bodyText">
              Instead of following a rigid course structure, personalized learning adjusts based on:
            </p>

            <ul className="checkList">
              {whatIsItems.map((item) => (
                <li key={item} className="checkItem">
                  <span className="checkDot" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="closingStatement">
              A smart learning environment where learners receive the right content, at the
              right time, in the right format.
            </div>
          </div>

          <div>
            <div className="accordion">
              {accordionItems.map((item) => (
                <div
                  key={item.id}
                  className={`accordionItem${openId === item.id ? " accordionItemOpen" : ""}`}
                >
                  <button
                    className="accordionTrigger"
                    onClick={() => setOpenId((p) => (p === item.id ? "" : item.id))}
                  >
                    {item.title}
                    <span className="accordionChevron">▼</span>
                  </button>
                  <div className="accordionBody">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Pioneering Personalized Learning</h2>
        </div>

        <p className="sectionDesc" style={{ marginBottom: "48px" }}>
          NeuroLXP combines structured learning paths with adaptive technology to create a
          scientifically designed personalized learning framework that goes beyond traditional
          LMS platforms.
        </p>

        <div className="approachGrid">
          {approachCards.map((card) => (
            <div key={card.num} className="approachCard">
              <div className="approachCardNum">{card.num}</div>
              <h3 className="approachCardTitle">{card.title}</h3>
              <p className="approachCardDesc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section id="how-it-works" className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Four Stages of Adaptive Learning</h2>
        </div>

        <p className="stepsIntroText">
          NeuroLXP integrates personalization into every stage of the digital learning
          experience — from initial assessment through to continuous skill development.
        </p>

        <div className="stepsTimeline">
          {steps.map((step) => (
            <div key={step.tag} className="stepRow">
              <div className="stepMarker">
                <div className="stepCircle">
                  <div className={`stepCircleInner ${step.circleClass}`} />
                </div>
              </div>

              <div className="stepBody">
                <span className={`stepTag ${step.tagClass}`}>{step.tag}</span>
                <h3 className="stepTitle">{step.title}</h3>
                <p className="stepSubtitle">{step.subtitle}</p>
                <ul className="stepList">
                  {step.items.map((item) => (
                    <li key={item} className="stepListItem">
                      <span className={`stepDot ${step.dotClass}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="stepClosing">{step.closing}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="whyGrid">
          <div>
            <h2 className="whyTitle">Why Personalized Learning Matters</h2>

            <p className="bodyText">
              When learning adapts to the individual learner, outcomes improve significantly.
              Instead of struggling to keep up with a fixed curriculum, learners progress at a
              pace that matches their capability and goals.
            </p>

            <p className="bodyText">
              For the first time, learning becomes <strong>dynamic, adaptive, and personalized
              for every individual</strong> — not as a future promise, but as a live reality
              inside NeuroLXP today.
            </p>

            <a href="#benefits" className="btnPrimary" style={{ marginTop: "8px" }}>
              Start Learning Now
            </a>
          </div>

          <div>
            <p className="listHeading">Personalized learning platforms improve:</p>
            <div className="outcomesGrid">
              {outcomesItems.map((label) => (
                <div key={label} className="outcomeCard">
                  <div className="outcomeLabel">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="benefits" className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Benefits of Personalized Learning with NeuroLXP</h2>
          <p className="sectionDesc">
            Whether you are a learner, an academic institution, or a corporate training
            organization — NeuroLXP delivers measurable, transformational impact.
          </p>
        </div>

        <div className="benefitsTabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tabBtn${activeTab === tab.id ? " tabBtnActive" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="benefitsTabContent">
          <div className="benefitsLeft">
            <h3 className="benefitsLeftTitle">{activeData.title}</h3>
            <p className="benefitsLeftSub">{activeData.subtitle}</p>
            <ul className="benefitsCheckList">
              {activeData.items.map((item) => (
                <li key={item.text} className="benefitsCheckItem">
                  <span className="benefitsCheck">
                    <span className="benefitsCheckMark" />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="benefitsRight">
            <div className="benefitsRightLabel">Key Outcome</div>
            <div className="benefitsClosingBox">{activeData.closing}</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="intelGrid">
          <div>
            <h2 className="intelTitle">
              Bringing Intelligence into the Learning Experience
            </h2>

            <p className="bodyText">
              NeuroLXP combines structured learning design with AI-powered personalization,
              creating a powerful digital learning ecosystem. This intelligent approach ensures
              learning remains purposeful and continuously optimized.
            </p>

            <p className="bodyText">
              The platform works continuously in the background to ensure every learner
              receives the most effective learning experience possible.
            </p>

            <div className="pillGroup">
              {pills.map((pill) => (
                <button
                  key={pill}
                  className={`pill${activePill === pill ? " pillActive" : ""}`}
                  onClick={() => setActivePill(pill)}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          <div className="intelCards">
            {intelCards.map((card) => (
              <div key={card.title} className="intelCard">
                <div>
                  <div className="intelCardTitle">{card.title}</div>
                  <div className="intelCardDesc">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">A New Era of Digital Learning</h2>
        </div>

        <p className="sectionDesc" style={{ marginBottom: "48px" }}>
          Personalized learning represents the next evolution of modern education, corporate
          training, and workforce development.
        </p>

        <div className="eraGrid">
          {eraCards.map((card) => (
            <div key={card.title} className="eraCard">
              <h3 className="eraCardTitle">{card.title}</h3>
              <p className="eraCardDesc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="eraClosingBox">
          The result is learning that is not just delivered — but{" "}
          <span>carefully guided, intelligently adapted, and deeply impactful</span>.
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="futureBanner">
          <div className="futureBannerContent">
            <h2 className="futureBannerTitle">
              NeuroLXP — The Future of Personalized Learning
            </h2>

            <p className="futureBannerBody">
              With NeuroLXP, learning becomes personal, purposeful, and powerful. As knowledge
              continues to grow in complexity, the need for adaptive learning design and
              personalized learning paths becomes increasingly important.{" "}
              {!futureExpanded && (
                <a className="lnkToggle" onClick={() => setFutureExpanded(true)}>
                  {"  "}More▼
                </a>
              )}
            </p>

            {futureExpanded && (
              <p className="futureBannerBodyLast">
                Experience the next generation of AI-powered learning platforms, adaptive LMS
                technology, and personalized digital learning experiences with NeuroLXP.{" "}
                <a className="lnkToggle" onClick={() => setFutureExpanded(false)}>
                  Less ▲
                </a>
              </p>
            )}

            <div className="futureBannerActions">
              <button className="btnWhite">Start Free Trial</button>
              <button className="btnOutlineWhite">Request a Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
