import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <Shield className="h-3.5 w-3.5 text-primary" />
        </div>
        <span className="font-display text-xs font-semibold uppercase tracking-widest text-foreground">J.A.R.V.I.S</span>
      </div>
      <p className="font-display text-[10px] uppercase tracking-wider text-muted-foreground">
        © {new Date().getFullYear()} J.A.R.V.I.S AI. Open-source & free to use.
      </p>
    </div>
  </footer>
);

export default Footer;
