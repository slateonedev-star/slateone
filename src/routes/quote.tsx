import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Magnetic } from "@/components/site/Magnetic";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Build a Quote — slate/one" },
      { name: "description", content: "Configure your custom website in 60 seconds. Live pricing, no contracts." },
      { property: "og:title", content: "Build a Quote — slate/one" },
      { property: "og:description", content: "Configure your custom website in 60 seconds." },
    ],
  }),
  component: QuotePage,
});

type SiteType = { id: string; label: string; base: number; sub: string };
type AddOn = { id: string; label: string; price: number; sub: string };

const SITE_TYPES: SiteType[] = [
  { id: "landing", label: "One-pager", base: 449, sub: "Single scrollable page. 48hr build." },
  { id: "small", label: "Small Business", base: 899, sub: "3–5 pages. Services, About, Contact." },
  { id: "studio", label: "Studio / Portfolio", base: 1799, sub: "Editorial layouts, case-study pages." },
  { id: "ecom", label: "E-commerce", base: 2899, sub: "Stripe/Shopify, product pages, cart." },
];

const ADD_ONS: AddOn[] = [
  { id: "cms", label: "Headless CMS", price: 149, sub: "Edit copy & images yourself." },
  { id: "blog", label: "Blog / Field notes", price: 99, sub: "MDX posts with SEO." },
  { id: "booking", label: "Booking integration", price: 79, sub: "Cal.com / Calendly inline." },
  { id: "calc", label: "Custom calculator", price: 199, sub: "Quote engine like this one." },
  { id: "ai", label: "AI chat assistant", price: 249, sub: "Trained on your business." },
  { id: "anim", label: "Bespoke animations", price: 299, sub: "WebGL hero, scroll scenes." },
  { id: "seo", label: "SEO foundation", price: 129, sub: "Schema, OG, sitemap, lighthouse 95+." },
  { id: "i18n", label: "Bilingual (FR/EN)", price: 149, sub: "Full content translation." },
];

const SPEED = [
  { id: "standard", label: "Standard · 7 days", mult: 1, sub: "Our default tempo." },
  { id: "rush", label: "Rush · 48 hours", mult: 1.25, sub: "Drop everything, ship fast." },
  { id: "stealth", label: "Stealth · 21 days", mult: 0.85, sub: "Quiet build, deeper iteration." },
];

