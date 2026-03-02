export function SectionHeading({
  headline,
  subtitle,
  light = false,
}: {
  headline: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy-800'}`}>
        {headline}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>
      )}
    </div>
  );
}
