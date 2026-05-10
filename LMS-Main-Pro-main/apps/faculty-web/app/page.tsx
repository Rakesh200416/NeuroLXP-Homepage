"use client";

import { useRouter } from "next/navigation";
import AuthShell from "@/components/auth/AuthShell";
import RoleCard from "@/components/auth/RoleCard";
import { ROLES } from "@/lib/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <AuthShell
      title="Choose access type"
      subtitle="Select your role to continue to sign in or register."
    >
      <div className="grid gap-4">
        <RoleCard
          title="Institution Admin"
          description="Manage institution settings, users, workflows, and administrative operations."
          onClick={() => router.push(`/auth/${ROLES.INSTITUTION_ADMIN}/login`)}
        />

        <RoleCard
          title="Institution Coordinator"
          description="Coordinate academic operations, schedules, learner progress, and internal approvals."
          onClick={() =>
            router.push(`/auth/${ROLES.INSTITUTION_COORDINATOR}/login`)
          }
        />

        <RoleCard
          title="Faculty"
          description="Manage courses, content, assessments, and learner engagement."
          onClick={() => router.push(`/auth/${ROLES.FACULTY}/login`)}
        />
      </div>
    </AuthShell>
  );
}