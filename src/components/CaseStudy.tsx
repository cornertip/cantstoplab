import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Target, Zap } from "lucide-react";

const CaseStudy = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in bg-secondary py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Caso Studio</p>
          <h2 className="text-3xl sm:text-4xl font-black text-secondary-foreground mb-16">
            Come abbiamo rivoluzionato il digital di un brand Food
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Target size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-secondary-foreground mb-2">La Sfida</h3>
              <p className="text-secondary-foreground/70 text-sm">
                Brand sconosciuto sui social con zero strategia video e meno di 500 follower.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-secondary-foreground mb-2">La Strategia</h3>
              <p className="text-secondary-foreground/70 text-sm">
                60 Reel in 3 mesi con storytelling autentico e collaborazioni con food creator.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-secondary-foreground mb-2">I Risultati</h3>
              <p className="text-secondary-foreground/70 text-sm">
                <span className="text-primary font-black text-2xl block mb-1">+12M views</span>
                <span className="text-primary font-black text-2xl block mb-1">+35K follower</span>
                +200% ordini online in 90 giorni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
