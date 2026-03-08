import { Users, Eye, Film } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Users, number: "100+", label: "Brand Gestiti" },
  { icon: Eye, number: "50M+", label: "View Generate" },
  { icon: Film, number: "5000+", label: "Reel Prodotti" },
];

const SocialProofBar = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in bg-secondary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 text-secondary-foreground">
              <s.icon size={28} className="text-primary" />
              <div>
                <p className="text-2xl font-black">{s.number}</p>
                <p className="text-sm opacity-80">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
