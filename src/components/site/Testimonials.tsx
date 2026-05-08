const quotes = [
  {
    q: "Chad rebuilt our site in two days. Calls picked up the same week we went live. Couldn't be happier with how it looks.",
    a: "Onkar Singh",
    r: "Onkar Home Renovations",
  },
  {
    q: "The free preview thing sold me. I saw the real site before I paid anything. Way better than the quotes I was getting from agencies.",
    a: "Emma B.",
    r: "Emma B Artistry",
  },
  {
    q: "Fast, fair price, and the site actually looks like 2026. Our old WordPress was costing us customers without us realising.",
    a: "Mike P.",
    r: "Asphalt WorkX",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
            What clients say
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Owners. Not <em className="text-primary not-italic">marketers.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.a}
              className="rounded-2xl border border-border bg-background p-8 flex flex-col justify-between gap-8"
            >
              <blockquote className="font-display text-2xl leading-snug">
                <span className="text-primary mr-1">“</span>
                {q.q}
                <span className="text-primary ml-1">”</span>
              </blockquote>
              <figcaption>
                <div className="font-medium">{q.a}</div>
                <div className="text-sm text-muted-foreground">{q.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
