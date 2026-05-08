const projects = [
  {
    name: "Asphalt WorkX",
    url: "asphaltworkx.ca",
    href: "https://asphaltworkx.ca",
    tag: "Trades · Redesign",
    blurb:
      "Full redesign for a GTA paving company. Service grid, before/after gallery, guarantee strip and real reviews — built to convert callers.",
    accent: "from-amber-200/20 to-amber-500/10",
  },
  {
    name: "Onkar Home",
    url: "onkarhome.ca",
    href: "https://onkarhome.ca",
    tag: "Renovation · Redesign",
    blurb:
      "Dark luxury rebuild for a GTA renovation company. Gold accents, animated hero, 4-step process and service-area map. Upgraded from outdated WordPress.",
    accent: "from-yellow-200/15 to-orange-500/10",
  },
  {
    name: "Xpress Pizza House",
    url: "xpresspizzahousebrampton.com",
    href: "https://xpresspizzahousebrampton.com",
    tag: "Food & Dining · New build",
    blurb:
      "Bold restaurant site for a Brampton pizza spot. Animated hero, full menu, hours and direct online-order links. Built from scratch.",
    accent: "from-red-300/15 to-rose-500/10",
  },
  {
    name: "Emma B Artistry",
    url: "emmabartistry.com",
    href: "https://emmabartistry.com",
    tag: "Beauty · Redesign",
    blurb:
      "Editorial rose aesthetic for a Caledon PMU studio. Full-bleed hero, 6 service cards with pricing and a rich gallery. Upgraded from a basic Wix.",
    accent: "from-pink-200/20 to-rose-500/10",
  },
  {
    name: "Spaw Grooming Salon",
    url: "spawgrooming.com",
    href: "https://spawgrooming.com",
    tag: "Pet services · New build",
    blurb:
      "Soft sage & blush brand for a luxury grooming salon. Animated ticker, 6 service cards, testimonials and a clean booking CTA. Custom build.",
    accent: "from-emerald-200/15 to-teal-500/10",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
              Selected work · 2024 – 2026
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Real sites for real <em className="text-primary not-italic">businesses</em>.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline text-sm text-muted-foreground hover:text-foreground"
          >
            Want yours next? →
          </a>
        </div>

        <div className="grid gap-6 md:gap-8">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative grid md:grid-cols-12 gap-6 items-start rounded-2xl border border-border bg-surface hover:bg-surface-elevated transition-colors p-6 md:p-8 overflow-hidden"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${p.accent} pointer-events-none`}
              />
              <div className="relative md:col-span-1 font-mono text-sm text-muted-foreground">
                0{i + 1}
              </div>
              <div className="relative md:col-span-7">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {p.tag}
                </div>
                <h3 className="font-display text-3xl md:text-4xl mt-2">{p.name}</h3>
                <p className="mt-3 text-muted-foreground max-w-xl leading-relaxed">{p.blurb}</p>
              </div>
              <div className="relative md:col-span-4 flex md:justify-end items-center md:items-end h-full">
                <div className="font-mono text-sm text-foreground/80 group-hover:text-primary transition-colors flex items-center gap-2">
                  {p.url}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
