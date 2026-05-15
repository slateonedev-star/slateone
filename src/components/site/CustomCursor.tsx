import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Bespoke morphing cursor.
 * - Hidden on touch devices.
 * - Grows + inverts on hoverable elements ([data-cursor="link"], a, button).
 * - Shows a label when [data-cursor-label] is present.
 */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const [variant, setVariant] = useState<"default" | "link" | "drag">("default");
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      const t = e.target as HTMLElement | null;
      const interactive = t?.closest(
        'a, button, [role="button"], [data-cursor="link"], input, textarea, select, label[for]'
      );
      const dragLike = t?.closest('[data-cursor="drag"]');
      const labelled = t?.closest("[data-cursor-label]") as HTMLElement | null;

      if (dragLike) setVariant("drag");
      else if (interactive) setVariant("link");
      else setVariant("default");

      setLabel(labelled?.dataset.cursorLabel ?? null);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y, visible]);

  const size = variant === "link" ? 56 : variant === "drag" ? 80 : 14;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="rounded-full bg-white -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        {label && (
          <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-black px-2 whitespace-nowrap">
            {label}
          </span>
        )}
        {variant === "drag" && !label && (
          <span className="text-[10px] font-mono text-black">drag</span>
        )}
      </motion.div>
    </motion.div>
  );
}
