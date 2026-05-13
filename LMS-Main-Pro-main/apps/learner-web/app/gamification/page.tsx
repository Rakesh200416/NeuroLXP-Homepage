import "./gamification.css";
import Image from "next/image";
import {
  FaGamepad,
  FaMousePointer,
  FaPuzzlePiece,
  FaBrain,
  FaTrophy,
  FaLightbulb,
  FaRandom,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

const gameActivities = [
  {
    title: "Find the Partner",
    desc: "Learners organize concepts, categorize information, and place elements in the correct sequence.",
  },
  {
    title: "Matching Exercises",
    desc: "Reinforce concept relationships by matching terms, definitions, images, or ideas.",
  },
  {
    title: "Curious Clicks",
    desc: "Interactive hotspots that reveal insights, explanations, or hidden knowledge when explored.",
  },
  {
    title: "Puzzles",
    desc: "Problem-solving activities that challenge learners to apply their understanding.",
  },
  {
    title: "Connect the Dots",
    desc: "Step-by-step concept linking that helps learners understand logical relationships between ideas.",
  },
  {
    title: "Quiz Challenges",
    desc: "Quick assessments that reinforce knowledge and provide instant feedback.",
  },
  {
    title: "Role-Play Scenarios",
    desc: "Real-world decision-making activities that test learners' understanding in practical contexts.",
  },
  {
    title: "Memory Games",
    desc: "Activities that strengthen recall and reinforce key concepts.",
  },
];

const benefitItems = [
  {
    icon: <FaBrain />,
    color: "purple",
    dot: "#7c3aed",
    label: "Active Participation",
    desc: "Learners engage directly with the material, not just read it.",
  },
  {
    icon: <FaLightbulb />,
    color: "teal",
    dot: "#0f766e",
    label: "Critical Thinking",
    desc: "Challenges learners to evaluate and apply concepts deeply.",
  },
  {
    icon: <FaRandom />,
    color: "amber",
    dot: "#d97706",
    label: "Exploration",
    desc: "Encourages curiosity-driven discovery through interactive content.",
  },
];

const miniFeatureItems = [
  {
    icon: <FaChartLine />,
    color: "teal",
    dot: "#0f766e",
    label: "Better Retention",
    desc: "Active engagement helps knowledge stick longer.",
  },
  {
    icon: <FaTrophy />,
    color: "amber",
    dot: "#d97706",
    label: "Focused Practice",
    desc: "Targeted activities reinforce specific concepts effectively.",
  },
  {
    icon: <FaRocket />,
    color: "blue",
    dot: "#2563eb",
    label: "Enjoyable Learning",
    desc: "Games and interactivity make the experience genuinely fun.",
  },
];

export default function GamificationPage() {
  return (
    <main className="gamification-page page">
      <div className="gamification-breadcrumb-nav">
        <ol className="gamification-breadcrumb">
          <li className="gamification-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="gamification-breadcrumb-item active" aria-current="page">
            Gamification
          </li>
        </ol>
      </div>

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            <h1 className="heroTitle">Gamified Learning Experiences</h1>

            <h2 className="heroSubtitle">
              Interactive Learning That Keeps Learners Engaged
            </h2>

            <p className="heroText">
              NeuroLXP integrates gamification and interactive learning
              activities to transform traditional lessons into engaging
              experiences. Instead of passively consuming content, learners
              actively participate through clickable elements and web-based
              learning games that reinforce concepts in a fun and memorable way.
            </p>

            <p className="heroText">
              These interactive activities make learning more immersive while
              helping learners better understand, practice, and retain knowledge.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="imagePlaceholder">
              <Image
                src="/photo-1522202176988-66273c2fd55f.webp"
                alt="Students engaging with interactive gamified learning on digital devices"
                width={600}
                height={340}
                className="heroImg"
              />
            </div>

            <div className="floatingStats">
              <div className="statPill">
                <FaGamepad className="iconText" />
                <span>Gamified Activities</span>
              </div>
              <div className="statPill">
                <FaMousePointer className="iconText" />
                <span>Interactive Clicks</span>
              </div>
              <div className="statPill">
                <FaPuzzlePiece className="iconText" />
                <span>Educational Games</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">
        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaMousePointer className="iconText" />
            </div>
            <h3>Interactive Clickable Learning</h3>
          </div>

          <p>
            With curious clicks and interactive hotspots, learners explore content at their own pace. Each click reveals explanations, uncovers concepts, and drives active engagement. It's a dynamic alternative to simply reading static text.
          </p>

          <div className="insetBox">
            <h4>This approach encourages:</h4>
            <ul className="featureList">
              <li>
                <span className="listIcon">•</span>
                <span>Curiosity-driven exploration of content</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Active involvement throughout the learning process</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Step-by-step discovery of complex concepts</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Dynamic engagement beyond static text reading</span>
              </li>
            </ul>
          </div>

          <p>
            This encourages curiosity and keeps learners actively involved in
            the learning process.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaGamepad className="iconText" />
            </div>
            <h3>Web-Based Learning Games</h3>
          </div>

          <p>
            The platform includes a variety of educational mini-games
            and interactive activities designed to strengthen understanding.
            Each activity is crafted to reinforce key concepts effectively
            while making the overall learning experience genuinely enjoyable.
          </p>

          <div className="insetBox">
            <h4>Benefit highlights:</h4>
            <ul className="featureList">
              <li>
                <span className="listIcon">•</span>
                <span>Reinforce concepts through play</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Immediate feedback on performance</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Real-world scenario decision-making</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Memory strengthening activities</span>
              </li>
            </ul>
          </div>

          <p>
            These games are designed to make learning both enjoyable and highly
            effective across all learner types.
          </p>
        </article>
      </section>

      <section className="activitiesSection">
        <div className="activitiesGrid">
          {gameActivities.map((activity, i) => (
            <div className="activityCard" key={activity.title} data-index={i}>
              <div className="activityNumber">{String(i + 1).padStart(2, "0")}</div>
              <h4 className="activityTitle">{activity.title}</h4>
              <p className="activityDesc">{activity.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaBrain className="iconText" />
              </div>
              <h3>NeuroLXP — Where Learning Meets Interaction and Discovery</h3>
            </div>

            <p>
              Research shows that learners retain information better when they
              actively engage with the material. NeuroLXP's gamified and
              interactive features help learners stay focused, practice concepts
              repeatedly, and reinforce knowledge in a natural and enjoyable way.
            </p>

            <p>
              By integrating interactive clickables and web-based educational
              games directly into learning modules, NeuroLXP creates a learning
              environment where education becomes dynamic, enjoyable, and highly
              effective.
            </p>

            <div className="benefitsSection">
              <div className="benefitsOutcomes">
                <p className="outcomesLabel"><strong>Learning outcomes</strong></p>
                <div className="iconList">
                  {benefitItems.map((item) => (
                    <div className="iconListItem" key={item.label}>
                      <div className={`iconListIcon ${item.color}`}>{item.icon}</div>
                      <div className="iconListText">
                        <p className="iconListTitle">{item.label}</p>
                        <p className="iconListDesc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="benefitsResults">
                <p className="outcomesLabel"><strong>Results</strong></p>
                <div className="iconList">
                  {miniFeatureItems.map((item) => (
                    <div className="iconListItem" key={item.label}>
                      <div className={`iconListIcon ${item.color}`}>{item.icon}</div>
                      <div className="iconListText">
                        <p className="iconListTitle">{item.label}</p>
                        <p className="iconListDesc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
