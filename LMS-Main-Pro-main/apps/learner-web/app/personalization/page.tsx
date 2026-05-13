'use client';

import React, { useState } from "react";
import "./personalization.css";
import Image from "next/image";

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
  svg: React.ReactNode;
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
  { label: "Knowledge Mastery", pct: "78%", value: 78, swatchClass: "swatch1" },
  { label: "Skill Development", pct: "64%", value: 64, swatchClass: "swatch2" },
  { label: "Goal Progress", pct: "91%", value: 91, swatchClass: "swatch3" },
  { label: "Engagement Score", pct: "85%", value: 85, swatchClass: "swatch4" },
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

const step1Visual = (
  <div className="stepViz">
    <div className="stepVizRingWrap">
      <svg className="stepVizRing" viewBox="0 0 80 80" style={{ width: 90, height: 90 }} xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="30" fill="none" stroke="var(--neu-bg-dark)" strokeWidth="6" />
        <circle
          className="stepVizRingFill ring1Animate"
          cx="40"
          cy="40"
          r="30"
          fill="none"
          stroke="#5e72e4"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="188.4"
          strokeDashoffset="48.984"
          transform="rotate(-90 40 40)"
        />
        <text x="40" y="37" textAnchor="middle" fontSize="13" fontWeight="900" fill="var(--neu-text-primary)">74</text>
        <text x="40" y="49" textAnchor="middle" fontSize="8" fill="var(--neu-text-muted)">baseline</text>
      </svg>

      <div className="stepVizBars">
        {[
          { label: "Knowledge", pct: 78, color: "#5e72e4" },
          { label: "Skills", pct: 62, color: "#7c3aed" },
          { label: "Goals", pct: 91, color: "#10b981" },
          { label: "Pace", pct: 55, color: "#f59e0b" },
        ].map((bar) => (
          <div key={bar.label} className="stepVizBarRow">
            <span className="stepVizBarLabel">{bar.label}</span>
            <div className="stepVizBarTrack">
              <div
                className="stepVizBarFill"
                style={{ width: `${bar.pct}%`, background: bar.color }}
              />
            </div>
            <span className="stepVizBarPct">{bar.pct}%</span>
          </div>
        ))}
      </div>
    </div>
    <div className="stepVizCaption">Capability snapshot generated</div>
  </div>
);

const step2Visual = (
  <div className="stepViz">
    <svg viewBox="0 0 220 130" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <line x1="58" y1="65" x2="100" y2="65" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="44" className="pathDraw pathDraw1" />
      <circle cx="100" cy="65" r="5" fill="#e6e7ee" stroke="#7c3aed" strokeWidth="2" className="pathForkDot" />
      <line x1="104" y1="61" x2="138" y2="32" stroke="#5e72e4" strokeWidth="2" strokeDasharray="50" className="pathDraw pathDraw2" />
      <line x1="104" y1="69" x2="138" y2="98" stroke="#a78bfa" strokeWidth="2" strokeDasharray="50" className="pathDraw pathDraw3" />
      <line x1="178" y1="32" x2="196" y2="65" stroke="#10b981" strokeWidth="2" strokeDasharray="40" className="pathDraw pathDraw4" />
      <line x1="178" y1="98" x2="196" y2="65" stroke="#10b981" strokeWidth="2" strokeDasharray="40" className="pathDraw pathDraw4" />

      <rect x="2" y="50" width="54" height="28" rx="8" fill="#ede9fe" />
      <text x="29" y="69" textAnchor="middle" fontSize="9" fontWeight="800" fill="#6d28d9">START</text>

      <rect x="138" y="16" width="52" height="32" rx="8" fill="#dbeafe" />
      <text x="164" y="30" textAnchor="middle" fontSize="8" fontWeight="800" fill="#2d4edc"> Fast</text>
      <text x="164" y="42" textAnchor="middle" fontSize="8" fontWeight="800" fill="#2d4edc">Track</text>

      <rect x="138" y="82" width="52" height="32" rx="8" fill="#ede9fe" />
      <text x="164" y="96" textAnchor="middle" fontSize="8" fontWeight="800" fill="#6d28d9"> Support</text>
      <text x="164" y="108" textAnchor="middle" fontSize="8" fontWeight="800" fill="#6d28d9">Mode</text>

      <rect x="194" y="50" width="24" height="28" rx="8" fill="#d1fae5" />
      <text x="206" y="69" textAnchor="middle" fontSize="7" fontWeight="800" fill="#047857">GOAL</text>
    </svg>
    <div className="stepVizCaption">Pathway adapts in real-time</div>
  </div>
);

