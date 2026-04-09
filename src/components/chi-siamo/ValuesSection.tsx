import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Flame, Target, Gem, Handshake } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "Passione prima di tutto",
    desc: "La tecnica è niente senza passione. È il nostro mantra dal giorno zero. Ogni contenuto che creiamo nasce da una scintilla creativa, non da un template. Se non ci emoziona, non lo pubblichiamo.",
  },
  {
    icon: Target,
    title: "Ossessione per i risultati",
    desc: "I like sono belli. I clienti che arrivano dai social sono meglio. Lavoriamo con obiettivi concreti e misurabili perché il marketing non è arte astratta: è uno strumento di business.",
  },
  {
    icon: Gem,
    title: "Autenticità senza filtri",
    desc: "Niente fuffa, niente promesse irrealistiche. I brand che costruiamo raccontano storie vere — perché nel lungo periodo vince sempre chi è autentico.",
  },
  {
    icon: Handshake,
    title: "Partnership, non fornitura",
    desc: "Non ci consideriamo fornitori. Siamo alleati. Entriamo nel tuo progetto come se fosse nostro, perché il tuo successo è la migliore prova del nostro lavoro.",
  },
];

const ValuesSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-24 bg-csl-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-sans font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Cosa Ci Guida
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight">
            Non è solo quello che facciamo. È <span className="italic text-csl-yellow">come</span> lo facciamo.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="bg-white/70 rounded-[2rem] p-10 border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-csl-yellow/10 flex items-center justify-center mb-5">
                <v.icon className="w-6 h-6 text-csl-yellow" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
