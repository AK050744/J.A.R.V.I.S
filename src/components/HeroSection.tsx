import { motion } from "framer-motion";
import { ArrowRight, Check, Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Arc reactor glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      {/* HUD grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(hsl(195 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50%) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="container relative z-10 text-center">
        {/* JARVIS listening image with modal */}
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mx-auto mb-8 w-48 cursor-pointer md:w-64"
            >
              <img src={jarvisImage} alt="J.A.R.V.I.S AI listening interface" className="w-full drop-shadow-[0_0_40px_hsl(195_100%_50%/0.4)] transition-transform hover:scale-105" />
            </motion.div>
          </DialogTrigger>
          <DialogContent className="border-primary/20 bg-background/95 backdrop-blur-xl sm:max-w-lg">
            <img src={jarvisImage} alt="J.A.R.V.I.S AI listening interface" className="w-full drop-shadow-[0_0_60px_hsl(195_100%_50%/0.5)]" />
            <p className="text-center font-display text-sm uppercase tracking-widest text-primary">J.A.R.V.I.S — Listening</p>
          </DialogContent>
        </Dialog>

        {/* Toggle pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-1 rounded-full border border-primary/30 bg-secondary p-1"
        >
          <span className="rounded-full bg-primary px-4 py-1.5 font-display text-xs font-medium uppercase tracking-wider text-primary-foreground">
            Personal Use
          </span>
          <span className="px-4 py-1.5 font-display text-xs uppercase tracking-wider text-muted-foreground">
            For Developers
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm text-primary backdrop-blur"
        >
          <Shield className="h-4 w-4" />
          Private AI Assistant — Runs on Your Machine
          <ArrowRight className="h-4 w-4" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto max-w-5xl font-display text-4xl font-bold uppercase leading-tight tracking-tight md:text-7xl"
        >
          <span className="text-foreground">Your Personal AI.</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            J.A.R.V.I.S at Your Service
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Automate tasks, browse the web, control your system, and get real-time intelligence — all through voice commands. Running locally on your machine.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          {["100% Free & Open Source", "Runs Locally — No Cloud", "Your Own AI Assistant"].map((t) => (
            <span key={t} className="flex items-center gap-2 font-display text-xs uppercase tracking-wider">
              <Check className="h-4 w-4 text-primary" />
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
          <Button size="lg" className="gap-2 px-8 font-display text-xs uppercase tracking-wider">
            <Download className="h-5 w-5" />
            Download J.A.R.V.I.S
          </Button>
          <Button variant="outline" size="lg" className="px-8 font-display text-xs uppercase tracking-wider">
            View Documentation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
