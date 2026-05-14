import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Template = {
  code: string;
  name: string;
  tagline: string;
  description: string;
  vibe: string;
  swatch: string[];
  bg: string;
  fg: string;
  accent: string;
  font: string;
  best: string;
};

const templates: Template[] = [
  {
    code: "01",
    name: "ALABASTER",
    tagline: "The high-fidelity White-Label build",
    description:
      "Pristine off-white surfaces, editorial serifs, gallery-grade spacing. Built for studios, agencies, and luxury service brands.",
    vibe: "Editorial · Refined · Quiet",
    swatch: ["#fbf9f4", "#ece7dc", "#1a1a1a", "#9a8c70"],
    bg: "#fbf9f4",
    fg: "#1a1a1a",
    accent: "#9a8c70",
    font: "'Instrument Serif', serif",
    best: "Studios · Agencies · Luxury",
  },
  {
    code: "02",
    name: "HELION",
    tagline: "The solar & technology build",
    description:
      "Heat-map gradients, animated sun loops, technical mono accents. For solar installers, EV brands, and clean-tech startups.",
    vibe: "Bright · Kinetic · Optimistic",
    swatch: ["#fff5d6", "#ffb300", "#ff6a00", "#1a0d04"],
    bg: "#fff5d6",
    fg: "#1a0d04",
    accent: "#ff6a00",
    font: "'Inter', sans-serif",
    best: "Solar · EV · Cleantech",
  },
  {
    code: "03",
    name: "APERTURE",
    tagline: "The minimalist brutalist photo build",
    description:
      "Hard grid, oversize captions, full-bleed image walls. For photographers, architects, and product-first brands.",
    vibe: "Brutal · Quiet · Image-first",
    swatch: ["#ffffff", "#0a0a0a", "#e8e8e8", "#ff3b00"],
    bg: "#ffffff",
    fg: "#0a0a0a",
    accent: "#ff3b00",
    font: "'JetBrains Mono', monospace",
    best: "Photo · Architecture · Product",
  },
  {
    code: "04",
    name: "VANTABLACK",
    tagline: "The elite dark-mode build",
    description:
      "Deep blacks, micro-interactions, surgical typography. The same engine powering this very studio.",
    vibe: "Dark · Premium · Cinematic",
    swatch: ["#0a0a0c", "#1a1a1f", "#f5f3ee", "#7a9a7e"],
    bg: "#0a0a0c",
    fg: "#f5f3ee",
    accent: "#9aa3b2",
    font: "'Instrument Serif', serif",
    best: "Studios · SaaS · Premium",
  },
  {
    code: "05",
    name: "SOLIS",
    tagline: "The interactive calculator build",
    description:
      "Custom pricing engines, live quote builders, drag-to-configure UIs. Quote → checkout in under a minute.",
    vibe: "Interactive · Tactile · Conversion",
    swatch: ["#f1f3ee", "#23302a", "#7a9a7e", "#e8b8b0"],
    bg: "#f1f3ee",
    fg: "#23302a",
    accent: "#7a9a7e",
    font: "'Inter', sans-serif",
    best: "Trades · Renos · Service biz",
  },
];

