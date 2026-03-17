import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Agent", href: "#agent" },
  { label: "How It Works", href: "#how-it-works" },
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
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">Jarvis AI</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm">
            Documentation
          </Button>
          <Button size="sm">Download Free</Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
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
                className="text-sm text-muted-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button size="sm" className="w-full">Download Free</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
