"use client";

import { useEffect, useRef, useState } from "react";
import "./page.css";

interface SkillBarProps {
  label: string;
  pct: number;
  color?: string;
}

interface ChallengeCardProps {
  icon: string;
  challenge: string;
  description: string;
  solution: string;
  delay?: number;
}

interface StatProps {
  value: string;
  label: string;
  icon: string;
}

function useFadeOnVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, count };
}

function SkillBar({ label, pct }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWidth(pct);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div className="hero-skill-item" ref={ref}>
      <div className="hero-skill-meta">
        <span>{label}</span>
        <span className="hero-skill-pct">{pct}%</span>
      </div>
      <div className="neu-progress-track">
        <div className="neu-progress-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function AnimatedStat({ value, label, icon }: StatProps) {
  const numericTarget = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const { ref, count } = useCounter(numericTarget);

  return (
    <div className="neu-counter fade-up" ref={ref}>
      <div className="neu-icon-box" style={{ margin: "0 auto 12px", boxShadow: "none" }}>
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="counter-value">
        {count}
        {suffix}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

function ChallengeCard({
  icon,
  challenge,
  description,
  solution,
  delay = 0,
}: ChallengeCardProps) {
  const ref = useFadeOnVisible();
  return (
    <div className={`challenge-card fade-up stagger-${delay}`} ref={ref}>
      <div className="challenge-icon-row">
        <div className="challenge-icon">
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
      </div>
      <div className="challenge-label">Challenge</div>
      <div className="challenge-q">{challenge}</div>
      <p className="challenge-description">{description}</p>
      <div className="challenge-pill">HOW NEUROLXP HELPS</div>
      <div className="challenge-solution-card">
        <p className="challenge-answer">{solution}</p>
      </div>
    </div>
  );
}

const STATS: StatProps[] = [
  {
    value: "500+",
    label: "Enterprise Clients",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14"/><path d="M8 21V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16"/><path d="M2 21h20"/><path d="M9 9h6"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>`,
  },
  {
    value: "2M+",
    label: "Learners Trained",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
  },
  {
    value: "40%",
    label: "Productivity Boost",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  },
];

const CHALLENGES = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
    challenge: "Rapid Skill Changes in the Workplace",
    description:
      "Industries are evolving quickly due to technological advancements and changing market demands. Employees must regularly update their skills to stay relevant.",
    solution:
      "NeuroLXP enables organizations to deliver continuous learning programs and skill-based training courses that help employees stay updated with new technologies, tools, and industry practices.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    challenge: "Training Large and Distributed Workforces",
    description:
      "Modern organizations often operate across multiple locations and remote environments, making traditional training methods difficult to manage.",
    solution:
      "NeuroLXP supports scalable digital learning delivery, allowing companies to train employees across different offices, regions, and remote teams through a single platform.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>`,
    challenge: "Low Engagement in Traditional Training Programs",
    description:
      "Conventional corporate training sessions often rely on lengthy presentations that may not fully engage employees.",
    solution:
      "NeuroLXP introduces interactive learning experiences, including gamified activities, scenario-based learning, quizzes, and collaborative discussions that make training more engaging and effective.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    challenge: "Tracking Employee Learning Progress",
    description:
      "Organizations need visibility into employee learning progress and training effectiveness.",
    solution:
      "NeuroLXP provides advanced analytics and reporting dashboards that track employee participation, skill development, course completion, and assessment performance.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
    challenge: "Aligning Learning with Business Goals",
    description:
      "Corporate training must directly support organizational objectives such as productivity, innovation, and employee retention.",
    solution:
      "NeuroLXP enables organizations to design career pathways, role-based learning programs, and competency-based training that align employee development with business goals.",
  },
];

const BENEFITS = [
  "Build a culture of continuous learning",
  "Improve employee productivity and performance",
  "Deliver scalable and cost-effective training programs",
  "Strengthen employee engagement and retention",
  "Track learning impact through data-driven insights",
];

