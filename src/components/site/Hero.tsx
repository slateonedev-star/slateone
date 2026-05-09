import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import slate from "@/assets/slate-blob.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const blobRotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 50, damping: 18, mass: 0.6 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 50);
      my.set((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] pt-24 pb-16 lg:pt-28 overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 bg-grid mask-fade-y opacity-50 pointer-events-none" />

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-20 mx-auto max-w-7xl w-full px-5 lg:px-10 mb-6 flex items-center justify-between"
      >
        <div className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">
          ◆ Studio · Toronto / GTA
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-4 py-1.5 text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-mono">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground" />
          </span>
          2 spots open · May
        </div>
      </motion.div>

      {/* Center stage */}
      <motion.div
        style={{ y: textY }}
        className="relative flex-1 mx-auto max-w-[1400px] w-full px-4 lg:px-10 flex flex-col items-center justify-center"
      >
        {/* Orbiting label */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute left-4 md:left-12 top-2 md:top-8 w-20 h-20 md:w-28 md:h-28 rounded-full border border-foreground/20 hidden sm:flex items-center justify-center z-20"
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
          className="absolute right-4 md:right-12 top-4 md:top-14 rounded-full bg-foreground text-background px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] font-mono float-fast z-20"
        >
          est. 2024
        </motion.div>

        {/* Slate sculpture — centerpiece */}
        <motion.div
          style={{ y: blobY, scale: blobScale, rotate: blobRotate, x: sx, translateY: sy }}
          className="relative w-[88vw] max-w-[640px] aspect-square pointer-events-none"
        >
          {/* Soft glow halo */}
          <div
            aria-hidden
            className="absolute inset-[8%] rounded-full bg-foreground/10 blur-3xl pointer-events-none"
          />
          <motion.img
            src={slate}
            alt="Slate sculpture"
            width={1024}
            height={1024}
            className="relative w-full h-full object-contain float-mid"
            style={{ filter: "drop-shadow(0 60px 120px rgba(30,30,45,0.45)) drop-shadow(0 0 40px rgba(100,116,139,0.15))" }}
            animate={{ rotate: [0, 4, -3, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Soft floor reflection */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-10 rounded-[50%] blur-2xl bg-foreground/30 pointer-events-none"
            aria-hidden
          />
        </motion.div>

        {/* Name under sculpture */}
        <motion.div
          style={{ y: nameY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mt-6 md:-mt-10 z-10 text-center"
        >
          <h1 className="font-display leading-[0.82] tracking-tight relative inline-block">
            <BigWord delay={0.2} className="block text-[34vw] md:text-[22vw] lg:text-[17rem] xl:text-[20rem]">
              slate
            </BigWord>
            <motion.span
              initial={{ opacity: 0, x: -20, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 md:-bottom-4 right-0 translate-x-[15%] md:translate-x-[40%] font-display italic text-5xl md:text-7xl lg:text-9xl text-foreground"
            >
              <span className="text-muted-foreground/50 mr-1">/</span>one
            </motion.span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 md:mt-8 text-[10px] md:text-xs uppercase tracking-[0.42em] text-muted-foreground font-mono"
          >
            ✦ web design studio · est. 2024 ✦
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative z-10 mx-auto max-w-7xl w-full px-5 lg:px-10 mt-10 grid md:grid-cols-3 gap-6 items-end"
      >
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3 font-mono">
            ◆ About
          </div>
          <p className="text-base leading-relaxed text-foreground max-w-xs">
            Hand-coded sites for local businesses. Built in 48 hours.
            <span className="text-muted-foreground"> You don't pay until you love it.</span>
          </p>
        </div>

        <div className="md:text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">
          <span className="hidden md:inline">scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="md:block mt-2"
          >
            ↓
          </motion.span>
        </div>

        <div className="md:text-right flex flex-col md:items-end gap-3">
          <a
            href="#contact"
            className="shine group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:bg-foreground/90 transition self-start md:self-end"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
            Get free preview
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>→</motion.span>
          </a>
          <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.22em]">
            No deposit · No contracts
          </div>
        </div>
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
      initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
