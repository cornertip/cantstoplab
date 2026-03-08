import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle } from "lucide-react";

const testimonials = [
  {
    quote: "CantStopLab ha trasformato completamente la nostra presenza su Instagram. I numeri parlano da soli.",
    name: "Giulia Ferri",
    company: "Maison Beauté",
    initials: "GF",
  },
  {
    quote: "Professionali, creativi e sempre un passo avanti. Il miglior investimento per il nostro brand.",
    name: "Alessandro Conti",
    company: "FitPro Academy",
    initials: "AC",
  },
  {
    quote: "Da zero a 50K follower in 4 mesi. Non avremmo mai pensato fosse possibile.",
    name: "Luca Moretti",
    company: "Gusto Italiano",
    initials: "LM",
  },
];

const Testimonials = () => {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);

  return (
    <section ref={ref} className="section-fade-in py-32 bg-muted rounded-[3rem] mx-4 my-8">
      <div className="container mx-auto px-4">
        <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4 text-center">Testimonianze</p>
        <h2 className="text-4xl sm:text-5xl font-display text-foreground text-center mb-20">
          Cosa dicono i nostri <span className="italic text-primary">clienti</span>
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              {/* Reviewer photo placeholder */}
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-8 overflow-hidden border-2 border-primary/20">
                <UserCircle size={48} className="text-secondary-foreground/40" />
              </div>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-display italic text-foreground leading-snug mb-10">
                "{testimonials[current].quote}"
              </blockquote>
              <p className="font-sans font-semibold text-foreground">{testimonials[current].name}</p>
              <p className="text-muted-foreground text-sm font-sans">{testimonials[current].company}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current ? "bg-primary w-12" : "bg-border w-8 hover:bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
