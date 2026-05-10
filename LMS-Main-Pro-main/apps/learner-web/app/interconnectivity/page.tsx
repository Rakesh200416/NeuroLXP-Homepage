import "./interconnectivity.css";
import {
  FaRocket,
  FaGamepad,
  FaMobileAlt,
  FaUsers,
  FaBrain,
  FaStar,
  FaBolt,
  FaGlobe,
  FaComments,
  FaLaptopCode,
  FaLightbulb,
  FaRoute,
  FaArrowRight,
  FaMedal,
} from "react-icons/fa";

const digitalNativeItems = [
  { icon: <FaGamepad />, title: "Gamified learning" },
  { icon: <FaBolt />, title: "Interactive content" },
  { icon: <FaMobileAlt />, title: "Mobile-first access" },
  { icon: <FaUsers />, title: "Collaborative communities" },
];

const immersiveItems = [
  "Gamified challenges and rewards",
  "Interactive simulations and quizzes",
  "Creative problem-solving activities",
  "Collaborative discussions and peer learning",
];

const personalizedItems = [
  "Skill development pathways",
  "Relevant learning resources",
  "Practice challenges and assessments",
  "Career-focused learning modules",
];

const futureSkills = [
  "Digital and technological literacy",
  "Creative problem solving",
  "Critical thinking and innovation",
  "Communication and collaboration skills",
  "Career-oriented technical skills",
];

const communityItems = [
  "Share ideas and insights",
  "Learn from peers and mentors",
  "Collaborate on projects and challenges",
  "Participate in knowledge-driven communities",
];

export default function GenZGalaxy() {
  return (
    <main className="genz-page">
      <section className="genz-hero">
        <div className="genz-hero-content">
          <span className="genz-badge">GenZgalaxy</span>
          <h1>A Learning Universe Designed for the Gen Z Generation</h1>
          <p>
            GenZgalaxy by NeuroLXP is a dynamic learning ecosystem created for
            digital-native learners who expect speed, engagement, interaction,
            and visually rich learning experiences.
          </p>
          <p>
            It reimagines learning as an immersive, interactive, and highly
            engaging digital journey where learners explore knowledge, build
            skills, and connect with communities.
          </p>
        </div>

        <div className="genz-orbit">
          <div className="genz-planet">
            <FaRocket />
            <span>GenZgalaxy</span>
          </div>

          <div className="genz-orbit-chip genz-chip-one">
            <FaGamepad />
            <span>Gamified</span>
          </div>

          <div className="genz-orbit-chip genz-chip-two">
            <FaBrain />
            <span>AI-guided</span>
          </div>

          <div className="genz-orbit-chip genz-chip-three">
            <FaUsers />
            <span>Social</span>
          </div>
        </div>
      </section>

      <section className="genz-intro">
        <span>Digital Native Learning</span>
        <h2>Learning That Feels Fast, Visual, and Interactive</h2>
        <p>
          GenZgalaxy aligns with how Gen Z learners explore content, interact
          with technology, and participate in learning communities.
        </p>
      </section>

      <section className="genz-native-section">
        <div className="genz-section-heading">
          <h2>Learning Designed for Digital Natives</h2>
          <p>
            GenZgalaxy brings together modern learning approaches that transform
            learning from a passive activity into an engaging exploratory
            experience.
          </p>
        </div>

        <div className="genz-native-grid">
          {digitalNativeItems.map((item) => (
            <article className="genz-native-card" key={item.title}>
              <div className="genz-native-icon">{item.icon}</div>
              <h4>{item.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="genz-immersive-section">
        <article className="genz-card genz-immersive-card">
          <div className="genz-icon-box">
            <FaStar />
          </div>
          <h2>Interactive and Immersive Learning Experiences</h2>
          <p>
            GenZgalaxy keeps learners actively involved with engaging activities
            that make learning more memorable and enjoyable.
          </p>

          <ul className="genz-list">
            {immersiveItems.map((item) => (
              <li key={item}>
                <FaArrowRight />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="genz-challenge-panel">
          <div className="genz-challenge-top">
            <span>Challenge Progress</span>
            <FaMedal />
          </div>

          <div className="genz-progress-row">
            <p>Quizzes</p>
            <div><strong className="genz-progress-one"></strong></div>
            <span>86%</span>
          </div>

          <div className="genz-progress-row">
            <p>Projects</p>
            <div><strong className="genz-progress-two"></strong></div>
            <span>72%</span>
          </div>

          <div className="genz-progress-row">
            <p>Rewards</p>
            <div><strong className="genz-progress-three"></strong></div>
            <span>94%</span>
          </div>
        </article>
      </section>

      <section className="genz-personal-section genz-card">
        <div>
          <span className="genz-badge">AI Personalization</span>
          <h2>Personalized Learning Journeys</h2>
          <p>
            GenZgalaxy uses AI-powered personalization to recommend learning
            paths, resources, challenges, and career-focused modules that evolve
            with each learner.
          </p>
        </div>

        <div className="genz-path-grid">
          {personalizedItems.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="genz-skills-section">
        <div className="genz-section-heading">
          <h2>Building Skills for the Future</h2>
          <p>
            GenZgalaxy focuses on practical, career-ready capabilities that
            support modern careers and digital environments.
          </p>
        </div>

        <div className="genz-skill-grid">
          {futureSkills.map((item, index) => (
            <article className="genz-skill-card" key={item}>
              {index === 0 && <FaLaptopCode />}
              {index === 1 && <FaLightbulb />}
              {index === 2 && <FaBrain />}
              {index === 3 && <FaComments />}
              {index === 4 && <FaRoute />}
              <h4>{item}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="genz-community-section">
        <article className="genz-community-visual">
          <FaGlobe />
          <h3>Community Galaxy</h3>
          <p>Social, shared, and collaborative learning spaces.</p>
        </article>

        <article className="genz-card genz-community-card">
          <div className="genz-icon-box genz-community-icon">
            <FaUsers />
          </div>
          <h2>A Community-Driven Learning Ecosystem</h2>
          <p>
            Gen Z values collaboration, social interaction, and shared
            experiences. GenZgalaxy helps learners connect through communities,
            forums, and collaborative activities.
          </p>

          <ul className="genz-list">
            {communityItems.map((item) => (
              <li key={item}>
                <FaArrowRight />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="genz-final genz-card">
        <div className="genz-final-icon">
          <FaRocket />
        </div>
        <h2>GenZgalaxy — Where Learning Meets Exploration</h2>
        <p>
          GenZgalaxy transforms learning into a journey of discovery, creativity,
          and growth. By combining interactive technology, personalized learning,
          and community-driven engagement, NeuroLXP empowers the next generation
          to explore knowledge, build skills, and shape their future.
        </p>
        <h3>GenZgalaxy by NeuroLXP — A Universe of Learning for the Next Generation.</h3>
      </section>
    </main>
  );
}
