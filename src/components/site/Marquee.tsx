const items = [
  "Restaurants",
  "Trades",
  "Renovation",
  "Beauty studios",
  "Pet services",
  "Driving schools",
  "Law firms",
  "Med spas",
  "Realtors",
  "Cleaning",
  "Auto detailing",
  "Photographers",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section
      aria-label="Industries served"
      className="border-y border-border bg-foreground text-background overflow-hidden py-6"
    >
      <div className="flex marquee whitespace-nowrap gap-12 text-sm uppercase tracking-[0.22em]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-accent text-lg">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
