import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl lg:text-[8rem] font-display leading-[0.95] tracking-tight text-foreground mb-8"
          >
            Short Video
            <br />
            <span className="italic text-primary">Strategy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-sans"
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
              <ArrowDownRight size={20} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
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
