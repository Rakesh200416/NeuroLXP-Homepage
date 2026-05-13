import {
  FaBook,
  FaCode,
  FaLightbulb,
  FaProjectDiagram,
  FaTools,
  FaLaptopCode,
  FaBug,
  FaCubes,
  FaBuilding,
} from "react-icons/fa";
import { MdAutoStories, MdOutlineUpdate } from "react-icons/md";
import "./CodingResources.css";

export default function Page() {
  return (
    <main className="resources-page">
      <div className="resources-breadcrumb-nav">
        <ol className="resources-breadcrumb">
          <li className="resources-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="resources-breadcrumb-item active" aria-current="page">
            Coding Resources
          </li>
        </ol>
      </div>

      {/* HERO */}
      <section className="resources-hero">
        <div className="resources-hero-content">
          <span className="resources-badge">NeuroLabs Coding Resources</span>

          <h1>Coding Resources</h1>

          <h2>Everything You Need to Learn, Practice, and Master Coding</h2>

          <p>
            NeuroLabs Coding Resources provide learners with structured
            materials for every stage of the programming journey. From coding
            fundamentals to advanced software development, NeuroLabs helps
            learners practise effectively and build real-world programming
            expertise.
          </p>

          <p>
            These resources support students, developers, educators, and
            technology professionals through practical, accessible, and updated
            learning materials.
          </p>
        </div>

        <div className="resources-image vertical">
          <img
            src="/pexels-mizunokozuki-12899188.jpg"
            alt="Learning resources"
          />
        </div>
      </section>

      {/* SECTION */}
      <section className="resources-text">
        <h2>Comprehensive Programming Learning Materials</h2>
        <p>
          NeuroLabs provides coding resources that support both theoretical
          understanding and hands-on learning.
        </p>
      </section>

      {/* GRID */}
      <section className="resources-grid">
        <div className="resource-box">
          <FaBook />
          <p>Programming tutorials and structured guides</p>
        </div>

        <div className="resource-box">
          <FaProjectDiagram />
          <p>Coding examples and sample projects</p>
        </div>

        <div className="resource-box">
          <FaLightbulb />
          <p>Programming fundamentals explained clearly</p>
        </div>

        <div className="resource-box">
          <FaCubes />
          <p>Algorithm and logic-building exercises</p>
        </div>

        <div className="resource-box">
          <FaTools />
          <p>Best practices for clean, efficient code</p>
        </div>
      </section>

      <section className="resources-text">
        <p>
          These materials help learners build a strong programming foundation.
        </p>
      </section>

      {/* SPLIT */}
      <section className="resources-split">
        <div>
          <span className="resources-badge">Practice-Oriented Learning</span>
          <h2>Practice-Oriented Coding Support</h2>

          <p>
            Learning to code requires regular practice. NeuroLabs offers
            resources that help learners apply knowledge and improve coding
            ability.
          </p>
        </div>

        <div className="resources-list">
          <span>
            <FaCode /> Practice problems and coding exercises
          </span>
          <span>
            <FaLaptopCode /> Code snippets and reusable examples
          </span>
          <span>
            <MdAutoStories /> Step-by-step problem-solving guides
          </span>
          <span>
            <FaBug /> Debugging and optimization tips
          </span>
        </div>
      </section>

      <section className="resources-text">
        <p>
          These resources strengthen understanding through consistent practice.
        </p>
      </section>

      {/* CARDS */}
      <section className="resources-cards">
        <div className="resource-card">
          <FaCubes className="card-icon" />

          <div>
            <h2>Support for Multiple Programming Domains</h2>

            <p>
              NeuroLabs Coding Resources support learners across key areas of
              technology and software development.
            </p>

            <ul>
              <li>Programming fundamentals</li>
              <li>Web development</li>
              <li>Software development practices</li>
              <li>Data structures and algorithms</li>
              <li>Application development</li>
            </ul>

            <p>
              This helps learners explore domains and build stronger technical skills.
            </p>
          </div>
        </div>

        <div className="resource-card">
          <MdOutlineUpdate className="card-icon" />

          <div>
            <h2>Continuous Learning for Developers</h2>

            <p>
              NeuroLabs helps developers stay updated with new tools, frameworks, best
              practices, and industry trends.
            </p>

            <ul>
              <li>Modern frameworks and libraries</li>
              <li>Updated coding best practices</li>
              <li>New development tools</li>
              <li>Industry-relevant programming trends</li>
            </ul>

            <p>
              Learners can deepen expertise and stay aligned with modern development.
            </p>
          </div>
        </div>

        <div className="resource-card">
          <FaBuilding className="card-icon" />

          <div>
            <h2>Ideal for Learning, Teaching, and Skill Development</h2>

            <p>
              NeuroLabs Coding Resources support institutions, bootcamps, corporate
              training, and individual learners.
            </p>

            <ul>
              <li>Universities and engineering institutions</li>
              <li>Coding bootcamps and academies</li>
              <li>Corporate technology training</li>
              <li>Career-focused individual learners</li>
            </ul>

            <p>
              Educators can use these resources in classroom and online courses.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="resources-final">
        <div className="resources-image">
          <img
            src="/pexels-dkomov-34804006.jpg"
            alt="Coding resources illustration"
          />
        </div>

        <div>
          <span className="resources-badge">Programming Growth</span>

          <h2>
            NeuroLabs Coding Resources — Supporting the Journey of Every
            Programmer
          </h2>

          <p>
            With tutorials, practical exercises, and updated materials,
            NeuroLabs Coding Resources help learners build strong programming
            skills and succeed in technology.
          </p>
        </div>
      </section>
    </main>
  );
}
