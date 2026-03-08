import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Target, Zap, ImageIcon } from "lucide-react";

const CaseStudy = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in bg-secondary py-32 relative overflow-hidden rounded-[3rem] mx-4 my-8">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-secondary-foreground/10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-sans font-medium text-sm uppercase tracking-widest mb-6">Caso Studio</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-secondary-foreground mb-20 leading-[1.05]">
            Come abbiamo rivoluzionato il digital di un brand <span className="italic text-primary">Food</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                {/* Image placeholder */}
                <div className="aspect-[4/3] rounded-2xl bg-secondary-foreground/10 mb-6 flex items-center justify-center">
                  <ImageIcon size={32} className="text-secondary-foreground/30" />
                </div>

                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
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
