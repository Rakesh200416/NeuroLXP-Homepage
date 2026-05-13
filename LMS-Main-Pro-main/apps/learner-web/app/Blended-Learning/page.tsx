import {
  FaChalkboardTeacher,
  FaLaptop,
  FaClock,
  FaUserClock,
  FaComments,
  FaPlayCircle,
  FaChartLine,
  FaPuzzlePiece,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import "./BlendedLearning.css";

export default function Page() {
  return (
    <main className="blended-page">
      <div className="blended-breadcrumb-nav">
        <ol className="blended-breadcrumb">
          <li className="blended-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="blended-breadcrumb-item active" aria-current="page">
            Blended Learning
          </li>
        </ol>
      </div>

      <section className="blended-hero">
        <div className="blended-hero-content">
          <span className="blended-badge">NeuroLXP Blended Learning</span>

          <h1>Blended Learning: Solving Modern Education Challenges</h1>

          <h2>Bridging the Gap Between Classroom and Digital Learning</h2>

          <p>
            Educational institutions today face a common challenge—how to combine
            the strengths of traditional classroom teaching with the flexibility
            of digital learning. NeuroLXP enables effective Blended Learning,
            allowing institutions to seamlessly integrate in-person instruction
            with online learning experiences.
          </p>

          <p>
            By combining the best of face-to-face teaching and digital learning
            platforms, NeuroLXP helps educators create more flexible, engaging,
            and outcome-driven learning environments.
          </p>
        </div>

        <div className="blended-visual">
          <div className="visual-node classroom">
            <FaChalkboardTeacher />
            <span>Classroom</span>
          </div>

          <div className="visual-bridge">
            <span></span>
            <strong>+</strong>
            <span></span>
          </div>

          <div className="visual-node digital">
            <FaLaptop />
            <span>Digital Learning</span>
          </div>
        </div>
      </section>

      <section className="blended-intro">
        <h2>Modern learning needs both structure and flexibility</h2>
        <p>
          NeuroLXP helps institutions combine classroom teaching, digital
          content, learner analytics, and continuous access into one balanced
          learning ecosystem.
        </p>
      </section>

      <section className="challenge-list">
        <article className="challenge-item">
          <div className="challenge-icon">
            <FaClock />
          </div>

          <div>
            <h2>The Challenge: Limited Classroom Time</h2>
            <p>
              Traditional classrooms often struggle with time constraints.
              Instructors may not always have enough time to cover concepts in
              depth, provide practice opportunities, or address individual
              learning needs.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              With blended learning, educators can deliver foundational content
              online through the LMS while using classroom sessions for deeper
              discussions, practical exercises, and collaborative learning. This
              approach ensures that valuable classroom time is used more
              effectively.
            </p>
          </div>
        </article>

        <article className="challenge-item">
          <div className="challenge-icon">
            <FaUserClock />
          </div>

          <div>
            <h2>The Challenge: Diverse Learning Speeds</h2>
            <p>
              In any classroom, learners progress at different speeds. Some
              learners grasp concepts quickly, while others need additional time
              and support.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP enables self-paced digital learning modules that allow
              learners to review lessons, revisit materials, and practice
              concepts at their own pace. This flexibility ensures that every
              learner can progress comfortably while still benefiting from
              instructor-led sessions.
            </p>
          </div>
        </article>

        <article className="challenge-item">
          <div className="challenge-icon">
            <FaComments />
          </div>

          <div>
            <h2>The Challenge: Maintaining Learner Engagement</h2>
            <p>
              Traditional lectures can sometimes lead to passive learning,
              reducing engagement and retention.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              Blended learning with NeuroLXP introduces interactive digital
              elements such as quizzes, discussions, gamified activities, and
              multimedia content. These elements keep learners actively involved
              both inside and outside the classroom.
            </p>
          </div>
        </article>

        <article className="challenge-item">
          <div className="challenge-icon">
            <FaPlayCircle />
          </div>

          <div>
            <h2>The Challenge: Continuous Learning Beyond the Classroom</h2>
            <p>
              Learning should not stop once the classroom session ends. However,
              traditional systems often lack structured ways to extend learning
              outside class hours.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP allows learners to access course materials, recorded
              sessions, interactive modules, and assessments anytime. This
              enables continuous learning beyond the classroom while reinforcing
              concepts taught during in-person sessions.
            </p>
          </div>
        </article>

        <article className="challenge-item">
          <div className="challenge-icon">
            <FaChartLine />
          </div>

          <div>
            <h2>The Challenge: Tracking Learning Progress</h2>
            <p>
              In traditional teaching environments, it can be difficult for
              instructors to track each learner’s engagement and progress.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              Through built-in analytics and reporting tools, NeuroLXP provides
              educators with real-time insights into learner activity, progress,
              and performance. This data helps instructors identify learning gaps
              and provide targeted support.
            </p>
          </div>
        </article>
      </section>

      <section className="benefits-section">
        <div className="benefits-heading">
          <span className="blended-badge">Benefits</span>
          <h2>Benefits of Blended Learning with NeuroLXP</h2>
          <p>Institutions adopting blended learning through NeuroLXP can:</p>
        </div>

        <div className="benefits-grid">
          <div>
            <FaChalkboardTeacher />
            <span>Combine classroom teaching with digital learning resources</span>
          </div>

          <div>
            <FaUsers />
            <span>Improve learner engagement and participation</span>
          </div>

          <div>
            <FaUserClock />
            <span>Support flexible and self-paced learning</span>
          </div>

          <div>
            <FaPuzzlePiece />
            <span>Enhance knowledge retention through interactive activities</span>
          </div>

          <div>
            <MdOutlineAnalytics />
            <span>Monitor learner progress through data-driven insights</span>
          </div>
        </div>

        <p className="benefits-note">
          This approach creates a balanced learning ecosystem where technology
          enhances—not replaces—the role of educators.
        </p>
      </section>

      <section className="blended-final">
        <div className="final-visual">
          <img
            src="/pexels-katerina-holmes-5905703.jpg"
            alt="Learners using a digital learning platform"
            className="placeholder-image"
          />
        </div>

        <div>
          <span className="blended-badge">Smarter Blended Learning</span>

          <h2>NeuroLXP — Enabling Smarter Blended Learning</h2>

          <p>
            By addressing key challenges in modern education, NeuroLXP empowers
            institutions to implement effective blended learning strategies that
            improve teaching quality, learner engagement, and educational
            outcomes.
          </p>
        </div>
      </section>
    </main>
  );
}
