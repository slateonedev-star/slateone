import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Work } from "@/components/site/Work";
import { Templates } from "@/components/site/Templates";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { SlateOrb } from "@/components/site/SlateOrb";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    document.title = "slate/one — GTA Web Design Studio | Custom Sites from $599";
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <SlateOrb size={240} label="· hand · coded · in · 48h ·" caption="◆ chapter ii — the kit" />
        <Templates />
        <Services />
        <SlateOrb size={200} label="· built · to · convert ·" caption="◆ chapter iii — the process" />
        <Process />
        <Testimonials />
        <FAQ />
        <SlateOrb size={300} label="· your · turn · your · turn ·" caption="◆ final — let's build" />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
