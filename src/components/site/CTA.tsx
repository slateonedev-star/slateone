import { motion } from "framer-motion";
import blob from "@/assets/hero-blob.png";

export function CTA() {
  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-foreground text-background p-10 md:p-16 lg:p-24"
        >
          {/* animated floating blob */}
          <motion.img
            src={blob}
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.95 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute -bottom-20 -right-20 w-[340px] md:w-[480px] pointer-events-none float-slow"
            style={{ filter: "invert(1) brightness(2.4) hue-rotate(40deg)" }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 hidden md:flex w-28 h-28 rounded-full border border-background/30 items-center justify-center"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-background/70 font-mono">
              free · preview · free ·
            </span>
          </motion.div>

          <div className="relative max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-background/60 mb-6">
              Let's build it
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.92]">
              Send your business name. <br />
              I'll send back a{" "}
              <em className="not-italic">
                free <span className="text-accent">preview.</span>
              </em>
            </h2>
            <p className="mt-8 text-lg text-background/70 max-w-xl">
              No deposit. No card. No catch. If you love it, it's $599. If not, you keep the
              feedback and we part as friends.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:slateone.dev@gmail.com?subject=Free%20preview%20request&body=Business%20name%3A%0AWhat%20you%20do%3A%0ACurrent%20website%20(if%20any)%3A"
                className="shine group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-base font-semibold hover:opacity-90 transition"
              >
                Email me — get my free preview
                <motion.span
                  aria-hidden
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
              <a
                href="mailto:slateone.dev@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-4 text-base font-medium hover:bg-background/10 transition"
              >
                slateone.dev@gmail.com
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-background/60">
              <span>✦ Reply within 24h</span>
              <span>✦ Preview in 48h</span>
              <span>✦ Pay only on approval</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
