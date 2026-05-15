import { useEffect, useRef } from "react";

/**
 * Cinematic ambient backdrop layer for the hero.
 * Canvas-based drifting particles + soft gradient orbs.
 * No external libs, no video files, ~5kb.
 */
export function HeroFilm() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    type P = { x: number; y: number; r: number; vx: number; vy: number; a: number };
    const N = reduced ? 0 : 42;
    const parts: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      r: 0.6 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.18,
      vy: -0.05 - Math.random() * 0.12,
      a: 0.15 + Math.random() * 0.45,
    }));

    let t = 0;
    const tick = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // Soft drifting orbs (background)
      t += 0.0025;
      const cx = w * 0.5 + Math.cos(t) * w * 0.08;
      const cy = h * 0.55 + Math.sin(t * 1.3) * h * 0.05;

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.55);
      grad.addColorStop(0, "rgba(120,130,160,0.18)");
      grad.addColorStop(0.5, "rgba(80,90,120,0.06)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      const grad2 = ctx.createRadialGradient(w * 0.85, h * 0.2, 0, w * 0.85, h * 0.2, w * 0.5);
      grad2.addColorStop(0, "rgba(200,180,150,0.10)");
      grad2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      // Particles
      ctx.fillStyle = "rgba(30,30,40,1)";
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none opacity-90"
    />
  );
}
