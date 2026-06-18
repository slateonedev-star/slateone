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

/**
 * Decorative slate sculpture — three distinct moods:
 *  · core   — clean orbital ring (default)
 *  · prism  — layered refraction, dual counter-orbit rings
 *  · pulse  — expanding wave rings, heartbeat glow (finale)
 */
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
        {/* ─── PRISM variant — dual counter-rotating dashed rings ─── */}
        {variant === "prism" && (
          <>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="rounded-full border border-dashed border-foreground/20 flex items-center justify-center"
                style={{ width: size * 1.45, height: size * 1.45 }}
              />
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="rounded-full border border-foreground/10 flex items-center justify-center"
                style={{ width: size * 1.2, height: size * 1.2 }}
              >
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.34em] text-muted-foreground font-mono -translate-y-[calc(50%+0.5rem)] absolute top-0">
                  {label}
                </span>
              </div>
            </motion.div>
            {/* prismatic offset ghosts */}
            <img
              src={slate}
              alt=""
              aria-hidden
              width={1024}
              height={1024}
              className="absolute object-contain opacity-20"
              style={{
                width: size * 0.95,
                height: size * 0.95,
                top: -size * 0.06,
                left: size * 0.08,
                filter: "blur(1px)",
              }}
            />
            <img
              src={slate}
              alt=""
              aria-hidden
              width={1024}
              height={1024}
              className="absolute object-contain opacity-10"
              style={{
                width: size * 0.9,
                height: size * 0.9,
                top: size * 0.04,
                left: -size * 0.06,
                filter: "blur(2px)",
              }}
            />
          </>
        )}

        {/* ─── PULSE variant — expanding wave rings ─── */}
        {variant === "pulse" && (
          <>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden
                initial={{ opacity: 0.35 }}
                animate={{ scale: [1, 1.6], opacity: [0.3, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 1.2,
                  ease: "easeOut",
                }}
              >
                <div
                  className="rounded-full border border-foreground/15"
                  style={{ width: size * 1.25, height: size * 1.25 }}
                />
              </motion.div>
            ))}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="rounded-full border-2 border-foreground/10 flex items-center justify-center"
                style={{ width: size * 1.35, height: size * 1.35 }}
              >
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.34em] text-muted-foreground font-mono -translate-y-[calc(50%+0.5rem)] absolute top-0">
                  {label}
                </span>
              </div>
            </motion.div>
            {/* stronger halo */}
            <div
              aria-hidden
              className="absolute inset-[5%] rounded-full bg-foreground/15 blur-3xl"
            />
          </>
        )}

        {/* ─── CORE variant — single clean orbital ring ─── */}
        {variant === "core" && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="rounded-full border border-foreground/15 flex items-center justify-center"
                style={{ width: size * 1.35, height: size * 1.35 }}
              >
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.34em] text-muted-foreground font-mono -translate-y-[calc(50%+0.5rem)] absolute top-0">
                  {label}
                </span>
              </div>
            </motion.div>
          </>
        )}

        {/* ─── Shared halo (softer for core/prism, stronger handled in pulse) ─── */}
        {variant !== "pulse" && (
          <div
            aria-hidden
            className="absolute inset-[10%] rounded-full bg-foreground/10 blur-3xl"
          />
        )}

        {/* ─── Main slate sculpture ─── */}
        <motion.img
          src={slate}
          alt=""
          aria-hidden
          width={1024}
          height={1024}
          className="relative object-contain float-mid"
          style={{
            width: size,
            height: size,
            filter:
              variant === "prism"
                ? "drop-shadow(0 30px 60px rgba(30,30,45,0.35)) drop-shadow(0 0 20px rgba(100,116,139,0.12))"
                : variant === "pulse"
                ? "drop-shadow(0 50px 100px rgba(30,30,45,0.55)) drop-shadow(0 0 50px rgba(100,116,139,0.25))"
                : "drop-shadow(0 40px 80px rgba(30,30,45,0.4)) drop-shadow(0 0 30px rgba(100,116,139,0.18))",
          }}
          animate={{ rotate: [0, 4, -3, 0] }}
          transition={{
            duration: variant === "pulse" ? 16 : 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ─── Floor reflection ─── */}
        <div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-[50%] blur-2xl pointer-events-none bg-foreground/25"
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