const step3Visual = (
  <div className="stepViz">
    {[
      { title: "Data Analysis Deep Dive", sub: "Skill gap identified", score: "94%", scoreColor: "#5e72e4" },
      { title: "ML Fundamentals", sub: "Recommended next", score: "87%", scoreColor: "#7c3aed" },
      { title: "Python Basics", sub: "Mastered", score: "✓", scoreColor: "#10b981" },
    ].map((rec, i) => (
      <div key={rec.title} className="stepVizRecRow" style={{ animationDelay: `${i * 0.12}s` }}>
        <div className="stepVizRecText">
          <div className="stepVizRecTitle">{rec.title}</div>
          <div className="stepVizRecSub">{rec.sub}</div>
        </div>
        <span className="stepVizRecScore" style={{ color: rec.scoreColor }}>{rec.score}</span>
      </div>
    ))}
    <div className="stepVizCaption">AI matching your skill gaps</div>
  </div>
);

const weekBars = [
  { h: 30, color: "linear-gradient(to top,#5e72e4,#7a8ff0)" },
  { h: 48, color: "linear-gradient(to top,#5e72e4,#7a8ff0)" },
  { h: 62, color: "linear-gradient(to top,#7c3aed,#a78bfa)" },
  { h: 75, color: "linear-gradient(to top,#7c3aed,#a78bfa)" },
  { h: 85, color: "linear-gradient(to top,#10b981,#34d399)" },
  { h: 90, color: "linear-gradient(to top,#10b981,#34d399)" },
  { h: 95, color: "linear-gradient(to top,#f59e0b,#fbbf24)" },
  { h: 100, color: "linear-gradient(to top,#f59e0b,#fcd34d)" },
];

const step4Visual = (
  <div className="stepViz">
    <div className="stepVizGrowthHeader">
      {[
        { num: "78%", lbl: "Growth" },
        { num: "92%", lbl: "Completion" },
        { num: "3×", lbl: "Faster" },
      ].map((s) => (
        <div key={s.lbl} className="stepVizGrowthStat">
          <div className="stepVizGrowthNum">{s.num}</div>
          <div className="stepVizGrowthLbl">{s.lbl}</div>
        </div>
      ))}
    </div>

    <div className="stepVizWeekBars">
      {weekBars.map((bar, i) => (
        <div key={i} className="stepVizWeekBarWrap">
          <div
            className="stepVizWeekBarFill"
            style={{
              height: `${bar.h}%`,
              background: bar.color,
              animationDelay: `${0.4 + i * 0.08}s`,
            }}
          />
        </div>
      ))}
    </div>

    <div className="stepVizBadges">
      {[
        { text: "Top Learner", bg: "#dbeafe", color: "#2d4edc" },
        { text: "On Track", bg: "#d1fae5", color: "#047857" },
        { text: "Goal Hit", bg: "#ede9fe", color: "#6d28d9" },
      ].map((b) => (
        <span key={b.text} className="stepVizBadge" style={{ background: b.bg, color: b.color }}>
          {b.text}
        </span>
      ))}
    </div>
  </div>
);

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
    svg: step1Visual,
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
    svg: step2Visual,
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
    svg: step3Visual,
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
    svg: step4Visual,
  },
];

const outcomesItems: string[] = [
  "Knowledge Absorption Speed",
  "Learning Drive & Focus",
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
  { title: "Smart Learning Technology", desc: "Machine learning models continuously refine content delivery based on real-time data." },
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
      <div className="neu-breadcrumb-nav">
        <ol className="neu-breadcrumb">
          <li className="neu-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="neu-breadcrumb-item active" aria-current="page">
            Personalization
          </li>
        </ol>
      </div>

      <section className="hero">
        <div>
          <h1 className="heroTitle">
            Learning{" "}
            <span className="highlight">Adapts You</span>
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
              <div className="heroCardBadge">
                <span className="heroCardBadgeDot" />
                Active Progress
              </div>
            </div>

            <div className="heroChartRow">
              <div className="heroDonutWrap">
                <div
                  className="heroDonutCss"
                  role="img"
                  aria-label="Donut chart showing 80 percent overall learning progress"
                />
                <div className="heroDonutCenter">
                  <span className="heroDonutPct">80%</span>
                  <span className="heroDonutLbl">overall</span>
                </div>
              </div>

              <div className="heroLegend">
                {heroProgress.map((item) => (
                  <div key={item.label} className="heroLegendItem">
                    <div className={`heroLegendSwatch ${item.swatchClass}`} />
                    <div className="heroLegendText">
                      <div className="heroLegendName">{item.label}</div>
                      <div className="heroLegendVal">{item.pct}</div>
                    </div>
                  </div>
                ))}
              </div>
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

          <div className="questions">
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

            <div className="imgQuestions">
              <Image
                src="/photo-1434030216411-0b793f4b4173.webp"
                alt="Educator using learning analytics technology"
                width={520}
                height={300}
                className="heroImage"
              />
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
                <div className="stepBodyInner">
                  <div className="stepBodyLeft">
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
                  <div className="stepSvgWrap">
                    {step.svg}
                  </div>
                </div>
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

            <div className="imgBenefitsRight">
              <Image
                src="/photo-1484480974693-6ca0a78fb36b.webp"
                alt="Educator using learning analytics technology"
                width={520}
                height={300}
                className="heroImage"
              />
            </div>
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
