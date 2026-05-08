export function CTA() {
  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16 lg:p-24 grain">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)",
            }}
          />
          <div className="relative max-w-3xl">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
              Let's build it
            </div>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.92]">
              Send your business name. <br />
              I'll send back a <em className="text-primary not-italic">free preview.</em>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl">
              No deposit. No card. No catch. If you love it, it's $599. If not, you keep the
              feedback and we part as friends.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:slateone.dev@gmail.com?subject=Free%20preview%20request&body=Business%20name%3A%0AWhat%20you%20do%3A%0ACurrent%20website%20(if%20any)%3A"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-semibold hover:opacity-90 transition"
              >
                Email me — get my free preview
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="mailto:slateone.dev@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-base font-medium hover:bg-secondary transition"
              >
                slateone.dev@gmail.com
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              <span>✦ Reply within 24h</span>
              <span>✦ Preview in 48h</span>
              <span>✦ Pay only on approval</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
