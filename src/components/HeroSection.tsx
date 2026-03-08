import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-12 flex-1 flex items-center">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl lg:text-[8rem] font-display leading-[0.95] tracking-tight text-secondary-foreground mb-8"
          >
            Short Video
            <br />
            <span className="italic text-primary">Strategy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-secondary-foreground/70 max-w-xl mx-auto mb-12 font-sans"
          >
            Trasformiamo la passione in performance attraverso strategie in formato short per brand che emozionano.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#contatti"
              className="btn-gold text-base inline-flex items-center gap-3 px-10 py-5 text-lg group"
            >
              Inizia ora
              <ArrowRight size={20} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Video/Image placeholder below hero text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 pb-16 relative z-10"
      >
        <div className="relative rounded-[2rem] overflow-hidden aspect-video max-w-5xl mx-auto group cursor-pointer">
          <img
            src="/images/hero-video-placeholder.jpg"
            alt="Video produzione CantStopLab"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
          <p className="absolute bottom-6 left-6 text-secondary-foreground font-sans text-sm font-medium opacity-80">
            📹 Placeholder — Inserisci qui il tuo showreel
          </p>
        </div>
      </motion.div>

      {/* Subtle decorative circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full border border-secondary-foreground/10 opacity-40" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full border border-primary/20 opacity-30" />
    </section>
  );
};

export default HeroSection;
