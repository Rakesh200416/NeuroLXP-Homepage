import React from 'react';
import {
  FaBookOpen,
  FaChartLine,
  FaUsers,
  FaLayerGroup,
  FaLightbulb,
  FaGraduationCap,
  FaClipboardCheck,
  FaRoute,
  FaRocket,
  FaSchool,
} from 'react-icons/fa';
import './page.css';

const challenges = [
  {
    icon: <FaUsers />,
    title: 'Passive Learning and Low Student Engagement',
    problem:
      'Traditional lecture-based teaching methods often result in passive learning where students consume information without active participation.',
    solution:
      'NeuroLXP integrates interactive learning activities, gamification, quizzes, discussions, and multimedia content that encourage students to actively engage with the learning material and improve knowledge retention.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Managing Large Volumes of Academic Content',
    problem:
      'Educational institutions handle vast amounts of learning materials including lecture notes, videos, textbooks, assignments, and assessments.',
    solution:
      'NeuroLXP provides a centralized content creation and management system where educators can easily organize, update, and distribute learning resources.',
  },
  {
    icon: <FaRoute />,
    title: 'Diverse Learning Needs and Learning Speeds',
    problem:
      'Students have different learning styles and progress at different speeds, making it difficult to meet everyone’s needs.',
    solution:
      'NeuroLXP supports personalized learning pathways and adaptive learning experiences, allowing students to learn at their own pace.',
  },
  {
    icon: <FaChartLine />,
    title: 'Monitoring Student Progress and Performance',
    problem:
      'Educators need clear insights into student engagement, performance, and learning gaps.',
    solution:
      'NeuroLXP allows educators to track student participation, course progress, assessment performance, and skill development.',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Preparing Students for Real-World Careers',
    problem:
      'Modern education must focus on practical skills and career readiness.',
    solution:
      'NeuroLXP enables institutions to offer skill-based courses, career pathways, and industry-aligned learning programs.',
  },
];

const benefits = [
  'Deliver engaging digital and blended learning experiences',
  'Improve student participation and academic outcomes',
  'Provide personalized and flexible learning opportunities',
  'Manage academic content efficiently',
  'Track student progress through data-driven insights',
  'Support career development and skill-based learning',
];

export default function EducationPage() {
  return (
    <main className="edu-page">
      <div className="edu-breadcrumb-nav">
        <ol className="edu-breadcrumb">
          <li className="edu-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="edu-breadcrumb-item active" aria-current="page">
            Education
          </li>
        </ol>
      </div>

      <section className="edu-hero">
        <div className="edu-container edu-hero-grid">
          <div className="edu-hero-content">
            <span className="edu-badge">Education</span>
            <h1>
              Transforming Education Through <span>Intelligent Digital Learning</span>
            </h1>
            <p>
              Education is evolving rapidly as institutions adopt technology to enhance teaching, improve student
              engagement, and deliver flexible learning experiences. NeuroLXP provides a powerful digital learning
              platform designed to support modern education systems.
            </p>
            <p>
              With advanced tools for content delivery, assessments, collaboration, and analytics, NeuroLXP helps
              educators and institutions provide meaningful learning experiences.
            </p>

            <div className="edu-actions">
              <a href="/contact" className="edu-btn edu-btn-primary">
                Get Started
              </a>
              <a href="#challenges" className="edu-btn">
                Explore Challenges
              </a>
            </div>
          </div>

          <div className="edu-image-placeholder">
            <FaSchool />
            <h3>Education Platform Image</h3>
            <p>Add your hero education image here.</p>
          </div>
        </div>
      </section>

      <section className="edu-section" id="challenges">
        <div className="edu-container">
          <div className="edu-section-head">
            <span className="edu-badge">Addressing Key Challenges</span>
            <h2>Addressing Key Challenges in Education</h2>
          </div>

          <div className="edu-challenge-grid">
            {challenges.map((item, index) => (
              <article className="edu-challenge-card" key={item.title}>
                <div className="edu-card-top">
                  <div className="edu-card-icon">{item.icon}</div>
                  <span className="edu-card-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.problem}</p>
                <div className="edu-solution-box">
                  <h4>How NeuroLXP Helps</h4>
                  <p>{item.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="edu-section">
        <div className="edu-container edu-image-content-grid">
          <div className="edu-image-placeholder">
            <FaBookOpen />
            <h3>Digital Learning Image</h3>
            <p>Add your classroom, LMS, or analytics image here.</p>
          </div>

          <div className="edu-content-card">
            <span className="edu-badge">Smart Learning</span>
            <h2>Flexible Learning for Modern Institutions</h2>
            <p>
              NeuroLXP helps institutions create structured, interactive, and measurable learning environments
              with support for content, assessment, engagement, and performance tracking.
            </p>
          </div>
        </div>
      </section>

      <section className="edu-section" id="benefits">
        <div className="edu-container">
          <div className="edu-section-head">
            <span className="edu-badge">Institution Benefits</span>
            <h2>Benefits for Educational Institutions</h2>
            <p>Institutions using NeuroLXP can:</p>
          </div>

          <div className="edu-benefits-list">
            {benefits.map((benefit) => (
              <div className="edu-benefit-item" key={benefit}>
                <div className="edu-check-icon">
                  <FaLightbulb />
                </div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="edu-section edu-final-section">
        <div className="edu-container">
          <div className="edu-cta">
            <div className="edu-cta-icon">
              <FaRocket />
            </div>
            <h2>NeuroLXP — Enabling the Future of Education</h2>
            <p>
              With powerful learning tools, interactive content, and intelligent analytics, NeuroLXP helps
              educational institutions create innovative learning environments that empower students, support
              educators, and drive better academic outcomes.
            </p>
            <a href="" className="edu-btn edu-btn-primary edu-get-started-btn">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
