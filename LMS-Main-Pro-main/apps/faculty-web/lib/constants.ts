export const ROLES = {
  INSTITUTION_ADMIN: "institution-admin",
  INSTITUTION_COORDINATOR: "institution-coordinator",
  FACULTY: "faculty",
} as const;

export type RoleValue = (typeof ROLES)[keyof typeof ROLES];