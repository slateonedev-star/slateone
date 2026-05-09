import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import slate from "@/assets/slate-blob.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const blobRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] pt-28 pb-20 lg:pt-32 overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid mask-fade-y opacity-50 pointer-events-none" />

      {/* Top status pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 mx-auto max-w-7xl px-5 lg:px-10 mb-8 flex items-center justify-between"
      >
        <div className="hidden md:block text-xs uppercase tracking-[0.28em] text-muted-foreground font-mono">
          Studio · Toronto / GTA
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground" />
          </span>
          2 spots open · May
        </div>
      </motion.div>

      {/* Central composition */}
      <motion.div
        style={{ y: textY }}
        className="relative mx-auto max-w-[1500px] px-4 lg:px-10"
      >
        <div className="relative flex items-center justify-center">
          {/* Background giant text */}
          <h1 className="relative font-display text-center leading-[0.82] tracking-tight select-none w-full">
            <BigWord delay={0} className="block text-[28vw] md:text-[22vw] lg:text-[18rem] xl:text-[22rem]">
              CH
              <span className="inline-block relative align-middle mx-[0.05em]">
                {/* Reserve space for blob */}
                <span className="invisible">A</span>
                <motion.span
                  style={{ y: blobY, scale: blobScale, rotate: blobRotate, x: sx, translateY: sy }}
                  className="absolute inset-0 -translate-y-[12%] flex items-center justify-center pointer-events-none"
                >
                  <motion.img
                    src={slate}
                    alt=""
                    width={1024}
                    height={1024}
                    className="w-[180%] h-[180%] max-w-none object-contain float-mid"
                    style={{ filter: "drop-shadow(0 40px 80px rgba(40,40,55,0.35))" }}
                    animate={{ rotate: [0, 4, -3, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.span>
              </span>
              D
            </BigWord>
          </h1>

          {/* Rotating circular caption */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute left-2 md:left-10 top-6 w-20 h-20 md:w-28 md:h-28 rounded-full border border-foreground/20 hidden sm:flex items-center justify-center"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">
              · sites · that · sell ·
            </span>
          </motion.div>

          {/* Floating tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute right-4 md:right-12 top-12 md:top-20 rounded-full bg-foreground text-background px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] font-mono float-fast"
          >
            est. 2024
          </motion.div>
        </div>

        {/* Subhead block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative z-10 mt-8 md:mt-2 grid md:grid-cols-3 gap-8 items-end"
        >
          <div className="md:col-span-1">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3 font-mono">
              ◆ About
            </div>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Hand-coded websites for local businesses.
              Built in 48 hours. <span className="text-muted-foreground">You don't pay until you love it.</span>
            </p>
          </div>

          <div className="md:col-span-1 md:text-center">
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              <em className="not-italic">STUDIO</em>
            </h2>
          </div>

          <div className="md:col-span-1 md:text-right flex flex-col md:items-end gap-4">
            <a
              href="#contact"
              className="shine group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition self-start md:self-end"
            >
              <span className="w-2 h-2 rounded-full bg-background animate-pulse" />
              Get free preview
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>→</motion.span>
            </a>
            <div className="text-xs text-muted-foreground font-mono">
              No deposit · No contracts · 48h
            </div>
          </div>
        </motion.div>

        <Stats />
      </motion.div>
    </section>
  );
}

function BigWord({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.span>
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
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-border"
    >
      {items.map((it, i) => (
        <motion.div
          key={it.k}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.6 }}
          className={`py-6 ${i !== 0 ? "md:border-l border-border" : ""} ${
            i % 2 !== 0 ? "border-l border-border md:border-l" : ""
          }`}
        >
          <div className="font-display text-4xl md:text-5xl leading-none">{it.k}</div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-mono">
            {it.v}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
