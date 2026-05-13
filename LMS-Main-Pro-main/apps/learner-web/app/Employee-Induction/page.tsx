import {
  FaUserTie,
  FaClipboardList,
  FaLayerGroup,
  FaVideo,
  FaChartPie,
  FaNetworkWired,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import {
  MdOutlinePolicy,
  MdOutlineAnalytics,
  MdGroups,
} from "react-icons/md";
import "./EmployeeInduction.css";

export default function Page() {
  return (
    <main className="induction-page">
      <div className="induction-breadcrumb-nav">
        <ol className="induction-breadcrumb">
          <li className="induction-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="induction-breadcrumb-item active" aria-current="page">
            Employee Induction
          </li>
        </ol>
      </div>

      <section className="induction-hero">
        <div className="induction-hero-content">
          <span className="induction-badge">NeuroLXP Employee Induction</span>

          <h1>Employee Induction: Simplifying Onboarding Challenges</h1>

          <h2>Transform Employee Onboarding into a Structured Learning Experience</h2>

          <p>
            Welcoming new employees into an organization is a critical process
            that shapes their understanding of company culture, policies, and job
            responsibilities. However, many organizations face challenges in
            delivering consistent and effective onboarding experiences. NeuroLXP
            enables structured Employee Induction programs that help
            organizations onboard new hires efficiently and prepare them for
            success from day one.
          </p>

          <p>
            By using a digital Learning Management System (LMS) for employee
            onboarding, NeuroLXP ensures that every employee receives the right
            information, training, and guidance at the right time.
          </p>
        </div>

        <div className="induction-visual">
          <div className="visual-step">
            <FaUserTie />
            <span>New Hire</span>
          </div>

          <div className="visual-arrow">→</div>

          <div className="visual-step">
            <FaRocket />
            <span>Ready from Day One</span>
          </div>
        </div>
      </section>

      <section className="induction-intro">
        <h2>Structured onboarding for confident, productive employees</h2>
        <p>
          NeuroLXP helps organizations turn employee induction into a clear,
          engaging, measurable, and scalable learning journey.
        </p>
      </section>

      <section className="induction-challenges">
        <article className="induction-card">
          <div className="induction-icon">
            <MdGroups />
          </div>

          <div>
            <h2>The Challenge: Inconsistent Onboarding Experiences</h2>
            <p>
              In traditional onboarding processes, different departments may
              deliver induction training differently, leading to inconsistent
              employee experiences.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP allows organizations to design standardized onboarding
              programs that ensure every employee receives consistent information
              about company policies, values, and operational procedures.
              Structured induction modules help maintain uniform training across
              departments and locations.
            </p>
          </div>
        </article>

        <article className="induction-card">
          <div className="induction-icon">
            <FaLayerGroup />
          </div>

          <div>
            <h2>The Challenge: Information Overload for New Employees</h2>
            <p>
              New employees often receive large amounts of information in a short
              time, making it difficult to absorb important details.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP supports structured and modular onboarding courses that
              break induction content into manageable learning segments.
              Employees can learn at their own pace while revisiting materials
              whenever needed, improving understanding and retention.
            </p>
          </div>
        </article>

        <article className="induction-card">
          <div className="induction-icon">
            <FaVideo />
          </div>

          <div>
            <h2>The Challenge: Limited Engagement in Traditional Induction Sessions</h2>
            <p>
              Conventional onboarding sessions often rely on lengthy
              presentations that may not fully engage new employees.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              The platform enables interactive onboarding experiences using
              videos, quizzes, gamified learning activities, and discussion
              forums. These elements make induction training more engaging and
              encourage active participation.
            </p>
          </div>
        </article>

        <article className="induction-card">
          <div className="induction-icon">
            <MdOutlineAnalytics />
          </div>

          <div>
            <h2>The Challenge: Tracking Onboarding Progress</h2>
            <p>
              Organizations often struggle to monitor whether employees have
              completed required induction training.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP provides analytics and reporting tools that track employee
              onboarding progress, course completion, and assessment performance.
              HR teams can easily monitor which employees have completed
              mandatory induction modules.
            </p>
          </div>
        </article>

        <article className="induction-card">
          <div className="induction-icon">
            <FaNetworkWired />
          </div>

          <div>
            <h2>The Challenge: Scaling Onboarding for Growing Teams</h2>
            <p>
              As organizations grow, delivering onboarding training consistently
              across multiple locations can become difficult.
            </p>

            <h3>How NeuroLXP Solves It</h3>
            <p>
              NeuroLXP enables organizations to deliver scalable digital
              onboarding programs that can train employees across different
              offices, regions, or remote environments while maintaining
              consistent quality.
            </p>
          </div>
        </article>
      </section>

      <section className="benefits-section">
        <div className="benefits-heading">
          <span className="induction-badge">Benefits</span>
          <h2>Benefits of Employee Induction with NeuroLXP</h2>
          <p>
            Organizations can achieve several advantages through digital
            onboarding:
          </p>
        </div>

        <div className="benefits-grid">
          <div>
            <FaRocket />
            <span>Faster employee integration into the organization</span>
          </div>

          <div>
            <MdOutlinePolicy />
            <span>Consistent communication of company values and policies</span>
          </div>

          <div>
            <FaUsers />
            <span>Improved employee engagement during onboarding</span>
          </div>

          <div>
            <FaChartPie />
            <span>Better tracking of onboarding completion and performance</span>
          </div>

          <div>
            <FaClipboardList />
            <span>Reduced administrative effort for HR teams</span>
          </div>
        </div>

        <p className="benefits-note">
          Effective induction programs help new employees become productive and
          confident in their roles more quickly.
        </p>
      </section>

      <section className="induction-final">
        <div className="final-visual">
          <img
            src="/pexels-divinetechygirl-1181396.jpg"
            alt="Learners using digital learning resources"
            className="placeholder-image"
          />
        </div>

        <div>
          <span className="induction-badge">Smarter Employee Onboarding</span>

          <h2>NeuroLXP — Enabling Smarter Employee Onboarding</h2>

          <p>
            With structured induction modules, interactive training formats, and
            powerful analytics, NeuroLXP helps organizations transform employee
            onboarding into a seamless, engaging, and efficient learning
            experience.
          </p>
        </div>
      </section>
    </main>
  );
}
