import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import gelsoImg from "@/assets/gelsomina.jpg";
import carlaImg from "@/assets/carla.jpg";
import vincenzoImg from "@/assets/vincenzo.jpg";
import teamPodcast from "@/assets/team-podcast.jpg";
import teamDiscussion from "@/assets/team-discussion.jpg";

const teamMembers = [
  {
    name: "Gelsomina Tagliamonte",
    role: "Co-Founder & Creative Director",
    photo: gelsoImg,
    bio: "Creativa per natura, visionaria per scelta. Gelsomina è il motore creativo di CantStopLab: dalla direzione artistica agli shooting, trasforma le idee in contenuti che emozionano.",
  },
  {
    name: "Carla Panico",
    role: "Co-Founder & Strategy Director",
    photo: carlaImg,
    bio: "Giornalista di formazione, digital marketer per vocazione. Carla è l'anima strategica di CantStopLab: dalla content strategy all'analisi dei dati, trasforma gli obiettivi di business in piani editoriali che funzionano.",
  },
  {
    name: "Vincenzo Basile",
    role: "Visual Art Design",
    photo: vincenzoImg,
    bio: "L'occhio dietro l'estetica di ogni progetto. Vincenzo cura l'identità visiva dei brand, dalle grafiche social al design di campagne che catturano l'attenzione.",
  },
];

const TeamSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-24 bg-csl-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sm font-sans font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Le Persone Dietro Il Brand
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-6">
            Un team di creativi con l'ossessione per i <span className="italic text-csl-yellow">risultati</span>.
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            Non siamo un'agenzia di centinaia di persone dove il tuo progetto finisce in un foglio di lavoro anonimo. Siamo un team snello e affiatato dove ogni membro conosce ogni brand che seguiamo. Quando lavori con noi, lavori con noi — non con un account manager che hai visto una volta su Zoom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-16">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center mx-auto mb-6 group-hover:ring-4 ring-csl-yellow ring-offset-4 ring-offset-csl-warm transition-all duration-500 overflow-hidden">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground leading-tight">
                {member.name.split(" ")[0]}<br />{member.name.split(" ").slice(1).join(" ")}
              </h3>
              <p className="text-csl-yellow text-sm font-sans font-semibold mt-1 uppercase tracking-wider">{member.role}</p>
              <p className="text-muted-foreground text-sm font-sans mt-3 leading-relaxed max-w-xs mx-auto">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Team action photos */}
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
  );
};

export default TeamSection;
