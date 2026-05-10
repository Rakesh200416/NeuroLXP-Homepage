"use client";
import styles from "./digital.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaSyncAlt,
  FaChartLine,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaMobileAlt,
  FaTools,
  FaShieldAlt,
  FaBullhorn,
  FaCogs,
  FaChartBar,
} from "react-icons/fa";


export default function Home() {
  const slides = [
    {
      image: "/reimagine-how-the-world-learns.jpg",
      title: "Reimagine How the World Learns",
    },
    {
      image: "/huzefa-pithawala-kerK4xolE4o-unsplash.jpg",
      title: "Not Just Learning — A Transformation Engine",
    },
    {
      image: "/pexels-karola-g-5908764.jpg",
      title: "Designed for Minds That Refuse Average",
    },
    {
      image: "/Empowering-Lifelong-learning.jpg",
      title: "Empowering Lifelong learning",
    },
    {
      image: "/Built-for-Education-That-Goes-Beyond-the-Classroom.jpg",
      title: "Built for Education That Goes Beyond the Classroom",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="home-page">
      {/* HERO SLIDER */}
      <section className="hero-slider">
        <div className="hero-card">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <button
              className="hero-arrow hero-arrow-left"
              onClick={prevSlide}
              aria-label="Previous slide"
              type="button"
            >
              &#10094;
            </button>

            <div className="hero-overlay">
              <h2>{slides[current].title}</h2>
            </div>

            <div className="hero-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={current === index ? "dot active" : "dot"}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="hero-arrow hero-arrow-right"
              onClick={nextSlide}
              aria-label="Next slide"
              type="button"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>
      
      <section className="digital-section">
      <div className="digital-header">
         <h2>
            Embark on a <strong className="highlight-text">Learning Odyssey</strong> with neuroLxp
          </h2>

          <p>
            We're not just preparing you for tomorrow; we're guiding you to thrive in the rapidly transforming landscape of a digital society. Discover the perfect blend of knowledge, skills, and work readiness in our platform.
          </p>
        </div>
        </section>
<section className="platform-features">
  <div className="feature-box">
    <div className="icon-circle">
      <FaRocket />
    </div>
    <h3>AI-Powered Learning</h3>
    <p>
      Our AI algorithms personalize learning experiences by adapting to each learner's pace, style, and preferences, ensuring effective and engaging education.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaLightbulb />
    </div>
    <h3>Interactive Content</h3>
    <p>
      Engage with immersive and interactive content including videos, quizzes, simulations, and gamified elements that make learning fun and effective.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaGraduationCap />
    </div>
    <h3>Skill</h3>
    <p>
      Focus on practical skill-building with courses and modules designed to enhance real-world competencies, preparing learners for future careers.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaUsers />
    </div>
    <h3>Collaborative Learning</h3>
    <p>
      Enhance learning experiences through collaboration with peers, mentors, and industry experts using our integrated communication tools.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaMobileAlt />
    </div>
    <h3>Mobile-First Design</h3>
    <p>
      Access learning anytime, anywhere with our mobile-first design, ensuring a seamless experience across all devices.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaChartLine />
    </div>
    <h3>Career Pathways</h3>
    <p>
      Track progress and explore career opportunities with our career pathway tools, connecting learning outcomes to potential job roles and industries.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaTools />
    </div>
    <h3>Customizable Interface</h3>
    <p>
      Personalize your learning environment with customizable interfaces that align with your preferences and enhance your learning journey.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaChartBar />
    </div>
    <h3>Real-Time Analytics &amp; Insights</h3>
    <p>
      Turn data into decisions instantly with live visibility into learner progress, engagement, and performance. Empower educators to act at the right moment, not after it’s too late.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaCogs />
    </div>
    <h3>Multi-Tenant Architecture</h3>
    <p>
      Run multiple institutions, departments, or academies seamlessly on a single platform with complete data isolation. Scale effortlessly while maintaining full control and customisation for each tenant.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaSyncAlt />
    </div>
    <h3>Content Management &amp; Versioning</h3>
    <p>
      Keep your learning content always up-to-date with powerful version control and structured management. Update, track, and reuse content without losing consistency or control.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaLightbulb />
    </div>
    <h3>Adaptive Learning Engine</h3>
    <p>
      Deliver personalised learning journeys that evolve with every learner’s performance and pace. Ensure better outcomes by meeting each learner exactly where they are.
    </p>
  </div>

  <div className="feature-box">
    <div className="icon-circle">
      <FaChartLine />
    </div>
    <h3>Learner lifecycle tracking</h3>
    <p>
      Track every stage of the learner journey—from enrolment to achievement and beyond. Gain a complete view of growth, engagement, and outcomes in one unified system.
    </p>
  </div>
</section>

      <section className="digital-section">
        <div className="digital-header">
          <h2>
            Unlocking Seamless <strong className="highlight-text">Digital Narratives</strong>
          </h2>

          <p>
            With our neuroLxps' advanced eLearning, accessibility, and content development services, we're redefining excellence in learning and reshaping the future of education. Embark on a journey of learning that's as seamless as it is enlightening.
          </p>
        </div>

        <div>
          <div className="digital-grid">
            <div className="digital-item">
              <div className="icon-circle">
                <FaBullhorn />
              </div>
              <h3>Get Discovered</h3>
              <p>
                Increase your brand's visibility with our white label neuroLxp solution, tailored for your L&D requirements, integrate into your legacy systems with course catalogues.
              </p>
            </div>

            <div className="digital-item">
              <div className="icon-circle">
                <FaCogs />
              </div>
              <h3>Deliver Excellence</h3>
              <p>
                neuroLxp delivers excellence by offering cutting-edge learning tools, personalized experiences, and insightful analytics that ensure optimal educational outcomes.
              </p>
            </div>

            <div className="digital-item">
              <div className="icon-circle">
                <FaUsers />
              </div>
              <h3>Engage Learners</h3>
              <p>
                Drive learner engagement to new heights by leveraging our multi-channel notification systems that guarantee high course completion rates and foster active participation.
              </p>
            </div>

            <div className="digital-item">
              <div className="icon-circle">
                <FaChartBar />
              </div>
              <h3>Insightful Analytics</h3>
              <p>
                Leverage powerful analytics and deep learning insights to refine course offerings and enhance learner engagement, ensuring optimal learning and educational outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ld-section">
  <div className="ld-container">
    <div className="ld-image">
      <div className="ld-image-frame">
        <Image
          src="/L&D-with-neuroLxp.jpeg"
          alt="L&D with neuroLxp"
          width={420}
          height={420}
        />
      </div>
    </div>

    <div className="ld-content">
      <h2><strong className="highlight-text">L&amp;D </strong> with neuroLxp</h2>

      <p>
        Leverage the domain and technical expertise of neuroLxp in enhancing your organization's learning and development endeavors.
      </p>

      <p>
        Experience the rich tapestry of our dynamic L&D associates for whom innovation is at the forefront and positivity permeates every interaction. Join us in charting a new course for the advancement of learning. Together, we'll shape the future of educational endeavors.
      </p>

      <span className="ld-sign">Parankumar C.</span>
    </div>
  </div>
</section>

      <section className="modules-section">
        <div className="modules-container">
          <h2>
            Future Ready <strong className="highlight-text">neuroLxp Modules</strong>
          </h2>

          <p>
            Our advanced and adaptable modules within the neuroLxp platform are designed to ensure organizations stay ahead in the rapidly evolving landscape of learning and development.
          </p>

          <p>
            These modules are meticulously crafted to meet the dynamic needs of tomorrow's workforce, empowering businesses to cultivate a culture of continuous learning and innovation.
          </p>
        </div>
      </section>

      <section>

         <div className="training-container">
          <div className="training-card">
            <Image
              src="/Learning-Journey.png"
              alt="Onboarding"
              width={400}
              height={200}
            />
            <h3>Learning Journey</h3>
            <p>
              Embark on a personalized learning journey with our neuroLxp platform. Discover your unique learning style through comprehensive analytics, set personalized goals, and navigate through tailored learning paths to achieve your objectives.            </p>
            <button className="learn-btn">Learn More</button>
          </div>

          <div className="training-card">
            <Image
              src="/Learning-Augmentation.png"
              alt="Onboarding"
              width={400}
              height={200}
            />
            <h3>Learning Augmentation</h3>
            <p>
              Experience an enhanced learning journey thru neuroLxp's custom modules. Engage in gamified experiences, interactive activities, and collaborative social learning opportunities with curated content and features designed to augment your learning experience.            </p>
            <button className="learn-btn">Learn More</button>
          </div>

          <div className="training-card">
            <Image
              src="/Learning-Ecosystem.png"
              alt="Standards Training"
              width={400}
              height={200}
            />
            <h3>Learning Ecosystem</h3>
            <p>
             Dive into a comprehensive learning ecosystem with neuroLxp's custom assessment and personalization modules. Explore skills and career development opportunities, chart your career path, and undergo assessments for continuous growth and development.            </p>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>

        <div className="training-container">
          <div className="training-card">
            <Image
              src="/blended-learning.png"
              alt="Onboarding"
              width={400}
              height={200}
            />
            <h3>Blended Learning</h3>
            <p>
              Integrate the best of both worlds with neuroLxp's Blended Learning module. Combine online and in-person learning to provide a flexible and comprehensive learning experience.
            </p>
            <button className="learn-btn">Learn More</button>
          </div>

          <div className="training-card">
            <Image
              src="/Onboarding-&-Induction.png"
              alt="Onboarding"
              width={400}
              height={200}
            />
            <h3>Onboarding &amp; Induction</h3>
            <p>
              Ensure a smooth induction and transition for new hires. Streamline the onboarding process and help new employees integrate seamlessly into your organization.
            </p>
            <button className="learn-btn">Learn More</button>
          </div>

          <div className="training-card">
            <Image
              src="/Standards-Training.png"
              alt="Standards Training"
              width={400}
              height={200}
            />
            <h3>Standards Training</h3>
            <p>
              Maintain high standards with neuroLxp's Standards Training module. Equip your team with the knowledge and skills necessary to meet industry standards and regulations effectively.
            </p>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-card">
          <div className="contact-text">
            <h2>Get in touch</h2>
            <p>
              If you need any help with our products or services, choose one of the following ways to contact us.
            </p>
          </div>

          <button className="contact-btn">
            <span className="contact-icon">🎧</span>
            Contact Us
          </button>
        </div>
      </section>

      <section className="download-section">
        <h2>Ready to change your learning life?</h2>

        <p>
          Download neuroLxp today and take the first step to organize your
          learning, achieve your personal goals and reflect on your career.
        </p>

        <div className="store-buttons">
  <button className="store-btn" type="button">
    <span className="icon" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 49.9-84.8-18.7-26.6-47-41.3-84.3-44.2-35.3-2.8-73.8 20.6-87.9 20.6-14.8 0-49.4-19.7-79.5-19.1-41 .6-78.7 23.9-99.7 60.4-42.6 73.8-10.9 183 30.6 243 20.3 29.1 44.6 61.8 76.3 60.6 30.6-1.2 42.1-19.7 79-19.7 36.9 0 47.2 19.7 79.6 19.1 33-.6 53.8-29.7 73.9-58.9 23.4-33.7 33-66.3 33.5-68.1-.7-.3-64.3-24.7-64.9-98.9zM259.3 0c-19.1 23.2-31.9 54.2-28.4 85.2 29.3 2.3 58.9-15 77.8-37.7 18.9-22.7 32.3-53.6 28.4-84.5-29.9-2.4-58.7 14.5-77.8 37z" />
      </svg>
    </span>
    <div>
      <small>Download on the</small>
      <strong>App Store</strong>
    </div>
  </button>

  <button className="store-btn" type="button">
    <span className="icon" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M325.3 234.3L104.6 9.6C96.7 1.8 84.3-1.5 73.3 1.1c-11 2.6-19 10.7-21.5 21.7C48.6 37.3 48 48.2 48 64v384c0 15.8.6 26.7 3.8 41.2 2.5 11 10.5 19.1 21.5 21.7 11 2.6 23.4-.7 31.3-8.5l220.7-224.7c8.9-9 8.9-23.6 0-32.4zM372.5 281.4l53.7 54.7c12 12.2 31.5 12.3 43.7.3 12.2-12 12.3-31.5.3-43.7l-64-65.1 64-65.1c12-12.2 11.9-31.8-.3-43.7-12.2-12-31.7-11.9-43.7.3l-53.7 54.7-34.7 35.3 34.7 35.3z" />
      </svg>
    </span>
    <div>
      <small>Get it on</small>
      <strong>Google Play</strong>
    </div>
          </button>
        </div>
      </section>
    </div>
  );
}
