import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "CantStopLab ha trasformato completamente la nostra presenza su Instagram. I numeri parlano da soli.",
    name: "Giulia Ferri",
    company: "Maison Beauté",
  },
  {
    quote: "Professionali, creativi e sempre un passo avanti. Il miglior investimento per il nostro brand.",
    name: "Alessandro Conti",
    company: "FitPro Academy",
  },
  {
    quote: "Da zero a 50K follower in 4 mesi. Non avremmo mai pensato fosse possibile.",
    name: "Luca Moretti",
    company: "Gusto Italiano",
  },
];

const Testimonials = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  return (
    <section ref={ref} className="section-fade-in py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-foreground text-center mb-16">
          Cosa dicono i nostri <span className="text-primary">clienti</span>
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-primary fill-primary" />
            ))}
          </div>
          <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-8 min-h-[80px]">
            "{testimonials[current].quote}"
          </blockquote>
          <p className="font-bold text-foreground">{testimonials[current].name}</p>
          <p className="text-muted-foreground text-sm">{testimonials[current].company}</p>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
