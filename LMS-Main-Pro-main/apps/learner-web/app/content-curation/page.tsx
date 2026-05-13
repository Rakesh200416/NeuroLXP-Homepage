import "./content-curation.css";
import {
  FaBrain,
  FaFileAlt,
  FaClipboardList,
  FaChartBar,
  FaComments,
  FaLightbulb,
  FaUniversity,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaRocket,
  FaMagic,
  FaBolt,
} from "react-icons/fa";

const examContentPoints = [
  "Concise exam-focused summaries from detailed notes",
  "Practice questions and potential exam questions based on historical assessment patterns",
  "Structured revision materials aligned with learning objectives",
  "Concept-based assessments that reinforce understanding",
];

const institutionPoints = [
  "Maximize the value of existing learning materials",
  "Deliver smarter and more effective learning experiences",
  "Support scalable, AI-powered education",
];

const educatorPoints = [
  "Reduce time spent preparing learning resources",
  "Automatically convert teaching materials into structured learning",
  "Focus more on mentoring and guiding",
];

const learnerPoints = [
  "Access simplified, exam-ready learning materials",
  "Practice with relevant assessment questions",
  "Engage in meaningful discussions and knowledge exploration",
];

export default function AIContentCurationPage() {
  return (
    <main className="content-curation-page page">
      <div className="content-curation-breadcrumb-nav">
        <ol className="content-curation-breadcrumb">
          <li className="content-curation-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="content-curation-breadcrumb-item active" aria-current="page">
            AI-Powered Content Curation
          </li>
        </ol>
      </div>

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            <h1 className="heroTitle">AI-Powered Content Curation</h1>

            <h2 className="heroSubtitle">
              Transform Existing Study Material into Intelligent Learning
              Experiences
            </h2>

            <p className="heroText">
              Traditional learning platforms often store large volumes of study
              materials, but they rarely transform that content into meaningful
              learning experiences. NeuroLXP's AI-powered content curation
              changes this by intelligently analyzing existing study materials
              and converting them into structured, learner-focused resources
              tailored to specific learning needs.
            </p>

            <p className="heroText">
              By leveraging advanced AI capabilities, NeuroLXP helps
              institutions, educators, and learners unlock the full potential of
              their existing content and turn it into powerful learning tools.
            </p>
          </div>

          <div className="heroVisualCard">
            <div className="floatingStats">
              <div className="statPill">
                <FaBrain className="iconText" />
                <span>AI Content Analysis</span>
              </div>
              <div className="statPill">
                <FaMagic className="iconText" />
                <span>Smart Summaries</span>
              </div>
              <div className="statPill">
                <FaBolt className="iconText" />
                <span>Intelligent Questions</span>
              </div>
            </div>

            <div className="imagePlaceholder">
              <img
                src="/pexels-pnw-prod-9219061.jpg"
                alt="AI-powered learning and content analysis"
                className="heroImage"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">
        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaFileAlt className="iconText" />
            </div>
            <h3>From Detailed Content to Precise Learning Resources</h3>
          </div>

          <p>
            Learners often struggle with lengthy notes and extensive study
            materials. NeuroLXP's AI engine can automatically transform complex
            content into clear, concise summaries and structured learning
            insights, helping learners focus on the most important concepts.
          </p>

          <div className="insetBox">
            <h4>The AI engine delivers:</h4>
            <ul className="featureList">
              <li>
                <span className="listIcon">•</span>
                <span>Automatic summarisation of lengthy study materials</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Simplified, easy-to-understand versions for faster comprehension</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Structured learning insights from complex content</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Revision-ready resources aligned to key concepts</span>
              </li>
            </ul>
          </div>

          <p>
            Educators upload detailed content while learners receive simplified,
            revision-ready versions for faster comprehension.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaClipboardList className="iconText" />
            </div>
            <h3>Exam-Oriented Content Preparation</h3>
          </div>

          <p>
            Preparing learners for assessments requires more than just providing
            study materials. NeuroLXP uses AI to convert learning content into
            exam-focused resources, ensuring learners can effectively prepare
            for evaluations.
          </p>

          <div className="insetBox">
            <h4>The platform automatically generates:</h4>
            <ul className="featureList">
              {examContentPoints.map((item) => (
                <li key={item}>
                  <span className="listIcon">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            This approach helps learners prepare strategically and build
            confidence for upcoming exams.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaChartBar className="iconText" />
            </div>
            <h3>Assessment-Based Learning and Question Generation</h3>
          </div>

          <p>
            With NeuroLXP, AI analyzes study materials and transforms them
            into meaningful assessments that test comprehension and critical thinking.
            A smarter, more dynamic way to measure real learning. Focus more on mentoring and guiding your learners.
          </p>

          <div className="insetBox">
            <h4>Intelligent question generation provides:</h4>
            <ul className="featureList">
              <li>
                <span className="listIcon">•</span>
                <span>High-quality exam-style questions from content analysis</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Questions reflecting real historical assessment patterns</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Valuable insights into learner readiness and performance</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Continuous exam preparation without manual effort</span>
              </li>
            </ul>
          </div>

          <p>
            Active learning and continuous knowledge reinforcement are promoted
            by integrating assessments directly with learning.
          </p>
        </article>

        <article className="contentCard">
          <div className="cardHeader">
            <div className="iconWrap">
              <FaComments className="iconText" />
            </div>
            <h3>Thought-Provoking Discussions and Knowledge Exploration</h3>
          </div>

          <p>
            Learning becomes deeper when learners engage in discussions and
            critical thinking. NeuroLXP's AI can analyze uploaded study
            materials and automatically generate thought-provoking discussion
            topics and collaborative learning prompts.
          </p>

          <div className="insetBox">
            <h4>Discussion features include:</h4>
            <ul className="featureList">
              <li>
                <span className="listIcon">•</span>
                <span>AI-generated discussion topics from study content</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Collaborative learning prompts for peer engagement</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Deeper exploration of concepts beyond textbook learning</span>
              </li>
              <li>
                <span className="listIcon">•</span>
                <span>Perspective-sharing forums that build critical thinking</span>
              </li>
            </ul>
          </div>

          <p>
            Discussion boards encourage learners to explore concepts, share
            perspectives, and develop deeper understanding.
          </p>
        </article>
      </section>

      <section className="insightSection">
        <div className="insightGrid">
          <article className="contentCard insightCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaLightbulb className="iconText" />
              </div>
              <h3>Unlocking New Insights from Existing Content</h3>
            </div>

            <p>
              AI in NeuroLXP goes beyond organizing content — it extracts new
              insights and learning opportunities from existing materials. By
              identifying key themes, relationships between concepts, and
              important learning patterns, the platform transforms static
              content into a dynamic learning ecosystem.
            </p>

            <div className="insetBox">
              <h4>Insight extraction enables educators to:</h4>
              <ul className="featureList">
                <li>
                  <span className="listIcon">•</span>
                  <span>Identify key themes and concept relationships automatically</span>
                </li>
                <li>
                  <span className="listIcon">•</span>
                  <span>Improve teaching strategies using AI-driven analysis</span>
                </li>
                <li>
                  <span className="listIcon">•</span>
                  <span>Highlight the most relevant knowledge for learners</span>
                </li>
                <li>
                  <span className="listIcon">•</span>
                  <span>Turn static study materials into a dynamic learning ecosystem</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="stakeholderSection">
        <div className="stakeholderGrid">
          <article className="stakeholderCard stakeholderCard--institution">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaUniversity className="iconText" />
              </div>
              <h3>For Institutions</h3>
            </div>
            <div className="insetBox">
              <ul className="featureList">
                {institutionPoints.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="stakeholderCard stakeholderCard--educator">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaChalkboardTeacher className="iconText" />
              </div>
              <h3>For Educators</h3>
            </div>
            <div className="insetBox">
              <ul className="featureList">
                {educatorPoints.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="stakeholderCard stakeholderCard--learner">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaUserGraduate className="iconText" />
              </div>
              <h3>For Learners</h3>
            </div>
            <div className="insetBox">
              <ul className="featureList">
                {learnerPoints.map((item) => (
                  <li key={item}>
                    <span className="listIcon">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaRocket className="iconText" />
              </div>
              <h3>NeuroLXP — Turning Knowledge into Intelligent Learning</h3>
            </div>

            <p>
              Unlike traditional LMS platforms that primarily store and deliver
              content, NeuroLXP transforms content into intelligent learning
              experiences. With AI-powered content curation, institutions can
              turn their existing study materials into adaptive, exam-oriented,
              and insight-driven learning journeys.
            </p>

            <div className="miniFeatures">
              <div className="miniFeature">
                <FaBrain className="iconText" />
                <span>AI-Driven Curation</span>
              </div>
              <div className="miniFeature">
                <FaClipboardList className="iconText" />
                <span>Exam-Ready Content</span>
              </div>
              <div className="miniFeature">
                <FaLightbulb className="iconText" />
                <span>Deep Insights</span>
              </div>
            </div>
          </div>

          <div className="secondaryVisualCard">
            <div className="imagePlaceholderAlt">
              <img
                src="/photo-1620712943543-bcc4688e7485.jpeg"
                alt="Intelligent learning powered by AI"
                className="heroImage"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
