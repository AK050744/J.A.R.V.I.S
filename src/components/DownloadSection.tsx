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
        className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-card/80 p-10 text-center backdrop-blur shadow-[0_0_60px_-20px_hsl(195_100%_50%/0.1)]"
      >
        <p className="mb-4 font-display text-xs uppercase tracking-[0.3em] text-primary">Ready to Go</p>
        <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">
          Get J.A.R.V.I.S Now
        </h2>
        <p className="mt-4 text-muted-foreground">
          Download J.A.R.V.I.S for free. Run it locally on your machine, keep your data private, and let your AI handle the rest.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2 px-8 font-display text-xs uppercase tracking-wider">
            <Download className="h-5 w-5" />
            Download Now
          </Button>
          <Button variant="outline" size="lg" className="gap-2 px-8 font-display text-xs uppercase tracking-wider" asChild>
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
