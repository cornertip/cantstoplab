import { Video, Users, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Video,
    number: "01",
    title: "Content Marketing",
    desc: "Strategia e produzione Reel/TikTok ad alte performance per far crescere il tuo brand.",
  },
  {
    icon: Users,
    number: "02",
    title: "Influencer Marketing",
    desc: "Scouting e gestione creator per campagne autentiche che raggiungono il pubblico giusto.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Personal Branding",
    desc: "Costruiamo la tua identità digitale per renderti un punto di riferimento nel tuo settore.",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="servizi" ref={ref} className="section-fade-in py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mb-20">
          <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">Servizi</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground leading-[1.05]">
            Tutto quello che serve per <span className="italic text-primary">dominare</span> i vertical video.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="group py-12 md:px-8 border-b md:border-b-0 md:border-r last:border-r-0 border-border hover:bg-card/50 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <s.icon size={28} className="text-primary" />
                <span className="text-xs font-sans font-medium text-muted-foreground">{s.number}</span>
              </div>
              <h3 className="text-2xl font-display text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
