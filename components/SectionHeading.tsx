type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.36em] text-slate-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">{description}</p> : null}
    </div>
  );
}
