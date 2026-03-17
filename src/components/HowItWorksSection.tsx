import { motion } from "framer-motion";
import { Download, Terminal, Mic, Rocket } from "lucide-react";

const steps = [
  { icon: Download, title: "Download", desc: "Clone the repo or download the package to your local machine." },
  { icon: Terminal, title: "Install Dependencies", desc: "Run pip install to set up Python, Selenium, and all required libraries." },
  { icon: Mic, title: "Launch & Speak", desc: "Start Jarvis and begin giving voice commands immediately." },
  { icon: Rocket, title: "Automate Everything", desc: "Let Jarvis handle web searches, system tasks, and intelligent conversations." },
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
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          Get started in <span className="text-primary">minutes</span>
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
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <s.icon className="h-7 w-7" />
            </div>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
