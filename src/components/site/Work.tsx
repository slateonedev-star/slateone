import { motion } from "framer-motion";

const projects = [
  {
    name: "Asphalt WorkX",
    domain: "asphaltworkx.ca",
    href: "https://asphaltworkx.ca",
    tag: "Trades · Redesign",
    year: "2025",
    blurb:
      "Full redesign for a GTA paving company. Service grid, before/after gallery, real reviews — built to convert callers.",
  },
  {
    name: "Onkar Home",
    domain: "onkarhome.ca",
    href: "https://onkarhome.ca",
    tag: "Renovation · Redesign",
    year: "2025",
    blurb:
      "Dark luxury rebuild for a renovation company. Gold accents, animated hero, service-area map. Upgraded from outdated WordPress.",
  },
  {
    name: "Xpress Pizza House",
    domain: "xpresspizzahousebrampton.com",
    href: "https://xpresspizzahousebrampton.com",
    tag: "Food & Dining · New build",
    year: "2025",
    blurb:
      "Bold restaurant site for a Brampton pizza spot. Animated hero, full menu, hours, online-order links. Built from scratch.",
  },
  {
    name: "Emma B Artistry",
    domain: "emmabartistry.com",
    href: "https://emmabartistry.com",
    tag: "Beauty · Redesign",
    year: "2024",
    blurb:
      "Editorial rose aesthetic for a Caledon PMU studio. Full-bleed hero, six service cards with pricing, and a rich gallery.",
  },
  {
    name: "Spaw Grooming Salon",
    domain: "spawgrooming.com",
    href: "https://spawgrooming.com",
    tag: "Pet services · New build",
    year: "2024",
    blurb:
      "Soft sage & blush brand for a luxury grooming salon. Animated ticker, six service cards, testimonials, clean booking CTA.",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-6 items-end mb-16"
        >
          <div className="md:col-span-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">
            ◆ Index / 005
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.92]">
              Real sites for <em className="not-italic scribble">real businesses.</em>
            </h2>
          </div>
          <div className="md:col-span-3 text-sm text-muted-foreground md:text-right">
            Each project is live. Click any row to visit the site.
          </div>
        </motion.div>

        {/* Editorial list */}
        <div className="border-t border-foreground/15">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block border-b border-foreground/15 py-8 md:py-10 overflow-hidden"
    >
      {/* Sweep fill on hover */}
      <span
        aria-hidden
        className="absolute inset-0 bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      />

      <div className="relative grid md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors duration-500 group-hover:text-background">
        <div className="md:col-span-1 font-mono text-xs text-muted-foreground group-hover:text-background/60">
          0{index + 1}
        </div>

        <div className="md:col-span-4">
          <h3 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[0.95]">
            {project.name}
          </h3>
        </div>

        <div className="md:col-span-3 text-xs uppercase tracking-[0.22em] text-muted-foreground group-hover:text-background/70 font-mono">
          {project.tag}
        </div>

        <div className="md:col-span-3 text-sm text-muted-foreground group-hover:text-background/80 max-w-sm leading-relaxed">
          {project.blurb}
        </div>

        <div className="md:col-span-1 flex md:justify-end items-center gap-2 font-mono text-xs">
          <span className="hidden md:inline text-muted-foreground group-hover:text-background/60">
            {project.year}
          </span>
          <span
            aria-hidden
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-foreground/30 group-hover:border-background group-hover:bg-background group-hover:text-foreground transition-all duration-500 group-hover:rotate-45"
          >
            ↗
          </span>
        </div>
      </div>

      {/* Domain ticker on hover */}
      <div className="relative mt-3 md:mt-2 ml-0 md:ml-[8.33%] overflow-hidden h-5">
        <div className="font-mono text-xs text-muted-foreground group-hover:text-background/70 transition-colors">
          → {project.domain}
        </div>
      </div>
    </motion.a>
  );
}
