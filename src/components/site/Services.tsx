import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Website",
    price: "from $449",
    body: "Hand-coded site built for your business. Mobile-first, fast, and designed to convert visitors into paying customers.",
    featured: true,
  },
  {
    title: "Website Redesign",
    price: "from $449",
    body: "Rebuild your tired Wix or WordPress from scratch. Better design, faster load, no platform limits.",
  },
  {
    title: "Hosting & Domain",
    price: "$15 / month",
    body: "Domain, hosting, getting you live — I handle it all. Set it and forget it.",
  },
  {
    title: "Quick Fixes",
    price: "from $79",
    body: "Broken form, wrong info, outdated section? Fast fixes without rebuilding everything.",
  },
  {
    title: "Mobile Optimization",
    price: "from $119",
    body: "Most customers find you on a phone. I make sure your site is flawless on every screen.",
  },
  {
    title: "Free Preview First",
    price: "$0",
    body: "I build the site before you pay. Live preview, your feedback, payment only when you love it.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.22em] text-background/60 mb-4">
            Services & pricing
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Honest pricing.{" "}
            <em className="not-italic">
              No <span className="text-accent">surprises.</span>
            </em>
          </h2>
          <p className="mt-6 text-lg text-background/70">
            One designer, no agency markups. You always know what you're paying — and you only pay
            when the site is done and you approve it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-background/15 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`relative p-8 transition-colors group ${
                s.featured
                  ? "bg-accent text-accent-foreground"
                  : "bg-foreground hover:bg-[oklch(0.22_0.01_60)]"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <span
                  className={`font-mono text-sm ${
                    s.featured ? "text-accent-foreground/80" : "text-background/60"
                  }`}
                >
                  {s.price}
                </span>
              </div>
              <p
                className={`mt-4 leading-relaxed ${
                  s.featured ? "text-accent-foreground/90" : "text-background/70"
                }`}
              >
                {s.body}
              </p>
              {s.featured && (
                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold">
                  Most popular ✦
                </div>
              )}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span aria-hidden>↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
