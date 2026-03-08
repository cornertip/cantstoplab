import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { number: "100+", label: "Brand Gestiti" },
  { number: "50M+", label: "View Generate" },
  { number: "5000+", label: "Reel Prodotti" },
];

const SocialProofBar = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center group">
              <p className="text-5xl sm:text-6xl font-display italic text-foreground mb-2">{s.number}</p>
              <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest">{s.label}</p>
              {i < stats.length - 1 && (
                <span className="hidden sm:block absolute" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
