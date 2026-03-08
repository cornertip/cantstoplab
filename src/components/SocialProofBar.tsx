import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { number: "100+", label: "Brand Gestiti" },
  { number: "50M+", label: "View Generate" },
  { number: "5000+", label: "Reel Prodotti" },
];

const SocialProofBar = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-display italic text-foreground mb-1">{s.number}</p>
              <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
