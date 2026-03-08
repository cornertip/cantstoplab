import { Video, Users, Sparkles, BarChart3, Film, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Video,
    number: "01",
    title: "Content Marketing",
    desc: "Strategia e produzione Reel/TikTok ad alte performance per far crescere il tuo brand.",
    image: "/images/service-content.jpg",
  },
  {
    icon: Users,
    number: "02",
    title: "Influencer Marketing",
    desc: "Scouting e gestione creator per campagne autentiche che raggiungono il pubblico giusto.",
    image: "/images/service-influencer.jpg",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Personal Branding",
    desc: "Costruiamo la tua identità digitale per renderti un punto di riferimento nel tuo settore.",
    image: "/images/service-branding.jpg",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Social Media Strategy",
    desc: "Piani editoriali data-driven per massimizzare l'engagement e la crescita organica.",
    image: "/images/service-strategy.jpg",
  },
  {
    icon: Film,
    number: "05",
    title: "Video Editing Pro",
    desc: "Post-produzione cinematografica per reel e contenuti verticali che catturano l'attenzione.",
    image: "/images/service-editing.jpg",
  },
  {
    icon: MessageCircle,
    number: "06",
    title: "Community Management",
    desc: "Gestione e crescita della community per costruire relazioni autentiche con il tuo pubblico.",
    image: "/images/service-community.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-border">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative py-12 px-8 border-b border-r border-border overflow-hidden cursor-pointer transition-all duration-700"
            >
              {/* Background image on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 transition-transform"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "opacity 0.7s ease, transform 1.2s ease",
                }}
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/75 transition-colors duration-700" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <s.icon
                    size={28}
                    className="text-primary group-hover:text-primary transition-colors duration-500"
                  />
                  <span className="text-xs font-sans font-medium text-muted-foreground group-hover:text-secondary-foreground/60 transition-colors duration-500">
                    {s.number}
                  </span>
                </div>
                <h3 className="text-2xl font-display text-foreground group-hover:text-secondary-foreground transition-colors duration-500 mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-secondary-foreground/80 text-sm leading-relaxed font-sans transition-colors duration-500">
                  {s.desc}
                </p>

                {/* Hover arrow indicator */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-primary text-sm font-sans font-semibold">Scopri di più</span>
                  <span className="w-6 h-px bg-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
