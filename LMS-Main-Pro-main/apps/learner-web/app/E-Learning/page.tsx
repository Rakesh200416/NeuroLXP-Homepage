import React from 'react';
import {
  FaGraduationCap,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaBookOpen,
  FaMobileAlt,
  FaComments,
  FaLightbulb,
  FaShieldAlt,
  FaTrophy,
  FaPuzzlePiece,
  FaLayerGroup,
} from 'react-icons/fa';
import './page.css';

const challenges = [
  {
    icon: <FaPuzzlePiece />,
    title: 'Passive Learning in Traditional Online Courses',
    problem:
      'Many online courses rely heavily on static videos and documents, which can lead to low engagement and limited knowledge retention.',
    solution:
      'NeuroLXP enables interactive e-learning experiences using gamified activities, quizzes, simulations, drag-and-drop interactions, puzzles, and discussion forums. These formats encourage active participation and improve learning outcomes.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Managing Large Volumes of Learning Content',
    problem:
      'Organizations and institutions often manage extensive digital learning materials including videos, presentations, PDFs, and assessments.',
    solution:
      'NeuroLXP offers a centralized content creation and management system that allows educators and training teams to organize, update, and distribute learning resources efficiently. AI tools can also convert lengthy materials into concise summaries and exam-focused learning resources.',
  },
  {
    icon: <FaTrophy />,
    title: 'Keeping Learners Engaged in Online Learning',
    problem:
      'Maintaining learner motivation in digital environments can be challenging.',
    solution:
      'NeuroLXP integrates gamification, social learning, and interactive assessments to create engaging learning journeys. Leaderboards, achievements, challenges, and collaborative discussions encourage learners to remain active and motivated.',
  },
  {
    icon: <FaChartLine />,
    title: 'Measuring Learning Effectiveness',
    problem:
      'Organizations need to understand whether learners are actually benefiting from e-learning programs.',
    solution:
      'NeuroLXP provides advanced learning analytics and reporting dashboards that track learner engagement, course completion rates, assessment performance, and skill development. These insights help educators continuously improve learning experiences.',
  },
];

const features = [
  { icon: <FaBookOpen />, title: 'Interactive Learning', desc: 'Interactive learning modules and gamified activities.' },
  { icon: <FaLightbulb />, title: 'AI-Powered Content', desc: 'AI-powered content curation and knowledge insights.' },
  { icon: <FaMobileAlt />, title: 'Mobile Learning', desc: 'Mobile learning for anytime, anywhere access.' },
  { icon: <FaChartLine />, title: 'Advanced Analytics', desc: 'Advanced analytics and reporting tools.' },
  { icon: <FaComments />, title: 'Social Learning', desc: 'Collaborative social learning communities.' },
  { icon: <FaGraduationCap />, title: 'Skill Pathways', desc: 'Skill-based learning pathways and career development tracks.' },
  { icon: <FaRocket />, title: 'Scalable Platform', desc: 'Scalable digital learning for institutions and enterprises.' },
];

const useCases = [
  { icon: <FaGraduationCap />, title: 'Online Education', desc: 'Online education for universities and schools.' },
  { icon: <FaUsers />, title: 'Corporate Training', desc: 'Corporate training and employee development.' },
  { icon: <FaShieldAlt />, title: 'Certification Programs', desc: 'Professional certification programs.' },
  { icon: <FaLightbulb />, title: 'Skill Development', desc: 'Skill development and vocational training.' },
  { icon: <FaComments />, title: 'Customer Education', desc: 'Customer and partner education programs.' },
];

export default function ELearningPage() {
  return (
    <main className="el-page">
      <div className="el-breadcrumb-nav">
        <ol className="el-breadcrumb">
          <li className="el-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="el-breadcrumb-item active" aria-current="page">
            E-Learning Solutions
          </li>
        </ol>
      </div>

      <section className="el-hero">
        <div className="el-container el-hero-grid">
          <div className="el-hero-content">
            <span className="el-badge">E-Learning Solutions</span>
            <h1>
              Deliver Engaging <span>Digital Learning</span> Experiences
            </h1>
            <p>
              E-learning has transformed how organizations and educational institutions deliver knowledge.
              With flexible access, interactive content, and scalable delivery, NeuroLXP provides a powerful
              E-Learning platform that enables institutions, businesses, and training providers to create
              engaging, effective, and accessible digital learning experiences.
            </p>
            <p>
              As a modern AI-powered Learning Experience Platform (LXP), NeuroLXP supports interactive
              learning, personalized learning paths, and intelligent content curation that enhance learner
              engagement and knowledge retention.
            </p>
            <div className="el-actions">
              <a href="#features" className="el-btn el-btn-primary">Explore Features</a>
              <a href="#challenges" className="el-btn">View Challenges</a>
            </div>
          </div>

          <div className="el-hero-card">
            <div className="el-dashboard-top">
              <div>
                <h3>Learning Dashboard</h3>
                <span>Live insights</span>
              </div>
              <div className="el-icon-pill"><FaChartLine /></div>
            </div>
            <div className="el-dashboard-stats">
              <div>
                <h4>50K+</h4>
                <span>Active Learners</span>
              </div>
              <div>
                <h4>92%</h4>
                <span>Completion</span>
              </div>
              <div>
                <h4>24/7</h4>
                <span>Access</span>
              </div>
            </div>
            <div className="el-progress-card">
              <span>Engagement Growth</span>
              <div className="el-progress-track">
                <div className="el-progress-fill" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="el-section" id="challenges">
        <div className="el-container">
          <div className="el-section-head">
            <span className="el-badge">Addressing Key Challenges</span>
            <h2>Addressing Key Challenges in E-Learning</h2>
          </div>

          <div className="el-timeline">
            {challenges.map((item, index) => (
              <article className="el-timeline-item" key={item.title}>
                <div className="el-timeline-icon">{item.icon}</div>
                <div className="el-timeline-card">
                  <span>Challenge {index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.problem}</p>
                  <h4>How NeuroLXP Helps</h4>
                  <p>{item.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="el-section" id="features">
        <div className="el-container">
          <div className="el-section-head">
            <span className="el-badge">Platform Features</span>
            <h2>Key Features of NeuroLXP E-Learning Platform</h2>
          </div>

          <div className="el-feature-grid">
            {features.map((item) => (
              <article className="el-card" key={item.title}>
                <div className="el-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="el-section">
        <div className="el-container">
          <div className="el-section-head">
            <span className="el-badge">Ideal For</span>
            <h2>Ideal for Diverse Learning Environments</h2>
            <p>NeuroLXP supports a wide range of digital learning initiatives.</p>
          </div>

          <div className="el-usecase-grid">
            {useCases.map((item) => (
              <article className="el-card el-usecase-card" key={item.title}>
                <div className="el-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="el-section">
        <div className="el-container">
          <div className="el-cta">
            <span className="el-badge">NeuroLXP</span>
            <h2>Powering the Future of E-Learning</h2>
            <p>
              With intelligent learning tools, interactive content, and scalable delivery capabilities,
              NeuroLXP empowers organizations and institutions to deliver impactful e-learning experiences
              that enhance engagement, improve knowledge retention, and drive meaningful learning outcomes.
            </p>
            <a href="#" className="el-btn el-btn-primary">Get Started</a>
          </div>
        </div>
      </section>
    </main>
  );
}
