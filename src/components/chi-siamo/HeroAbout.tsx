import { motion } from "framer-motion";
import teamFormal from "@/assets/team-formal.jpg";

const HeroAbout = () => (
  <section className="pt-32 pb-20 bg-csl-dark">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.p
            className="text-sm font-sans font-medium uppercase tracking-[0.25em] text-csl-yellow mb-6"
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
            className="text-lg text-white/65 font-sans leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            CantStopLab nasce nel 2017 ad Acerra con un'idea chiara: i social non sono una vetrina — sono il territorio dove il tuo brand conquista la sua posizione. Da allora, ogni strategia che creiamo, ogni Reel che produciamo, ogni campagna che lanciamo ha un unico obiettivo: rendere il tuo brand impossibile da ignorare.
          </motion.p>
        </div>

        {/* Image */}
        <motion.div
          className="rounded-[2rem] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={teamFormal}
            alt="Il team di CantStop Lab"
            className="w-full h-[480px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroAbout;
