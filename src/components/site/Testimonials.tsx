import { motion } from "framer-motion";

const quotes = [
  {
    q: "slate/one rebuilt our site in two days. Calls picked up the same week we went live. Couldn't be happier.",
    a: "Onkar Singh",
    r: "Onkar Home Renovations",
  },
  {
    q: "The free preview thing sold me. I saw the real site before I paid anything. Way better than agency quotes.",
    a: "Emma B.",
    r: "Emma B Artistry",
  },
  {
    q: "Fast, fair price, and the site actually looks like 2026. Our old WordPress was costing us customers.",
    a: "Mike P.",
    r: "Asphalt WorkX",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-secondary border-y border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
            Loved by owners
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Owners. Not <em className="not-italic scribble">marketers.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.a}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-background p-8 flex flex-col justify-between gap-8 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)] transition-shadow"
            >
              <div>
                <div className="flex gap-1 mb-4 text-accent">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <motion.span
                      key={j}
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.07 + i * 0.1, type: "spring" }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <blockquote className="font-display text-2xl leading-snug">
                  <span className="text-accent mr-1">“</span>
                  {q.q}
                  <span className="text-accent ml-1">”</span>
                </blockquote>
              </div>
              <figcaption className="border-t border-border pt-4">
                <div className="font-medium">{q.a}</div>
                <div className="text-sm text-muted-foreground">{q.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
