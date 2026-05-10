import SectionTitle from "./SectionTitle";

type AuthShellProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AuthShell({
  title,
  subtitle,
  children,
}: AuthShellProps) {
  return (
    <main className="bg-shell min-h-screen px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="neu-surface hidden p-8 lg:flex lg:flex-col lg:justify-between xl:p-10">
          <div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-sm">
              LMS
            </div>

            <h2 className="max-w-lg text-3xl font-bold leading-tight text-slate-800 xl:text-4xl">
              Faculty Access Portal
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 xl:text-base">
              Secure role-based sign in and registration flow for Institution
              Admin, Institution Coordinator, and Faculty.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="neu-inset p-5">
              <p className="text-sm font-semibold text-slate-800 md:text-base">
                Responsive on every screen
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Optimized for mobile, tablet, laptop, and desktop layouts.
              </p>
            </div>

            <div className="neu-inset p-5">
              <p className="text-sm font-semibold text-slate-800 md:text-base">
                Security-first authentication
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Supports email OTP, mobile OTP, forgot password OTP, and QR-based MFA.
              </p>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center">
          <div className="neu-surface w-full max-w-2xl p-5 sm:p-6 md:p-8">
            <SectionTitle title={title} subtitle={subtitle} />
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}