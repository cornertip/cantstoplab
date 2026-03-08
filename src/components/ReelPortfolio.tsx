import { Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef } from "react";

const reels = [
  { client: "Ristorante Luce", color: "from-rose-500 to-orange-400" },
  { client: "FitPro Academy", color: "from-blue-500 to-cyan-400" },
  { client: "Maison Beauté", color: "from-purple-500 to-pink-400" },
  { client: "TechStart", color: "from-emerald-500 to-teal-400" },
  { client: "Gusto Italiano", color: "from-amber-500 to-yellow-400" },
  { client: "Urban Style", color: "from-indigo-500 to-violet-400" },
];

const ReelPortfolio = () => {
  const ref = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="portfolio" ref={ref} className="section-fade-in py-24 bg-background">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl sm:text-4xl font-black text-foreground text-center mb-4">
          Reel <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-lg mx-auto">
          Alcuni dei nostri lavori migliori. Swipe per scoprirli tutti.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-4 md:px-[calc(50vw-600px)] pb-4 snap-x snap-mandatory"
      >
        {reels.map((r) => (
          <div
            key={r.client}
            className="flex-shrink-0 w-56 sm:w-64 aspect-[9/16] rounded-2xl overflow-hidden relative group cursor-pointer snap-center"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${r.color}`} />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-popover gap-3">
              <div className="w-14 h-14 rounded-full bg-popover/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={28} fill="currentColor" />
              </div>
              <p className="font-bold text-sm tracking-wide">{r.client}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelPortfolio;
