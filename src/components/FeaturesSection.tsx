import { motion } from "framer-motion";
import { Mic, Globe, Newspaper, Settings, MessageSquare, Zap } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Recognition",
    description: "Interact with Jarvis using natural speech. Hands-free control for all your tasks.",
  },
  {
    icon: Globe,
    title: "Web Automation",
    description: "Automate Google searches, fill forms, extract data, and browse the web with Selenium.",
  },
  {
    icon: Newspaper,
    title: "News & Updates",
    description: "Get real-time news, weather updates, and general information instantly.",
  },
  {
    icon: Settings,
    title: "System Control",
    description: "Open applications, play music, manage system settings — all by voice.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    description: "Answer queries and engage in intelligent conversations powered by AI.",
  },
  {
    icon: Zap,
    title: "Real-Time Assistance",
    description: "Perform tasks dynamically based on user commands with instant responses.",
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
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-glow bg-clip-text text-transparent">
              power your setup
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Jarvis AI combines voice recognition, web automation, and system control into one seamless assistant.
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
              className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/40 hover:bg-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