export default function CorporateTraining() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const heroRef = useFadeOnVisible(0.05);
  const ctaRef = useFadeOnVisible(0.1);

  return (
    <div className="ct-root">
      <div className="ct-breadcrumb-nav">
        <ol className="ct-breadcrumb">
          <li className="ct-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="ct-breadcrumb-item active" aria-current="page">
            Corporate Training
          </li>
        </ol>
      </div>

      <section className="ct-hero ct-section">
        <div className="ct-container">
          <div className="ct-hero-grid">
            <div ref={heroRef} className="fade-up">
              <div className="ct-hero-eyebrow">
                <span className="badge-dot" />
                Corporate Training Solutions
              </div>

              <h1 className="ct-hero-title">
                Empowering Organizations with{" "}
                <span className="highlight">Continuous Workforce Development</span>
              </h1>

              <p className="ct-hero-desc">
                In today’s rapidly evolving business environment, organizations must continuously upskill their workforce to remain competitive. NeuroLXP provides a powerful Corporate Training Solution that helps companies train employees, improve performance, and build future-ready teams through structured digital learning programs.
              </p>

              <p className="ct-hero-desc">
                With advanced learning technologies, AI-driven insights, interactive content, and scalable training delivery, NeuroLXP enables organizations to create effective learning ecosystems that support employee growth and business success.
              </p>

              <div className="ct-hero-actions">
                <a href="#" className="neu-btn neu-btn-primary neu-btn-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Start Free Trial
                </a>

                <a href="#challenges" className="neu-btn neu-btn-outline neu-btn-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                  Explore Platform
                </a>
              </div>
            </div>

            <div className="ct-hero-visual">
              <div className="hero-card-back hero-card-back-1" />
              <div className="hero-card-back hero-card-back-2" />

              <div className="ct-hero-card-main">
                <div className="hero-card-header">
                  <div className="hero-card-title">Team Skill Progress</div>
                  <div className="hero-card-tag">Q2 2025</div>
                </div>

                <div className="hero-productivity-stats-row">
                  <div className="hero-productivity-stat">
                    <div className="stat-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </div>
                    <div>
                      <div className="stat-val">40%</div>
                      <div className="stat-lbl">Productivity Boost</div>
                    </div>
                  </div>

                  <div className="hero-productivity-stat">
                    <div className="stat-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <div className="stat-val">2M+</div>
                      <div className="stat-lbl">Learners Trained</div>
                    </div>
                  </div>
                </div>

                <div className="hero-skill-list">
                  <SkillBar label="Leadership" pct={88} />
                  <SkillBar label="Technical Skills" pct={74} />
                  <SkillBar label="Compliance" pct={95} />
                  <SkillBar label="Customer Service" pct={81} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ct-stats-strip">
        <div className="ct-container">
          <div className="ct-stats-grid">
            {STATS.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      <section className="ct-challenges ct-section" id="challenges">
        <div className="ct-container">
          <div className="text-center fade-up" ref={useFadeOnVisible()}>
            <div className="section-badge">
              <span className="badge-dot" />
              Addressing Key Challenges in Corporate Training
            </div>

            <h2 className="section-title">
              Addressing <span>Key Challenges</span> in Corporate Training
            </h2>

            <p className="section-subtitle">
              NeuroLXP helps organizations overcome the most pressing corporate training barriers with intelligent, scalable learning solutions.
            </p>
          </div>

          <div className="ct-challenges-grid">
            {CHALLENGES.map((c, i) => (
              <ChallengeCard
                key={c.challenge}
                {...c}
                delay={((i % 3) + 1) as 1 | 2 | 3}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      <section className="ct-usecases ct-section" id="usecases">
        <div className="ct-container">
          <div className="usecase-heading-wrapper fade-up" ref={useFadeOnVisible()}>
            <div className="section-badge">
              <span className="badge-dot" />
              Key Corporate Training Use Cases
            </div>

            <h2 className="section-title">
              Learning Programs for <span>Every Need</span>
            </h2>

            <p className="section-subtitle" style={{ maxWidth: "100%" }}>
              Organizations can use NeuroLXP to deliver a wide range of corporate learning programs, including:
            </p>
          </div>

          <div className="usecase-cards-grid">
            <div className="usecase-neu-card">
              <div className="usecase-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
              </div>
              <h3 className="usecase-card-title">Employee Onboarding</h3>
              <p className="usecase-card-desc">Structured induction training to help new hires quickly adapt to company culture and role expectations.</p>
            </div>

            <div className="usecase-neu-card">
              <div className="usecase-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="usecase-card-title">Leadership Development</h3>
              <p className="usecase-card-desc">Build strong leaders with advanced management and decision-making training programs.</p>
            </div>

            <div className="usecase-neu-card">
              <div className="usecase-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="usecase-card-title">Compliance Training</h3>
              <p className="usecase-card-desc">Ensure regulatory compliance with up-to-date training on industry standards and policies.</p>
            </div>

            <div className="usecase-neu-card">
              <div className="usecase-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="usecase-card-title">Technical Skill Development</h3>
              <p className="usecase-card-desc">Keep your team updated with the latest tools, technologies, and technical best practices.</p>
            </div>

            <div className="usecase-neu-card">
              <div className="usecase-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8l-4 4-4-4" />
                  <path d="M12 12v6" />
                </svg>
              </div>
              <h3 className="usecase-card-title">Product Knowledge</h3>
              <p className="usecase-card-desc">Train teams on product features, benefits, and sales strategies for better customer engagement.</p>
            </div>

            <div className="usecase-neu-card">
              <div className="usecase-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3 className="usecase-card-title">Customer Service</h3>
              <p className="usecase-card-desc">Enhance customer experience with effective communication and service excellence training.</p>
            </div>

            <div className="usecase-neu-card">
              <div className="usecase-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="usecase-card-title">Continuous Development</h3>
              <p className="usecase-card-desc">Foster a culture of lifelong learning with ongoing professional development programs.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="neu-divider" />

      <section className="ct-benefits ct-section" id="benefits">
        <div className="ct-container">
          <div className="ct-benefits-grid">
            <div>
              <div className="fade-up" ref={useFadeOnVisible()}>
                <div className="section-badge">
                  <span className="badge-dot" />
                  Benefits of Corporate Training with NeuroLXP
                </div>

                <h2 className="section-title">
                  Benefits of <span>Corporate Training</span> with NeuroLXP
                </h2>

                <p className="section-subtitle">
                  Organizations using NeuroLXP can:
                </p>
              </div>

              <div className="benefit-list">
                {BENEFITS.map((b, i) => (
                  <div
                    key={b}
                    className={`benefit-item fade-up stagger-${i + 1}`}
                    ref={useFadeOnVisible()}
                  >
                    <div className="benefit-check">✓</div>
                    <div className="benefit-text">{b}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 36 }} className="fade-up" ref={useFadeOnVisible()}>
                <a href="#" className="neu-btn neu-btn-primary neu-btn-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  See All Features
                </a>
              </div>
            </div>

            <div className="benefits-visual fade-up stagger-2" ref={useFadeOnVisible()}>
              <div className="bv-card">
                <div className="bv-card-header">
                  <div className="bv-card-title">📊 Learning Analytics Dashboard</div>
                  <div className="bv-card-pill">Live</div>
                </div>

                <div className="bv-metric-row">
                  <div className="bv-metric">
                    <div className="bv-metric-val">94%</div>
                    <div className="bv-metric-lbl">Completion</div>
                  </div>
                  <div className="bv-metric">
                    <div className="bv-metric-val">4.8</div>
                    <div className="bv-metric-lbl">Avg Score</div>
                  </div>
                  <div className="bv-metric">
                    <div className="bv-metric-val">12h</div>
                    <div className="bv-metric-lbl">Avg Time</div>
                  </div>
                </div>
              </div>

              <div className="bv-card">
                <div className="bv-card-header">
                  <div className="bv-card-title">🏆 Top Training Programs</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { label: "Leadership Dev", pct: 92 },
                    { label: "Compliance", pct: 98 },
                    { label: "Tech Upskilling", pct: 78 },
                    { label: "Sales Enablement", pct: 85 },
                  ].map((prog) => (
                    <SkillBar key={prog.label} label={prog.label} pct={prog.pct} />
                  ))}
                </div>
              </div>

              <div className="bv-card">
                <div className="bv-card-header">
                  <div className="bv-card-title">🌍 Global Deployment</div>
                </div>

                <div className="bv-metric-row">
                  <div className="bv-metric">
                    <div className="bv-metric-val">50+</div>
                    <div className="bv-metric-lbl">Countries</div>
                  </div>
                  <div className="bv-metric">
                    <div className="bv-metric-val">120+</div>
                    <div className="bv-metric-lbl">Languages</div>
                  </div>
                  <div className="bv-metric">
                    <div className="bv-metric-val">99.9%</div>
                    <div className="bv-metric-lbl">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ct-cta">
        <div className="ct-container">
          <div className="ct-cta-box fade-up" ref={ctaRef}>
            <div className="section-badge" style={{ margin: "0 auto 20px" }}>
              <span className="badge-dot" />
              NeuroLXP — Transforming Corporate Learning
            </div>

            <h2 className="ct-cta-title">
              NeuroLXP — Transforming Corporate Learning
            </h2>

            <p className="ct-cta-desc">
              With intelligent learning tools, interactive training formats, and powerful analytics, NeuroLXP helps organizations build skilled, engaged, and future-ready workforces through effective corporate training programs.
            </p>

            <div className="ct-cta-actions">
              <a href="#" className="neu-btn neu-btn-primary neu-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                Start Free Trial
              </a>

              <a href="#" className="neu-btn neu-btn-outline neu-btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
