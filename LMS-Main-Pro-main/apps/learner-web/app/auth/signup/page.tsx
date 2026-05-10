"use client";

import { useState } from "react";
import NeumorphicInput from "../components/NeumorphicInput";
import NeumorphicButton from "../components/NeumorphicButton";
import CheckboxGroup from "../components/CheckboxGroup";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../utils/validation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [checks, setChecks] = useState<string[]>([]);
  const [alert, setAlert] = useState("");

  const handleSubmit = () => {
    const e = validateEmail(email);
    const p = validatePassword(password);
    const n = validateUsername(name);

    if (e || p || n) {
      setAlert(e || p || n);
      return;
    }

    if (!checks.length) {
      setAlert("Please accept required LMS access conditions.");
      return;
    }

    setAlert("Account created. Let us get started.");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        {/* ALERT */}
        {alert && <div style={styles.alert}>{alert}</div>}

        {/* INPUTS */}
        <div style={styles.inputGroup}>
          <NeumorphicInput
            placeholder="Name"
            onChange={(e: any) => setName(e.target.value)}
          />

          <NeumorphicInput
            placeholder="Email"
            onChange={(e: any) => setEmail(e.target.value)}
          />

          <NeumorphicInput
            placeholder="Password"
            type="password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>

        {/* CHECKBOX */}
        <div style={styles.checkboxBox}>
          <CheckboxGroup values={checks} setValues={setChecks} />
        </div>

        {/* BUTTON */}
        <button
          style={styles.button}
          onClick={handleSubmit}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.96)";
            e.currentTarget.style.boxShadow =
              "inset 6px 6px 12px #c5ccd6, inset -6px -6px 12px #ffffff";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "8px 8px 16px #c5ccd6, -8px -8px 16px #ffffff";
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "10px 10px 22px #c5ccd6, -10px -10px 22px #ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "8px 8px 16px #c5ccd6, -8px -8px 16px #ffffff";
          }}
        >
          Create Account
        </button>

        {/* FOOTER */}
        <p style={styles.footer}>
          Quick signup • Secure LMS access • No spam
        </p>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles: any = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e6ebf2",
    padding: "20px",
  },

  card: {
    width: 430,
    padding: "45px",
    borderRadius: "26px",
    background: "#e6ebf2",
    boxShadow: "10px 10px 25px #c5ccd6, -10px -10px 25px #ffffff",
    textAlign: "center",
  },

  title: {
    marginBottom: 22,
    fontWeight: 600,
    color: "#333",
    letterSpacing: "0.5px",
  },

  alert: {
    marginBottom: 15,
    padding: "12px",
    borderRadius: "14px",
    background: "#e6ebf2",
    boxShadow:
      "inset 5px 5px 10px #c5ccd6, inset -5px -5px 10px #ffffff",
    fontSize: 13,
    color: "#444",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  checkboxBox: {
    marginTop: 12,
    marginBottom: 18,
    textAlign: "left",
  },

  button: {
    width: "100%",
    marginTop: 10,
    padding: "15px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    background: "#e6ebf2",
    boxShadow: "8px 8px 16px #c5ccd6, -8px -8px 16px #ffffff",
    fontWeight: 600,
    fontSize: "15px",
    transition: "all 0.2s ease-in-out",
    color: "#333",
  },

  footer: {
    marginTop: 18,
    fontSize: 12,
    color: "#666",
  },
};