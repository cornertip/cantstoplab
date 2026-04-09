import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const lines = [
  "Crediamo che ogni brand abbia una storia che vale la pena raccontare.",
  "Crediamo che i social non siano un obbligo, ma un'opportunità enorme per chi sa come usarli.",
  "Crediamo che la creatività senza strategia sia solo rumore — e che la strategia senza creatività sia solo un foglio Excel.",
  "Crediamo negli imprenditori che osano, che rischiano, che non si accontentano di essere uno dei tanti.",
  "Crediamo che il formato short sia la rivoluzione più grande che il marketing abbia visto negli ultimi dieci anni — e che chi non la cavalca, la subisce.",
  "Crediamo nel lavoro di squadra, nelle notti in editing, nelle idee che arrivano sotto la doccia e nei Reel che fanno venire la pelle d'oca.",
  "Crediamo che dal territorio possano nascere eccellenze. Siamo nati ad Acerra e lavoriamo con brand in tutta Italia. Il nostro indirizzo non definisce il nostro impatto.",
];

const ManifestoSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-24 bg-csl-dark">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="text-sm font-sans font-medium uppercase tracking-[0.25em] text-white/50 mb-6">
          Il Nostro Manifesto
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight mb-16">
          In cosa <span className="italic text-csl-yellow">crediamo</span>.
        </h2>

        <div className="space-y-10">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className="text-xl sm:text-2xl font-display text-white/90 leading-relaxed italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="mt-16 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white/60 font-sans text-lg">
            Non ci fermiamo. Non ci siamo mai fermati. È nel nostro nome.
          </p>
          <p className="text-3xl font-display font-bold text-csl-yellow italic">
            CantStopLab.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
