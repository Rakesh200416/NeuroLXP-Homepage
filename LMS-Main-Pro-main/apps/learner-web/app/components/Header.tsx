"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaComments } from "react-icons/fa";

type MenuKey =
  | "features"
  | "customers"
  | "resources"
  | "neurolabs"
  | "neurolxp";

type SubmenuKey =
  | "features-learning"
  | "features-augmentation"
  | "features-ecosystem"
  | "features-addons"
  | "usecases-challenge"
  | "customers-industries"
  | "customers-solutions";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<SubmenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const isMobileView = () =>
    typeof window !== "undefined" && window.innerWidth <= 900;

  const handleTopMenuEnter = (menu: MenuKey) => {
    if (!isMobileView()) {
      setActiveMenu(menu);
    }
  };

  const handleTopMenuLeave = () => {
    if (!isMobileView()) {
      setActiveMenu(null);
      setActiveSubmenu(null);
    }
  };

  const handleTopMenuClick = (menu: MenuKey) => {
    if (isMobileView()) {
      setActiveMenu((prev) => (prev === menu ? null : menu));
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuEnter = (submenu: SubmenuKey) => {
    if (!isMobileView()) {
      setActiveSubmenu(submenu);
    }
  };

  const handleSubmenuClick = (
    submenu: SubmenuKey,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (isMobileView()) {
      e.stopPropagation();
      setActiveSubmenu((prev) => (prev === submenu ? null : submenu));
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo" onClick={() => router.push("/")}>
          <Image
            src="/PRGEEQ-Logo.png"
            alt="PRGeeQ Logo"
            width={160}
            height={40}
            priority
          />
        </div>

        <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </div>

        <nav className={`nav ${mobileOpen ? "mobile-open" : ""}`}>
          <div className="nav-item" onClick={() => router.push("/genZgalaxy")}>
            genZgalaxy
          </div>

          <div
            className="nav-item dropdown-parent"
            onClick={() => handleTopMenuClick("neurolxp")}
            onMouseEnter={() => handleTopMenuEnter("neurolxp")}
            onMouseLeave={handleTopMenuLeave}
          >
            NeuroLXP 2.10
            <span
              className={`arrow ${activeMenu === "neurolxp" ? "rotate" : ""}`}
            >
              ▾
            </span>

            <div
              className={`dropdown ${activeMenu === "neurolxp" ? "show" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="nav-item"
                onClick={() => router.push("/digital-literacy")}
              >
                Digital Literacy
              </div>
              <div
                className="nav-item"
                onClick={() => router.push("/information-literacy")}
              >
                Information Literacy
              </div>
              <div
                className="nav-item"
                onClick={() => router.push("/media-literacy")}
              >
                Media Literacy
              </div>
              <div
                className="nav-item"
                onClick={() => router.push("/Financial-Literacy")}
              >
                Financial Literacy
              </div>
              <div
                className="nav-item"
                onClick={() => router.push("/3Rs8Cs3Ms-Literacy")}
              >
                3Rs8Cs3Ms Literacy
              </div>
            </div>
          </div>

          <div
            className="nav-item dropdown-parent"
            onClick={() => handleTopMenuClick("neurolabs")}
            onMouseEnter={() => handleTopMenuEnter("neurolabs")}
            onMouseLeave={handleTopMenuLeave}
          >
            NeuroLabs
            <span
              className={`arrow ${activeMenu === "neurolabs" ? "rotate" : ""}`}
            >
              ▾
            </span>

            <div
              className={`dropdown ${activeMenu === "neurolabs" ? "show" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="nav-item"
                onClick={() => router.push("/coding-labs")}
              >
                Coding Labs
              </div>
              <div
                className="nav-item"
                onClick={() => router.push("/Coding-Bootcamps")}
              >
                Coding Bootcamps
              </div>
              <div
                className="nav-item"
                onClick={() => router.push("/Coding-Challenges")}
              >
                Coding Challenges
              </div>
              <div
                className="nav-item"
                onClick={() => router.push("/Coding-Resources")}
              >
                Coding Resources
              </div>
            </div>
          </div>

          <div
            className="nav-item dropdown-parent"
            onClick={() => handleTopMenuClick("customers")}
            onMouseEnter={() => handleTopMenuEnter("customers")}
            onMouseLeave={handleTopMenuLeave}
          >
            Our Customers
            <span
              className={`arrow ${activeMenu === "customers" ? "rotate" : ""}`}
            >
              ▾
            </span>

            <div
              className={`dropdown ${activeMenu === "customers" ? "show" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`dropdown-item submenu-parent ${
                  activeSubmenu === "customers-industries"
                    ? "mobile-submenu-open"
                    : ""
                }`}
                onMouseEnter={() => handleSubmenuEnter("customers-industries")}
                onClick={(e) => handleSubmenuClick("customers-industries", e)}
              >
                <div className="dropdown-item-label">
                  <span>Industries we Serve</span>
                  <span className="submenu-caret">▹</span>
                </div>

                <div className="submenu">
                  <div
                    className="nav-item"
                    onClick={() => router.push("/higher-education")}
                  >
                    Higher Education
                  </div>
                  <div className="nav-item" onClick={() => router.push("/bfsi")}>
                    BFSI
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/retail-healthcare")}
                  >
                    Retail &amp; Healthcare
                  </div>
                  <div className="nav-item" onClick={() => router.push("/states")}>
                    States
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/nonprofit")}
                  >
                    NonProfit
                  </div>
                </div>
              </div>

              <div
                className={`dropdown-item submenu-parent ${
                  activeSubmenu === "customers-solutions"
                    ? "mobile-submenu-open"
                    : ""
                }`}
                onMouseEnter={() => handleSubmenuEnter("customers-solutions")}
                onClick={(e) => handleSubmenuClick("customers-solutions", e)}
              >
                <div className="dropdown-item-label">
                  <span>Solutions for</span>
                  <span className="submenu-caret">▹</span>
                </div>

                <div className="submenu">
                  <div
                    className="nav-item"
                    onClick={() => router.push("/corporate-training")}
                  >
                    Corporate Training
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/E-Learning")}
                  >
                    E-Learning
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/Education")}
                  >
                    Education
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/Government")}
                  >
                    Government
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/training-management")}
                  >
                    Training Management
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="nav-item dropdown-parent"
            onClick={() => handleTopMenuClick("features")}
            onMouseEnter={() => handleTopMenuEnter("features")}
            onMouseLeave={handleTopMenuLeave}
          >
            Features
            <span
              className={`arrow ${activeMenu === "features" ? "rotate" : ""}`}
            >
              ▾
            </span>

            <div
              className={`dropdown ${activeMenu === "features" ? "show" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`dropdown-item submenu-parent ${
                  activeSubmenu === "features-learning"
                    ? "mobile-submenu-open"
                    : ""
                }`}
                onMouseEnter={() => handleSubmenuEnter("features-learning")}
                onClick={(e) => handleSubmenuClick("features-learning", e)}
              >
                <div className="dropdown-item-label">
                  <span>Learning</span>
                  <span className="submenu-caret">▹</span>
                </div>

                <div className="submenu">
                  <div
                    className="nav-item"
                    onClick={() => router.push("/learning-style-analysis")}
                  >
                    Learning Style Analysis
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/goal-setting-planning")}
                  >
                    Goal Setting &amp; Planning
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/learning-path")}
                  >
                    Learning Paths
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/personalization")}
                  >
                    Personalization
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/progress-tracking")}
                  >
                    Progress Tracking
                  </div>
                </div>
              </div>

              <div
                className={`dropdown-item submenu-parent ${
                  activeSubmenu === "features-augmentation"
                    ? "mobile-submenu-open"
                    : ""
                }`}
                onMouseEnter={() => handleSubmenuEnter("features-augmentation")}
                onClick={(e) => handleSubmenuClick("features-augmentation", e)}
              >
                <div className="dropdown-item-label">
                  <span>Augmentation</span>
                  <span className="submenu-caret">▹</span>
                </div>

                <div className="submenu">
                  <div
                    className="nav-item"
                    onClick={() => router.push("/gamification")}
                  >
                    Gamification
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/interactivities")}
                  >
                    Interactivities
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/social-learning")}
                  >
                    Social Learning
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/content-curation")}
                  >
                    Content Curation
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/content-formats")}
                  >
                    Content Formats
                  </div>
                </div>
              </div>

              <div
                className={`dropdown-item submenu-parent ${
                  activeSubmenu === "features-ecosystem"
                    ? "mobile-submenu-open"
                    : ""
                }`}
                onMouseEnter={() => handleSubmenuEnter("features-ecosystem")}
                onClick={(e) => handleSubmenuClick("features-ecosystem", e)}
              >
                <div className="dropdown-item-label">
                  <span>Learning Eco-System</span>
                  <span className="submenu-caret">▹</span>
                </div>

                <div className="submenu">
                  <div
                    className="nav-item"
                    onClick={() => router.push("/assessments")}
                  >
                    Assessments
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/analytics-reporting")}
                  >
                    Analytics &amp; Reporting
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/career-paths")}
                  >
                    Career Paths
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/skilling-courses")}
                  >
                    Career &amp; Skills Development
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/compliance-training")}
                  >
                    Compliances
                  </div>
                </div>
              </div>

              <div
                className={`dropdown-item submenu-parent ${
                  activeSubmenu === "features-addons"
                    ? "mobile-submenu-open"
                    : ""
                }`}
                onMouseEnter={() => handleSubmenuEnter("features-addons")}
                onClick={(e) => handleSubmenuClick("features-addons", e)}
              >
                <div className="dropdown-item-label">
                  <span>Add-On Modules</span>
                  <span className="submenu-caret">▹</span>
                </div>

                <div className="submenu">
                  <div
                    className="nav-item"
                    onClick={() => router.push("/content-creation-management")}
                  >
                    Content Creation &amp; Management
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/user-support-community")}
                  >
                    User Support &amp; Community
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/security-features")}
                  >
                    Security &amp; Compliances
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/accessibility-inclusivity")}
                  >
                    Accessibility &amp; Inclusivity
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/mobile-learning")}
                  >
                    Mobile Learning
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/interconnectivity")}
                  >
                    Interconnectivity
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="nav-item dropdown-parent"
            onClick={() => handleTopMenuClick("resources")}
            onMouseEnter={() => handleTopMenuEnter("resources")}
            onMouseLeave={handleTopMenuLeave}
          >
            Resources
            <span
              className={`arrow ${activeMenu === "resources" ? "rotate" : ""}`}
            >
              ▾
            </span>

            <div
              className={`dropdown ${activeMenu === "resources" ? "show" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`dropdown-item submenu-parent ${
                  activeSubmenu === "usecases-challenge"
                    ? "mobile-submenu-open"
                    : ""
                }`}
                onMouseEnter={() => handleSubmenuEnter("usecases-challenge")}
                onClick={(e) => handleSubmenuClick("usecases-challenge", e)}
              >
                <div className="dropdown-item-label">
                  <span>Use Cases</span>
                  <span className="submenu-caret">▹</span>
                </div>

                <div className="submenu">
                  <div
                    className="nav-item"
                    onClick={() => router.push("/Blended-Learning")}
                  >
                    Blended Learning
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/Customer-Training")}
                  >
                    Customer Training
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/Employee-Induction")}
                  >
                    Employee Induction
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/standards-training")}
                  >
                    Standards Training
                  </div>
                  <div
                    className="nav-item"
                    onClick={() => router.push("/Extended-Enterprise")}
                  >
                    Extended Enterprise
                  </div>
                </div>
              </div>

              <div
                className="nav-item"
                onClick={() => router.push("/media-presence")}
              >
                Media Presence
              </div>
              <div
                className="nav-item"
                onClick={() => router.push("/white-papers")}
              >
                White Papers
              </div>
              <div className="nav-item" onClick={() => router.push("/Blogs")}>
                Blogs
              </div>
              <div
                className="nav-item"
                onClick={() => router.push("/help-support-faqs")}
              >
                Help, Support &amp; FAQs
              </div>
            </div>
          </div>

          <div className="nav-item" onClick={() => router.push("/book-a-demo")}>
            Book a Demo
          </div>

          <button
            className="signin"
            onClick={() => router.push("/chatboat/app")}
          >
            Sign In Help
          </button>
        </nav>
      </header>

     <div className="floating-action-buttons">
  <button
    className="floating-btn expert-btn"
    type="button"
    onClick={() => router.push("/talk-to-our-expert")}
    aria-label="Talk to Our Expert"
  >
    <span className="floating-btn-icon">
      <FaComments />
    </span>

    <span className="floating-btn-text">
      Talk to Our Expert
    </span>
  </button>
</div>
    </>
  );
}
