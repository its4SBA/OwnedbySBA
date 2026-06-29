import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit Salma Alaleeli on ${item.label}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-slate-300 shadow-[0_0_40px_rgba(129,140,248,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300/30 hover:bg-white/[0.07] hover:text-white"
          >
            <Icon aria-hidden="true" className="size-4 text-slate-400 transition group-hover:text-violet-200" />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
