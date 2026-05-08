import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import blob from "@/assets/hero-blob.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const blobR = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid mask-fade-y opacity-60 pointer-events-none" />

      {/* Floating accent blobs */}
      <motion.div
        style={{ y: blobY, rotate: blobR }}
        className="absolute -right-32 top-20 w-[420px] h-[420px] pointer-events-none hidden md:block"
      >
        <img
          src={blob}
          alt=""
          className="w-full h-full object-contain float-slow"
          style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.18))" }}
        />
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute left-6 top-44 w-24 h-24 rounded-full border border-foreground/20 pointer-events-none hidden md:flex items-center justify-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">
          scroll · scroll · scroll ·
        </span>
      </motion.div>

      <motion.div
        style={{ y }}
        className="relative mx-auto max-w-7xl px-5 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          Available · 2 spots open this month
        </motion.div>

        <h1 className="font-display text-[14vw] md:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] leading-[0.92] tracking-tight max-w-6xl">
          <AnimatedWord delay={0}>Websites</AnimatedWord>{" "}
          <AnimatedWord delay={0.08}>that</AnimatedWord>{" "}
          <span className="relative inline-block">
            <AnimatedWord delay={0.16} className="scribble italic">
              sell.
            </AnimatedWord>
          </span>
          <br />
          <AnimatedWord delay={0.24}>Built</AnimatedWord>{" "}
          <AnimatedWord delay={0.32}>in</AnimatedWord>{" "}
          <AnimatedWord delay={0.4}>48</AnimatedWord>{" "}
          <AnimatedWord delay={0.48}>hours.</AnimatedWord>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          I design and hand-code conversion-first websites for local businesses.
          You get a live preview before you pay a cent. Don't love it? Don't pay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="shine group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-base font-semibold hover:bg-foreground/90 transition"
          >
            Get my free preview
            <motion.span
              aria-hidden
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-7 py-4 text-base font-medium hover:bg-secondary transition"
          >
            See recent work
          </a>
          <span className="text-sm text-muted-foreground">No deposit · No contracts</span>
        </motion.div>

        <Stats />
      </motion.div>
    </section>
  );
}

function AnimatedWord({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.05em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-block ${className}`}
      >
        {children}
      </motion.span>
    </span>
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-border"
    >
      {items.map((it, i) => (
        <motion.div
          key={it.k}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.95 + i * 0.08, duration: 0.6 }}
          className={`py-6 ${i !== 0 ? "md:border-l border-border" : ""} ${
            i % 2 !== 0 ? "border-l border-border md:border-l" : ""
          }`}
        >
          <div className="font-display text-4xl md:text-5xl leading-none">{it.k}</div>
          <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {it.v}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
