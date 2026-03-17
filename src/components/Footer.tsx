import { Bot } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
          <Bot className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-display font-semibold text-foreground">Jarvis AI</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Jarvis AI. Open-source & free to use.
      </p>
    </div>
  </footer>
);

export default Footer;
