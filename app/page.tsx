import { ArrowUpRight, Circle, MapPin, Orbit } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CREDENTIALS,
  CURRENT_BUILD,
  INTRODUCTION,
  NAV_ITEMS,
  PROFILE,
  SERVICES,
  SKILL_GROUPS,
  SOCIAL_LINKS
} from "@/lib/constants";

const linkedInUrl = SOCIAL_LINKS.find((item) => item.label === "LinkedIn")?.href ?? "#";
const githubUrl = SOCIAL_LINKS.find((item) => item.label === "GitHub")?.href ?? "#";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute left-1/2 top-0 h-px w-[82vw] -translate-x-1/2 silver-line" />
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-44 top-24 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[70vw] -translate-x-1/2 rounded-full bg-slate-200/[0.025] blur-3xl" />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
          <a href="#home" className="text-sm font-semibold tracking-[0.28em] text-slate-100">
            SBA
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs text-slate-400 transition hover:bg-white/[0.05] hover:text-slate-100"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a href="#connect" className="text-xs text-slate-400 transition hover:text-slate-100">
            {PROFILE.brand}
          </a>
        </nav>
      </header>

      <section id="home" className="relative z-10 px-5 pb-24 pt-36 sm:px-6 sm:pb-32 lg:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="animate-soft-rise text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.34em] text-violet-200/75 shadow-[0_0_55px_rgba(129,140,248,0.08)]">
              <span className="size-1.5 rounded-full bg-violet-200 shadow-[0_0_18px_rgba(196,181,253,0.9)]" />
              {PROFILE.brand}
            </div>
            <h1 className="font-serif text-6xl font-semibold leading-[0.88] tracking-[-0.075em] text-slate-100 sm:text-7xl lg:text-8xl">
              {PROFILE.name}
            </h1>
            <Separator className="mx-auto mt-7 max-w-md bg-gradient-to-r from-transparent via-slate-200/30 to-transparent lg:mx-0" />
            <p className="mt-7 text-base font-medium text-slate-300 sm:text-lg">{PROFILE.title}</p>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl lg:mx-0">{PROFILE.heroText}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild>
                <a href={linkedInUrl} target="_blank" rel="noreferrer">
                  View LinkedIn <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  View GitHub <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
            </div>
            <p className="mt-7 text-sm text-slate-500">{PROFILE.availability}</p>
          </div>

          <Card className="relative mx-auto w-full max-w-md overflow-hidden p-0 lg:max-w-lg">
            <div aria-hidden="true" className="animate-float-glow absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/18 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-28 -left-28 size-72 rounded-full bg-blue-500/12 blur-3xl" />
            <div aria-hidden="true" className="absolute inset-0 cinematic-grid opacity-45" />
            <div className="relative p-5 sm:p-7">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-500">
                <span>Signal</span>
                <span>Dubai / DXB</span>
              </div>
              <div className="relative my-12 flex aspect-square items-center justify-center rounded-full border border-white/10 bg-black/20 shadow-inner sm:my-14">
                <div className="absolute inset-8 rounded-full border border-violet-200/10" />
                <div className="absolute inset-16 rounded-full border border-blue-200/10" />
                <div aria-hidden="true" className="animate-signal-orbit absolute inset-0">
                  <Orbit className="absolute left-8 top-12 size-5 text-violet-200/70" />
                </div>
                <div aria-hidden="true" className="animate-signal-orbit-reverse absolute inset-10 rounded-full">
                  <Circle className="absolute bottom-1 right-7 size-3 fill-blue-200/50 text-blue-200/50" />
                </div>
                <div className="animate-signal-sweep absolute h-[112%] w-px rotate-45 bg-gradient-to-b from-transparent via-slate-200/20 to-transparent" />
                <div className="animate-signal-sweep-reverse absolute h-[112%] w-px -rotate-45 bg-gradient-to-b from-transparent via-slate-200/12 to-transparent" />
                <div className="relative grid size-44 place-items-center rounded-full border border-slate-200/15 bg-[#07070a]/80 shadow-[0_0_90px_rgba(129,140,248,0.18)] backdrop-blur sm:size-52">
                  <span className="font-serif text-6xl tracking-[-0.08em] text-slate-100 sm:text-7xl">SBA</span>
                  <span className="absolute bottom-9 text-[0.58rem] uppercase tracking-[0.42em] text-slate-500">owned by</span>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Focus</p>
                  <p className="mt-2 text-sm text-slate-300">Web interfaces, UI/UX, and practical digital products.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Style</p>
                  <p className="mt-2 text-sm text-slate-300">Clean, responsive, professional, and user-focused.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="about" className="relative z-10 px-5 py-20 sm:px-6">
        <Card className="mx-auto max-w-5xl p-6 sm:p-10 lg:p-12">
          <SectionHeading eyebrow="About" title="Building digital experiences with clarity and purpose." />
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="space-y-4 text-sm text-slate-400">
              <p className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-4">
                <MapPin aria-hidden="true" className="size-4 text-violet-200" />
                {PROFILE.location}
              </p>
              <p className="rounded-2xl border border-white/10 bg-black/20 p-4">{PROFILE.focus}</p>
            </aside>
            <div className="space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
              {INTRODUCTION.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section id="skills" className="relative z-10 px-5 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Skills" title="A focused toolkit for thoughtful products." />
          <div className="grid gap-4 md:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <Card key={group.title} className="transition duration-300 hover:-translate-y-1 hover:border-slate-300/20 hover:bg-white/[0.045]">
                <CardHeader>
                  <CardTitle>{group.title}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-slate-400">
                      {skill}
                    </span>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="what-i-do" className="relative z-10 px-5 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="What I Do" title="Practical support from idea to interface." />
          <Card className="divide-y divide-white/10 overflow-hidden p-0">
            {SERVICES.map((service, index) => (
              <article key={service.title} className="grid gap-4 p-6 transition hover:bg-white/[0.025] sm:p-8 md:grid-cols-[0.38fr_1fr]">
                <p className="font-serif text-4xl leading-none text-slate-700">0{index + 1}</p>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">{service.title}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">{service.description}</p>
                </div>
              </article>
            ))}
          </Card>
        </div>
      </section>

      <section id="credentials" className="relative z-10 px-5 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Credentials" title="Selected learning and certifications." />
          <Card className="p-6 sm:p-8">
            <ol className="space-y-0">
              {CREDENTIALS.map((credential) => (
                <li key={credential} className="relative border-l border-white/10 pb-7 pl-7 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-violet-200 shadow-[0_0_24px_rgba(196,181,253,0.75)]" />
                  <p className="text-base leading-7 text-slate-300">{credential}</p>
                </li>
              ))}
            </ol>
            <div className="mt-9 flex justify-center">
              <Button asChild variant="outline">
                <a href={linkedInUrl} target="_blank" rel="noreferrer">
                  View More on LinkedIn <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="current-build" className="relative z-10 px-5 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Current Build" title={CURRENT_BUILD.title} description={CURRENT_BUILD.description} />
          <Card className="p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CURRENT_BUILD.highlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-center text-sm font-medium text-slate-300">
                  {highlight}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="connect" className="relative z-10 px-5 py-24 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            eyebrow="Connect"
            title="Let’s connect with purpose."
            description="Open to freelance work, collaborations, personal brand opportunities, and meaningful career conversations."
          />
          <a href={`mailto:${PROFILE.email}`} className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-300/30 hover:bg-white/[0.07]">
            {PROFILE.email}
          </a>
          <SocialLinks />
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10 text-center text-sm text-slate-500 sm:px-6">
        <p className="font-medium tracking-[0.28em] text-slate-300">{PROFILE.footerBrand}</p>
        <p className="mt-3">{PROFILE.footerCopyright}</p>
        <p className="mt-1">{PROFILE.footerLine}</p>
      </footer>
    </main>
  );
}
