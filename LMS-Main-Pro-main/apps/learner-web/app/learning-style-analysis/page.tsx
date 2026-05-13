'use client';

import "./learning-style-analysis.css";
import { FaBrain, FaChartBar, FaUserGraduate, FaLightbulb, FaClipboardCheck, FaDatabase, FaChartLine, FaLayerGroup, FaStar, FaUsers, FaRocket, FaCheckCircle, } from "react-icons/fa";
import Image from "next/image";

const challengePoints = [
  "Self-reporting can be subjective and influenced by personal biases",
  "Adds cognitive load and complexity for educators in instructional design",
  "Difficult to implement within fixed curriculum constraints",
  "Balancing individual learner needs with group teaching is complex",
];

const moduleFeatures = [
  {
    icon: FaClipboardCheck,
    title: "Learning Assessment",
    desc: "Platform assessments identify each learner's preferred style and dominant learning patterns.",
  },
  {
    icon: FaDatabase,
    title: "Data Collection",
    desc: "Tracks content engagement, interactive responses, and resource access behaviors.",
  },
  {
    icon: FaChartLine,
    title: "Learning Analytics",
    desc: "Evaluates effectiveness of different style approaches for individuals and aggregate groups.",
  },
  {
    icon: FaLayerGroup,
    title: "Adaptive Content",
    desc: "Provides content aligned with the learner's identified style for enhanced comprehension.",
  },
  {
    icon: FaStar,
    title: "Recommendations",
    desc: "Tailored suggestions ensure learners receive content resonating with their preferences.",
  },
  {
    icon: FaChartBar,
    title: "Progress Tracking",
    desc: "Records activities the learner finds engaging, where they excel, and their challenges.",
  },
];

const whyConsiderPoints = [
  {
    title: "Personalization",
    desc: "Tailor content and teaching methods to each learner's unique style, resulting in a 20–30% increase in engagement and a 25–35% improvement in retention.",
    color: "primary",
  },
  {
    title: "Increased Motivation",
    desc: "When learners experience success through content adapted to their style, it enhances motivation and contributes to higher learner satisfaction.",
    color: "secondary",
  },
  {
    title: "Inclusive Learning",
    desc: "Learning Style Assessment fosters inclusivity by accommodating diverse needs and strengths, ensuring that no learner is left behind.",
    color: "accent",
  },
];

const stats = [
  { label: "Improved Engagement", value: "20–30%", sub: "increase" },
  { label: "Enhanced Retention", value: "25–35%", sub: "increase" },
  { label: "Higher Success Rates", value: "15–20%", sub: "increase" },
  { label: "Dominant Style Learners", value: "60–70%", sub: "of learners" },
];

