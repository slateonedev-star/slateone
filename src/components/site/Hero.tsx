export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden grain">
      {/* radial glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 16%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for 2 projects this month — GTA &amp; remote
        </div>

        <h1 className="font-display text-[14vw] md:text-[9vw] lg:text-[7.5rem] xl:text-[9rem] leading-[0.95] tracking-tight max-w-6xl">
          Websites that <em className="text-primary not-italic">earn</em> their keep.
          <br />
          Built in 48 hours.
        </h1>

        <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
          I design and hand-code conversion-first websites for local businesses. You get a live
          preview before you pay a cent. If you don't love it, you don't pay.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-semibold hover:opacity-90 transition"
          >
            Get a free preview
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-medium text-foreground/90 hover:bg-secondary transition"
          >
            See recent work
          </a>
          <span className="text-sm text-muted-foreground">No deposit. No contracts.</span>
        </div>

        <Stats />
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { k: "10+", v: "Sites shipped" },
    { k: "48h", v: "Avg turnaround" },
    { k: "$599", v: "Starting price" },
    { k: "100%", v: "Pay on approval" },
  ];
  return (
    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-border">
      {items.map((it, i) => (
        <div
          key={it.k}
          className={`py-6 ${i !== 0 ? "md:border-l border-border" : ""} ${
            i % 2 !== 0 ? "border-l border-border md:border-l" : ""
          }`}
        >
          <div className="font-display text-4xl md:text-5xl leading-none">{it.k}</div>
          <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {it.v}
          </div>
        </div>
      ))}
    </div>
  );
}
