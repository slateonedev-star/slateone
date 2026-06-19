import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import slate from "@/assets/slate-blob.png";

type Variant = "core" | "prism" | "pulse";

type Props = {
  size?: number;
  label?: string;
  caption?: string;
  align?: "left" | "center" | "right";
  rotate?: number;
  variant?: Variant;
};

/* ──────────────────────────────────────────────────────────────
   Three distinct sculptures — each with unique form, rings & feel
   ────────────────────────────────────────────────────────────── */

export function SlateOrb({
  size = 280,
  label = "· slate · one ·",
  caption,
  align = "center",
  rotate = 0,
  variant = "core",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const r = useTransform(scrollYProgress, [0, 1], [rotate - 8, rotate + 12]);
  const s = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.97]);

  const justify =
    align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center";

  return (
    <div ref={ref} className={`relative flex ${justify} py-10 md:py-16`}>
      <motion.div style={{ y, rotate: r, scale: s }} className="relative pointer-events-none">
        {/* ═══════════════════════════════════════════════════════
            PRISM  —  crystalline polyhedron, sharp & engineered
            ═══════════════════════════════════════════════════════ */}
        {variant === "prism" && (
          <>
            {/* outer dashed hex-boundary */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: size * 1.5,
                  height: size * 1.5,
                  clipPath:
                    "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  border: "1px dashed rgba(148,163,184,0.22)",
                }}
              />
            </motion.div>

            {/* inner square ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="border border-foreground/12 flex items-center justify-center"
                style={{ width: size * 1.15, height: size * 1.15 }}
              >
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.34em] text-muted-foreground font-mono absolute -top-5">
                  {label}
                </span>
              </div>
            </motion.div>

            {/* crystalline ghost shards */}
            <motion.div
              animate={{ rotate: [0, 90, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="absolute opacity-20 bg-gradient-to-br from-slate-400/30 to-transparent"
                style={{
                  width: size * 0.85,
                  height: size * 0.85,
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
            </motion.div>
            <motion.div
              animate={{ rotate: [45, -45, 45] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="absolute opacity-15 bg-gradient-to-tr from-slate-500/20 to-transparent"
                style={{
                  width: size * 0.7,
                  height: size * 0.7,
                  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              />
            </motion.div>

            {/* halo */}
            <div
              aria-hidden
              className="absolute inset-[12%] rounded-full bg-foreground/8 blur-3xl"
            />

            {/* sculpture — faceted diamond */}
            <motion.div
              className="relative flex items-center justify-center"
              style={{ width: size, height: size }}
              animate={{ rotate: [0, 6, -4, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className="absolute bg-gradient-to-b from-slate-300/80 via-slate-500/60 to-slate-700/80"
                style={{
                  width: size * 0.75,
                  height: size * 0.75,
                  clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  boxShadow:
                    "0 30px 60px rgba(30,30,45,0.4), inset 0 -20px 40px rgba(0,0,0,0.3), inset 0 20px 40px rgba(255,255,255,0.15)",
                }}
              />
              {/* top facet highlight */}
              <div
                className="absolute bg-gradient-to-b from-white/30 to-transparent"
                style={{
                  width: size * 0.35,
                  height: size * 0.28,
                  clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                  top: size * 0.13,
                }}
              />
            </motion.div>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════
            CORE  —  smooth torus / ring, elegant & continuous
            ═══════════════════════════════════════════════════════ */}
        {variant === "core" && (
          <>
            {/* single slow orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="rounded-full border border-foreground/12 flex items-center justify-center"
                style={{ width: size * 1.4, height: size * 1.4 }}
              >
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.34em] text-muted-foreground font-mono absolute -top-5">
                  {label}
                </span>
              </div>
            </motion.div>

            {/* second counter-ring (thinner) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="rounded-full border border-dashed border-foreground/8"
                style={{ width: size * 1.2, height: size * 1.2 }}
              />
            </motion.div>

            {/* soft halo */}
            <div
              aria-hidden
              className="absolute inset-[10%] rounded-full bg-foreground/8 blur-3xl"
            />

            {/* sculpture — smooth torus ring */}
            <motion.div
              className="relative flex items-center justify-center"
              style={{ width: size, height: size }}
              animate={{ rotate: [0, -5, 3, 0] }}
              transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* outer ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: size * 0.8,
                  height: size * 0.8,
                  background:
                    "conic-gradient(from 0deg, #94a3b8, #475569, #1e293b, #64748b, #94a3b8)",
                  boxShadow:
                    "0 40px 80px rgba(30,30,45,0.45), inset 0 0 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(148,163,184,0.2)",
                }}
              />
              {/* inner cutout */}
              <div
                className="absolute rounded-full bg-background"
                style={{
                  width: size * 0.45,
                  height: size * 0.45,
                  boxShadow: "inset 0 4px 20px rgba(0,0,0,0.3)",
                }}
              />
              {/* inner rim light */}
              <div
                className="absolute rounded-full"
                style={{
                  width: size * 0.48,
                  height: size * 0.48,
                  border: "1px solid rgba(148,163,184,0.25)",
                }}
              />
            </motion.div>
          </>
        )}

        {/* ═══════════════════════════════════════════════════════
            PULSE  —  energetic star-burst, explosive & alive
            ═══════════════════════════════════════════════════════ */}
        {variant === "pulse" && (
          <>
            {/* expanding wave rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden
                initial={{ opacity: 0.3 }}
                animate={{ scale: [1, 1.7], opacity: [0.25, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.4,
                  ease: "easeOut",
                }}
              >
                <div
                  className="rounded-full border border-foreground/12"
                  style={{ width: size * 1.3, height: size * 1.3 }}
                />
              </motion.div>
            ))}

            {/* thick rotating boundary */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="rounded-full border-2 border-foreground/10 flex items-center justify-center"
                style={{ width: size * 1.35, height: size * 1.35 }}
              >
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.34em] text-muted-foreground font-mono absolute -top-5">
                  {label}
                </span>
              </div>
            </motion.div>

            {/* strong halo */}
            <div
              aria-hidden
              className="absolute inset-[5%] rounded-full bg-foreground/12 blur-3xl"
            />

            {/* sculpture — compass star burst */}
            <motion.div
              className="relative flex items-center justify-center"
              style={{ width: size, height: size }}
              animate={{ rotate: [0, 8, -6, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* 8-point star */}
              {[0, 45, 90, 135].map((deg) => (
                <div
                  key={deg}
                  className="absolute"
                  style={{
                    width: size * 0.12,
                    height: size * 0.9,
                    background:
                      "linear-gradient(180deg, rgba(148,163,184,0.9) 0%, rgba(71,85,105,0.6) 50%, rgba(30,41,59,0.4) 100%)",
                    borderRadius: "2px",
                    transform: `rotate(${deg}deg)`,
                    boxShadow: "0 20px 40px rgba(30,30,45,0.35)",
                  }}
                />
              ))}
              {/* center sphere */}
              <div
                className="absolute rounded-full"
                style={{
                  width: size * 0.3,
                  height: size * 0.3,
                  background:
                    "radial-gradient(circle at 35% 35%, #cbd5e1, #64748b, #1e293b)",
                  boxShadow:
                    "0 20px 50px rgba(30,30,45,0.5), inset 0 -10px 30px rgba(0,0,0,0.4), 0 0 40px rgba(148,163,184,0.2)",
                }}
              />
            </motion.div>
          </>
        )}

        {/* ─── Floor reflection (shared) ─── */}
        <div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-[50%] blur-2xl pointer-events-none bg-foreground/20"
          style={{ width: size * 0.6, height: 24 }}
          aria-hidden
        />
      </motion.div>

      {caption && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] font-mono text-muted-foreground whitespace-nowrap">
          {caption}
        </div>
      )}
    </div>
  );
}