function QuotePage() {
  const [site, setSite] = useState<SiteType>(SITE_TYPES[1]);
  const [pages, setPages] = useState(5);
  const [addons, setAddons] = useState<Set<string>>(new Set(["seo"]));
  const [speed, setSpeed] = useState(SPEED[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
    email: z.string().trim().email("Invalid email").max(255, "Email too long"),
    message: z.string().trim().min(1, "Message is required").max(2000, "Message too long"),
  });

  const total = useMemo(() => {
    const pageCost = Math.max(0, pages - 1) * 40;
    const addonCost = ADD_ONS.filter((a) => addons.has(a.id)).reduce((s, a) => s + a.price, 0);
    return Math.round((site.base + pageCost + addonCost) * speed.mult);
  }, [site, pages, addons, speed]);

  const toggle = (id: string) =>
    setAddons((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/75 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-1">
            <span className="font-display text-2xl">slate</span>
            <span className="font-display italic text-base text-muted-foreground">/one</span>
          </Link>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">
            ◆ Quote builder · live
          </div>
          <Link to="/" className="text-xs font-mono uppercase tracking-[0.2em] hover:opacity-70">
            ← Back
          </Link>
        </div>
      </header>

      <main className="pt-24 pb-32">
        <section className="mx-auto max-w-7xl px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-12 gap-6 items-end mb-14"
          >
            <div className="md:col-span-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">
              ◆ Quote · 60 sec
            </div>
            <h1 className="md:col-span-7 font-display text-5xl md:text-7xl leading-[0.92]">
              Build your site,{" "}
              <em className="not-italic scribble">price it live.</em>
            </h1>
            <p className="md:col-span-3 text-sm text-muted-foreground md:text-right">
              No contracts. No deposit. Email at the end if you like the number.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* LEFT: configurator */}
            <div className="md:col-span-7 space-y-12">
              {/* Site type */}
              <Block step="01" title="Pick a starting point">
                <div className="grid sm:grid-cols-2 gap-3">
                  {SITE_TYPES.map((s) => {
                    const active = s.id === site.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSite(s)}
                        className={`text-left rounded-2xl border p-5 transition-all ${
                          active
                            ? "border-foreground bg-foreground/[0.04]"
                            : "border-border hover:border-foreground/40"
                        }`}
                      >
                        <div className="flex items-baseline justify-between">
                          <div className="font-display text-2xl">{s.label}</div>
                          <div className="text-xs font-mono text-muted-foreground">${s.base}</div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">{s.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </Block>

              {/* Pages */}
              <Block step="02" title="How many pages?">
                <div className="flex items-end gap-6">
                  <div className="font-display text-7xl leading-none w-20">{pages}</div>
                  <div className="flex-1">
                    <input
                      type="range"
                      min={1}
                      max={20}
                      value={pages}
                      onChange={(e) => setPages(parseInt(e.target.value))}
                      data-cursor="drag"
                      className="w-full accent-foreground"
                    />
                    <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.22em] font-mono text-muted-foreground">
                      <span>1 · landing</span>
                      <span>+$40 / extra page</span>
                      <span>20 · large</span>
                    </div>
                  </div>
                </div>
              </Block>

              {/* Add-ons */}
              <Block step="03" title="Add the good stuff">
                <div className="grid sm:grid-cols-2 gap-2">
                  {ADD_ONS.map((a) => {
                    const active = addons.has(a.id);
                    return (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => toggle(a.id)}
                        className={`group text-left rounded-xl border p-4 transition-all ${
                          active
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground/40"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="font-medium">{a.label}</div>
                            <div
                              className={`text-xs mt-0.5 ${
                                active ? "text-background/70" : "text-muted-foreground"
                              }`}
                            >
                              {a.sub}
                            </div>
                          </div>
                          <div className="text-xs font-mono shrink-0">+${a.price}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </Block>

              {/* Speed */}
              <Block step="04" title="How fast?">
                <div className="grid sm:grid-cols-3 gap-3">
                  {SPEED.map((s) => {
                    const active = s.id === speed.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSpeed(s)}
                        className={`text-left rounded-xl border p-4 transition ${
                          active
                            ? "border-foreground bg-foreground/[0.04]"
                            : "border-border hover:border-foreground/40"
                        }`}
                      >
                        <div className="font-medium">{s.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
                        <div className="text-[10px] font-mono text-muted-foreground mt-2">
                          ×{s.mult.toFixed(2)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </Block>
            </div>

            {/* RIGHT: live total */}
            <aside className="md:col-span-5">
              <div className="md:sticky md:top-24 space-y-5">
                <div className="rounded-3xl border border-foreground/15 bg-foreground text-background p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
                  <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-background/60">
                    ◆ Live total
                  </div>
                  <motion.div
                    key={total}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-4 font-display text-7xl md:text-8xl leading-none tracking-tight"
                  >
                    ${total.toLocaleString()}
                  </motion.div>
                  <div className="mt-3 text-sm text-background/70">
                    one-time · CAD · no deposit · pay only if you love it
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-background/85">
                    <Li label={site.label} value={`$${site.base}`} />
                    <Li label={`${pages} page${pages > 1 ? "s" : ""}`} value={`+$${Math.max(0, pages - 1) * 40}`} />
                    {ADD_ONS.filter((a) => addons.has(a.id)).map((a) => (
                      <Li key={a.id} label={a.label} value={`+$${a.price}`} />
                    ))}
                    <Li label={speed.label} value={`×${speed.mult.toFixed(2)}`} />
                  </ul>
                </div>

                {/* Email capture */}
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setErrorMsg(null);

                    const parsed = contactSchema.safeParse({ name, email, message });
                    if (!parsed.success) {
                      setErrorMsg(parsed.error.issues[0]?.message ?? "Please check your input.");
                      return;
                    }

                    setSubmitting(true);
                    const selectedAddons = ADD_ONS.filter((a) => addons.has(a.id));

                    const { error } = await supabase.from("quote_requests").insert({
                      name: parsed.data.name,
                      email: parsed.data.email,
                      message: parsed.data.message,
                      site_type: site.label,
                      pages,
                      speed: speed.label,
                      addons: selectedAddons.map((a) => ({ label: a.label, price: a.price })),
                      total_cad: total,
                    });

                    setSubmitting(false);

                    if (error) {
                      setErrorMsg("Couldn't send — please try again or email slateone.dev@gmail.com.");
                      return;
                    }

                    setSubmitted(true);
                  }}
                  className="rounded-3xl border border-border p-6 bg-background"
                >
                  {submitted ? (
                    <div className="text-center py-4">
                      <div className="font-display text-3xl">Got it.</div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Your request was sent. I'll reply to{" "}
                        <span className="text-foreground">{email}</span> within 24 hours with a free preview.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-muted-foreground mb-4">
                        Like the number? Send the request
                      </div>
                      <div className="space-y-2">
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full rounded-2xl border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground"
                        />
                        <input
                          type="email"
                          required
                          maxLength={255}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@business.com"
                          className="w-full rounded-2xl border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground"
                        />
                        <textarea
                          required
                          maxLength={1000}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell me about your business — what you do, what you need, any links."
                          rows={4}
                          className="w-full rounded-2xl border border-border px-4 py-3 text-sm bg-background focus:outline-none focus:border-foreground resize-none"
                        />
                        <Magnetic strength={0.25}>
                          <button
                            type="submit"
                            data-cursor="link"
                            className="shine w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold"
                          >
                            Send request — get free preview →
                          </button>
                        </Magnetic>
                      </div>
                      <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                        Your selections are included automatically.
                      </div>
                    </>
                  )}
                </form>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}

function Block({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-muted-foreground">
          / {step}
        </span>
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

function Li({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-baseline justify-between gap-3 border-b border-background/15 pb-1.5">
      <span className="truncate">{label}</span>
      <span className="font-mono text-xs shrink-0">{value}</span>
    </li>
  );
}
