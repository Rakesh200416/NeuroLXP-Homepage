import {
  FaCode,
  FaLaptopCode,
  FaBug,
  FaRocket,
  FaDatabase,
  FaUserGraduate,
  FaBuilding,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdOutlineAssessment } from "react-icons/md";
import "./CodingBootcamps.css";

export default function Page() {
  return (
    <main className="bootcamp-page">
      <div className="bootcamp-breadcrumb-nav">
        <ol className="bootcamp-breadcrumb">
          <li className="bootcamp-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="bootcamp-breadcrumb-item active" aria-current="page">
            Coding Bootcamps
          </li>
        </ol>
      </div>

      <section className="bootcamp-hero">
        <div className="bootcamp-hero-content">
          <span className="bootcamp-badge">NeuroLabs Bootcamps</span>

          <h1>Coding Bootcamps</h1>

          <h2>Accelerate Software Development Skills Through Intensive Learning</h2>

          <p>
            NeuroLabs Coding Bootcamps are designed to help learners rapidly
            develop practical programming skills through immersive, hands-on
            learning experiences. These intensive training programs focus on
            real-world coding, problem solving, and project-based learning,
            enabling learners to become job-ready in modern technology roles.
          </p>

          <p>
            With structured learning paths, interactive coding labs, and guided
            mentorship, NeuroLabs helps learners build the technical expertise
            needed to succeed in today’s fast-growing digital economy.
          </p>
        </div>

        <div className="bootcamp-terminal">
          <div className="terminal-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="terminal-body">
            <p>$ start coding-bootcamp</p>
            <p>&gt; Loading real-world coding...</p>
            <p>&gt; Building project-based learning...</p>
            <p>&gt; Preparing modern technology roles...</p>
            <strong>Job-ready skills activated.</strong>
          </div>
        </div>
      </section>

      <section className="bootcamp-stats">
        <div>
          <FaCode />
          <strong>Real-world coding</strong>
          <span>Problem solving</span>
        </div>

        <div>
          <FaLaptopCode />
          <strong>Project-based learning</strong>
          <span>Hands-on practice</span>
        </div>

        <div>
          <FaRocket />
          <strong>Job-ready skills</strong>
          <span>Technology careers</span>
        </div>
      </section>

      <section className="bootcamp-content-section">
        <h2>Learn by Building Real Projects</h2>
        <p>
          Coding bootcamps emphasize practical learning. Instead of focusing only
          on theory, learners work on real coding exercises and development
          projects that simulate real industry scenarios.
        </p>
      </section>

      <section className="bootcamp-timeline">
        <article>
          <div className="timeline-icon">
            <FaCode />
          </div>
          <h3>Writing and testing code</h3>
        </article>

        <article>
          <div className="timeline-icon">
            <FaLaptopCode />
          </div>
          <h3>Developing web and software applications</h3>
        </article>

        <article>
          <div className="timeline-icon">
            <FaBug />
          </div>
          <h3>Debugging and optimizing programs</h3>
        </article>

        <article>
          <div className="timeline-icon">
            <FaRocket />
          </div>
          <h3>Solving real-world programming challenges</h3>
        </article>
      </section>

      <section className="bootcamp-content-section">
        <p>
          This project-driven approach helps learners build strong technical
          foundations while developing practical problem-solving skills.
        </p>
      </section>

      <section className="bootcamp-skill-panel">
        <div>
          <span className="bootcamp-badge">Industry-Relevant Skills</span>
          <h2>Industry-Relevant Programming Skills</h2>
          <p>
            NeuroLabs bootcamps focus on the technologies and programming
            concepts that are in high demand in today’s technology industry.
          </p>
        </div>

        <div className="skill-list">
          <span>
            <FaCode /> Programming fundamentals
          </span>
          <span>
            <FaLaptopCode /> Web development and application development
          </span>
          <span>
            <FaChalkboardTeacher /> Software engineering practices
          </span>
          <span>
            <FaRocket /> Algorithmic thinking and problem solving
          </span>
          <span>
            <FaDatabase /> Database concepts and system design
          </span>
        </div>
      </section>

      <section className="bootcamp-content-section">
        <p>
          These skills help learners prepare for careers in software
          development, data technology, and digital innovation.
        </p>
      </section>

      <section className="bootcamp-grid">
        <article className="bootcamp-card">
          <FaRocket className="card-icon" />
          <h2>Structured and Accelerated Learning Paths</h2>

          <p>
            Coding bootcamps follow a structured learning journey that guides
            participants from basic programming concepts to advanced application
            development.
          </p>

          <h3>Bootcamp learning typically includes:</h3>
          <ul>
            <li>Foundational coding concepts</li>
            <li>Interactive coding challenges</li>
            <li>Hands-on programming labs</li>
            <li>Real-world development projects</li>
            <li>Assessments and performance feedback</li>
          </ul>
        </article>

        <article className="bootcamp-card">
          <MdOutlineAssessment className="card-icon" />
          <h2>Career-Focused Technology Training</h2>

          <p>
            NeuroLabs Coding Bootcamps are designed to support learners who want
            to start or advance their careers in technology. Through practical
            training and guided learning experiences, participants develop the
            skills needed for roles such as:
          </p>

          <ul>
            <li>Software developer</li>
            <li>Web developer</li>
            <li>Application developer</li>
            <li>Technology analyst</li>
            <li>Programming specialist</li>
          </ul>
        </article>

        <article className="bootcamp-card">
          <FaBuilding className="card-icon" />
          <h2>Ideal for Universities, Training Institutes, and Corporate Programs</h2>

          <p>
            NeuroLabs Coding Bootcamps can be implemented across multiple
            learning environments, including:
          </p>

          <ul>
            <li>Universities and engineering institutions</li>
            <li>Technical training academies</li>
            <li>Corporate technology training programs</li>
            <li>Professional upskilling initiatives</li>
          </ul>
        </article>
      </section>

      <section className="bootcamp-content-section">
        <p>
          Organizations can use bootcamps to prepare learners for modern software
          development careers and technology-driven industries.
        </p>
      </section>

      <section className="bootcamp-bottom">
        <div className="bootcamp-image-placeholder">
          <img
            src="/pexels-goumbik-574073.jpg"
            alt="Student learning in a bootcamp session"
            className="bootcamp-image"
          />
        </div>

        <div>
          <h2>NeuroLabs Coding Bootcamps — Fast-Track Your Coding Journey</h2>
          <p>
            With immersive learning environments, hands-on programming practice,
            and industry-focused training, NeuroLabs Coding Bootcamps help
            learners rapidly build the skills needed to thrive in the technology
            industry.
          </p>
        </div>
      </section>
    </main>
  );
}
