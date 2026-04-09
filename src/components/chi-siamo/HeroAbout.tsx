import { motion } from "framer-motion";
import teamFormal from "@/assets/team-formal.jpg";

const HeroAbout = () => (
  <section className="relative pt-32 pb-24 bg-csl-dark overflow-hidden">
    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-csl-dark/90 to-csl-dark/70 z-10" />
    <img
      src={teamFormal}
      alt="CantStop Lab team"
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />
    <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
      <motion.p
        className="text-sm font-sans font-medium uppercase tracking-[0.25em] text-white/60 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Chi Siamo
      </motion.p>
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-display text-white leading-[1.1] mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Non facciamo social media.{" "}
        <span className="italic text-csl-yellow">Costruiamo brand</span> che le persone ricordano.
      </motion.h1>
      <motion.p
        className="text-lg text-white/70 font-sans leading-relaxed max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        CantStopLab nasce nel 2017 ad Acerra con un'idea chiara: i social non sono una vetrina — sono il territorio dove il tuo brand conquista la sua posizione. Da allora, ogni strategia che creiamo, ogni Reel che produciamo, ogni campagna che lanciamo ha un unico obiettivo: rendere il tuo brand impossibile da ignorare.
      </motion.p>
    </div>
  </section>
);

export default HeroAbout;
