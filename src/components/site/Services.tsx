const services = [
  {
    title: "Custom Website",
    price: "from $599",
    body: "Hand-coded site built for your business. Mobile-first, fast, designed to convert visitors into paying customers.",
    featured: true,
  },
  {
    title: "Website Redesign",
    price: "from $599",
    body: "Rebuild your tired Wix or WordPress site from scratch. Better design, faster load, no platform limits.",
  },
  {
    title: "Hosting & Domain",
    price: "$20 / month",
    body: "I handle the domain, hosting and getting you live. Set it and forget it — I keep it running.",
  },
  {
    title: "Quick Fixes",
    price: "from $99",
    body: "Broken form, wrong info, outdated section? Fast fixes without rebuilding the whole site.",
  },
  {
    title: "Mobile Optimization",
    price: "from $149",
    body: "Most customers find you on a phone. I make sure your site is flawless on every screen.",
  },
  {
    title: "Free Preview First",
    price: "$0",
    body: "I build the site before you pay anything. Live preview link, your feedback, payment only when you love it.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
            Services & pricing
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Honest pricing. <em className="text-primary not-italic">No surprises.</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            One designer, no agency markups. You always know what you're paying — and you only pay
            when the site is done and you approve it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className={`relative p-8 transition-colors ${
                s.featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-background hover:bg-surface-elevated"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <span
                  className={`font-mono text-sm ${
                    s.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {s.price}
                </span>
              </div>
              <p
                className={`mt-4 leading-relaxed ${
                  s.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                }`}
              >
                {s.body}
              </p>
              {s.featured && (
                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold">
                  Most popular
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
