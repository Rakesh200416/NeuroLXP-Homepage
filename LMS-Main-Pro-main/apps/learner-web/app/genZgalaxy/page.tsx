import Image from "next/image";
import {
  FaArrowRight,
  FaBookOpen,
  FaBullseye,
  FaCheck,
  FaCompass,
  FaGlobe,
  FaLayerGroup,
  FaMicrochip,
  FaRegStar,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import "./genZgalaxy.css";

export default function GenZGalaxyPage() {
  return (

    <main className="genzgalaxy-page genz-page">

      <div className="neu-breadcrumb-nav">
        <ol className="neu-breadcrumb">
          <li className="neu-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="neu-breadcrumb-item active" aria-current="page">
            GenZgalaxy
          </li>
        </ol>
      </div>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content neu-card">
          <div className="hero-text">
            <span className="eyebrow neu-inset">
              <FaMicrochip /> NeuroLXP Product
            </span>

            <h1>GenZgalaxy</h1>
            <h2>A learning space that actually feels modern</h2>

            <p>
              <strong>GenZgalaxy</strong> is built for people who grew up online.
              Fast apps, constant updates, interactive content — that’s the
              baseline now. Traditional learning doesn’t always match that pace.
            </p>

            <p>
              So instead of forcing old systems to work, this platform takes a
              different route. It makes learning feel more like something you
              explore, not something you sit through.
            </p>

            <div className="hero-actions">
              <button className="neu-btn">
                Explore Platform <FaArrowRight />
              </button>
              <button className="neu-btn neu-btn-secondary">
                Learn More
              </button>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-card neu-card-inner">
              <Image
                src="/GenZgalaxy-learning-illustration.jpeg"
                alt="Learning illustration"
                width={700}
                height={520}
                className="hero-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-grid">
        <article className="info-card neu-card">
          <h3>
            <FaBullseye /> Built for how people learn today
          </h3>

          <p>
            Most learners today don’t struggle with technology — they expect it
            to just work. Clean interfaces, quick responses, and something that
            keeps their attention.
          </p>

          <p>That’s why the platform focuses on things like:</p>

          <ul>
            <li><FaCheck /> Gamified elements</li>
            <li><FaCheck /> Interactive content</li>
            <li><FaCheck /> Short, focused lessons</li>
            <li><FaCheck /> Group-based learning</li>
            <li><FaCheck /> Mobile-friendly design</li>
          </ul>

          <p>
            Put together, it feels less rigid — and a lot more usable day to day.
          </p>
        </article>

        <article className="info-card neu-card">
          <h3>
            <FaRocket /> Not just content — actual interaction
          </h3>

          <p>
            Passive reading doesn’t stick for long. So the idea here is simple:
            keep people involved while they’re learning.
          </p>

          <p>You’ll see things like:</p>

          <ul>
            <li><FaCheck /> Challenges and small rewards</li>
            <li><FaCheck /> Quizzes that respond instantly</li>
            <li><FaCheck /> Scenario-based tasks</li>
            <li><FaCheck /> Peer discussions</li>
          </ul>

          <p>
            It’s not about making things flashy — just more engaging and easier
            to retain.
          </p>
        </article>
      </section>

      {/* FEATURES */}
      <section className="feature-section">
        <div className="section-heading">
          <span className="eyebrow neu-inset">
            <FaCompass /> Adaptive Experience
          </span>
          <h2>Learning that adjusts as you go</h2>
        </div>

        <div className="feature-layout">
          <div className="feature-main neu-card">
            <p>
              People don’t all learn the same way. Some move fast, some need more
              time, some switch interests midway. The platform adapts to that.
            </p>

            <p>
              Based on usage, it can suggest:
            </p>

            <div className="chip-grid">
              <span className="neu-chip">Skill paths</span>
              <span className="neu-chip">Useful resources</span>
              <span className="neu-chip">Practice tasks</span>
              <span className="neu-chip">Career-focused modules</span>
            </div>

            <p>
              Nothing feels forced — it just gradually aligns with what you’re
              trying to do.
            </p>
          </div>

          <div className="feature-side">
            <div className="mini-card neu-card">
              <img
                src="/GenZgalaxy-Learning.jpeg"
                alt="Learning"
                className="feature-placeholder"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section neu-card">
        <div className="section-heading">
          <span className="eyebrow neu-inset">
            <FaBookOpen /> Practical Focus
          </span>
          <h2>Skills that actually matter</h2>
        </div>

        <p className="section-copy">
          The focus is less on theory for the sake of it, and more on what’s
          useful outside.
        </p>

        <div className="skills-grid">
          <div className="skill-box neu-card-inner">
            <FaMicrochip />
            <h4>Tech awareness</h4>
          </div>

          <div className="skill-box neu-card-inner">
            <FaLayerGroup />
            <h4>Problem solving</h4>
          </div>

          <div className="skill-box neu-card-inner">
            <FaRegStar />
            <h4>Thinking critically</h4>
          </div>

          <div className="skill-box neu-card-inner">
            <FaUsers />
            <h4>Working with others</h4>
          </div>

          <div className="skill-box neu-card-inner">
            <FaGlobe />
            <h4>Career skills</h4>
          </div>
        </div>

        <p className="section-copy">
          The idea is simple — make learning useful, not just complete.
        </p>
      </section>

      {/* COMMUNITY */}
      <section className="community-section">
        <div className="community-card neu-card">
          <div className="community-left">
            <span className="eyebrow neu-inset">
              <FaUsers /> Community
            </span>

            <h2>Learning doesn’t happen alone</h2>

            <p>
              A lot of understanding comes from discussion. Asking questions,
              seeing different perspectives — that’s part of the process.
            </p>

            <p>
              So the platform keeps that open through shared spaces and group
              interaction.
            </p>
          </div>

          <div className="community-points">
            <div className="point neu-card-inner"><FaCheck /> Share thoughts</div>
            <div className="point neu-card-inner"><FaCheck /> Learn from others</div>
            <div className="point neu-card-inner"><FaCheck /> Build together</div>
            <div className="point neu-card-inner"><FaCheck /> Stay connected</div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing-section">
        <div className="closing-card neu-card">
          <span className="eyebrow neu-inset">
            <FaGlobe /> GenZgalaxy
          </span>

          <h2>A simpler way to approach learning</h2>

          <p>
            It’s not trying to reinvent everything. Just making learning feel
            more natural, more flexible, and a bit easier to stay with.
          </p>

          <p className="closing-line">
            <strong>
              Built for how people actually learn today.
            </strong>
          </p>
        </div>
      </section>
    </main>
  );
}
