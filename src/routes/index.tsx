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
        <Templates />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
