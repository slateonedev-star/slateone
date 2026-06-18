import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import slate from "@/assets/slate-blob.png";

type Props = {
  size?: number; // px max width
  label?: string;
  caption?: string;
  align?: "left" | "center" | "right";
  rotate?: number;
  invert?: boolean;
};

/**
 * Decorative slate sculpture — drop between sections as a punctuation mark.
 * Parallax-rotates on scroll, slow float, orbiting micro-label.
 */
export function SlateOrb({
  size = 280,
  label = "· slate · one ·",
  caption,
  align = "center",
  rotate = 0,
  invert = false,
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
      <motion.div
        style={{ y, rotate: r, scale: s }}
        className="relative pointer-events-none"
      >
        {/* orbiting label */}
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

        {/* halo */}
        <div
          aria-hidden
          className="absolute inset-[10%] rounded-full bg-foreground/10 blur-3xl"
        />

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
            filter: invert
              ? "invert(1) brightness(2.2) drop-shadow(0 30px 60px rgba(0,0,0,0.45))"
              : "drop-shadow(0 40px 80px rgba(30,30,45,0.4)) drop-shadow(0 0 30px rgba(100,116,139,0.18))",
          }}
          animate={{ rotate: [0, 4, -3, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* floor reflection */}
        <div
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-[50%] blur-2xl pointer-events-none ${
            invert ? "bg-background/40" : "bg-foreground/25"
          }`}
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
