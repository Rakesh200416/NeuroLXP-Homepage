"use client";
import { useRouter } from "next/navigation";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {

  const router = useRouter();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Column 1: Brand Info */}
        <div className="footer-column">
          <h3 className="column-title">NeuroLXP LMS</h3>

          <p className="column-text">
            NeuroLXP LMS provides a holistic and future-ready learning
            environment, catering to diverse educational needs and fostering
            growth in the digital age.
          </p>

          <button className="start-btn">
            Why Wait. Let&apos;s Start
          </button>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="icon-box instagram">
                <FaInstagram />
              </div>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="icon-box facebook">
                <FaFacebookF />
              </div>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <div className="icon-box youtube">
                <FaYoutube />
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="icon-box linkedin">
                <FaLinkedinIn />
              </div>
            </a>

          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className="footer-column">
            <h3 className="column-title">NeuroLXP</h3>
            <ul className="footer-links">
              <li onClick={() => router.push("")}>
                Our NeuroLXP Team
              </li>
              <li onClick={() => router.push("/")}>
                About NeuroLXP
              </li>
              <li onClick={() => router.push("/content-curation")}>
                AI-Powered Content Curation
              </li>
              <li onClick={() => router.push("/learning-path")}>
                Our Adaptive Learning Pathways
              </li>
              <li onClick={() => router.push("/goal-setting-planning")}>
                Goal Setting Planning
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-column">
            <h3 className="column-title">Quick Links</h3>
            <ul className="footer-links">
              <li onClick={() => router.push("/PrivacyPolicyAcceptance")}>
                Privacy Policy
              </li>
              <li onClick={() => router.push("/TermsAndCondition")}>
                Terms of Use
              </li>
              <li onClick={() => router.push("/TermsAcceptanceDeclaration")}>
                Terms of Declaration
              </li>
              <li onClick={() => router.push("/talk-to-our-expert")}>
                Support
              </li>
              
            </ul>
          </div>

        {/* Column 4: Map */}
        <div className="footer-column map-column">
          <div className="map-wrapper">
            <iframe
    title="location-map"
    src="https://www.google.com/maps?q=Prestige+Atlanta,+10/12,+80+Feet+Rd,+1A+Block,+Koramangala,+Bengaluru,+Karnataka+560034&output=embed"
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="copyright-bar">
        Copyright © 2026 | Prgeeq Global Solutions Pvt. Ltd. | All rights reserved.
      </div>
    </footer>
  );
}
