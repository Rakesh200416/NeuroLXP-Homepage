"use client";

import { FormEvent, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaInfoCircle } from "react-icons/fa";
import "./page.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
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
        rows={6}
        maxLength={250}
      />
    </div>
    {error && <span className="fieldError">{error}</span>}
  </label>
);

export default function ContactUsPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";

  const set = (field: keyof FormState, val: string | boolean) => {
    setForm((p) => ({ ...p, [field]: val }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const validate = () => {
    const e: FormErrors = {};

    if (!form.name.trim()) e.name = "Full name is required.";

    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }

    const phone = form.phone.replace(/\s/g, "");
    if (!phone) e.phone = "Mobile number is required.";
    else if (!/^\d{7,15}$/.test(phone)) e.phone = "Enter a valid mobile number.";

    if (!form.message.trim()) e.message = "Please tell us how we can help.";

    if (!form.consent) e.consent = "Consent is required to proceed.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setSuccessMessage(null);

    if (!validate()) return;

    setSubmitting(true);

    try {
      const res = await fetch(`${API_BASE_URL}/contact-us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.replace(/\s/g, ""),
          message: form.message.trim(),
          consent: form.consent,
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        setServerError(text || "Failed to submit message. Please try again.");
        return;
      }

      setSubmitted(true);
      setSuccessMessage("Your message has been sent successfully. We will reach out shortly.");
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

  return (
    <main className="pageWrapper">
      <section className="pageContent">
        <div className="pageHeader">
          <p className="eyebrow">Contact Us</p>
          <h1>Let’s talk about what you need.</h1>
          <p className="subtitle">
            Share your details and message—our team will reach out with the best next
            steps.
          </p>
        </div>

        <div className="panelGrid panelGrid--single">
          <div className="formCard">
            <div className="formHeading">
              <h2>Send a Message</h2>
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
                  onChange={(e2) => set("name", e2.target.value)}
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
                  onChange={(e2) => set("email", e2.target.value)}
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
                  onChange={(e2) => set("phone", e2.target.value)}
                  placeholder="Enter your mobile number"
                  error={errors.phone}
                  icon={<FaPhone size={16} />}
                  required
                />
              </div>

              <div style={{ "--index": 3 } as React.CSSProperties}>
                <NeumorphicTextarea
                  label="Message *"
                  id="message"
                  value={form.message}
                  onChange={(e2) => set("message", e2.target.value)}
                  placeholder="Write your message here (max 250 characters)."
                  error={errors.message}
                  icon={<FaCommentDots size={16} />}
                />
              </div>

              <label className="checkboxField">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e2) => set("consent", e2.target.checked)}
                />
                <span>
                  I consent to be contacted by a PRGEEQ expert{" "}
                  <span className="requiredStar">*</span>
                </span>
              </label>

              {errors.consent && <span className="fieldError">{errors.consent}</span>}

              <button
                type="submit"
                className="neumorphic-button"
                disabled={submitted || submitting}
              >
                {submitted
                  ? "Message Sent"
                  : submitting
                    ? "Submitting…"
                    : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

