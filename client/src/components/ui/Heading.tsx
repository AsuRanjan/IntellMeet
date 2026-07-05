interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function Heading({
  title,
  subtitle,
  center = true,
}: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

