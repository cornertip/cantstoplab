import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaAbout = () => (
  <section className="py-24 bg-csl-yellow">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-csl-dark leading-tight mb-6">
        Hai un brand che merita di essere <span className="italic">raccontato</span>?
      </h2>
      <p className="text-csl-dark/70 font-sans text-lg leading-relaxed max-w-xl mx-auto mb-10">
        Non servono grandi budget per iniziare. Serve il coraggio di fare il primo passo. Prenota una call gratuita di 30 minuti: ti ascoltiamo, analizziamo la tua situazione e ti diciamo — con onestà — se e come possiamo aiutarti.
      </p>
      <Link
        to="/contatti"
        className="inline-flex items-center gap-2 bg-csl-dark text-white font-sans font-semibold px-10 py-4 rounded-full hover:opacity-90 transition-opacity text-lg"
      >
        Prenota la tua call gratuita <ArrowRight className="w-5 h-5" />
      </Link>
      <p className="text-csl-dark/50 font-sans text-sm mt-6 italic">
        Nessun impegno. Nessuna pressione. Solo una chiacchierata tra persone che amano i brand.
      </p>
    </div>
  </section>
);

export default CtaAbout;
