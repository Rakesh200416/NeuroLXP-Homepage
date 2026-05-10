export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isValidMobile(mobile: string): boolean {
  return /^[0-9]{10,15}$/.test(mobile.trim());
}

export function hasMinLength(password: string): boolean {
  return password.length >= 8;
}

export function hasDigit(password: string): boolean {
  return /\d/.test(password);
}

export function hasLowercase(password: string): boolean {
  return /[a-z]/.test(password);
}

export function hasUppercase(password: string): boolean {
  return /[A-Z]/.test(password);
}

export function hasSpecialCharacter(password: string): boolean {
  return /[^A-Za-z0-9]/.test(password);
}

export function isStrongPassword(password: string): boolean {
  return (
    hasMinLength(password) &&
    hasDigit(password) &&
    hasLowercase(password) &&
    hasUppercase(password) &&
    hasSpecialCharacter(password)
  );
}

export function doPasswordsMatch(
  password: string,
  confirmPassword: string
): boolean {
  return password === confirmPassword;
}

export function isOtpValid(otp: string): boolean {
  return /^[0-9]{4,8}$/.test(otp.trim());
}

export type SignupValidationInput = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
};

export function validateSignupForm(input: SignupValidationInput): string | null {
  if (!isRequired(input.firstName)) {
    return "First name is required.";
  }

  if (!isRequired(input.lastName)) {
    return "Last name is required.";
  }

  if (!isValidEmail(input.email)) {
    return "Enter a valid email ID.";
  }

  if (!isValidMobile(input.mobile)) {
    return "Enter a valid mobile number.";
  }

  if (!isStrongPassword(input.password)) {
    return "Password must have at least 8 characters, 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character.";
  }

  if (!doPasswordsMatch(input.password, input.confirmPassword)) {
    return "Passwords do not match.";
  }

  return null;
}

export function validateLoginForm(
  identifier: string,
  password: string
): string | null {
  if (!isRequired(identifier)) {
    return "Email ID or mobile number is required.";
  }

  if (!isRequired(password)) {
    return "Password is required.";
  }

  return null;
}

export function validateOtpForm(otp: string): string | null {
  if (!isOtpValid(otp)) {
    return "Enter a valid OTP.";
  }

  return null;
}

export function validateForgotPasswordForm(identifier: string): string | null {
  if (!isRequired(identifier)) {
    return "Email ID or mobile number is required.";
  }

  return null;
}

export function validateResetPasswordForm(
  otp: string,
  newPassword: string,
  confirmPassword: string
): string | null {
  if (!isOtpValid(otp)) {
    return "Enter a valid OTP.";
  }

  if (!isStrongPassword(newPassword)) {
    return "Password must have at least 8 characters, 1 digit, 1 lowercase letter, 1 uppercase letter, and 1 special character.";
  }

  if (!doPasswordsMatch(newPassword, confirmPassword)) {
    return "Passwords do not match.";
  }

  return null;
}

export function validateMfaCode(code: string): string | null {
  if (!isOtpValid(code)) {
    return "Enter a valid authenticator code.";
  }

  return null;
}