import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { getProject, projects, type Project } from "@/lib/projects";
import { StatCounter } from "@/components/site/StatCounter";
import { Magnetic } from "@/components/site/Magnetic";

export const Route = createFileRoute("/work/$slug")({
  component: ShowcasePage,
  loader: ({ params }): { project: Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
});

function ShowcasePage() {
  const { project: p } = Route.useLoaderData() as { project: Project };

  useEffect(() => {
    document.title = `${p.name} — by slate/one`;
  }, [p.name]);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const css = {
    "--p-bg": p.palette.bg,
    "--p-surface": p.palette.surface,
    "--p-fg": p.palette.fg,
    "--p-muted": p.palette.muted,
    "--p-accent": p.palette.accent,
    "--p-accent2": p.palette.accent2,
    "--p-display": p.display,
    "--p-body": p.body,
    backgroundColor: p.palette.bg,
    color: p.palette.fg,
    fontFamily: p.body,
  } as React.CSSProperties;

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div style={css} className="min-h-screen antialiased overflow-x-hidden">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md" style={{ backgroundColor: `${p.palette.bg}cc`, borderBottom: `1px solid ${p.palette.muted}33` }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-1 group" style={{ fontFamily: p.display }}>
            <span className="text-2xl leading-none">slate</span>
            <span className="italic text-base leading-none" style={{ color: p.palette.muted }}>/one</span>
          </Link>
          <div className="text-[10px] uppercase tracking-[0.3em] font-mono" style={{ color: p.palette.muted }}>
            ◆ Case study · {p.year}
          </div>
          <Link to="/" className="text-xs font-mono uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
            ← Back
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section ref={ref} className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden">
        {/* Animated background blob */}
        <motion.div
          aria-hidden
          style={{ y: heroY, scale: heroScale }}
          className="absolute -right-32 -top-20 w-[70vw] max-w-[800px] aspect-square rounded-full blur-3xl opacity-40"
        >
          <div className="w-full h-full" style={{ background: `radial-gradient(circle at 30% 30%, ${p.palette.accent}, transparent 60%), radial-gradient(circle at 70% 70%, ${p.palette.accent2}, transparent 60%)` }} />
        </motion.div>

        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute left-[-10vw] bottom-[-10vw] w-[40vw] aspect-square rounded-full blur-3xl opacity-30"
          style={{ background: `conic-gradient(from 0deg, ${p.palette.accent}, ${p.palette.accent2}, ${p.palette.accent})` }}
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] font-mono mb-8"
            style={{ color: p.palette.muted }}
          >
            <span className="inline-block w-8 h-px" style={{ backgroundColor: p.palette.accent }} />
            {p.hero.eyebrow}
          </motion.div>

          <h1
            className="leading-[0.92] tracking-tight text-[14vw] md:text-[8.5vw] lg:text-[7rem]"
            style={{ fontFamily: p.display }}
          >
            <Reveal delay={0.1}>{p.hero.title}</Reveal>
            {p.hero.italic && (
              <Reveal delay={0.3}>
                <span className="italic" style={{ color: p.palette.accent }}>
                  {" "}
                  {p.hero.italic}
                </span>
              </Reveal>
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 max-w-xl text-lg md:text-xl leading-relaxed"
            style={{ color: p.palette.muted }}
          >
            {p.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: p.palette.accent, color: p.palette.bg }}
            >
              {p.hero.cta}
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                →
              </motion.span>
            </a>
            <a
              href={`https://${p.domain}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-mono uppercase tracking-[0.22em] underline-offset-4 hover:underline"
              style={{ color: p.palette.muted }}
            >
              ↗ {p.domain}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats marquee */}
      <section className="border-y" style={{ borderColor: `${p.palette.muted}22`, backgroundColor: p.palette.surface }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10 py-10 grid grid-cols-3 gap-6">
          {p.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-6xl" style={{ fontFamily: p.display, color: p.palette.accent }}>
                <StatCounter value={s.value} />
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] font-mono" style={{ color: p.palette.muted }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid md:grid-cols-12 gap-6 mb-16 items-end">
            <div className="md:col-span-2 text-[10px] uppercase tracking-[0.3em] font-mono" style={{ color: p.palette.muted }}>
              ◆ Services
            </div>
            <h2 className="md:col-span-10 text-4xl md:text-6xl leading-[0.95]" style={{ fontFamily: p.display }}>
              Everything {p.name.toLowerCase()} <em style={{ color: p.palette.accent }}>does best.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: `${p.palette.muted}33` }}>
            {p.services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative p-8 md:p-10 transition-colors"
                style={{ backgroundColor: p.palette.bg }}
              >
                <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ backgroundColor: p.palette.accent }} />
                <div className="flex items-baseline justify-between mb-3">
                  <div className="text-[10px] uppercase tracking-[0.3em] font-mono" style={{ color: p.palette.muted }}>
                    0{i + 1}
                  </div>
                  {s.price && (
                    <div className="text-xs font-mono" style={{ color: p.palette.accent }}>
                      {s.price}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: p.display }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-md" style={{ color: p.palette.muted }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief / Build / Result narrative */}
      <section className="py-20 md:py-28 border-t" style={{ borderColor: `${p.palette.muted}22` }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid md:grid-cols-12 gap-6 mb-14 items-end">
            <div className="md:col-span-2 text-[10px] uppercase tracking-[0.3em] font-mono" style={{ color: p.palette.muted }}>
              ◆ The story
            </div>
            <h2 className="md:col-span-10 text-4xl md:text-6xl leading-[0.95]" style={{ fontFamily: p.display }}>
              How we shipped <em style={{ color: p.palette.accent }}>{p.name}.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Narrative */}
            <div className="md:col-span-6 space-y-10">
              {[
                {
                  k: "Brief",
                  t: `${p.industry} in ${p.city} needed a site that earned trust on first scroll.`,
                  d: p.blurb,
                },
                {
                  k: "Build",
                  t: `Hand-coded in ${p.display.includes("Serif") ? "an editorial type system" : "a clean modern stack"}, designed around ${p.palette.accent}.`,
                  d: `Custom layout, animated hero, mobile-first. Shipped in 7 days from kickoff to live URL on ${p.domain}.`,
                },
                {
                  k: "Result",
                  t: `${p.stats[0].value} ${p.stats[0].label.toLowerCase()} · ${p.stats[2]?.value ?? p.stats[1].value} ${(p.stats[2]?.label ?? p.stats[1].label).toLowerCase()}.`,
                  d: `${p.testimonial.quote.slice(0, 120)}${p.testimonial.quote.length > 120 ? "…" : ""}`,
                },
              ].map((row, i) => (
                <motion.div
                  key={row.k}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="border-t pt-6"
                  style={{ borderColor: `${p.palette.muted}33` }}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[10px] uppercase tracking-[0.32em] font-mono" style={{ color: p.palette.muted }}>
                      / 0{i + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl" style={{ fontFamily: p.display, color: p.palette.accent }}>
                      {row.k}
                    </h3>
                  </div>
                  <p className="mt-3 text-lg md:text-xl leading-snug" style={{ fontFamily: p.display }}>
                    {row.t}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed max-w-md" style={{ color: p.palette.muted }}>
                    {row.d}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Device mockup */}
            <div className="md:col-span-6 md:sticky md:top-24">
              <DeviceMock p={p} />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.3em] font-mono mb-8" style={{ color: p.palette.muted }}>
            ◆ Recent work
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {p.gallery.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer group"
                style={{ background: g.tone }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-[0.22em] font-mono text-white/90 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  {g.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32" style={{ backgroundColor: p.palette.surface }}>
        <div className="mx-auto max-w-4xl px-5 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-7xl mb-6"
            style={{ fontFamily: p.display, color: p.palette.accent }}
          >
            “
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-4xl leading-snug"
            style={{ fontFamily: p.display }}
          >
            {p.testimonial.quote}
          </motion.blockquote>
          <div className="mt-8 text-xs uppercase tracking-[0.3em] font-mono" style={{ color: p.palette.muted }}>
            — {p.testimonial.author}
          </div>
        </div>
      </section>

      {/* CTA + footer */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <motion.div
          aria-hidden
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[120vw] aspect-square rounded-full opacity-10"
          style={{ background: `conic-gradient(from 0deg, ${p.palette.accent}, ${p.palette.accent2}, ${p.palette.accent})` }}
        />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-10 text-center">
          <h2 className="text-5xl md:text-8xl leading-[0.95] mb-8" style={{ fontFamily: p.display }}>
            Ready to talk?
          </h2>
          <p className="max-w-xl mx-auto mb-10 text-lg" style={{ color: p.palette.muted }}>
            This site was designed & built by <Link to="/" className="underline underline-offset-4">slate/one</Link>. Want one for your business?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: p.palette.accent, color: p.palette.bg }}
            >
              Visit {p.domain} ↗
            </a>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="text-sm font-mono uppercase tracking-[0.22em] underline-offset-4 hover:underline"
              style={{ color: p.palette.muted }}
            >
              Next case → {next.name}
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t py-10" style={{ borderColor: `${p.palette.muted}22` }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.22em]" style={{ color: p.palette.muted }}>
          <Link to="/" className="hover:opacity-70">← slate/one</Link>
          <span>{p.industry} · {p.city}</span>
        </div>
      </footer>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function DeviceMock({ p }: { p: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="relative"
    >
      {/* Desktop frame */}
      <div
        className="relative rounded-2xl overflow-hidden border shadow-[0_50px_120px_-40px_rgba(0,0,0,0.45)]"
        style={{ borderColor: `${p.palette.muted}33`, background: p.palette.surface }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: `${p.palette.muted}22` }}>
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.palette.accent }} />
          <span className="w-2.5 h-2.5 rounded-full opacity-50" style={{ background: p.palette.accent2 }} />
          <span className="w-2.5 h-2.5 rounded-full opacity-30" style={{ background: p.palette.muted }} />
          <span
            className="ml-3 text-[10px] font-mono opacity-60 truncate"
            style={{ color: p.palette.muted }}
          >
            ↗ {p.domain}
          </span>
        </div>
        {/* Page mock */}
        <div className="aspect-[16/10] p-6 md:p-8 relative" style={{ background: p.palette.bg }}>
          <motion.div
            aria-hidden
            className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-50"
            style={{ background: p.palette.accent }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative">
            <div className="text-[9px] uppercase tracking-[0.3em] font-mono mb-2" style={{ color: p.palette.muted }}>
              {p.hero.eyebrow}
            </div>
            <div
              className="text-2xl md:text-4xl leading-[0.95]"
              style={{ fontFamily: p.display, color: p.palette.fg }}
            >
              {p.hero.title}{" "}
              <em style={{ color: p.palette.accent }}>{p.hero.italic}</em>
            </div>
            <motion.div
              className="mt-4 h-1.5 rounded-full"
              style={{ background: p.palette.accent }}
              animate={{ width: ["12%", "70%", "12%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-12 md:h-16 rounded-md"
                  style={{ background: p.palette.surface }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.22em]"
              style={{ background: p.palette.accent, color: p.palette.bg }}>
              {p.hero.cta} →
            </div>
          </div>
        </div>
      </div>

      {/* Floating phone */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -bottom-10 -left-4 md:-left-10 w-36 md:w-44 rounded-[28px] overflow-hidden border-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
        style={{ borderColor: p.palette.fg, background: p.palette.bg }}
      >
        <div className="aspect-[9/19] p-3 relative" style={{ background: p.palette.bg }}>
          <div className="text-[7px] uppercase tracking-[0.3em] font-mono opacity-60" style={{ color: p.palette.muted }}>
            {p.domain}
          </div>
          <div
            className="mt-2 text-base leading-[0.95]"
            style={{ fontFamily: p.display, color: p.palette.fg }}
          >
            {p.hero.title}
            <br />
            <em style={{ color: p.palette.accent }}>{p.hero.italic}</em>
          </div>
          <div className="mt-2 h-1 rounded-full" style={{ background: p.palette.accent, width: "60%" }} />
          <div className="mt-2 grid grid-cols-2 gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-6 rounded" style={{ background: p.palette.surface }} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
