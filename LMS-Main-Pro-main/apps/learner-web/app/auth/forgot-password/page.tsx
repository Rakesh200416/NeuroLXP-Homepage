export default function ForgotPassword() {
  return (
    <div className="neu-card" style={{ width: 400, margin: "auto", marginTop: 50 }}>
      <h2>Recover Password</h2>

      <input className="neu-input" placeholder="Enter Email / Phone" />

      <button className="neu-button">Send OTP</button>

      <p>Recovery using official email or phone supported</p>
      <p>QR Code access available (institution login)</p>
    </div>
  );
}