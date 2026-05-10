export type OtpChannel = "email" | "mobile";

export type OtpPurpose =
  | "signup_email"
  | "signup_mobile"
  | "forgot_password"
  | "login_challenge";