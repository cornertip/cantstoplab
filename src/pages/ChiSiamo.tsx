import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Target, Eye, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import officeLounge from "@/assets/office-lounge.jpg";
import officeDetail from "@/assets/office-detail.jpg";
import officeMeeting from "@/assets/office-meeting.jpg";
import officeWall from "@/assets/office-wall.jpg";
import officeStudio from "@/assets/office-studio.jpg";
import teamFormal from "@/assets/team-formal.jpg";
import teamPodcast from "@/assets/team-podcast.jpg";
import teamDiscussion from "@/assets/team-discussion.jpg";

import gelsoImg from "@/assets/gelsomina.jpg";
import carlaImg from "@/assets/carla.jpg";
import vincenzoImg from "@/assets/vincenzo.jpg";

const teamMembers = [
  { name: "Gelsomina Tagliamonte", role: "Founder e Key Account Manager", photo: gelsoImg },
  { name: "Carla Panico", role: "Founder e Digital Marketing Manager", photo: carlaImg },
  { name: "Vincenzo Basile", role: "Visual Art Design", photo: vincenzoImg },
];

const timeline = [
  { year: "2020", title: "L'idea prende forma", desc: "Nasce l'idea di CantStop Lab durante il lockdown, dalla voglia di trasformare la passione per i contenuti digitali in qualcosa di concreto." },
  { year: "2021", title: "I primi clienti", desc: "Le prime collaborazioni con attività locali dimostrano che la nostra formula funziona: strategia + creatività = risultati." },
  { year: "2022", title: "La crescita", desc: "Il team si allarga, i clienti aumentano e superiamo i primi 50 milioni di views organiche per i nostri clienti." },
  { year: "2023", title: "Lo studio", desc: "Apriamo il nostro studio di produzione ad Acerra, uno spazio creativo dove idee e contenuti prendono vita." },
  { year: "2024", title: "Nuovi orizzonti", desc: "Espandiamo i servizi con advertising, personal branding e consulenze strategiche per brand nazionali." },
];

const ChiSiamo = () => {
  const heroRef = useScrollReveal();
  const missionRef = useScrollReveal();
  const visionRef = useScrollReveal();
  const teamRef = useScrollReveal();
  const storiaRef = useScrollReveal();
  const galleryRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="section-fade-in pt-40 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">Chi Siamo</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-foreground leading-[1.05] mb-8">
                La tecnica è niente senza <span className="italic text-primary">passione</span>
              </h1>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-lg">
                CantStop Lab è una Social Media Marketing Agency nata dalla passione per i contenuti digitali. Il nostro team di creativi e strategist è specializzato in short video, social advertising e personal branding.
              </p>
            </div>
            <div className="rounded-[2rem] overflow-hidden">
              <motion.img
                src={teamFormal}
                alt="Il team di CantStop Lab"
                className="w-full h-[500px] object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div ref={missionRef} className="section-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest">Mission</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display text-foreground leading-tight mb-6">
                Contenuti che <span className="italic text-primary">convertono</span>
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed">
                La nostra missione è aiutare brand e professionisti a costruire una presenza online che non solo attira attenzione, ma genera risultati concreti. Crediamo che ogni contenuto debba avere un obiettivo preciso: informare, emozionare, vendere. Lavoriamo con strategie data-driven e creatività senza compromessi per trasformare ogni scroll in un'opportunità.
              </p>
              <div className="mt-8 rounded-[2rem] overflow-hidden">
                <img src={officeLounge} alt="Il nostro spazio creativo" className="w-full h-64 object-cover" />
              </div>
            </div>

            <div ref={visionRef} className="section-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest">Vision</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display text-foreground leading-tight mb-6">
                Il futuro è <span className="italic text-primary">verticale</span>
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Immaginiamo un mondo in cui ogni brand, grande o piccolo, possa raccontare la propria storia in modo autentico e memorabile. La nostra visione è diventare il punto di riferimento nel Sud Italia per la produzione di contenuti short-form, guidando la rivoluzione del video verticale con un approccio che unisce arte, dati e tecnologia.
              </p>
              <div className="mt-8 rounded-[2rem] overflow-hidden">
                <img src={officeDetail} alt="Dettagli del nostro ufficio" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="section-fade-in py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
            <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">Il Team</p>
            <h2 className="text-4xl sm:text-5xl font-display text-foreground leading-tight">
              Le menti dietro <span className="italic text-primary">CantStop</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-40 h-40 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:ring-4 ring-primary ring-offset-4 ring-offset-background transition-all duration-500 overflow-hidden">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground leading-tight">
                  {member.name.split(" ")[0]}<br />{member.name.split(" ").slice(1).join(" ")}
                </h3>
                <p className="text-muted-foreground text-sm font-sans mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Team photos row */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[2rem] overflow-hidden">
              <img src={teamPodcast} alt="Il team in studio" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-[2rem] overflow-hidden">
              <img src={teamDiscussion} alt="Il team al lavoro" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Storia / Timeline */}
      <section ref={storiaRef} className="section-fade-in py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
            </div>
            <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">La Nostra Storia</p>
            <h2 className="text-4xl sm:text-5xl font-display text-foreground leading-tight">
              Un percorso fatto di <span className="italic text-primary">crescita</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="flex gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-display font-bold text-primary">{item.year}</span>
                  {i < timeline.length - 1 && <div className="w-px h-full bg-border mt-3" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery dello studio */}
      <section ref={galleryRef} className="section-fade-in py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">Il Nostro Studio</p>
            <h2 className="text-4xl sm:text-5xl font-display text-foreground leading-tight">
              Dove nascono le <span className="italic text-primary">idee</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-[2rem] overflow-hidden">
              <img src={officeStudio} alt="Lo studio di CantStop Lab" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-[2rem] overflow-hidden">
              <img src={officeDetail} alt="Dettagli dello studio" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-[2rem] overflow-hidden">
              <img src={officeMeeting} alt="Sala riunioni" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="md:col-span-2 rounded-[2rem] overflow-hidden">
              <img src={officeWall} alt="La parete creativa" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-display text-background leading-tight mb-6">
            Pronto a lavorare con <span className="italic">noi</span>?
          </h2>
          <p className="text-background/70 font-sans max-w-lg mx-auto mb-10">
            Raccontaci il tuo progetto e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sans font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Contattaci <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiSiamo;
