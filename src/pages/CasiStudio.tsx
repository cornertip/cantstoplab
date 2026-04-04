import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import caseAlessandra from "@/assets/case-alessandra.jpg";
import caseVanilla from "@/assets/case-vanilla.jpg";
import caseCasagiglio from "@/assets/case-casagiglio.jpg";
import caseNeosegno from "@/assets/case-neosegno.jpg";
import casePeccerella from "@/assets/case-peccerella.jpg";

const caseStudies = [
  {
    name: "Alessandra Accurso",
    category: "Psicologia",
    headline: "Oltre 2,5 milioni di view in organico: la potenza di una strategia mirata.",
    image: caseAlessandra,
  },
  {
    name: "Vanilla Pocket",
    category: "Ecommerce",
    headline: "Da classico negozio ad e-commerce internazionale.",
    image: caseVanilla,
  },
  {
    name: "Casa Giglio",
    category: "Food & Beverage",
    headline: "Una pizza in famiglia diversa da qualunque altra.",
    image: caseCasagiglio,
  },
  {
    name: "Neo Segno Distintivo",
    category: "Articoli da Regalo",
    headline: "Da negozio di bomboniere a brand di riferimento del settore.",
    image: caseNeosegno,
  },
  {
    name: "Macelleria Peccerella",
    category: "Negozio di Alimentari",
    headline: "Da macelleria di quartiere a paradiso per veri carnivori.",
    image: casePeccerella,
  },
];

const CasiStudio = () => {
  const heroRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="section-fade-in pt-32 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="bg-primary text-primary-foreground font-sans font-medium text-sm uppercase tracking-widest px-5 py-2 rounded-full inline-block mb-6">
            Casi Studio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.05] mb-6">
            I risultati parlano più forte delle <span className="italic text-primary">parole</span>
          </h1>
          <p className="text-muted-foreground text-lg font-sans leading-relaxed">
            Scopri come abbiamo aiutato brand di settori diversi a crescere sui social con strategie su misura, contenuti autentici e risultati misurabili.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={gridRef} className="section-fade-in pb-32">
        <div className="container mx-auto px-4">
          {/* First row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {caseStudies.slice(0, 3).map((cs, i) => (
              <CaseCard key={cs.name} cs={cs} index={i} />
            ))}
          </div>
          {/* Second row — 2 cards centred */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[66.666%] mx-auto">
            {caseStudies.slice(3).map((cs, i) => (
              <CaseCard key={cs.name} cs={cs} index={i + 3} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface CaseCardProps {
  cs: (typeof caseStudies)[number];
  index: number;
}

const CaseCard = ({ cs, index }: CaseCardProps) => (
  <motion.a
    href="#"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative rounded-2xl overflow-hidden aspect-[4/3] block"
  >
    <img
      src={cs.image}
      alt={cs.name}
      loading="lazy"
      width={800}
      height={600}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    {/* Category pill */}
    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-sans font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
      {cs.category}
    </span>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-white font-display text-2xl mb-1">{cs.name}</h3>
      <p className="text-white/80 font-sans text-sm leading-relaxed mb-4">
        {cs.headline}
      </p>
      <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
        Scopri il caso studio <ArrowRight size={16} />
      </span>
    </div>
  </motion.a>
);

export default CasiStudio;
