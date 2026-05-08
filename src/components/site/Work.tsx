import { motion } from "framer-motion";
import asphalt from "@/assets/work-asphalt.jpg";
import onkar from "@/assets/work-onkar.jpg";
import pizza from "@/assets/work-pizza.jpg";
import emma from "@/assets/work-emma.jpg";
import spaw from "@/assets/work-spaw.jpg";

const projects = [
  {
    name: "Asphalt WorkX",
    url: "asphaltworkx.ca",
    href: "https://asphaltworkx.ca",
    tag: "Trades · Redesign",
    blurb:
      "Full redesign for a GTA paving company. Service grid, before/after gallery, and real reviews — built to convert callers.",
    img: asphalt,
  },
  {
    name: "Onkar Home",
    url: "onkarhome.ca",
    href: "https://onkarhome.ca",
    tag: "Renovation · Redesign",
    blurb:
      "Dark luxury rebuild for a renovation company. Gold accents, animated hero and a service-area map. Upgraded from outdated WordPress.",
    img: onkar,
  },
  {
    name: "Xpress Pizza House",
    url: "xpresspizzahousebrampton.com",
    href: "https://xpresspizzahousebrampton.com",
    tag: "Food & Dining · New build",
    blurb:
      "Bold restaurant site for a Brampton pizza spot. Animated hero, full menu, hours and direct online-order links. Built from scratch.",
    img: pizza,
  },
  {
    name: "Emma B Artistry",
    url: "emmabartistry.com",
    href: "https://emmabartistry.com",
    tag: "Beauty · Redesign",
    blurb:
      "Editorial rose aesthetic for a Caledon PMU studio. Full-bleed hero, 6 service cards with pricing and a rich gallery.",
    img: emma,
  },
  {
    name: "Spaw Grooming Salon",
    url: "spawgrooming.com",
    href: "https://spawgrooming.com",
    tag: "Pet services · New build",
    blurb:
      "Soft sage & blush brand for a luxury grooming salon. Animated ticker, 6 service cards, testimonials and a clean booking CTA.",
    img: spaw,
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
              Selected work · 2024 – 2026
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Real sites for <em className="not-italic scribble">real businesses.</em>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:inline text-sm text-muted-foreground hover:text-foreground"
          >
            Want yours next? →
          </a>
        </motion.div>

        <div className="grid gap-10 md:gap-16">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} project={p} index={i} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  reverse,
}: {
  project: (typeof projects)[number];
  index: number;
  reverse: boolean;
}) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`group grid md:grid-cols-12 gap-8 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="md:col-span-7 relative">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary aspect-[4/3]">
          <motion.img
            src={project.img}
            alt={`${project.name} website preview`}
            loading="lazy"
            width={1280}
            height={896}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          {/* hover overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500" />
          <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-background text-foreground px-4 py-2 text-sm font-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            Visit live site
            <span aria-hidden>↗</span>
          </div>
        </div>
        {/* Index badge */}
        <div className="absolute -top-4 -left-3 md:-left-5 font-mono text-xs bg-foreground text-background rounded-full px-3 py-1.5">
          0{index + 1} / 0{projects.length}
        </div>
      </div>

      {/* Text */}
      <div className="md:col-span-5">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
          {project.tag}
        </div>
        <h3 className="font-display text-4xl md:text-5xl leading-tight">{project.name}</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">{project.blurb}</p>
        <div className="mt-6 inline-flex items-center gap-2 font-mono text-sm border-b border-foreground/30 pb-1 group-hover:border-foreground transition-colors">
          {project.url}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
        </div>
      </div>
    </motion.a>
  );
}
