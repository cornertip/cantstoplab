import { Video, Users, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Video,
    title: "Content Marketing",
    desc: "Strategia e produzione Reel/TikTok ad alte performance per far crescere il tuo brand.",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    desc: "Scouting e gestione creator per campagne autentiche che raggiungono il pubblico giusto.",
  },
  {
    icon: Sparkles,
    title: "Personal Branding",
    desc: "Costruiamo la tua identità digitale per renderti un punto di riferimento nel tuo settore.",
  },
];

const ServicesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="servizi" ref={ref} className="section-fade-in py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-center text-foreground mb-4">
          I nostri <span className="text-primary">servizi</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-lg mx-auto mb-16">
          Tutto quello che serve per dominare i vertical video.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-popover border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
