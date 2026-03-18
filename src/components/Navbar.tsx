import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#agent" },
  { label: "Setup", href: "#how-it-works" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Download", href: "#download" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
            <Shield className="h-4 w-4 text-primary" />
            <div className="absolute inset-0 animate-pulse-glow rounded-full bg-primary/20" />
          </div>
          <span className="font-display text-sm font-bold uppercase tracking-widest text-primary">J.A.R.V.I.S</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" className="font-display text-xs uppercase tracking-wider">
            Docs
          </Button>
          <Button size="sm" className="font-display text-xs uppercase tracking-wider">
            Download
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border md:hidden"
        >
          <div className="container flex flex-col gap-4 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-xs uppercase tracking-wider text-muted-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button size="sm" className="w-full font-display text-xs uppercase tracking-wider">Download</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
