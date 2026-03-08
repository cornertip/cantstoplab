import { ArrowDownRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { number: "100+", label: "Brand Gestiti" },
  { number: "50M+", label: "View Generate" },
  { number: "5000+", label: "Reel Prodotti" },
];

const INSTAGRAM_URL = "https://www.instagram.com/stories/highlights/18012809396610882/";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
          {/* Left - Text (60%) */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display leading-[0.95] tracking-tight text-foreground mb-6"
            >
              Il Tuo Brand Merita
              <br />
              <span className="italic text-primary">Contenuti che Esplodono</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-muted-foreground max-w-md mb-8 font-sans"
            >
              Trasformiamo la passione in performance attraverso strategie in formato short per brand che emozionano.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <a
                href="#contatti"
                className="btn-gold text-base inline-flex items-center gap-3 px-10 py-4 text-lg group"
              >
                Inizia ora
                <ArrowDownRight size={20} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
              </a>
            </motion.div>

            {/* Stats - small, under CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-12"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-display italic text-foreground">{s.number}</p>
                  <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Vertical Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-[9/16] w-[280px] sm:w-[320px] rounded-[2rem] bg-secondary overflow-hidden relative group cursor-pointer block"
            >
              {/* Play button overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
                </div>
                <p className="text-secondary-foreground/70 font-sans text-sm">Guarda il nostro showreel</p>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-6 right-6 flex gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div className="w-3 h-3 rounded-full bg-secondary-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-secondary-foreground/20" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Subtle decorative circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full border border-border/30 opacity-40" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full border border-primary/20 opacity-30" />
    </section>
  );
};

export default HeroSection;
