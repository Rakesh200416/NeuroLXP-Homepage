import "./content-formats.css";
import {
  FaFileAlt,
  FaVideo,
  FaCode,
  FaPuzzlePiece,
  FaPalette,
  FaRocket,
  FaLayerGroup,
  FaCheckCircle,
  FaStar,
  FaPlay,
  FaGlobe,
  FaBrain,
  FaMobile,
} from "react-icons/fa";
import Image from "next/image";

const coreFormats = [
  {
    icon: FaFileAlt,
    title: "Documents & Presentations",
    color: "primary",
    items: [
      "DOC / DOCX",
      "PPT / PPTX",
      "Google Slides (cloud presentations)",
      "Static manuals",
      "Collaborative real-time documents",
    ],
    image: {
      src: "/photo-1504868584819-f8e8b4b6d7e3.jpeg",
      alt: "Documents and presentations on a desk with laptop",
    },
  },
  {
    icon: FaVideo,
    title: "Video & Media Learning",
    color: "secondary",
    items: [
      "MP4 video (recorded lectures)",
      "Interactive video",
      "Short-form video (Reels, Shorts)",
      "Live streaming content",
      "AI-generated video",
    ],
    image: {
      src: "/photo-1574717024653-61fd2cf4d44d.webp",
      alt: "Video streaming and media learning platform",
    },
  },
  {
    icon: FaCode,
    title: "E-Learning Standards & Packages",
    color: "accent",
    items: [
      "SCORM 1.2",
      "SCORM 2004",
      "xAPI (Tin Can API)",
      "cmi5",
      "LTI (Learning Tools Interoperability)",
    ],
    image: {
      src: "/photo-1555066931-4365d14bab8c.webp",
      alt: "eLearning code and SCORM standards",
    },
  },
  {
    icon: FaGlobe,
    title: "Modern & Web-Based Content",
    color: "support",
    items: [
      "Web-based scrolling presentations",
      "Progressive Web Apps (PWA)",
      "API-driven content delivery",
      "Mobile apps",
    ],
    image: {
      src: "/photo-1547658719-da2b51169166.webp",
      alt: "Modern web development and responsive design",
    },
  },
  {
    icon: FaPuzzlePiece,
    title: "Interactive & Engaging Learning",
    color: "primary",
    items: [
      "Microlearning modules",
      "Gamified learning content",
      "Scenario-based branching content",
      "Interactive presentation tools",
    ],
    image: {
      src: "/photo-1611532736597-de2d4265fba3.webp",
      alt: "Interactive learning and gamification",
    },
  },
  {
    icon: FaPalette,
    title: "Creative & Knowledge Content",
    color: "secondary",
    items: [
      "Visual storytelling tools (Canva, Pitch)",
      "Wikis",
      "Dynamic knowledge bases",
      "AI-powered documentation",
    ],
    image: {
      src: "/photo-1558655146-9f40138edfeb.webp",
      alt: "Creative design tools and knowledge management",
    },
  },
];

const whyMattersPoints = [
  "Use existing content without rework",
  "Deliver consistent learning experiences across formats",
  "Future-proof your training ecosystem",
  "Enable innovation with emerging content technologies",
];

const differentiatorFeatures = [
  {
    icon: FaLayerGroup,
    label: "Legacy format support",
    color: "primary",
  },
  {
    icon: FaRocket,
    label: "Modern content delivery",
    color: "secondary",
  },
  {
    icon: FaBrain,
    label: "AI-powered experiences",
    color: "accent",
  },
  {
    icon: FaMobile,
    label: "Mobile-first learning",
    color: "support",
  },
];

