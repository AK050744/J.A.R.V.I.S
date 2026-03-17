import { motion } from "framer-motion";

const stack = [
  { name: "Python", emoji: "🐍", desc: "Core AI logic & reasoning" },
  { name: "Selenium", emoji: "🌐", desc: "Web automation & recon" },
  { name: "SpeechRecognition", emoji: "🎤", desc: "Voice interface module" },
  { name: "Pyttsx3", emoji: "🔊", desc: "Text-to-speech engine" },
  { name: "FastAPI / Flask", emoji: "⚡", desc: "Backend API framework" },
  { name: "BeautifulSoup", emoji: "🧹", desc: "Data extraction & scraping" },
];

const TechStackSection = () => (
  <section id="tech-stack" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-accent">Under the Hood</p>
        <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">
          The <span className="text-primary">Arsenal</span>
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 backdrop-blur transition-colors hover:border-primary/30 hover:shadow-[0_0_20px_-8px_hsl(195_100%_50%/0.15)]"
          >
            <span className="text-3xl">{s.emoji}</span>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">{s.name}</p>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
