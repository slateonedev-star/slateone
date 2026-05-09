export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-2xl text-foreground leading-none">slate</span>
          <span className="font-display italic text-base text-muted-foreground leading-none">/one</span>
          <span className="ml-3 text-sm">studio · est. 2024</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
          <a href="mailto:slateone.dev@gmail.com" className="hover:text-foreground">Email</a>
        </div>
        <div>© {new Date().getFullYear()} — All rights reserved.</div>
      </div>
    </footer>
  );
}
