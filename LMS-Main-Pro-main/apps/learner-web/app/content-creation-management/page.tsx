import "./content-creation-management.css";
import {
  FaBookOpen,
  FaBrain,
  FaCloudUploadAlt,
  FaCubes,
  FaFileAlt,
  FaGamepad,
  FaImage,
  FaLayerGroup,
  FaMagic,
  FaPlayCircle,
  FaProjectDiagram,
  FaSyncAlt,
  FaTasks,
  FaVideo,
  FaArrowRight,
  FaCheckCircle,
  FaUniversity,
  FaSchool,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";

const contentTypes = [
  { icon: <FaCubes />, title: "Interactive learning modules" },
  { icon: <FaVideo />, title: "Multimedia lessons" },
  { icon: <FaMagic />, title: "Clickable content elements" },
  { icon: <FaGamepad />, title: "Gamified learning activities" },
  { icon: <FaTasks />, title: "Integrated quizzes" },
  { icon: <FaProjectDiagram />, title: "Scenario-based exercises" },
];

const aiTools = [
  "Convert detailed study materials into concise summaries",
  "Generate exam-oriented content and practice questions",
  "Extract key insights from videos and documents",
  "Create discussion topics from learning materials",
  "Develop structured learning modules from uploaded resources",
];

const cmsActions = [
  "Upload and manage videos, PDFs, presentations, and multimedia content",
  "Categorize learning resources by course, subject, or skill level",
  "Update content without disrupting ongoing learning programmes",
  "Maintain version control for course materials",
  "Ensure consistent content delivery across departments",
];

const deliveryFormats = [
  "Detailed lessons and structured notes",
  "Interactive learning activities",
  "Microlearning modules",
  "Visual learning components",
  "Practice-based learning exercises",
];

const idealFor = [
  { icon: <FaUniversity />, title: "Universities" },
  { icon: <FaSchool />, title: "Schools" },
  { icon: <FaBuilding />, title: "Corporate L&D" },
  { icon: <FaGraduationCap />, title: "Training Organizations" },
  { icon: <FaBookOpen />, title: "EdTech Providers" },
];

export default function ContentManagement() {
  return (
    <main className="content-page">
      <div className="content-breadcrumb-nav">
        <ol className="content-breadcrumb">
          <li className="content-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="content-breadcrumb-item active" aria-current="page">
            Content Creation &amp; Management
          </li>
        </ol>
      </div>

      <section className="content-hero content-card">
        <div className="content-hero-text">
          <span className="content-eyebrow">Content Creation & Management</span>
          <h1>Build, Organize, and Deliver High-Quality Learning Content with Ease</h1>
          <p>
            Creating effective learning experiences requires more than uploading
            documents or videos. NeuroLXP enables institutions, educators, and
            training teams to design, organize, and deliver engaging digital
            learning content efficiently.
          </p>
          <p>
            As an AI-powered Learning Management System, NeuroLXP simplifies the
            entire content lifecycle — from creation and curation to management
            and continuous improvement.
          </p>
        </div>

        <div className="content-studio-panel">
          <div className="content-studio-top">
            <span>Content Studio</span>
            <FaLayerGroup />
          </div>

          <div className="content-canvas">
            <div className="content-canvas-icon">
              <FaPlayCircle />
            </div>
            <h3>Lesson Builder</h3>
            <p>Video, quizzes, activities, and AI-generated resources in one workspace.</p>
          </div>

          <div className="content-studio-actions">
            <div>
              <FaCloudUploadAlt />
              <span>Upload</span>
            </div>
            <div>
              <FaMagic />
              <span>AI Assist</span>
            </div>
            <div>
              <FaSyncAlt />
              <span>Update</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-intro">
        <span>Learning Content Lifecycle</span>
        <h2>From Creation to Continuous Improvement</h2>
        <p>
          NeuroLXP brings content creation, AI assistance, organization, delivery,
          analytics, and updates into one structured digital learning workflow.
        </p>
      </section>

      <section className="content-rich-section">
        <div className="content-section-heading">
          <h2>Create Rich and Engaging Learning Content</h2>
          <p>
            Educators and instructional designers can build interactive and
            multimedia-rich learning modules that go beyond static materials.
          </p>
        </div>

        <div className="content-type-grid">
          {contentTypes.map((item) => (
            <article className="content-type-card" key={item.title}>
              <div className="content-type-icon">{item.icon}</div>
              <h4>{item.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="content-ai-section content-card">
        <div className="content-ai-left">
          <span className="content-eyebrow">AI-Assisted Development</span>
          <h2>Turn Existing Materials into Structured Learning Resources</h2>
          <p>
            NeuroLXP integrates AI-powered content tools that reduce preparation
            time while improving the quality and effectiveness of learning
            resources.
          </p>
        </div>

        <div className="content-ai-list">
          {aiTools.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="content-cms-layout">
        <article className="content-cms-card content-card">
          <div className="content-icon-box">
            <FaBookOpen />
          </div>
          <h2>Centralized Content Management System</h2>
          <p>
            NeuroLXP allows institutions to organize, update, and manage all
            learning resources in one place.
          </p>

          <ul className="content-list">
            {cmsActions.map((item) => (
              <li key={item}>
                <FaArrowRight />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="content-library-panel">
          <div className="content-folder content-folder-main">
            <FaLayerGroup />
            <span>Course Library</span>
          </div>
          <div className="content-folder">
            <FaVideo />
            <span>Videos</span>
          </div>
          <div className="content-folder">
            <FaFileAlt />
            <span>PDFs</span>
          </div>
          <div className="content-folder">
            <FaImage />
            <span>Media Assets</span>
          </div>
          <div className="content-folder">
            <FaTasks />
            <span>Quizzes</span>
          </div>
        </article>
      </section>

      <section className="content-delivery-section content-card">
        <div>
          <span className="content-eyebrow">Multi-Format Delivery</span>
          <h2>Deliver Content in Formats Learners Prefer</h2>
          <p>
            NeuroLXP supports multiple content formats so institutions can
            deliver learning materials in accessible, engaging, and effective
            ways.
          </p>
        </div>

        <div className="content-delivery-grid">
          {deliveryFormats.map((item) => (
            <div key={item}>
              <FaCheckCircle />
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="content-improvement-layout">
        <article className="content-improvement-card">
          <div className="content-icon-box content-sync-icon">
            <FaSyncAlt />
          </div>
          <h2>Efficient Content Updates and Continuous Improvement</h2>
          <p>
            Educators can update learning materials quickly so courses stay
            relevant and aligned with current knowledge, learner feedback, and
            industry requirements.
          </p>
        </article>

        <article className="content-improvement-card content-improvement-alt">
          <div className="content-icon-box content-brain-icon">
            <FaBrain />
          </div>
          <h2>Improve Content Through Analytics and Feedback</h2>
          <p>
            Analytics and learner feedback help instructors identify areas where
            content improvements are needed, supporting continuous learning
            enhancement.
          </p>
        </article>
      </section>

      <section className="content-scale-section">
        <div className="content-section-heading">
          <h2>Scalable Content Management for Institutions</h2>
          <p>
            NeuroLXP is designed for organizations managing large volumes of
            learning materials, courses, and digital resources.
          </p>
        </div>

        <div className="content-scale-grid">
          {idealFor.map((item) => (
            <article className="content-scale-card" key={item.title}>
              <div className="content-scale-icon">{item.icon}</div>
              <h4>{item.title}</h4>
            </article>
          ))}
        </div>
      </section>

      <section className="content-final content-card">
        <div className="content-final-icon">
          <FaRocketIcon />
        </div>
        <h2>NeuroLXP — Powering Smarter Content Creation and Learning Management</h2>
        <p>
          With advanced content creation tools, AI-assisted development, and
          centralized content management, NeuroLXP enables institutions to deliver
          high-quality digital learning experiences that engage learners and
          improve outcomes.
        </p>
      </section>
    </main>
  );
}

function FaRocketIcon() {
  return <FaMagic />;
}
