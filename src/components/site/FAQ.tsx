import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "Do I really not pay until I approve the site?",
    a: "Correct. I build a full live preview first. You review, request changes, and only pay once you're happy. No deposit, no contracts.",
  },
  {
    q: "How is it only 48 hours?",
    a: "I'm one focused designer/developer — no Slack threads, no account managers, no sub-contracting. Once I have your info, I block off the time and ship it.",
  },
  {
    q: "Will I own the website?",
    a: "Yes. You own the domain, the code, and the hosting. If you ever want to leave me, I hand everything over. No lock-in.",
  },
  {
    q: "Do you do SEO and Google Maps?",
    a: "Every site ships with proper on-page SEO, schema markup, sitemap, and a Google Business Profile setup checklist.",
  },
  {
    q: "What if I'm outside the GTA?",
    a: "Most projects are remote anyway. If you're in Canada or the US, we're good. Different timezone — still good.",
  },
  {
    q: "Can you redo my Wix / WordPress / Squarespace site?",
    a: "That's most of what I do. I rebuild it from scratch as a clean, fast, hand-coded site — usually for less than what you're paying yearly for the old platform.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 lg:sticky lg:top-28 self-start"
        >
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">
            Questions
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
            Things people <em className="not-italic scribble">ask.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Don't see yours? Email me and I'll answer within the day.
          </p>
        </motion.div>
        <div className="lg:col-span-8 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-6 flex items-center justify-between gap-6 group"
                >
                  <span className="font-display text-2xl md:text-3xl">{f.q}</span>
                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center text-lg ${
                      isOpen ? "bg-accent border-accent text-accent-foreground" : "bg-background"
                    }`}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-muted-foreground leading-relaxed max-w-2xl">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
