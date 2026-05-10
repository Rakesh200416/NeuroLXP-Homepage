export const validateEmail = (email: string) => {
  if (!email) return "Email cannot be empty.";
  if (!email.includes("@")) return "This email does not look valid.";
  if (email.includes("..")) return "This email looks unusual. Please double-check.";
  return "";
};

export const validatePassword = (password: string) => {
  if (!password) return "Password cannot be empty.";
  if (password.length < 8) return "Use at least 8 characters.";
  if (password === "12345678") return "This password is too basic.";
  return "";
};

export const validateUsername = (name: string) => {
  if (!name) return "Name cannot be empty.";
  if (/[^a-zA-Z0-9]/.test(name)) return "Special characters are not allowed here.";
  return "";
};