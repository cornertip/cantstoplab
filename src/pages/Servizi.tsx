import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import serviceContent from "@/assets/service-content.jpg";
import serviceInfluencer from "@/assets/service-influencer.jpg";
import serviceAds from "@/assets/service-ads.jpg";
import serviceLeads from "@/assets/service-leads.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceCreative from "@/assets/service-creative.jpg";

const services = [
  {
    number: "01",
    title: "Content Marketing",
    image: serviceContent,
    paragraphs: [
      "Strategia, ideazione e produzione di contenuti pensati per attirare attenzione, creare fiducia e rendere il tuo brand riconoscibile. Reel, TikTok, caroselli, video, rubriche, storytelling, contenuti educational e contenuti pensati per sostenere campagne e vendita.",
      "Ogni contenuto viene costruito con un ruolo preciso: intercettare un problema, rafforzare il posizionamento, spiegare un servizio, aumentare la percezione di valore o spingere una persona a compiere un'azione.",
      "Non ci interessa fare \"bei contenuti\". Ci interessa creare contenuti che abbiano un peso reale sul modo in cui il tuo brand viene percepito.",
    ],
  },
  {
    number: "02",
    title: "Influencer Marketing",
    image: serviceInfluencer,
    paragraphs: [
      "Selezioniamo creator, influencer e profili in linea con il tuo brand per costruire collaborazioni coerenti, credibili e realmente utili.",
      "Analizziamo pubblico, tono di voce, formato dei contenuti, affinità con il brand e capacità di generare fiducia. Gestiamo scouting, contatti, trattative, brief, coordinamento e raccolta dei contenuti.",
      "L'obiettivo non è ottenere un post in più. È fare in modo che il tuo brand venga raccontato da persone che possano renderlo più desiderabile, più credibile e più vicino al pubblico giusto.",
    ],
  },
  {
    number: "03",
    title: "Social Advertising",
    image: serviceAds,
    paragraphs: [
      "Progettiamo e gestiamo campagne Meta e TikTok Ads pensate per portare risultati concreti: richieste, prenotazioni, contatti, traffico qualificato e vendite.",
      "Ogni campagna viene costruita partendo da obiettivi, target, messaggio e offerta. Studiamo le creatività, scriviamo i copy, testiamo gli annunci e ottimizziamo tutto in base ai dati.",
      "Lavoriamo su campagne di acquisizione, remarketing, lead generation, lancio prodotti e servizi, sempre con un approccio orientato alla performance.",
    ],
  },
  {
    number: "04",
    title: "Lead Generation",
    image: serviceLeads,
    paragraphs: [
      "Costruiamo sistemi per trasformare visualizzazioni, traffico e attenzione in richieste reali.",
      "Landing page, campagne adv, lead magnet, form, funnel, automazioni e sequenze di contatto: ogni elemento viene pensato per accompagnare le persone dal primo interesse fino alla richiesta di informazioni, alla prenotazione o al preventivo.",
      "Lavoriamo per portarti contatti più qualificati, più vicini al tuo cliente ideale e più facili da convertire in clienti reali.",
    ],
  },
  {
    number: "05",
    title: "Personal Branding",
    image: serviceBranding,
    paragraphs: [
      "Costruiamo la tua presenza online per aiutarti a diventare un punto di riferimento nel tuo settore.",
      "Lavoriamo su posizionamento, tono di voce, storytelling, format, contenuti e immagine coordinata per rendere la tua comunicazione più chiara, più riconoscibile e più forte.",
      "Che tu sia un imprenditore, un founder, un professionista o il volto della tua azienda, ti aiutiamo a far emergere ciò che ti rende diverso, autorevole e memorabile.",
    ],
  },
  {
    number: "06",
    title: "Creative Direction",
    image: serviceCreative,
    paragraphs: [
      "Definiamo la direzione creativa del brand per rendere contenuti, campagne e immagine più coerenti e riconoscibili.",
      "Lavoriamo su concept, stile visivo, tono, moodboard, riferimenti creativi, linguaggio, format e linee guida per costruire una comunicazione che abbia carattere.",
      "L'obiettivo è evitare l'effetto \"brand generico\" e creare un'identità forte, capace di farsi notare anche quando il logo non si vede.",
    ],
  },
];

const blockers = [
  "C'è chi deve lavorare sui contenuti.",
  "Chi ha bisogno di campagne adv.",
  "Chi ha un problema di posizionamento.",
  "Chi comunica tanto ma non converte.",
  "Chi investe senza capire cosa sta funzionando davvero.",
];

const Servizi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-6"
          >
            I servizi CantStopLab
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display text-foreground leading-[1.05] mb-8"
          >
            Costruiamo sistemi di comunicazione che <span className="italic text-primary">servono davvero</span> al business.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed max-w-3xl"
          >
            Ogni brand ha obiettivi diversi, problemi diversi e punti deboli diversi. Per questo non lavoriamo con pacchetti standard o attività scollegate tra loro. Qui sotto trovi le aree su cui possiamo lavorare insieme.
          </motion.p>
        </div>
      </section>

      {/* SERVICES — alternating */}
      <section className="bg-background">
        {services.map((service, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <div
              key={service.number}
              className="py-24 lg:py-32 border-t border-border/40"
            >
              <div className="container mx-auto px-4">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="overflow-hidden rounded-[2rem] aspect-square bg-muted">
                      <img
                        src={service.image}
                        alt={`Illustrazione concettuale per ${service.title}`}
                        loading="lazy"
                        width={1280}
                        height={1280}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    <p className="text-sm font-sans font-medium text-primary uppercase tracking-widest mb-4">
                      {service.number} — Servizio
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-[1.1] mb-6">
                      {service.title}
                    </h2>
                    <div className="space-y-5">
                      {service.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* "What's blocking you" section */}
      <section className="py-32 bg-card border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-6"
          >
            Il primo passo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-[1.1] mb-10"
          >
            Prima di capire cosa fare, bisogna capire <span className="italic text-primary">cosa ti sta bloccando</span>.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4 mb-10"
          >
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              Non tutti i brand hanno bisogno delle stesse cose.
            </p>
            <ul className="space-y-2 pl-0">
              {blockers.map((b, i) => (
                <li
                  key={i}
                  className="text-lg text-foreground font-sans leading-relaxed flex gap-3"
                >
                  <span className="text-primary font-bold">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed pt-4">
              Per questo non proponiamo soluzioni standard. Prima di iniziare facciamo sempre una <span className="text-foreground font-medium">call strategica</span> per capire dove sei oggi, quali sono i tuoi obiettivi, cosa non sta funzionando e su quali leve ha davvero senso lavorare.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              to="/contatti"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-base group"
            >
              Prenota una call strategica
              <ArrowDownRight
                size={18}
                className="group-hover:rotate-[-45deg] transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servizi;
