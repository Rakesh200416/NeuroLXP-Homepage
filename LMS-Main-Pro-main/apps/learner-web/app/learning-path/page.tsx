'use client';

import React, { useState } from 'react';
import {
  FaFlag,
  FaCodeBranch,
  FaHeartbeat,
  FaChartBar,
  FaTrophy,
} from 'react-icons/fa';
import "./learning-path.css";
import Image from 'next/image';

type BenefitTab = 'learners' | 'institutions' | 'training';

interface Stage {
  tag: string;
  tagClass: string;
  circleClass: string;
  dotClass: string;
  title: string;
  subtitle: string;
  items: string[];
  closing: string;
  progress: number;
  duration: string;
  modules: number;
  skills: string[];
}

interface PioneerCard {
  num: string;
  title: string;
  desc: string;
}

interface Milestone {
  iconClass: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  iconColor: string;
  title: string;
  desc: string;
}

interface BenefitItem {
  text: string;
}

interface BenefitsData {
  learners: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
    closing: string;
  };
  institutions: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
    closing: string;
  };
  training: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
    closing: string;
  };
}

const heroProgress = [
  { label: 'foundation Stage', pct: '100%', fillClass: 'fill1' },
  { label: 'Skill Development Stage', pct: '68%', fillClass: 'fill2' },
  { label: 'Advanced Capability Stage', pct: '35%', fillClass: 'fill3' },
  { label: 'Performance Readiness Stage', pct: '10%', fillClass: 'fill4' },
];

const heroStats = [
  { num: '4', label: 'Stages' },
  { num: '12+', label: 'Modules' },
  { num: '85%', label: 'MAstery Rate' },
];

const whatIsItems: string[] = [
  'Clear learning direction and career-oriented skill development',
  'Structured knowledge progression',
  'Logical sequencing of topics and competencies',
  'Measurable learning outcomes and performance tracking',
  'Continuous learner engagement and motivation',
];

const statCards = [
  { num: '4×', label: 'Faster skill acquisition vs. unstructured learning' },
  { num: '94%', label: 'Learner completion rate on structured paths' },
  { num: '3×', label: 'Higher knowledge retention with progressive design' },
  { num: '100+', label: 'Competency frameworks integrated in NeuroLXP' },
];

const pioneerCards: PioneerCard[] = [
  {
    num: '01',
    title: 'Educational Psychology',
    desc: 'Learning paths grounded in cognitive science and how humans truly absorb and retain knowledge over time.',
  },
  {
    num: '02',
    title: 'Competency-Based Frameworks',
    desc: 'Every module aligns to measurable competencies and industry-recognized skill benchmarks.',
  },
  {
    num: '03',
    title: 'Progressive Skill Development Models',
    desc: 'Skills are layered progressively — each stage builds naturally upon the last for deep mastery.',
  },
  {
    num: '04',
    title: 'Real-World Capability Building',
    desc: 'Learning outcomes translate directly into professional, career-ready performance and confidence.',
  }
];

const designedUsing: string[] = [
  'Cognitive learning science',
  'Structured knowledge architecture',
  'Competency and skills frameworks',
  'Industry-aligned learning progression models',
];

