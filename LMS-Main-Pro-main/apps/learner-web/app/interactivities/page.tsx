import "./interactivities.css";
import Image from "next/image";
import {
  FaBolt,
  FaBrain,
  FaChalkboardTeacher,
  FaCogs,
  FaCompass,
  FaFlask,
  FaGraduationCap,
  FaHandPointer,
  FaLightbulb,
  FaRocket,
  FaSlidersH,
  FaStar,
} from "react-icons/fa";

const modernLearnerPoints = [
  {
    icon: <FaHandPointer className="iconText" />,
    label: "Interactive",
    desc: "Activities that make learning memorable. Turning knowledge into confidence.",
  },
  {
    icon: <FaSlidersH className="iconText" />,
    label: "Adaptive",
    desc: "Personalized learning journeys tailored to individual progress.",
  },
  {
    icon: <FaStar className="iconText" />,
    label: "Engaging",
    desc: "Rich multimedia and interactive content that captures attention.",
  },
  {
    icon: <FaFlask className="iconText" />,
    label: "Practical",
    desc: "Real-world scenarios that build applicable skills. Skills that truly matter",
  },
];

const driveUnderstandingPoints = [
  "Simulations that mirror real-world environments",
  "Scenario-based exercises for applied problem solving",
  "Quizzes and checks for deeper comprehension",
  "Visual learning modules that simplify complex ideas",
];

const empowerPoints = [
  "Create courses that truly inspire and educate",
  "Deliver high-quality learning experiences at scale",
  "Leverage powerful content creation capabilities",
  "Equip teams with interactive learning tools",
];

export default function InteractivitiesPage() {
  return (
    <main className="interactivities-page page">
      <div className="interactivities-breadcrumb-nav">
        <ol className="interactivities-breadcrumb">
          <li className="interactivities-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="interactivities-breadcrumb-item active" aria-current="page">
            Interactivities
          </li>
        </ol>
      </div>

      {/* ── Hero ── */}
      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            <h1 className="heroTitle">Interactivities</h1>

            <h2 className="heroSubtitle">
              Transform Learning with NeuroLXP
            </h2>

            <p className="heroText">
              Welcome to NeuroLXP, a next-generation Learning
              Experience Platform designed to make learning engaging, interactive,
              and impactful. NeuroLXP goes beyond traditional Learning Management
              Systems by combining powerful learning tools with immersive
              interactivities that help learners truly understand, practice, and
              retain knowledge.
            </p>

            <p className="heroText">
              With NeuroLXP, every learning experience becomes an opportunity to{" "}
              think, interact, and master new skills.
            </p>

            <div className="floatingStats">
              <div className="statPill">
                <FaBolt className="iconText" />
                <span>Dynamic Interactivities</span>
              </div>
              <div className="statPill">
                <FaBrain className="iconText" />
                <span>Deep Retention</span>
              </div>
              <div className="statPill">
                <FaRocket className="iconText" />
                <span>Real-Time Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="engageSection">
        <div className="engageCard">
          <div className="cardHeader">
            <div className="iconWrap engageIcon">
              <FaLightbulb className="iconText" />
            </div>
            <h3>Learning That Engages the Mind</h3>
          </div>

          <p>
            At NeuroLXP, we believe learning should never feel passive. Our
            platform integrates dynamic interactivities that
            turn lessons into experiences. Instead of simply reading or watching,
            learners actively participate, explore concepts, and apply their
            knowledge in real time.
          </p>

          <p>
            Interactive learning elements such as simulations, scenario-based
            exercises, quizzes, and visual learning modules keep learners engaged
            while reinforcing critical concepts.
          </p>

          <div className="engageChips">
            <span className="chip">Simulations</span>
            <span className="chip">Scenario Exercises</span>
            <span className="chip">Quizzes</span>
            <span className="chip">Visual Modules</span>
          </div>
        </div>
      </section>

      <section className="cardsSection">
        {modernLearnerPoints.map((item, idx) => (
          <article className="contentCard" key={item.label} data-idx={idx}>
            <div className="cardHeader">
              <div className="iconWrap">{item.icon}</div>
              <h3>{item.label}</h3>
            </div>
            <p>{item.desc}</p>
          </article>
        ))}
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaCompass className="iconText" />
              </div>
              <h3>Interactivities That Drive Real Understanding</h3>
            </div>

            <p>
              Our interactive learning modules are carefully crafted to help
              learners move beyond memorisation. Through exploration, practice,
              and feedback, learners develop deeper understanding and stronger
              retention.
            </p>

            <div className="insetBox">
              <h4>Key interactive elements include:</h4>
              <ul className="featureList">
                {driveUnderstandingPoints.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="highlightTextCard altCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaChalkboardTeacher className="iconText" />
              </div>
              <h3>Empower Organizations and Educators</h3>
            </div>

            <p>
              NeuroLXP empowers organizations, educators, and training teams
              to deliver high-quality learning experiences at scale.
              Built for impact — wherever and however learning happens. Applied learning that makes a real difference..
            </p>

            <div className="insetBox">
              <h4>With NeuroLXP you can:</h4>
              <ul className="featureList">
                {empowerPoints.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaCard">
          <div className="ctaVisual">
            <div className="imagePlaceholderAlt">
              <Image
                src="/pexels-pavel-danilyuk-6340629.jpg"
                alt="Learner confidently engaged in a digital learning experience"
                width={800}
                height={560}
                className="ctaImg"
              />
            </div>
          </div>

          <div className="ctaContent">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaCogs className="iconText" />
              </div>
              <h3>NeuroLXP — Where Learning Becomes an Experience</h3>
            </div>

            <p>
              With structured learning modules, interactive activities, and
              digital research tools, NeuroLXP helps learners develop skills
              that empower them to navigate knowledge confidently in the digital
              age.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaGraduationCap className="iconText" />
                <span>Structured modules</span>
              </div>
              <div className="miniFeature">
                <FaFlask className="iconText" />
                <span>Interactive activities</span>
              </div>
              <div className="miniFeature">
                <FaBrain className="iconText" />
                <span>Smart retention</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
