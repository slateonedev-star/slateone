import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="relative py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
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
            Open the case study for each — or jump straight to the live site.
          </div>
        </motion.div>

        <div className="border-t border-foreground/15">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block border-b border-foreground/15 overflow-hidden"
    >
      <Link to="/work/$slug" params={{ slug: project.slug }} className="block py-8 md:py-10 relative">
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
        <div className="relative mt-3 md:mt-2 ml-0 md:ml-[8.33%] flex items-center gap-4">
          <span className="font-mono text-xs text-muted-foreground group-hover:text-background/70 transition-colors">
            → Open case study
          </span>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-mono text-xs text-muted-foreground/70 hover:text-foreground group-hover:text-background/60 underline-offset-4 hover:underline relative z-10"
          >
            ↗ {project.domain}
          </a>
        </div>
      </Link>
    </motion.div>
  );
}
