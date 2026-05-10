export default function OTPVerification() {
  return (
    <div className="neu-card" style={{ width: 400, margin: "auto", marginTop: 50 }}>
      <h2>Verify OTP</h2>

      <input className="neu-input" placeholder="Enter OTP" />

      <button className="neu-button">Verify</button>

      <p>Resend OTP in 30 seconds</p>
    </div>
  );
}