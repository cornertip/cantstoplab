import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Target, Zap } from "lucide-react";

const CaseStudy = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in bg-secondary py-32 relative overflow-hidden rounded-[3rem] mx-4 my-8">
      {/* Decorative circle */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-secondary-foreground/10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary font-sans font-medium text-sm uppercase tracking-widest mb-6">Caso Studio</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-secondary-foreground mb-16 leading-[1.05]">
            Come abbiamo rivoluzionato il digital di un brand <span className="italic text-primary">Food</span>
          </h2>

          {/* Image gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/case-study-food-1.jpg"
                alt="Pasta italiana - caso studio food"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/case-study-food-2.jpg"
                alt="Pizza artigianale - caso studio food"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] col-span-2 md:col-span-1">
              <img
                src="/images/case-study-food-3.jpg"
                alt="Tiramisù - caso studio food"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Target,
                title: "La Sfida",
                text: "Brand sconosciuto sui social con zero strategia video e meno di 500 follower.",
              },
              {
                icon: Zap,
                title: "La Strategia",
                text: "60 Reel in 3 mesi con storytelling autentico e collaborazioni con food creator.",
              },
              {
                icon: TrendingUp,
                title: "I Risultati",
                text: null,
                results: ["+12M views", "+35K follower", "+200% ordini online"],
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-display text-secondary-foreground mb-3">{item.title}</h3>
                {item.text && (
                  <p className="text-secondary-foreground/70 text-sm font-sans leading-relaxed">{item.text}</p>
                )}
                {item.results && (
                  <div className="space-y-2">
                    {item.results.map((r) => (
                      <p key={r} className="text-primary font-display italic text-2xl">{r}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
