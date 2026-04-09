import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Ear, Target, Video, CalendarCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Ear,
    title: "Ascolto",
    desc: "Conosciamo il tuo brand a fondo. Analizziamo i tuoi social, il tuo mercato, i tuoi competitor e il tuo pubblico. Non ci interessa cosa fanno gli altri: ci interessa capire cosa rende unico te.",
  },
  {
    icon: Target,
    title: "Strategia",
    desc: "Definiamo la direzione. Costruiamo una strategia social che parte dal tuo posizionamento di brand. Ogni contenuto ha un obiettivo. Ogni campagna ha una ragione. Niente pubblicazioni \"tanto per\".",
  },
  {
    icon: Video,
    title: "Produzione",
    desc: "Creiamo contenuti che fermano lo scroll. Shooting professionali, Reel, TikTok, storie, caroselli. Produciamo tutto internamente con un team creativo che vive e respira il formato short video.",
  },
  {
    icon: CalendarCheck,
    title: "Gestione",
    desc: "Ti liberiamo dal peso dei social. Programmazione, pubblicazione, gestione delle storie, community management. Ci prendiamo cura della tua presenza online giorno per giorno.",
  },
  {
    icon: BarChart3,
    title: "Analisi",
    desc: "Misuriamo tutto. Miglioriamo sempre. Report mensili, analisi delle performance, ottimizzazione continua della strategia. I numeri ci guidano, la creatività ci distingue.",
  },
];

const MethodSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-24 bg-csl-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sm font-sans font-medium uppercase tracking-[0.25em] text-white/50 mb-6">
            Il Metodo CantStopLab
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight mb-6">
            Non improvvisiamo. Abbiamo un <span className="italic text-csl-yellow">metodo</span>.
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto leading-relaxed">
            Ogni brand che seguiamo attraversa un percorso strutturato, pensato per trasformare la tua presenza social da caotica a strategica. Non partiamo mai dal "cosa pubblicare" — partiamo sempre dal "perché".
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-csl-yellow/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-6 h-6 text-csl-yellow" />
              </div>
              <div className="text-xs font-sans font-bold text-csl-yellow uppercase tracking-widest mb-2">
                Step {i + 1}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 font-sans text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
