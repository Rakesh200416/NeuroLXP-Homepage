import AuthShell from "../../../components/auth/AuthShell";

export default function InstitutionAdminDashboardPage() {
  return (
    <AuthShell
      title="Institution Admin Dashboard"
      subtitle="You have signed in successfully."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="neu-inset p-5">
          <h3 className="text-lg font-semibold text-slate-800">
            User Management
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Manage institution users, roles, onboarding, and access status.
          </p>
        </div>

        <div className="neu-inset p-5">
          <h3 className="text-lg font-semibold text-slate-800">
            Academic Setup
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Configure departments, academic terms, and administrative workflows.
          </p>
        </div>

        <div className="neu-inset p-5">
          <h3 className="text-lg font-semibold text-slate-800">
            Reports
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Review institution-level summaries, activity, and progress metrics.
          </p>
        </div>

        <div className="neu-inset p-5">
          <h3 className="text-lg font-semibold text-slate-800">
            Settings
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Manage institution preferences, permissions, and operational controls.
          </p>
        </div>
      </div>
    </AuthShell>
  );
}