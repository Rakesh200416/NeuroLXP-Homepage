import {
  FaChartLine,
  FaCheckCircle,
  FaCoins,
  FaCreditCard,
  FaPiggyBank,
  FaShieldAlt,
  FaUniversity,
  FaWallet,
} from "react-icons/fa";
import "./FinancialLiteracy.css";

export default function FinancialLiteracy() {
  return (
    <section className="financial-page">

       <div className="financial-breadcrumb-nav">
    <ol className="financial-breadcrumb">
      <li className="financial-breadcrumb-item">
        <a href="/">Home</a>
      </li>
      <li className="financial-breadcrumb-item active" aria-current="page">
        Financial Literacy
      </li>
    </ol>
  </div>


      <div className="financial-hero">
        <div className="financial-hero-content">
          <span className="financial-badge">
            <FaCoins />
            NeuroLXP Financial Education
          </span>

          <h1>Financial Literacy</h1>

          <h2>Empowering Learners with Essential Money Management Skills</h2>

          <p>
            Financial literacy helps individuals manage money wisely, make
            informed decisions, and plan for a secure future. Understanding
            budgeting, saving, investing, and credit is essential for personal
            and professional success.
          </p>

          <p>
            NeuroLXP enables institutions and organizations to deliver
            structured Financial Literacy programs that build financial knowledge,
            confidence, and responsible decision-making.
          </p>
        </div>

        <div className="image-box">
          <img src="/pexels-rdne-7821554.jpg" alt="Financial illustration" />
        </div>
      </div>

      <div className="financial-section-heading">
        <span className="section-icon">
          <FaWallet />
        </span>
        <h3>Understanding the Basics of Personal Finance</h3>
      </div>

      <p>
        Financial literacy begins with a strong foundation in personal money
        management. Through guided learning modules, learners develop practical
        financial skills.
      </p>

      <ul>
        <li>
          <FaCheckCircle />
          Budgeting and managing personal expenses
        </li>
        <li>
          <FaCheckCircle />
          Understanding income, savings, and investments
        </li>
        <li>
          <FaCheckCircle />
          Managing debt and credit responsibly
        </li>
        <li>
          <FaCheckCircle />
          Planning for financial goals and future needs
        </li>
      </ul>

      <p>These concepts help learners build responsible financial habits.</p>

      <div className="financial-section-heading">
        <span className="section-icon">
          <FaChartLine />
        </span>
        <h3>Making Informed Financial Decisions</h3>
      </div>

      <p>
        Modern financial environments offer many choices, from banking services
        and loans to investment opportunities. Financial literacy helps learners
        evaluate these options with confidence.
      </p>

      <p>Learners gain the ability to:</p>

      <ul>
        <li>
          <FaCheckCircle />
          Compare financial products and services
        </li>
        <li>
          <FaCheckCircle />
          Understand interest rates, loans, and credit systems
        </li>
        <li>
          <FaCheckCircle />
          Evaluate financial risks and opportunities
        </li>
        <li>
          <FaCheckCircle />
          Make informed decisions about spending and saving
        </li>
      </ul>

      <p>These skills empower individuals to control their financial future.</p>

     <div className="image-box image-box-small">
  <img src="/pexels-rdne-7413936.jpg" alt="Financial illustration" />
</div>

      <div className="financial-section-heading">
        <span className="section-icon">
          <FaPiggyBank />
        </span>
        <h3>Promoting Responsible Financial Behavior</h3>
      </div>

      <p>
        Financial literacy encourages responsible practices that support
        long-term stability and financial well-being.
      </p>

      <p>Through structured learning, learners understand how to:</p>

      <ul>
        <li>
          <FaCheckCircle />
          Develop healthy saving habits
        </li>
        <li>
          <FaCheckCircle />
          Avoid unnecessary debt and financial risks
        </li>
        <li>
          <FaCheckCircle />
          Plan for emergencies and future expenses
        </li>
        <li>
          <FaCheckCircle />
          Maintain financial discipline and accountability
        </li>
      </ul>

      <p>These practices help individuals build sustainable financial well-being.</p>

      <div className="financial-section-heading">
        <span className="section-icon">
          <FaUniversity />
        </span>
        <h3>Supporting Financial Education Across Communities</h3>
      </div>

      <p>
        Financial literacy programs are valuable for schools, universities,
        workforce initiatives, and community education programs. Strong financial
        knowledge improves economic independence and decision-making.
      </p>

      <p>
        NeuroLXP enables organizations to deliver engaging financial literacy
        training for learners at different stages of life.
      </p>

      <div className="financial-final-card">
        <span className="section-icon">
          <FaShieldAlt />
        </span>

        <div>
          <h3>NeuroLXP — Building Financial Confidence Through Learning</h3>

          <p>
            With structured modules, practical examples, and interactive learning
            experiences, NeuroLXP helps learners develop financial literacy
            skills for smarter decisions and long-term financial well-being.
          </p>
        </div>
      </div>
    </section>
  );
}
