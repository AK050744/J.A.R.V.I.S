import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Search, Globe, BarChart3, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageSquare, label: "Your voice command", desc: "Start with a simple request or complex task using your voice" },
  { icon: Sparkles, label: "Agent deep research and reasoning", desc: "AI analyzes your request and determines the best approach" },
  { icon: Search, label: "Using tools automatically", desc: "Seamlessly integrates with Selenium, web scraping, and system APIs" },
  { icon: CheckCircle2, label: "Your expected output", desc: "Delivers exactly what you need, formatted and ready to use" },
];

const chatMessages = [
  { role: "user", text: "Hey Jarvis, search for the latest Python tutorials" },
  { role: "agent", text: "AI is researching and reasoning", icon: Sparkles },
  { role: "agent", text: "Using Selenium to search", icon: Globe },
  { role: "agent", text: "Extracting top results", icon: Search },
  { role: "agent", text: "Analyze and present findings", icon: BarChart3 },
];

const AgentSection = () => {
  return (
    <section id="agent" className="relative py-24">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 font-display text-4xl font-bold md:text-5xl"
        >
          Agent, Multi-Agent
          <br />
          and Automation
        </motion.h2>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left — steps */}
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">{s.label}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — chat mock */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card/80 p-1 backdrop-blur"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 rounded-t-xl bg-secondary px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <span className="h-3 w-3 rounded-full bg-success/60" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                jarvis-ai://local
              </div>
            </div>

            <div className="space-y-3 p-5">
              <div className="text-center font-display text-lg font-semibold text-foreground">
                Jarvis Agent
              </div>
              {chatMessages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className={`flex ${m.role === "user" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm ${
                      m.role === "user"
                        ? "border border-border bg-secondary text-foreground"
                        : "border border-primary/30 bg-primary/10 text-foreground"
                    }`}
                  >
                    {m.icon && <m.icon className="h-4 w-4 text-primary" />}
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
