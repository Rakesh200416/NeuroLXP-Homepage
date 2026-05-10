"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBullseye,
  FaCommentDots,
  FaTimes,
  FaChevronDown,
  FaInfoCircle,
} from "react-icons/fa";
import talkExpertIllustration from "./Talk to Our Expert.png";
import "./page.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const interestOptions = [
  "Product demo",
  "Pricing details",
  "Implementation help",
  "Custom solution",
  "Other",
];

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
  consent: false,
};

const NeumorphicInput = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  icon: IconComponent,
  ...rest
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  icon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label className="fieldLabel" htmlFor={id}>
    <span className="fieldTitle">{label}</span>
    <div className="inputWrapper">
      {IconComponent && <div className="fieldIcon">{IconComponent}</div>}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="neumorphic-input"
        {...rest}
      />
    </div>
    {error && <span className="fieldError">{error}</span>}
  </label>
);

const NeumorphicTextarea = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  error,
  icon: IconComponent,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  error?: string;
  icon?: React.ReactNode;
}) => (
  <label className="fieldLabel" htmlFor={id}>
    <span className="fieldTitle">{label}</span>
    <div className="inputWrapper">
      {IconComponent && <div className="fieldIcon">{IconComponent}</div>}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="neumorphic-textarea"
        rows={5}
        maxLength={250}
      />
    </div>
    {error && <span className="fieldError">{error}</span>}
  </label>
);

const NeumorphicSelect = ({
  label,
  id,
  value,
  onChange,
  error,
  icon: IconComponent,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (option: string) => void;
  error?: string;
  icon?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen]);

  const selectedLabel = value || "Select your interest";

  return (
    <label className="fieldLabel" htmlFor={id}>
      <span className="fieldTitle">{label}</span>

      <div
        className={`dropdownContainer ${isOpen ? "open" : ""}`}
        ref={dropdownRef}
      >
        <div className="dropdownWrapper">
          {IconComponent && <div className="fieldIcon">{IconComponent}</div>}

          <button
            type="button"
            className={`dropdownButton ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <span className="dropdownLabel">{selectedLabel}</span>
            <FaChevronDown size={14} className="dropdownArrow" />
          </button>
        </div>

        {isOpen && (
          <div className="dropdownMenu">
            {interestOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`dropdownItem ${value === option ? "active" : ""}`}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && <span className="fieldError">{error}</span>}
    </label>
  );
};

export default function TalkToOurExpertPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";

  const handleChange = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "Full name is required.";

    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Mobile number is required.";
    } else if (!/^\d{10,15}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid mobile number.";
    }

    if (!form.interest) {
      nextErrors.interest = "Please select your interest.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please describe your query.";
    }

    if (!form.consent) {
      nextErrors.consent = "Consent is required to proceed.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setServerError(null);
    setSuccessMessage(null);

    if (!validate()) return;

    setSubmitting(true);

    try {
      const res = await fetch(`${API_BASE_URL}/talk-to-our-expert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.replace(/\s/g, ""),
          interest: form.interest,
          message: form.message.trim(),
          consent: form.consent,
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        setServerError(text || "Failed to submit query. Please try again.");
        return;
      }

      setSubmitted(true);
      setSuccessMessage("Your query has been submitted successfully. Our team will contact you soon.");
      setForm(initialForm);
      setTimeout(() => {
        setSubmitted(false);
        setSuccessMessage(null);
      }, 5000);
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <main className="pageWrapper">
      <section className="pageContent">
        <div className="pageHeader">
          <p className="eyebrow">Talk to Our Expert</p>
          <h1>We're here to help you find the perfect solution.</h1>
          <p className="subtitle">
            Let us know how we can assist you today with a tailored consultation.
          </p>
        </div>

        <div className="panelGrid">
          <div className="imageCard">
            <div className="imageFrame" aria-hidden="true">
              <Image
                src={talkExpertIllustration}
                alt="Talk to our expert illustration"
                fill
                sizes="(max-width: 940px) 100vw, 50vw"
                className="imageFrameImg"
                priority
              />
            </div>

            <div className="imageCardContent">
              <h2 className="imageTitle">Connect with Our Experts</h2>
              <p className="imageDescription">
                Get personalized guidance and solutions tailored to your needs
              </p>

              <div className="imageButtons">
                <a href="/" className="neumorphic-button-link">
                  Home
                </a>
                <a href="/solutions" className="neumorphic-button-link">
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>

          <div className="formCard">
            <button
              type="button"
              className="closeButton"
              aria-label="Close form"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={18} />
            </button>

            <div className="formHeading">
              <h2>Submit Your Query</h2>
            </div>

            <div className="mandatoryMessage">
              <FaInfoCircle size={18} className="messageIcon" />
              Fields marked with an asterisk (*) are mandatory.
            </div>

            {serverError && (
              <div
                className="mandatoryMessage"
                style={{ borderLeftColor: "#F15B5B", color: "#F15B5B" }}
              >
                {serverError}
              </div>
            )}

            {successMessage && (
              <div
                className="mandatoryMessage"
                style={{ borderLeftColor: "#4BB543", color: "#196127" }}
              >
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ "--index": 0 } as React.CSSProperties}>
                <NeumorphicInput
                  label="Full Name *"
                  id="name"
                  value={form.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  placeholder="Enter your full name"
                  error={errors.name}
                  icon={<FaUser size={16} />}
                  required
                />
              </div>

              <div style={{ "--index": 1 } as React.CSSProperties}>
                <NeumorphicInput
                  label="Email Address *"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  placeholder="Enter your email address"
                  error={errors.email}
                  icon={<FaEnvelope size={16} />}
                  required
                />
              </div>

              <div style={{ "--index": 2 } as React.CSSProperties}>
                <NeumorphicInput
                  label="Mobile Number *"
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  placeholder="Enter your mobile number"
                  error={errors.phone}
                  icon={<FaPhone size={16} />}
                  required
                />
              </div>

              <div style={{ "--index": 3 } as React.CSSProperties}>
                <NeumorphicSelect
                  label="Select Your Interest *"
                  id="interest"
                  value={form.interest}
                  onChange={(option) => handleChange("interest", option)}
                  error={errors.interest}
                  icon={<FaBullseye size={16} />}
                />
              </div>

              <div style={{ "--index": 4 } as React.CSSProperties}>
                <NeumorphicTextarea
                  label="Describe your query or question in detail *"
                  id="message"
                  value={form.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  placeholder="Write your message here around 200 characters."
                  error={errors.message}
                  icon={<FaCommentDots size={16} />}
                />
              </div>

              <label className="checkboxField">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(event) =>
                    handleChange("consent", event.target.checked)
                  }
                />
                <span>
                  I express my consent for PRGEEQ expert to reach me{" "}
                  <span className="requiredStar">*</span>
                </span>
              </label>

              {errors.consent && (
                <span className="fieldError">{errors.consent}</span>
              )}

              <button
                type="submit"
                className="neumorphic-button"
                disabled={submitted || submitting}
              >
                {submitted
                  ? "Query Submitted"
                  : submitting
                    ? "Submitting…"
                    : "Submit Query"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}