import Image from "next/image";
import {
  FaCode,
  FaPuzzlePiece,
  FaBrain,
  FaTrophy,
  FaStopwatch,
  FaChartLine,
  FaBuilding,
} from "react-icons/fa";
import { MdQuiz, MdOutlineSpeed, MdWorkOutline } from "react-icons/md";
import "./CodingChallenges.css";

export default function Page() {
  return (
    <main className="challenge-page">
      <div className="challenge-breadcrumb-nav">
        <ol className="challenge-breadcrumb">
          <li className="challenge-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="challenge-breadcrumb-item active" aria-current="page">
            Coding Challenges
          </li>
        </ol>
      </div>

      <section className="challenge-hero">
        <div className="challenge-hero-content">
          <span className="challenge-badge">NeuroLabs Coding Challenges</span>

          <h1>Coding Challenges</h1>

          <h2>Test, Improve, and Showcase Your Programming Skills</h2>

          <p>
            NeuroLabs Coding Challenges provide learners with exciting
            opportunities to test their programming abilities, solve real-world
            problems, and sharpen their coding skills. These challenges
            encourage learners to apply their knowledge, think logically, and
            develop efficient solutions through hands-on problem solving.
          </p>

          <p>
            Designed for students, developers, and aspiring programmers, Coding
            Challenges create an engaging environment where learners can practice
            coding, improve problem-solving skills, and gain confidence in
            programming.
          </p>
        </div>

        <div className="challenge-code-card">
          <div className="code-card-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-card-body">
            <p>function solveChallenge(input) &#123;</p>
            <p>&nbsp;&nbsp;const solution = thinkLogically(input);</p>
            <p>&nbsp;&nbsp;return optimize(solution);</p>
            <p>&#125;</p>
            <strong>// Programming skills strengthened</strong>
          </div>
        </div>
      </section>

      <section className="challenge-feature-strip">
        <div>
          <FaCode />
          <strong>Practice Coding</strong>
        </div>

        <div>
          <FaBrain />
          <strong>Think Logically</strong>
        </div>

        <div>
          <FaTrophy />
          <strong>Showcase Skills</strong>
        </div>
      </section>

      <section className="challenge-text-section">
        <h2>Real-World Problem Solving</h2>
        <p>
          Coding challenges are built around practical problems that simulate
          real development scenarios. Instead of memorizing syntax or theory,
          learners actively apply programming concepts to create working
          solutions.
        </p>
      </section>

      <section className="challenge-orbit-grid">
        <article>
          <div className="orbit-icon">
            <FaPuzzlePiece />
          </div>
          <h3>Solve algorithm-based coding problems</h3>
        </article>

        <article>
          <div className="orbit-icon">
            <MdOutlineSpeed />
          </div>
          <h3>Develop optimized solutions for complex tasks</h3>
        </article>

        <article>
          <div className="orbit-icon">
            <FaBrain />
          </div>
          <h3>Improve logical thinking and analytical skills</h3>
        </article>

        <article>
          <div className="orbit-icon">
            <FaCode />
          </div>
          <h3>Strengthen their understanding of programming concepts</h3>
        </article>
      </section>

      <section className="challenge-text-section">
        <p>This approach helps learners gain deeper technical competence.</p>
      </section>

      <section className="challenge-split-panel">
        <div>
          <span className="challenge-badge">Interactive Learning</span>
          <h2>Interactive and Competitive Learning</h2>
          <p>
            NeuroLabs Coding Challenges can be structured as interactive
            exercises or competitive coding events, motivating learners to
            continuously improve their skills.
          </p>
        </div>

        <div className="challenge-list">
          <span>
            <FaStopwatch /> Time-based coding problems
          </span>
          <span>
            <MdQuiz /> Algorithm and logic puzzles
          </span>
          <span>
            <FaTrophy /> Programming contests and competitions
          </span>
          <span>
            <FaChartLine /> Skill-based coding assessments
          </span>
        </div>
      </section>

      <section className="challenge-text-section">
        <p>
          These activities encourage learners to think creatively and perform
          under realistic development conditions.
        </p>
      </section>

      <section className="challenge-card-row">
        <article className="challenge-card">
          <FaCode className="card-icon" />

          <div>
            <h2>Improve Coding Efficiency and Accuracy</h2>

            <p>
              Regular participation in coding challenges helps learners develop
              better coding practices and improve efficiency.
            </p>

            <h3>Learners can practice:</h3>
            <ul>
              <li>Writing clean and efficient code</li>
              <li>Debugging and troubleshooting programs</li>
              <li>Optimizing algorithms and logic structures</li>
              <li>Building reliable and scalable solutions</li>
            </ul>

            <p>
              These experiences help prepare learners for real-world software
              development tasks.
            </p>
          </div>
        </article>

        <article className="challenge-card">
          <MdWorkOutline className="card-icon" />

          <div>
            <h2>Preparation for Technical Interviews</h2>

            <p>
              Coding challenges also serve as valuable preparation for technical
              interviews and coding assessments used by many technology
              companies. By solving algorithmic problems and practicing coding
              exercises, learners become more confident in tackling programming
              tests.
            </p>
          </div>
        </article>

        <article className="challenge-card">
          <FaBuilding className="card-icon" />

          <div>
            <h2>Ideal for Students, Developers, and Training Programs</h2>

            <p>NeuroLabs Coding Challenges are suitable for:</p>

            <ul>
              <li>Universities and engineering institutions</li>
              <li>Coding bootcamps and training academies</li>
              <li>Corporate technology training programs</li>
              <li>Individual learners preparing for tech careers</li>
            </ul>

            <p>
              Educators and organizations can integrate coding challenges into
              their programs to encourage continuous learning and skill
              improvement.
            </p>
          </div>
        </article>
      </section>

      <section className="challenge-final">
        <div className="challenge-image-placeholder">
          <Image
            src="/pexels-mizunokozuki-12903294 (1).jpg"
            alt="Challenge learning illustration"
            width={700}
            height={520}
            className="challenge-image"
          />
        </div>

        <div>
          <span className="challenge-badge">Strengthen Programming Skills</span>

          <h2>NeuroLabs Coding Challenges — Strengthen Your Programming Skills</h2>

          <p>
            With engaging problem-solving exercises, interactive coding
            environments, and competitive learning opportunities, NeuroLabs
            Coding Challenges help learners push their limits and grow into
            confident programmers.
          </p>
        </div>
      </section>
    </main>
  );
}
