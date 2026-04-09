import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const brands = [
  "Pizzeria Pellone",
  "Chiù Barbecue",
  "Solebuono",
  "Vanilla Pocket",
  "Hera",
  "Oro di Napoli",
  "Teco",
  "Nume Atelier",
  "Alemy Bunny",
  "Il Dado",
];

const BrandLogos = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-24 bg-csl-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-sans font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Hanno Creduto In Noi
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight">
            Oltre <span className="italic text-csl-yellow">50</span> brand si fidano di CantStopLab.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              className="bg-white rounded-2xl border border-border p-6 flex items-center justify-center text-center hover:shadow-lg hover:border-csl-yellow/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="font-display font-bold text-foreground text-sm">{brand}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
          <div>
            <span className="text-3xl font-display font-bold text-csl-yellow">50+</span>
            <p className="text-sm font-sans text-muted-foreground mt-1">brand seguiti</p>
          </div>
          <div>
            <span className="text-3xl font-display font-bold text-csl-yellow">50M+</span>
            <p className="text-sm font-sans text-muted-foreground mt-1">visualizzazioni generate</p>
          </div>
          <div>
            <span className="text-3xl font-display font-bold text-csl-yellow">500+</span>
            <p className="text-sm font-sans text-muted-foreground mt-1">shooting realizzati</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
