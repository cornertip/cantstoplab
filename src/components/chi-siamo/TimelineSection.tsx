import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timeline = [
  { year: "2017", title: "La nascita", desc: "CantStopLab viene fondato ad Acerra come laboratorio di comunicazione e cultura digitale. Primi workshop e corsi di web marketing sul territorio." },
  { year: "2018", title: "La comunità", desc: "Organizziamo eventi al Castello dei Conti di Acerra. Nasce la CantStopLab Academy: corsi di social media, fotografia, didattica digitale per imprese e scuole." },
  { year: "2019", title: "Il salto", desc: "I primi brand ci affidano la gestione completa dei loro social. Iniziamo a produrre contenuti professionali e strategie su misura." },
  { year: "2020", title: "La sfida", desc: "Il digitale diventa essenziale. Supportiamo i brand locali nel pivot verso l'online, rafforzando la nostra expertise in contenuti digitali." },
  { year: "2021", title: "La crescita", desc: "Il team si allarga, i clienti aumentano e superiamo i primi traguardi importanti in termini di visualizzazioni organiche." },
  { year: "2022", title: "CantStopLab SRL", desc: "Il laboratorio diventa agenzia strutturata. Nasce la SRL. Nuovo posizionamento: \"Strategie in formato short per brand che emozionano.\"" },
  { year: "2023", title: "Short video first", desc: "Specializzazione totale in Reels e TikTok. Casi studio significativi e numeri che parlano da soli." },
  { year: "2024–25", title: "Il nuovo capitolo", desc: "Nuovo sito, nuovi servizi, traguardi importanti. Espandiamo l'impatto con brand in tutta Italia." },
];

const TimelineSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-sans font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Il Nostro Percorso
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight">
            Ogni anno, un passo <span className="italic text-csl-yellow">avanti</span>.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-border hidden md:block" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              className="flex gap-6 md:gap-10 mb-10 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex flex-col items-center shrink-0">
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-csl-yellow/10 border-2 border-csl-yellow flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-csl-yellow">{item.year}</span>
                </div>
              </div>
              <div className="pt-3 pb-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
