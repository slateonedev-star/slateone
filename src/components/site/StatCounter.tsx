import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a numeric value when scrolled into view.
 * Accepts strings like "1,400+", "4.9★", "42", "61%".
 */
export function StatCounter({
  value,
  duration = 1600,
  className,
  style,
}: {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    // Extract first number (handles "1,400+", "4.9★", "$32.99")
    const match = value.match(/[\d,.]+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const numStr = match[0].replace(/,/g, "");
    const target = parseFloat(numStr);
    if (Number.isNaN(target)) {
      setDisplay(value);
      return;
    }
    const decimals = (numStr.split(".")[1] || "").length;
    const useCommas = match[0].includes(",");
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);

    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const cur = target * eased;
      let s = decimals > 0 ? cur.toFixed(decimals) : Math.round(cur).toString();
      if (useCommas) s = Number(s).toLocaleString(undefined, { minimumFractionDigits: decimals });
      setDisplay(`${prefix}${s}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
