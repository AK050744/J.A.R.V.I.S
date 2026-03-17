import { motion } from "framer-motion";
import { ArrowRight, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-glow/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 text-center">
        {/* Toggle pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-1 rounded-full border border-border bg-secondary p-1"
        >
          <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
            For Personal Use
          </span>
          <span className="px-4 py-1.5 text-sm text-muted-foreground">
            For Developers
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-5 py-2 text-sm text-muted-foreground backdrop-blur"
        >
          Download Jarvis AI — Run on Your Private Machine
          <ArrowRight className="h-4 w-4" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          AI-Powered Personal Assistant:{" "}
          <span className="bg-gradient-to-r from-primary to-glow bg-clip-text text-transparent">
            Your Voice, Your Machine
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Automate tasks, browse the web, control your system, and get real-time answers — all through voice commands running locally on your machine.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          {["100% Free & Open Source", "Runs Locally", "6+ Powerful Features"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              {t}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" className="gap-2 px-8">
            <Download className="h-5 w-5" />
            Download Now
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
