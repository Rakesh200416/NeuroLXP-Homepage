type PasswordChecklistProps = {
  password: string;
};

export default function PasswordChecklist({
  password,
}: PasswordChecklistProps) {
  const items = [
    {
      label: "At least 8 characters",
      ok: password.length >= 8,
    },
    {
      label: "At least 1 digit",
      ok: /\d/.test(password),
    },
    {
      label: "At least 1 lowercase letter",
      ok: /[a-z]/.test(password),
    },
    {
      label: "At least 1 uppercase letter",
      ok: /[A-Z]/.test(password),
    },
    {
      label: "At least 1 special character such as *, -, #",
      ok: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <div className="neu-inset p-4">
      <p className="mb-3 text-sm font-semibold text-slate-800">
        Password policy
      </p>

      <ul className="space-y-2 text-xs md:text-sm">
        {items.map((item) => (
          <li
            key={item.label}
            className={item.ok ? "text-green-700" : "text-slate-600"}
          >
            {item.ok ? "✓" : "•"} {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}