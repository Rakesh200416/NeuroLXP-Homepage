import "./social-learning.css";
import {
  FaUsers,
  FaShieldAlt,
  FaComments,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
  FaStar,
  FaChalkboardTeacher,
  FaShareAlt,
} from "react-icons/fa";

const peerSharingPoints = [
  {
    items:
      "Learners participate in discussion forums and communities, share insights and resources, collaborate on ideas and problem-solving, and engage in peer feedback and meaningful knowledge exchange.",
  },
];

const collaborationFeatures = [
  {
    icon: <FaComments className="iconText" />,
    title: "Discussion Forums",
    desc: "Structured spaces where learners exchange ideas, ask questions, and deepen understanding through guided conversations.",
  },
  {
    icon: <FaChalkboardTeacher className="iconText" />,
    title: "Mentor & Expert Connect",
    desc: "Bridge learners with mentors and subject-matter experts for targeted guidance and real-world knowledge transfer.",
  },
  {
    icon: <FaShareAlt className="iconText" />,
    title: "Resource Sharing",
    desc: "Enable learners to contribute and access a growing library of shared insights, documents, and learning materials.",
  },
];

export default function SocialLearningPage() {
  return (
    <main className="social-learning-page page">
      <div className="social-learning-breadcrumb-nav">
        <ol className="social-learning-breadcrumb">
          <li className="social-learning-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="social-learning-breadcrumb-item active" aria-current="page">
            Social Learning
          </li>
        </ol>
      </div>

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            <h1 className="heroTitle">Social Learning</h1>

            <h2 className="heroSubtitle">
              Learn Together. Grow Faster.
            </h2>

            <p className="heroText">
              Learning becomes more powerful when it happens together. NeuroLXP
              enables social learning by creating a collaborative environment
              where learners can share knowledge, exchange ideas, and learn from
              one another in a safe and structured space.
            </p>

            <p className="heroText">
              By combining modern learning technology with community-driven
              engagement, NeuroLXP transforms individual learning into a
              collective learning experience.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <img
                src="/photo-1522071820081-009f0129c71c.jpeg"
                alt="A diverse team collaborating and learning together around a table"
                className="heroImage"
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaUsers className="iconText" />
                <span>Peer Collaboration</span>
              </div>
              <div className="statPill">
                <FaShieldAlt className="iconText" />
                <span>Safe Environment</span>
              </div>
              <div className="statPill">
                <FaGlobe className="iconText" />
                <span>Knowledge Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">
        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaHandshake className="iconText" />
            </div>
            <h3>Collaboration that Enhances Learning</h3>
          </div>

          <p>
            NeuroLXP encourages learners to actively participate in discussions,
            ask questions, and contribute insights. Through built-in collaboration
            features, learners can connect with peers, mentors, and experts,
            making learning more dynamic and meaningful.
          </p>

          <div className="insetBox">
            <h4>Moving beyond isolated learning:</h4>
            <p className="insetText">
              Instead of learning in isolation, learners become part of a
              knowledge-sharing community where experiences, perspectives, and
              ideas drive deeper understanding. Every interaction adds to a
              growing collective intelligence that benefits the entire group.
            </p>
          </div>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaShieldAlt className="iconText" />
            </div>
            <h3>Supportive Learning Environment</h3>
          </div>

          <p>
            NeuroLXP ensure that social learning takes place in a
            secure and respectful environment. With moderated discussions,
            controlled access, and structured collaboration spaces, organizations
            have open communication to maintain a professional learning.
          </p>

          <div className="insetBox">
            <h4>Confidence through structure:</h4>
            <p className="insetText">
              In this safe and supportive environment, learners confidently
              share ideas, ask questions, and engage in open conversations.
              Free from judgment and rich in mutual respect,
              every voice is valued and every contribution truly counts.
            </p>
          </div>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaUsers className="iconText" />
            </div>
            <h3>Encourage Knowledge Sharing</h3>
          </div>

          <p>
            With NeuroLXP, learners benefit from the collective intelligence of
            their peers. Social learning features allow users to collaborate, share,
            and grow together across every stage of their learning journey.
          </p>

          <div className="insetBox">
            <h4>Learners can:</h4>
            <p className="insetText">
              {peerSharingPoints[0].items}
            </p>
          </div>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaStar className="iconText" />
            </div>
            <h3>Building a Learning Community</h3>
          </div>

          <p>
            NeuroLXP empowers organisations to build thriving learning communities
            where social interaction fuels growth and knowledge flows freely.
            Together, learners inspire, support, and elevate each other's development.
          </p>

          <div className="insetBox">
            <h4>The outcome:</h4>
            <p className="insetText">
              A more engaging, inclusive, and effective learning experience. When
              learners feel part of a community, motivation rises, retention
              improves, and collective growth accelerates for every individual
              within it.
            </p>
          </div>
        </article>
      </section>

      <section className="featureStrip">
        {collaborationFeatures.map((feat, i) => (
          <div key={i} className="stripCard">
            <div className="stripIconWrap">{feat.icon}</div>
            <h4>{feat.title}</h4>
            <p>{feat.desc}</p>
          </div>
        ))}
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaLightbulb className="iconText" />
              </div>
              <h3>NeuroLXP — Connecting Learners, Building Skills Together</h3>
            </div>

            <p>
              NeuroLXP's social learning capabilities go beyond simple chat
              tools. They create a living, breathing knowledge ecosystem where
              every learner contributes to — and benefits from — the collective
              wisdom of the group.
            </p>

            <p>
              Sharing knowledge, building skills, growing together — NeuroLXP
              makes every learning journey a shared one.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaComments className="iconText" />
                <span>Discussion Forums</span>
              </div>
              <div className="miniFeature">
                <FaUsers className="iconText" />
                <span>Learning Communities</span>
              </div>
              <div className="miniFeature">
                <FaShareAlt className="iconText" />
                <span>Peer Knowledge Exchange</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1529390079861-591de354faf5.jpeg"
                alt="Learners engaged in peer knowledge sharing and collaborative discussion online"
                className="heroImage"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
