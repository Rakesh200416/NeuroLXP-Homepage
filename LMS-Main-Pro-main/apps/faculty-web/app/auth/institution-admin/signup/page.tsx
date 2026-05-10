"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthShell from "../../../../components/auth/AuthShell";
import NeuInput from "../../../../components/auth/NeuInput";
import NeuButton from "../../../../components/auth/NeuButton";
import PasswordChecklist from "../../../../components/auth/PasswordChecklist";
import { authApi } from "../../../../lib/api";

export default function InstitutionAdminSignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    officialEmail: "",
    officialPhone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.firstName || !form.lastName) {
      setError("First name and last name are required.");
      return;
    }

    if (!form.officialEmail) {
      setError("Official email is required.");
      return;
    }

    if (!form.officialPhone) {
      setError("Official phone number is required.");
      return;
    }

    if (!form.password) {
      setError("Password is required.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await authApi.signup({
        firstName: form.firstName,
        lastName: form.lastName,
        officialEmail: form.officialEmail,
        officialPhone: form.officialPhone,
        password: form.password,
      });

      await authApi.sendOtp({
        channel: "email",
        target: form.officialEmail,
        purpose: "signup_email",
      });

      router.push(
        `/auth/institution-admin/verify-email?email=${encodeURIComponent(
          form.officialEmail
        )}&mobile=${encodeURIComponent(form.officialPhone)}`
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Institution Admin Registration"
      subtitle="Create your institution admin account."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-grid two">
          <NeuInput
            label="First Name"
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="Enter first name"
          />
          <NeuInput
            label="Last Name"
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="Enter last name"
          />
        </div>

        <div className="form-grid two">
          <NeuInput
            label="Official Email"
            type="email"
            value={form.officialEmail}
            onChange={(e) => updateField("officialEmail", e.target.value)}
            placeholder="Enter official email"
          />
          <NeuInput
            label="Official Phone"
            value={form.officialPhone}
            onChange={(e) => updateField("officialPhone", e.target.value)}
            placeholder="Enter official phone"
          />
        </div>

        <NeuInput
          label="Create Password"
          type="password"
          value={form.password}
          onChange={(e) => updateField("password", e.target.value)}
          placeholder="Create password"
        />

        <NeuInput
          label="Confirm Password"
          type="password"
          value={form.confirmPassword}
          onChange={(e) => updateField("confirmPassword", e.target.value)}
          placeholder="Confirm password"
        />

        <PasswordChecklist password={form.password} />

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <div className="grid gap-3 sm:grid-cols-2">
          <NeuButton type="submit" className="w-full" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </NeuButton>

          <NeuButton
            type="button"
            variant="secondary"
            className="w-full"
            onClick={() => router.push("/auth/institution-admin/login")}
          >
            Back to Sign In
          </NeuButton>
        </div>
      </form>
    </AuthShell>
  );
}