export default function LearningStyleAnalysisPage() {
  return (
    <main className="lsa-page page">
      <div className="lsa-breadcrumb-nav">
        <ol className="lsa-breadcrumb">
          <li className="lsa-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="lsa-breadcrumb-item active" aria-current="page">
            Learning Style Analysis
          </li>
        </ol>
      </div>

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">

            <h1 className="heroTitle">Learning Style Analysis</h1>

            <h2 className="heroSubtitle">
              Empower Learning Journey — Tailored For Success
            </h2>

            <p className="heroText">
              Our Learning Style Analysis (LSA) module tailors educational
              content and delivery based on each individual learner's preferred
              learning style. By analysing how learners prefer to acquire and
              process information, NeuroLXP ensures a more personalized and
              effective learning experience for every individual.
            </p>

            <p className="heroText">
              NeuroLXP harnesses the power of AI to streamline the process of
              identifying and sharing compelling content tailored to the unique
              interests and preferences of its users — transforming the way
              institutions deliver education.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imageWrapper">
              <Image
                src="/photo-1522202176988-66273c2fd55f.webp" alt="Students engaging with personalized digital learning"
                width={560} height={320} className="heroImage" priority />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaBrain className="iconText" />
                <span>Adaptive Learning</span>
              </div>
              <div className="statPill">
                <FaUserGraduate className="iconText" />
                <span>Personalised Paths</span>
              </div>
              <div className="statPill">
                <FaChartBar className="iconText" />
                <span>Data-Driven Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statsStrip">
        {stats.map((s) => (
          <div className="statCard" key={s.label}>
            <span className="statValue">{s.value}</span>
            <span className="statSub">{s.sub}</span>
            <span className="statLabel">{s.label}</span>
          </div>
        ))}
      </section>

      <section className="cardsSection">
        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaLightbulb className="iconText" />
            </div>
            <h3>The Challenges of Learning Style Analytics</h3>
          </div>

          <p>
            Learning style analysis in L&D faces several challenges. Being
            aware of these complexities is essential to implement effective,
            fair, and inclusive strategies that truly serve every learner.
          </p>

          <div className="insetBox">
            <h4>Key challenges include:</h4>
            <ul className="featureList">
              {challengePoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Overcoming these challenges requires a thoughtful, data-driven
            approach combined with flexible platform design.
          </p>
        </article>

        <article className="contentCard wideCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaBrain className="iconText" />
            </div>
            <h3>Learning Style Analysis Module</h3>
          </div>

          <p>
            Learning style analysis is the process of identifying an
            individual's preferred or dominant learning style — the manner in
            which they learn most effectively and efficiently.
          </p>

          <div className="moduleGrid">
            {moduleFeatures.map(({ icon: Icon, title, desc }) => (
              <div className="moduleItem" key={title}>
                <div className="moduleIconWrap">
                  <Icon className="iconText" />
                </div>
                <div>
                  <h5 className="moduleTitle">{title}</h5>
                  <p className="moduleDesc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaCheckCircle className="iconText" />
            </div>
            <h3>Why Consider Learning Style Assessment?</h3>
          </div>

          <p>
            Understanding how individuals learn unlocks the potential to design
            experiences that genuinely resonate — boosting engagement, retention,
            and overall learner success.
          </p>

          <div className="insetBox">
            <ul className="whyList">
              {whyConsiderPoints.map(({ title, desc, color }) => (
                <li key={title} className={`whyItem whyItem--${color}`}>
                  <span className="whyTitle">{title}</span>
                  <span className="whyDesc">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaUsers className="iconText" />
            </div>
            <h3>Supporting Every Learner</h3>
          </div>

          <p>
            By recognising and accommodating diverse learning styles, educators
            can create more effective and engaging learning environments that
            cater to the needs of all learners — regardless of background,
            ability, or dominant style.
          </p>

          <div className="insetBox">
            <h4>
              NeuroLXP's data-driven approach enables institutions to:
            </h4>
            <ul className="featureList">
              <li>
                <span className="listIcon">•</span>
                <span>Deliver personalised academic and professional programs</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Continuously improve learning environments using analytics</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Build inclusive classrooms that accommodate every learner</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Provide actionable progress tracking for educators</span>
              </li>
            </ul>
          </div>

          <p>
            This ensures no learner is left behind — every individual receives
            a tailored path to success.
          </p>
        </article>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaRocket className="iconText" />
              </div>
              <h3>Enabling Smarter Learning Style Analysis</h3>
            </div>

            <p>
              Through structured assessments, real-time data collection, and
              intelligent adaptive content, NeuroLXP empowers institutions to
              deliver truly personalised education — boosting learner
              confidence, engagement, and long-term outcomes.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaClipboardCheck className="iconText" />
                <span>Style Assessments</span>
              </div>
              <div className="miniFeature">
                <FaChartLine className="iconText" />
                <span>Learning Analytics</span>
              </div>
              <div className="miniFeature">
                <FaLayerGroup className="iconText" />
                <span>Adaptive Content</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imageWrapperAlt">
              <Image src="/photo-1434030216411-0b793f4b4173.webp" alt="Educator using learning analytics technology"
                width={520} height={300} className="heroImage" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
