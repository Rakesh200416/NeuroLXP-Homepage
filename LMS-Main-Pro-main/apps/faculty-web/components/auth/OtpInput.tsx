"use client";

type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
  length?: number;
};

export default function OtpInput({
  value,
  onChange,
  length = 6,
}: OtpInputProps) {
  return (
    <input
      type="text"
      inputMode="numeric"
      autoComplete="one-time-code"
      maxLength={length}
      value={value}
      onChange={(e) =>
        onChange(e.target.value.replace(/\D/g, "").slice(0, length))
      }
      placeholder={"•".repeat(length)}
      className="neu-input w-full px-4 py-4 text-center text-xl tracking-[0.45em] text-slate-800 placeholder:text-slate-300 md:text-2xl"
    />
  );
}