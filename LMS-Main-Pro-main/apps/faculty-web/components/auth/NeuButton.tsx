import type { ButtonHTMLAttributes } from "react";

type NeuButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

export default function NeuButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: NeuButtonProps) {
  const variantClass =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-none"
      : variant === "danger"
        ? "text-red-700"
        : "text-slate-700";

  return (
    <button
      {...props}
      className={`neu-btn min-h-[48px] px-5 py-3 text-sm font-semibold md:text-base ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}