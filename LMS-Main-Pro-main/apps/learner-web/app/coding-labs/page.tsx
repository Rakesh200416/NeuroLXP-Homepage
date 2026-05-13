import {
  FaCode,
  FaTerminal,
  FaBug,
  FaCodeBranch,
  FaGraduationCap,
} from "react-icons/fa";
import "./CodingLabs.css";

export default function Page() {
  return (
    <section className="coding-page">
      <div className="coding-breadcrumb-nav">
        <ol className="coding-breadcrumb">
          <li className="coding-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="coding-breadcrumb-item active" aria-current="page">
            Coding Labs
          </li>
        </ol>
      </div>

      <div className="coding-hero">
        <h1>NeuroLabs Coding Labs</h1>
        <h2>Practice, Build, and Master Coding Skills</h2>
      </div>

      <p>
        NeuroLabs Coding Labs provide an interactive environment where learners can practice
        programming, experiment with code, and build real-world solutions. Designed to support
        modern technical education, Coding Labs help learners move beyond theory and develop
        practical coding skills through hands-on experience.
      </p>

      <p>
        With an integrated learning and coding environment, NeuroLabs enables students, developers,
        and professionals to learn by doing, strengthening their understanding of programming
        concepts and problem-solving techniques.
      </p>

      <div className="coding-image-box">
        <img src="/pexels-dothanhyb-5539290.jpg" alt="Interactive coding environment" />
      </div>

      <h3><FaTerminal /> Hands-On Programming Experience</h3>

      <p>
        Coding Labs allow learners to write, test, and debug code directly within the platform.
        Instead of only studying concepts, learners can immediately apply what they learn through
        practical exercises and coding challenges.
      </p>

      <p>Learners can:</p>

      <ul>
        <li>Practice programming concepts in real time</li>
        <li>Solve coding problems and challenges</li>
        <li>Experiment with different coding approaches</li>
        <li>Build small applications and projects</li>
      </ul>

      <p>This hands-on approach improves coding confidence and technical proficiency.</p>

      <h3><FaCodeBranch /> Interactive Coding Challenges</h3>

      <p>
        NeuroLabs offers structured coding exercises that help learners gradually develop their
        programming abilities. Through guided challenges and problem-solving tasks, learners can
        strengthen their understanding of algorithms, logic, and software development concepts.
      </p>

      <p>Coding challenges help learners:</p>

      <ul>
        <li>Apply theoretical knowledge through practice</li>
        <li>Improve problem-solving skills</li>
        <li>Learn efficient coding techniques</li>
        <li>Prepare for technical interviews and coding assessments</li>
      </ul>

      <div className="coding-image-box">
        <img src="/pexels-mikhail-nilov-7988116.jpg" alt="Interactive coding environment" />
      </div>

      <h3><FaBug /> Real-World Skill Development</h3>

      <p>
        Coding Labs simulate real development environments, enabling learners to work on practical
        problems similar to those encountered in professional software development.
      </p>

      <p>Learners gain experience in:</p>

      <ul>
        <li>Writing clean and efficient code</li>
        <li>Debugging and troubleshooting programs</li>
        <li>Understanding programming logic and structures</li>
        <li>Developing solutions to real-world problems</li>
      </ul>

      <p>
        This prepares learners for careers in software development, technology, and engineering
        fields.
      </p>

      <h3><FaGraduationCap /> Ideal for Educational Institutions and Training Programs</h3>

      <p>
        NeuroLabs Coding Labs support a wide range of learning environments, including:
      </p>

      <ul>
        <li>Universities and engineering colleges</li>
        <li>Coding bootcamps and technical training institutes</li>
        <li>Corporate software development training programs</li>
        <li>Online programming and technology courses</li>
      </ul>

      <p>
        Educators can integrate coding labs directly into courses to provide students with practical
        programming experience alongside theoretical learning.
      </p>

      <h3><FaCode /> NeuroLabs Coding Labs — Where Learning Meets Real Coding</h3>

      <p>
        With hands-on programming environments, interactive coding challenges, and real-world
        practice opportunities, NeuroLabs Coding Labs empower learners to build strong coding skills
        and prepare for successful careers in technology.
      </p>
    </section>
  );
}