const stages: Stage[] = [
  {
    tag: 'Stage 01',
    tagClass: 'tagColor1',
    circleClass: 'circle1',
    dotClass: 'dot1',
    title: 'Foundation Stage',
    subtitle: 'Build Core Knowledge and Conceptual Clarity',
    items: [
      'Core principles and essential knowledge',
      'Fundamental concepts and frameworks',
      'Foundational learning modules',
    ],
    closing: 'This stage prepares learners for advanced skill development and deeper learning.',
    progress: 25,
    duration: '3 weeks',
    modules: 4,
    skills: ['Core Conceps', 'Frameworks', 'Foundation', 'Principle'],
  },
  {
    tag: 'Stage 02',
    tagClass: 'tagColor2',
    circleClass: 'circle2',
    dotClass: 'dot2',
    title: 'Skill Development Stage',
    subtitle: 'Transform Knowledge into Practical Skills',
    items: [
      'Practical learning exercises',
      'Analytical thinking development',
      'Guided problem-solving activities',
    ],
    closing: 'Learners start building real-world competencies and professional capabilities.',
    progress: 50,
    duration: '4 Weeks',
    modules: 6,
    skills: ['Problem Solving', 'Analytics', 'Applied skills', 'Practice'],
  },
  {
    tag: 'Stage 03',
    tagClass: 'tagColor3',
    circleClass: 'circle3',
    dotClass: 'dot3',
    title: 'Advanced Capability Stage',
    subtitle: 'Develop Expertise and Strategic Thinking',
    items: [
      'Complex learning scenarios',
      'Real-world application projects',
      'Strategic problem-solving frameworks',
    ],
    closing: 'Learners strengthen professional confidence and advanced decision-making skills.',
    progress: 75,
    duration: '5 weeks',
    modules: 8,
    skills: ['Strategy', 'Expert Thinking', 'Leadership', 'Decision Making'],
  },
  {
    tag: 'Stage 04',
    tagClass: 'tagColor4',
    circleClass: 'circle4',
    dotClass: 'dot4',
    title: 'Performance Readiness Stage',
    subtitle: 'Prepare for Real-World Success',
    items: [
      'Project-based learning experiences',
      'Real-world implementations',
      'Capability validation and assessment',
    ],
    closing: 'Learners complete the learning journey ready to perform with confidence in professional environments.',
    progress: 100,
    duration: '6 Weeks',
    modules: 10,
    skills: ['Capstone Projects', 'Assessment', 'Career Readiness', 'Validation'],
  },
];

const milestones: Milestone[] = [
  {
    iconClass: 'circle1',
    icon: FaFlag,
    iconColor: '#5e72e4',
    title: 'Clear Learning Milestones',
    desc: 'Track progress at every defined stage checkpoint'
  },
  {
    iconClass: 'circle2',
    icon: FaCodeBranch,
    iconColor: '#7c3aed',
    title: 'Logical Topic Progression',
    desc: 'Concepts flow naturally from simple to complex'
  },
  {
    iconClass: 'circle3',
    icon: FaHeartbeat,
    iconColor: '#00b4d8',
    title: 'Continuous Learner Engagement',
    desc: 'Built-in motivation and momentum throughout'
  },
  {
    iconClass: 'circle4',
    icon: FaChartBar,
    iconColor: '#10b981',
    title: 'Data-Driven Learning Analytics',
    desc: 'Real-time insights on learner performance'
  },
  {
    iconClass: 'circle1',
    icon: FaTrophy,
    iconColor: '#5e72e4',
    title: 'Measurable Capability Development',
    desc: 'Validate and track actual skill development'
  },
];

const benefitsData: BenefitsData = {
  learners: {
    title: 'For Learners',
    subtitle: 'Move from understanding concepts to mastering real-world skills.',
    items: [
      { text: 'Clear and personalized learning journey' },
      { text: 'Strong conceptual foundations' },
      { text: 'Practical skill development' },
      { text: 'Improved confidence and professional competence' },
      { text: 'Faster career-ready capability development' },
    ],
    closing: 'Learners move from understanding concepts to mastering real-world skills.',
  },
  institutions: {
    title: 'For Educational Institutions',
    subtitle: 'Build a future-ready digital learning ecosystem that supports academic excellence.',
    items: [
      { text: 'Structured curriculum frameworks' },
      { text: 'Outcome-driven learning models' },
      { text: 'Improved student engagement and academic performance' },
      { text: 'Alignment with modern skill development demands' },
    ],
    closing: 'Institutions gain a future-ready digital learning ecosystem that supports academic excellence.',
  },
  training: {
    title: 'For Training Organizations',
    subtitle: 'Transform training programs into impactful, measurable, and results-driven systems.',
    items: [
      { text: 'Scalable corporate training program design' },
      { text: 'Structured workforce skill development' },
      { text: 'Measurable training outcomes and performance analytics' },
      { text: 'Improved learner satisfaction and training effectiveness' },
    ],
    closing: 'Training programs become more impactful, measurable, and results-driven.',
  },
};

