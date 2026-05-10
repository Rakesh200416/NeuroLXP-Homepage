import type { InputHTMLAttributes } from "react";

type NeuInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function NeuInput({
  label,
  error,
  className = "",
  id,
  ...props
}: NeuInputProps) {
  const inputId =
    id || `input-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>

      <input
        id={inputId}
        {...props}
        className={`neu-input px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 md:text-base ${className}`}
      />

      {error ? (
        <p className="mt-2 text-xs font-medium text-red-600">{error}</p>
      ) : null}
    </div>
  );
}