import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTA = () => {
  const ref = useScrollReveal();

  return (
    <section id="contatti" ref={ref} className="section-fade-in py-40 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display text-foreground mb-8 max-w-4xl mx-auto leading-[1.05]">
          Pronto a rendere il tuo brand{" "}
          <span className="italic text-primary">memorabile</span>?
        </h2>
        <p className="text-muted-foreground text-lg font-sans mb-12 max-w-lg mx-auto">
          Prenota una call gratuita e scopri come possiamo far crescere il tuo brand con i vertical video.
        </p>
        <a
          href="#"
          className="btn-gold text-lg inline-flex items-center gap-3 px-12 py-5 group"
        >
          Prenota la tua Call
          <ArrowRight size={20} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
