import { Video, Users, Sparkles, BarChart3, Megaphone, Palette, ArrowDownRight } from "lucide-react";
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
  {
    icon: Megaphone,
    title: "Social Advertising",
    desc: "Campagne paid su Meta e TikTok Ads ottimizzate per conversioni e ROI massimo.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Dashboard personalizzate e report mensili per monitorare le performance in tempo reale.",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    desc: "Concept visivi e art direction per contenuti che catturano l'attenzione e generano engagement.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-[10px] border border-border/60 p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.05] hover:rotate-[2deg]"
            >
              <div className="mb-6">
                <s.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-display text-foreground mb-3 transition-all duration-300 group-hover:text-3xl group-hover:font-bold">{s.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed font-sans mb-8">{s.desc}</p>

              {/* Hover button - same style as "Inizia ora" */}
              <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                <a
                  href="#contatti"
                  className="btn-gold text-sm inline-flex items-center gap-2 px-6 py-3 group/btn"
                >
                  Scopri di più
                  <ArrowDownRight size={16} className="group-hover/btn:rotate-[-45deg] transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
