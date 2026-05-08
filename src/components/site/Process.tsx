import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    t: "Send your info",
    b: "Business name, what you do, current site if you have one. A few sentences is enough.",
  },
  {
    n: "02",
    t: "I build the site",
    b: "Full website designed and hand-coded inside 48 hours. No mockups — the real, finished thing.",
  },
  {
    n: "03",
    t: "You review it",
    b: "Live preview link in your inbox. Tell me what to change. Two free revision rounds.",
  },
  {
    n: "04",
    t: "We go live",
    b: "Once approved, you pay. I push it live on your domain same day and hand off everything.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
            How it works
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Four steps. <em className="not-italic scribble">Zero risk.</em>
          </h2>
        </motion.div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background hover:bg-secondary transition-colors p-8 flex flex-col gap-6 min-h-[260px] group"
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-sm text-foreground">{s.n}</div>
                <motion.div
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>
              <div>
                <h3 className="font-display text-3xl mb-3">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.b}</p>
              </div>
              <div className="mt-auto h-px bg-border group-hover:bg-foreground transition-colors" />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
