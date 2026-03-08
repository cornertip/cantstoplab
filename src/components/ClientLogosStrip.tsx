import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = [
  "Brand Alpha",
  "Gusto Italiano",
  "FitPro Academy",
  "Maison Beauté",
  "TechStart",
  "Urban Style",
  "Dolce Vita",
  "Nova Studio",
];

const ClientLogosStrip = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-12 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest text-center mb-8">
          Brand che ci hanno scelto
        </p>
        <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-14">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center w-28 h-12 rounded-lg bg-card border border-border/40 px-4"
            >
              <span className="text-xs font-sans font-semibold text-muted-foreground tracking-wide whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosStrip;
