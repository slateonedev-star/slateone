const steps = [
  {
    n: "01",
    t: "Send your info",
    b: "Business name, what you do, current site if you have one. A few sentences is enough — I'll ask follow-ups.",
  },
  {
    n: "02",
    t: "I build the site",
    b: "Full website designed and hand-coded inside 48 hours. No mockups or wireframes — the real, finished thing.",
  },
  {
    n: "03",
    t: "You review it",
    b: "Live preview link in your inbox. Tell me what to change. Two free revision rounds — most clients use one.",
  },
  {
    n: "04",
    t: "We go live",
    b: "Once approved, you pay. I push it live on your domain same day and hand off everything you need.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
            How it works
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Four steps. <em className="text-primary not-italic">Zero risk.</em>
          </h2>
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-8 flex flex-col gap-6 min-h-[260px]">
              <div className="font-mono text-sm text-primary">{s.n}</div>
              <div>
                <h3 className="font-display text-3xl mb-3">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
