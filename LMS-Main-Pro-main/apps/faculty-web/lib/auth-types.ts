import type { RoleValue } from "./constants";

export type VerifyOtpChannel = "email" | "mobile";

export type ApiSuccessResponse = {
  success: boolean;
  message: string;
};

export type SignupPayload = {
  role: RoleValue;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
};

export type SignupResponse = ApiSuccessResponse & {
  userId?: string;
};

export type LoginPayload = {
  role: RoleValue;
  identifier: string;
  password: string;
};

export type LoginResponse = ApiSuccessResponse & {
  accessToken?: string;
  refreshToken?: string;
  requiresMfa?: boolean;
};

export type VerifyOtpPayload = {
  role: RoleValue;
  channel: VerifyOtpChannel;
  target: string;
  otp: string;
};

export type VerifyOtpResponse = ApiSuccessResponse & {
  verified?: boolean;
};

export type ResendOtpPayload = {
  role: RoleValue;
  channel: VerifyOtpChannel;
  target: string;
};

export type ResendOtpResponse = ApiSuccessResponse;

export type ForgotPasswordPayload = {
  role: RoleValue;
  identifier: string;
};

export type ForgotPasswordResponse = ApiSuccessResponse;

export type ResetPasswordPayload = {
  role: RoleValue;
  identifier: string;
  otp: string;
  newPassword: string;
  confirmPassword: string;
};

export type ResetPasswordResponse = ApiSuccessResponse;

export type SetupMfaPayload = {
  role: RoleValue;
};

export type SetupMfaResponse = ApiSuccessResponse & {
  secret?: string;
  qrCodeUrl?: string;
};

export type VerifyMfaPayload = {
  role: RoleValue;
  otp: string;
  setup?: boolean;
};

export type VerifyMfaResponse = ApiSuccessResponse & {
  verified?: boolean;
};