export default function ContentFormatsPage() {
  return (
    <main className="content-formats-page page">
      <div className="content-formats-breadcrumb-nav">
        <ol className="content-formats-breadcrumb">
          <li className="content-formats-breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="content-formats-breadcrumb-item active" aria-current="page">
            Content Formats
          </li>
        </ol>
      </div>

      <section className="heroSection">
        <div className="heroGrid">
          <div className="heroContent">
            <h1 className="heroTitle">
              Advanced Content Compatibility
            </h1>

            <h2 className="heroSubtitle">
              One Platform. Every Format. Limitless Learning.
            </h2>

            <p className="heroText">
              For the first time ever, a{" "}
              <strong>Learning Experience Platform</strong> that supports an
              unmatched range of <strong>learning content formats</strong>—from
              legacy files to AI-powered, immersive experiences.{" "}
              <strong>NeuroLXP</strong> redefines how content is created,
              delivered, and experienced.
            </p>

            <p className="heroText">
              Most platforms restrict how you deliver training.{" "}
              <strong>NeuroLXP breaks those barriers</strong> by supporting the
              widest spectrum of{" "}
              <strong>digital learning content formats</strong>—ensuring your
              organization never has to compromise.
            </p>

            <div className="heroCtas">
              <button className="ctaPrimary">
                <FaPlay className="btnIcon" />
                Explore Platform
              </button>
              <button className="ctaSecondary">Request Demo</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cardsSection">
        {coreFormats.map((format, idx) => {
          const Icon = format.icon;
          return (
            <article className={`contentCard color-${format.color}`} key={idx}>
              <div className="cardHeader">
                <div className="iconWrap">
                  <Icon className="iconText" />
                </div>
                <h3>{format.title}</h3>
              </div>

              <div className="cardImage">
                <Image
                  src={format.image.src}
                  alt={format.image.alt}
                  width={480}
                  height={180}
                  className="cardImg"
                />
              </div>

              <div className="insetBox">
                <h4>Supported formats include:</h4>
                <ul className="featureList">
                  {format.items.map((item) => (
                    <li key={item}>
                      <span className="listIcon">
                        <FaCheckCircle />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      <section className="highlightSection">
        <div className="highlightGrid">
          <div className="highlightTextCard">
            <div className="cardHeader">
              <div className="iconWrap">
                <FaStar className="iconText" />
              </div>
              <h3>No Limits. No Conversions. No Compromise.</h3>
            </div>

            <p>
              With <strong>NeuroLXP</strong>, organizations can unify all their{" "}
              <strong>training content formats</strong> into a single
              platform—eliminating compatibility issues, reducing costs, and
              accelerating <strong>digital learning transformation</strong>.
            </p>

            <div className="insetBox">
              <h4>Why this matters for your organization:</h4>
              <ul className="featureList">
                {whyMattersPoints.map((item) => (
                  <li key={item}>
                    <span className="listIcon">
                      <FaCheckCircle />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="differentiatorSection">
        <div className="diffInner">
          <div className="diffTextWrap">
            <h2 className="diffTitle">
              Complete Content Freedom — Only on NeuroLXP
            </h2>
            <p className="diffBody">
              While traditional platforms support only a handful of formats,{" "}
              <strong>NeuroLXP stands apart</strong> as the only platform built
              to handle <strong>legacy, modern, and future-ready</strong>{" "}
              learning content formats—all in one place.
            </p>
            <p className="diffBody diffQuote">
              This isn't just compatibility. It's{" "}
              <strong>complete content freedom.</strong>
            </p>
          </div>

          <div className="diffVisual">
            <div className="miniFeatures">
              {differentiatorFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div className={`miniFeature color-${f.color}`} key={f.label}>
                    <Icon className="iconText" />
                    <span>{f.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaCard">
          <h2 className="ctaTitle">
            Ready to unlock unlimited content possibilities?
          </h2>
          <p className="ctaBody">
            Experience the most versatile{" "}
            <strong>Learning Experience Platform</strong> ever built.
          </p>
          <div className="ctaButtons">
            <button className="ctaPrimary large">
              <FaPlay className="btnIcon" />
              Book a Demo
            </button>
            <button className="ctaSecondary large">Get Started</button>
          </div>
        </div>
      </section>
    </main>
  );
}
