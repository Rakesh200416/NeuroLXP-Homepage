export default function QrPlaceholder() {
  return (
    <div className="neu-inset mx-auto flex h-56 w-56 items-center justify-center rounded-3xl sm:h-60 sm:w-60 md:h-64 md:w-64">
      <div className="grid grid-cols-6 gap-1.5">
        {Array.from({ length: 36 }).map((_, index) => (
          <div
            key={index}
            className={`h-5 w-5 rounded-sm sm:h-6 sm:w-6 ${
              index % 2 === 0 ? "bg-slate-700" : "bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}