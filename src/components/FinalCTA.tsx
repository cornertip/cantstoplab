import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTA = () => {
  const ref = useScrollReveal();

  return (
    <section id="contatti" ref={ref} className="section-fade-in py-32 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-black text-secondary-foreground mb-6 max-w-3xl mx-auto leading-tight">
          Pronto a rendere il tuo brand{" "}
          <span className="text-primary">memorabile</span>?
        </h2>
        <p className="text-secondary-foreground/70 text-lg mb-10 max-w-lg mx-auto">
          Prenota una call gratuita e scopri come possiamo far crescere il tuo brand con i vertical video.
        </p>
        <a
          href="#"
          className="btn-gold text-lg rounded-full inline-flex items-center gap-2 px-10 py-5"
        >
          Prenota la tua Call <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
