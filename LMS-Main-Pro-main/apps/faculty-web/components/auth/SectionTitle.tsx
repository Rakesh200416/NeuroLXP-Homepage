type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-800 md:text-3xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}