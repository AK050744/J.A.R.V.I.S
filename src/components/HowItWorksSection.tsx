import { motion } from "framer-motion";
import { Download, Terminal, Mic, Rocket } from "lucide-react";

const steps = [
  { icon: Download, title: "Acquire", desc: "Clone the Stark repo or download the package to your local machine." },
  { icon: Terminal, title: "Install", desc: "Run pip install — Python, Selenium, and all modules come online." },
  { icon: Mic, title: "Activate", desc: "\"Jarvis, are you there?\" — Launch and begin voice interaction." },
  { icon: Rocket, title: "Deploy", desc: "Let J.A.R.V.I.S handle web recon, system ops, and intelligent conversations." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-primary">Deployment Sequence</p>
        <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">
          Online in <span className="text-accent">4 steps</span>
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <s.icon className="h-7 w-7" />
            </div>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2.5 py-0.5 font-display text-xs font-bold text-primary-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
