"use client";

type RoleCardProps = {
  title: string;
  description: string;
  onClick: () => void;
};

export default function RoleCard({
  title,
  description,
  onClick,
}: RoleCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="neu-soft w-full p-5 text-left transition-transform duration-200 hover:-translate-y-0.5 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 md:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base">
            {description}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm">
          →
        </div>
      </div>
    </button>
  );
}