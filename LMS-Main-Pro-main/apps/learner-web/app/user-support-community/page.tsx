import "./user-support-community.css";
import {
  FaArrowRight,
  FaBell,
  FaBookOpen,
  FaChalkboardTeacher,
  FaComments,
  FaHandsHelping,
  FaHeadset,
  FaLightbulb,
  FaNetworkWired,
  FaQuestionCircle,
  FaRegComments,
  FaRocket,
  FaUserGraduate,
  FaUsers,
  FaUsersCog,
} from "react-icons/fa";

const supportFeatures = [
  "Helpdesk and technical support for platform assistance",
  "Guided onboarding and user tutorials",
  "Knowledge base and FAQs for quick problem resolution",
  "Instructor and administrator support channels",
  "In-platform notifications and guidance",
];

const communityFeatures = [
  {
    icon: <FaComments />,
    title: "Discussion forums",
    text: "Topic-based spaces for learning conversations.",
  },
  {
    icon: <FaUsers />,
    title: "Peer sharing",
    text: "Learners exchange knowledge and practical insights.",
  },
  {
    icon: <FaRegComments />,
    title: "Collaborative discussions",
    text: "Groups explore ideas, problems, and learning tasks.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Group spaces",
    text: "Dedicated areas for projects and learning activities.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Mentor interaction",
    text: "Instructors and mentors support deeper understanding.",
  },
];

const socialLearning = [
  "Exchange of ideas and perspectives",
  "Collaborative problem solving",
  "Continuous engagement with course material",
  "Stronger learning communities",
];

const ecosystemGroups = [
  {
    icon: <FaUserGraduate />,
    title: "For Learners",
    points: [
      "Access guidance and assistance when needed",
      "Participate in collaborative discussions",
      "Learn from peers and mentors",
    ],
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "For Educators",
    points: [
      "Provide timely feedback and support",
      "Facilitate discussions and knowledge exchange",
      "Build engaged learning communities",
    ],
  },
  {
    icon: <FaUsersCog />,
    title: "For Institutions",
    points: [
      "Improve learner satisfaction and engagement",
      "Strengthen platform-wide communication",
      "Foster a collaborative learning culture",
    ],
  },
];

export default function UserSupportCommunity() {
  return (
    <main className="community-page">
      <div className="community-breadcrumb-nav">
        <ol className="community-breadcrumb">
          <li className="community-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="community-breadcrumb-item active" aria-current="page">
            User Support &amp; Learning Community
          </li>
        </ol>
      </div>

      <section className="community-hero community-card">
        <div className="community-hero-content">
          <span className="community-eyebrow">User Support & Learning Community</span>
          <h1>Empowering Learners Through Support and Collaboration</h1>
          <p>
            A successful learning platform is not just about delivering content.
            It is about providing the support, guidance, and community
            interaction that learners need to succeed.
          </p>
          <p>
            NeuroLXP combines responsive support systems with collaborative
            learning communities so learners, educators, and administrators feel
            supported, connected, and motivated.
          </p>
        </div>

        <div className="community-support-orbit">
          <div className="community-center-node">
            <FaHandsHelping />
            <span>Connected Learning</span>
          </div>

          <div className="community-orbit-card community-orbit-one">
            <FaHeadset />
            <span>Support</span>
          </div>

          <div className="community-orbit-card community-orbit-two">
            <FaUsers />
            <span>Community</span>
          </div>

          <div className="community-orbit-card community-orbit-three">
            <FaComments />
            <span>Discussion</span>
          </div>
        </div>
      </section>

      <section className="community-intro">
        <span>Support + Collaboration</span>
        <h2>A Learning Environment Where Users Stay Connected</h2>
        <p>
          NeuroLXP brings help resources, communication tools, learner
          communities, and social learning features together into one connected
          digital learning experience.
        </p>
      </section>

      <section className="community-support-layout">
        <article className="community-card community-support-card">
          <div className="community-icon-box">
            <FaHeadset />
          </div>
          <h2>Dedicated User Support for Seamless Learning</h2>
          <p>
            NeuroLXP provides reliable LMS user support tools that help learners
            and instructors resolve issues quickly and continue learning without
            disruption.
          </p>

          <div className="community-support-list">
            {supportFeatures.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </article>

        <article className="community-help-panel">
          <div className="community-help-top">
            <span>Support Snapshot</span>
            <FaBell />
          </div>

          <div className="community-help-card">
            <FaQuestionCircle />
            <div>
              <h3>Quick Answers</h3>
              <p>FAQs and knowledge base resources help users resolve common questions.</p>
            </div>
          </div>

          <div className="community-metric-row">
            <div>
              <strong>24/7</strong>
              <span>Knowledge access</span>
            </div>
            <div>
              <strong>5+</strong>
              <span>Support channels</span>
            </div>
          </div>
        </article>
      </section>

      <section className="community-section-heading">
        <h2>Building a Collaborative Learning Community</h2>
        <p>
          NeuroLXP supports active learning communities where learners can
          interact, discuss ideas, and share knowledge with peers, mentors, and
          instructors.
        </p>
      </section>

      <section className="community-feature-grid">
        {communityFeatures.map((item) => (
          <article className="community-feature-card" key={item.title}>
            <div className="community-feature-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="community-social-section community-card">
        <div>
          <span className="community-eyebrow">Social Learning</span>
          <h2>Encourage Deeper Engagement Through Conversation</h2>
          <p>
            NeuroLXP encourages learners to ask questions, contribute insights,
            and explore concepts more deeply through integrated social learning
            features.
          </p>
        </div>

        <div className="community-social-list">
          {socialLearning.map((item) => (
            <div key={item}>
              <FaLightbulb />
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="community-realtime-layout">
        <article className="community-message-panel">
          <div className="community-message-bubble community-message-left">
            <FaUserGraduate />
            <p>I need help understanding this topic.</p>
          </div>
          <div className="community-message-bubble community-message-right">
            <FaChalkboardTeacher />
            <p>Here is a guided explanation and resource link.</p>
          </div>
          <div className="community-message-bubble community-message-left">
            <FaUsers />
            <p>Peers can also share examples and project notes.</p>
          </div>
        </article>

        <article className="community-card community-realtime-card">
          <div className="community-icon-box community-message-icon">
            <FaRegComments />
          </div>
          <h2>Real-Time Communication and Interaction</h2>
          <p>
            Integrated messaging and discussion tools keep questions moving,
            responses timely, and learning interactive across learners,
            instructors, and administrators.
          </p>
        </article>
      </section>

      <section className="community-ecosystem-section">
        <div className="community-section-heading">
          <h2>Supporting Institutions, Educators, and Learners</h2>
          <p>
            NeuroLXP’s user support and community features benefit the entire
            learning ecosystem.
          </p>
        </div>

        <div className="community-ecosystem-grid">
          {ecosystemGroups.map((group) => (
            <article className="community-ecosystem-card" key={group.title}>
              <div className="community-ecosystem-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <ul>
                {group.points.map((point) => (
                  <li key={point}>
                    <FaArrowRight />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="community-final community-card">
        <div className="community-final-icon">
          <FaRocket />
        </div>
        <h2>NeuroLXP — Building a Connected Learning Community</h2>
        <p>
          With integrated user support systems, collaborative learning
          communities, and social learning features, NeuroLXP ensures that every
          learner has the support and connection needed to succeed.
        </p>
      </section>
    </main>
  );
}
