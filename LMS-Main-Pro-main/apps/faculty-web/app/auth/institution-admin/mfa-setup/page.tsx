"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthShell from "../../../../components/auth/AuthShell";
import QrPlaceholder from "../../../../components/auth/QrPlaceholder";
import OtpInput from "../../../../components/auth/OtpInput";
import NeuButton from "../../../../components/auth/NeuButton";
import { authApi } from "../../../../lib/api";

function MfaSetupContent() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") || "";

  const [secret, setSecret] = useState("DEMO-MFA-SECRET");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function initMfa() {
      if (!email) {
        setError("Missing email for MFA setup.");
        return;
      }

      try {
        const response = await authApi.setupMfa({ email });

        if (
          response &&
          typeof response === "object" &&
          "secret" in response &&
          typeof response.secret === "string"
        ) {
          setSecret(response.secret);
        }

        if (
          response &&
          typeof response === "object" &&
          "qrCodeUrl" in response &&
          typeof response.qrCodeUrl === "string"
        ) {
          setQrCodeUrl(response.qrCodeUrl);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to setup MFA.");
      }
    }

    void initMfa();
  }, [email]);

  async function handleActivate() {
    if (!email) {
      setError("Missing email for MFA verification.");
      return;
    }

    if (!otp || otp.length < 4) {
      setError("Enter a valid MFA code.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await authApi.verifyMfa({
        email,
        otp,
      });

      router.push("/auth/institution-admin/success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "MFA verification failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="QR / MFA Setup"
      subtitle="Scan the QR code in your authenticator app and enter the verification code."
    >
      <div className="space-y-5">
        {qrCodeUrl ? (
          <img
            src={qrCodeUrl}
            alt="QR Code"
            className="mx-auto h-56 w-56 rounded-3xl sm:h-60 sm:w-60 md:h-64 md:w-64"
          />
        ) : (
          <QrPlaceholder />
        )}

        <div className="neu-inset p-4">
          <p className="text-sm font-semibold text-slate-800">Manual setup key</p>
          <p className="mt-2 break-all text-sm text-slate-600">{secret}</p>
        </div>

        <OtpInput value={otp} onChange={setOtp} />

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <NeuButton className="w-full" onClick={handleActivate} disabled={loading}>
          {loading ? "Activating..." : "Activate MFA"}
        </NeuButton>
      </div>
    </AuthShell>
  );
}

export default function MfaSetupPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm">Loading...</div>}>
      <MfaSetupContent />
    </Suspense>
  );
}