const ecosystemItems = [
  {
    title: 'Clearly Defined Learning Progression Stages',
    desc: 'Every learning path moves through a systematic sequence that builds knowledge layer by layer.',
  },
  {
    title: 'Structured Modules and Competency Frameworks',
    desc: 'Modules are mapped to real competency standards and professional skill benchmarks.',
  },
  {
    title: 'Practical Application and Real-World Learning',
    desc: 'Every stage includes applied exercises and real-world scenarios to deepen capability.',
  },
  {
    title: 'Continuous Skill Development and Performance Tracking',
    desc: 'Learner progress is tracked continuously with actionable performance analytics.',
  },
];

const LearningPaths: React.FC = () => {
  const [activeTab, setActiveTab] = useState<BenefitTab>('learners');
  const [futureExpanded, setFutureExpanded] = useState(false);

  const tabs: { id: BenefitTab; label: string }[] = [
    { id: 'learners', label: 'For Learners' },
    { id: 'institutions', label: 'For Educational Institutions' },
    { id: 'training', label: 'For Training Organizations' },
  ];

  const activeData = benefitsData[activeTab];

  return (
    <div className="learning-path-page">
      <div className="learning-path-breadcrumb-nav">
        <ol className="learning-path-breadcrumb">
          <li className="learning-path-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="learning-path-breadcrumb-item active" aria-current="page">
            Learning Path
          </li>
        </ol>
      </div>

      <section className="hero">
        <div>
          <h1 className="heroTitle">
            A Scientific Approach to{' '}
            <span className="highlight">Structured Learning</span>{' '}
            by NeuroLXP
          </h1>

          <p className="heroText">
            Learning has evolved dramatically in recent years. With the rise of digital learning
            platforms, Learning Management Systems (LMS), and AI-powered Learning Experience
            Platforms (LXP), access to knowledge has never been easier. However, building deep
            capability, professional skills, and real expertise still requires a clear, structured,
            and scientifically designed learning journey.
          </p>

          <p className="heroText">
            NeuroLXP introduces a new generation of learning design through Scientific Learning
            Paths — a structured learning framework that guides learners through progressive stages
            of knowledge, skill development, and real-world capability building.
          </p>

          <p className="heroTextLast">
            For the first time in the industry, NeuroLXP combines learning science, competency
            frameworks, and modern digital learning technologies to create systematically engineered
            learning paths that transform education and training into a carefully designed journey
            of mastery and growth.
          </p>

          <div className="heroActions">
            <a href="#stages" className="btnPrimary">Explore Learning Stages</a>
            <a href="#benefits" className="btnSecondary">View Benefits</a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroCard">
            <div className="heroCardHeader">
              <div className="heroCardTitle">Your Learning Journey</div>
              <div className="heroCardSub">NeuroLXP Structured Path — Active Progress</div>
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

      <section className="section">
        <div className="whatIsGrid">
          <div>
            <h2 className="whatIsTitle">What is a Learning Path?</h2>

            <p className="bodyText">
              A <strong>Learning Path</strong> is a structured sequence of learning experiences
              designed to help individuals progressively build knowledge, develop practical skills,
              and achieve professional expertise.
            </p>

            <p className="bodyText">
              Instead of fragmented courses or isolated training sessions, a learning path organizes
              learning into a logical progression of modules, skills, and competencies.
            </p>

            <p className="bodyText">
              Modern Learning Experience Platforms (LXP) and Learning Management Systems (LMS) use
              learning paths to guide learners through personalized and goal-oriented learning
              journeys.
            </p>

            <p className="listHeading">A well-designed learning path provides:</p>
            
            <ul className="checkList">
              {whatIsItems.map((item) => (
                <li key={item} className="checkItem">
                  <span className="checkDot" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="closingStatement">
              With a learning path, learning becomes purposeful, organized, and outcome-driven.
            </div>
          </div>

          <div className="whatIsRight">
            <div className="statsGrid">
              {statCards.map((stat) => (
                <div key={stat.label} className="statCard">
                  <div className="statNumber">{stat.num}</div>
                  <div className="statLabel">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="imageWrapperAlt">
              <Image
                src="/photo-1434030216411-0b793f4b4173.jpeg"
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
          <h2 className="sectionTitle">NeuroLXP: Pioneering Scientific Learning Paths</h2>
        </div>

        <p className="pioneerBodyText">
          NeuroLXP is among the first AI-powered learning platforms to introduce scientifically
          designed learning paths. Unlike traditional LMS platforms that focus mainly on content
          delivery, NeuroLXP focuses on structured capability development through carefully
          engineered learning journeys.
        </p>

        <p className="pioneerBodyText">
          NeuroLXP combines the following pillars to create transformational and career-focused
          learning:
        </p>

        <div className="pioneerGrid">
          {pioneerCards.map((card) => (
            <div key={card.num} className="pioneerCard">
              <div className="pioneerCardNum">{card.num}</div>
              <h3 className="pioneerCardTitle">{card.title}</h3>
              <p className="pioneerCardDesc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="pioneerDesignBox">
          <h4 className="pioneerDesignTitle">NeuroLXP Learning Paths are designed using:</h4>
          <ul className="twoColList">
            {designedUsing.map((item) => (
              <li key={item} className="twoColItem">
                <span className="bulletBar" />
                {item}
              </li>
            ))}
          </ul>
          <div className="pioneerClosing">
            This scientific approach ensures that learning is not just informative, but
            transformational and career-focused.
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="stages" className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Four Progressive Stages of Mastery</h2>
        </div>

        <p className="stagesIntroText">
          NeuroLXP organizes learning into structured stages that gradually build knowledge, skill
          mastery, and professional capability — from core foundations through to career-ready
          performance.
        </p>

        <div className="stagesTimeline">
          {stages.map((stage) => {
            const radius = 48;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (stage.progress / 100) * circumference;
            const progressColors: Record<string, string> = {
              circle1: '#5e72e4',
              circle2: '#7c3aed',
              circle3: '#00b4d8',
              circle4: '#10b981',
            };
            const color = progressColors[stage.circleClass] ?? '#5e72e4';

            return (
              <div key={stage.tag} className="stageRow">
                <div className="stageMarker">
                  <div className="stageCircle">
                    <div className={`stageCircleInner ${stage.circleClass}`} />
                  </div>
                </div>

                <div className="stageBody">
                  <div className="stageBodyInner">
                    <div className="stageContent">
                      <span className={`stageTag ${stage.tagClass}`}>{stage.tag}</span>
                      <h3 className="stageTitle">{stage.title}</h3>
                      <p className="stageSubtitle">{stage.subtitle}</p>
                      <ul className="stageList">
                        {stage.items.map((item) => (
                          <li key={item} className="stageListItem">
                            <span className={`stageDot ${stage.dotClass}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="stageClosing">{stage.closing}</p>
                    </div>

                    <div className="stagePanel">
                      <div className="stagePanelRing">
                        <svg width="120" height="120" viewBox="0 0 120 120">
                          <circle cx="60" cy="60" r={radius} fill="none" stroke="var(--neu-shadow-dark)" strokeWidth="10" />
                          <circle
                            cx="60"
                            cy="60"
                            r={radius}
                            fill="none"
                            stroke={color}
                            strokeWidth="10"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            transform="rotate(-90 60 60)"
                            style={{ transition: 'stroke-dashoffset 0.8s ease' }}
                          />
                        </svg>
                        <div className="stagePanelRingLabel">
                          <span className="stagePanelPct" style={{ color }}>{stage.progress}%</span>
                          <span className="stagePanelPctSub">Mastery</span>
                        </div>
                      </div>

                      <div className="stagePanelStats">
                        <div className="stagePanelStat">
                          <span className="stagePanelStatNum" style={{ color }}>{stage.modules}</span>
                          <span className="stagePanelStatLabel">Modules</span>
                        </div>
                        <div className="stagePanelStatDivider" />
                        <div className="stagePanelStat">
                          <span className="stagePanelStatNum" style={{ color }}>{stage.duration}</span>
                          <span className="stagePanelStatLabel">Duration</span>
                        </div>
                      </div>

                      <div className="stagePanelTags">
                        {stage.skills.map((skill) => (
                          <span key={skill} className="stagePanelTag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">
            Bringing Structure and Discipline to the Learning Process
          </h2>
        </div>

        <p className="structureIntroText">
          A structured learning path introduces clarity, discipline, and measurable progress into
          the learning journey. NeuroLXP Learning Paths help establish:
        </p>

        <div className="milestoneGrid">
          {milestones.map((m) => {
            const Icon = m.icon;

            return (
              <div key={m.title} className="milestoneCard">
                <div className="milestoneIconBox">
                  <div className={`milestoneIconInner ${m.iconClass}`}>
                    <Icon size={20} color={m.iconColor} />
                  </div>
                </div>
                <h4 className="milestoneTitle">{m.title}</h4>
                <p className="milestoneDesc">{m.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="structureClosing">
          This structured environment enables learners to stay focused, motivated, and committed
          while progressing steadily toward knowledge mastery and career growth.
        </div>
      </section>

      <div className="divider" />

      <section id="benefits" className="section">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Benefits of NeuroLXP Learning Paths</h2>
          <p className="sectionDesc">
            Whether you are a learner, an academic institution, or a corporate training
            organization — NeuroLXP Learning Paths deliver measurable, transformational impact.
          </p>
        </div>

        <div className="benefitsTabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tabBtn ${activeTab === tab.id ? "tabBtnActive" : ''}`}
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

            <div className="imageWrapperAlt">
              <Image
                src="/pexels-olly-3932570.jpg"
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
        <div className="designedCard">
          <div>
            <h2 className="designedTitle">Designed for Systematic Learning</h2>

            <p className="bodyText">
              Unlike traditional LMS courses that deliver isolated content, NeuroLXP courses are
              designed as part of integrated learning ecosystems.
            </p>

            <p className="bodyText">
              Every NeuroLXP Learning Path includes:
            </p>

            <ul className="featureList">
              {ecosystemItems.map((item) => (
                <li key={item.title} className="featureItem">
                  <span className="featureCheck">
                    <span className="featureCheckMark" />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                  </span>
                </li>
              ))}
            </ul>

            <div className="designedClosing">
              This ensures that every learning activity contributes to a larger journey of growth,
              mastery, and professional development.
            </div>
          </div>

          <div>
            <div className="ecosystemList">
              {ecosystemItems.map((item) => (
                <div key={item.title} className="ecosystemItem">
                  <span className="ecosystemDot" />
                  <div>
                    <div className="ecosystemItemTitle">{item.title}</div>
                    <div className="ecosystemItemDesc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="futureBanner">
          <div className="futureBannerContent">
            <h2 className="futureBannerTitle">The Future of Learning is Structured</h2>

            <p className="futureBannerBody">
              As knowledge continues to grow in complexity, the need for structured learning design,
              competency-based training, and personalized learning paths becomes increasingly important.{` `}
              {!futureExpanded && (
                <a className="lnkToggle" onClick={() => setFutureExpanded(true)}>
                  More▼
                </a>
              )}
            </p>

            {futureExpanded && (
              <p className="futureBannerBodyLast">
                NeuroLXP is proud to pioneer a scientific learning path model that brings clarity,
                structure, and purpose to digital learning. Through NeuroLXP Learning Paths, education
                evolves from isolated learning events into a guided journey toward expertise and
                career readiness. Experience the future of AI-powered learning platforms, structured
                learning paths, and competency-based digital education with NeuroLXP.{` `}
                <a className="lnkToggle" onClick={() => setFutureExpanded(false)}>
                  Less ▲
                </a>
              </p>
            )}

            <div className="futureBannerActions">
              <button className="btnWhite">Discover the Power of Structured Learning</button>
              <button className="btnOutlineWhite">Explore Learning Paths</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningPaths;