export function Templates() {
  const [active, setActive] = useState<string | null>("01");

  return (
    <section
      id="templates"
      className="relative py-28 lg:py-36 border-t border-border overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-6 items-end mb-14"
        >
          <div className="md:col-span-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">
            ◆ Templates / 05
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.92]">
              Five engines.{" "}
              <em className="not-italic scribble">Infinite outcomes.</em>
            </h2>
          </div>
          <div className="md:col-span-3 text-sm text-muted-foreground md:text-right">
            Click a template to expand the live preview. We bend it around your brand in 48 hours.
          </div>
        </motion.div>

        {/* Stack of templates — each expands inline */}
        <div className="border-t border-foreground/15">
          {templates.map((t, i) => (
            <TemplateItem
              key={t.code}
              t={t}
              index={i}
              active={active === t.code}
              onToggle={() => setActive(active === t.code ? null : t.code)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TemplateItem({
  t,
  index,
  active,
  onToggle,
}: {
  t: Template;
  index: number;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-foreground/15"
    >
      {/* Selector row */}
      <button
        type="button"
        onClick={onToggle}
        className="group relative w-full text-left py-6 md:py-8 grid grid-cols-12 gap-4 items-center transition-colors hover:bg-foreground/[0.03]"
      >
        <div className="col-span-2 md:col-span-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground font-mono">
          / {t.code}
        </div>

        <div className="col-span-10 md:col-span-3 flex items-center gap-3">
          <motion.span
            animate={{ scale: active ? 1.6 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-1.5 h-1.5 rounded-full bg-foreground"
          />
          <span
            className="font-display text-2xl md:text-4xl tracking-tight"
            style={{ letterSpacing: "-0.01em" }}
          >
            {t.name}
          </span>
        </div>

        <div className="hidden md:block col-span-5 text-sm md:text-base text-muted-foreground">
          {t.tagline}
        </div>

        <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-1">
          {t.swatch.map((c, i) => (
            <motion.span
              key={c + i}
              className="w-5 h-5 rounded-full border border-foreground/15"
              style={{ background: c }}
              animate={active ? { y: [0, -4, 0] } : { y: 0 }}
              transition={{
                duration: 1.4,
                repeat: active ? Infinity : 0,
                delay: i * 0.08,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="hidden md:flex col-span-1 justify-end text-2xl">
          <motion.span
            animate={{ rotate: active ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-foreground inline-block"
          >
            +
          </motion.span>
        </div>
      </button>

      {/* Pop-out preview, anchored under this row */}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            key="preview"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -30, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -20, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative my-6 rounded-3xl overflow-hidden border border-foreground/10 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.35)]"
              style={{ background: t.bg, color: t.fg }}
            >
              {/* Animated accent orbs */}
              <motion.div
                aria-hidden
                className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{ background: t.accent }}
                animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: t.swatch[2] }}
                animate={{ scale: [1.1, 1, 1.1], x: [0, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative grid md:grid-cols-12 gap-8 p-8 md:p-14">
                {/* Left: text */}
                <div className="md:col-span-7 flex flex-col justify-between min-h-[360px]">
                  <div>
                    <div
                      className="text-[10px] uppercase tracking-[0.32em] opacity-60"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      / template · {t.code}
                    </div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mt-4 text-5xl md:text-7xl leading-[0.92]"
                      style={{ fontFamily: t.font, letterSpacing: "-0.02em" }}
                    >
                      {t.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{ delay: 0.2 }}
                      className="mt-4 text-sm md:text-base max-w-md"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t.tagline}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 text-base md:text-lg leading-relaxed max-w-lg"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t.description}
                    </motion.p>
                  </div>

                  <div
                    className="mt-8 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.28em] opacity-70"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <span>{t.vibe}</span>
                    <span className="opacity-40">·</span>
                    <span>Best for: {t.best}</span>
                  </div>
                </div>

                {/* Right: swatch + mock */}
                <div className="md:col-span-5 relative flex flex-col gap-4">
                  <div className="grid grid-cols-4 gap-2">
                    {t.swatch.map((c, i) => (
                      <motion.div
                        key={c + i}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                        className="aspect-square rounded-xl border border-black/10"
                        style={{ background: c }}
                      />
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="relative rounded-2xl border border-black/10 overflow-hidden flex-1 min-h-[220px]"
                    style={{ background: t.swatch[0] }}
                  >
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/10">
                      <span className="w-2 h-2 rounded-full" style={{ background: t.swatch[3] }} />
                      <span className="w-2 h-2 rounded-full opacity-60" style={{ background: t.swatch[2] }} />
                      <span className="w-2 h-2 rounded-full opacity-30" style={{ background: t.swatch[2] }} />
                    </div>
                    <div className="p-4">
                      <div
                        className="text-2xl leading-tight"
                        style={{ fontFamily: t.font, color: t.fg }}
                      >
                        Your brand,
                        <br />
                        <em>elevated.</em>
                      </div>
                      <motion.div
                        className="mt-4 h-1.5 rounded-full"
                        style={{ background: t.accent }}
                        animate={{ width: ["20%", "85%", "20%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="h-12 rounded-md border border-black/10"
                            style={{ background: t.swatch[1] }}
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
