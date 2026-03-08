import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

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

const VISIBLE = 4;

const ClientLogosStrip = () => {
  const ref = useScrollReveal();
  const [startIdx, setStartIdx] = useState(0);

  const canPrev = startIdx > 0;
  const canNext = startIdx + VISIBLE < clients.length;

  const visibleClients = clients.slice(startIdx, startIdx + VISIBLE);

  return (
    <section ref={ref} className="section-fade-in py-12 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-widest">
            Brand che ci hanno scelto
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setStartIdx((i) => Math.max(0, i - 1))}
              disabled={!canPrev}
              className={`w-9 h-9 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${canPrev ? "text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" : "text-muted-foreground/30 cursor-not-allowed"}`}
            >
              <ArrowLeft size={14} />
            </button>
            <button
              onClick={() => setStartIdx((i) => Math.min(clients.length - VISIBLE, i + 1))}
              disabled={!canNext}
              className={`w-9 h-9 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${canNext ? "text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" : "text-muted-foreground/30 cursor-not-allowed"}`}
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {visibleClients.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center h-16 rounded-lg bg-card border border-border/40 px-4 transition-all duration-300"
            >
              <span className="text-sm font-sans font-semibold text-muted-foreground tracking-wide whitespace-nowrap">
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
