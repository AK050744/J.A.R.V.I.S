import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadSection = () => (
  <section id="download" className="relative py-24">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl rounded-2xl border border-border bg-card/80 p-10 text-center backdrop-blur"
      >
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Ready to supercharge your machine?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Download Jarvis AI for free. Run it locally, keep your data private, and automate everything.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2 px-8">
            <Download className="h-5 w-5" />
            Download Now
          </Button>
          <Button variant="outline" size="lg" className="gap-2 px-8" asChild>
            <a href="https://github.com/AK050744" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DownloadSection;
