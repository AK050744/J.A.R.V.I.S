import { motion } from "framer-motion";
import { Mic, Globe, Newspaper, Settings, MessageSquare, Zap } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Interface",
    description: "\"Sir, I'm ready.\" — Speak naturally and J.A.R.V.I.S responds. Hands-free, like in the workshop.",
  },
  {
    icon: Globe,
    title: "Web Recon",
    description: "Automates Google searches, extracts intel, fills forms — Selenium-powered web operations at your command.",
  },
  {
    icon: Newspaper,
    title: "Intel Briefing",
    description: "Real-time news, weather, and situational updates. Your morning briefing, just like Tony gets.",
  },
  {
    icon: Settings,
    title: "System Override",
    description: "Open apps, control music, manage system settings — full control of your machine, voice-activated.",
  },
  {
    icon: MessageSquare,
    title: "AI Reasoning",
    description: "Intelligent conversations and query resolution. Think of it as your digital co-pilot for everything.",
  },
  {
    icon: Zap,
    title: "Real-Time Ops",
    description: "Dynamic task execution with instant feedback. Say it once, J.A.R.V.I.S handles the rest.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-primary">Systems Online</p>
          <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">
            All Systems{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Operational
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Six core modules powering your personal AI assistant — engineered for automation, intelligence, and control.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/40 hover:bg-card hover:shadow-[0_0_30px_-10px_hsl(195_100%_50%/0.2)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
