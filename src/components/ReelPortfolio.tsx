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
    <section id="portfolio" ref={ref} className="section-fade-in py-32 bg-background">
      <div className="container mx-auto px-4 mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground leading-[1.05]">
              I nostri <span className="italic text-primary">lavori</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm font-sans max-w-sm">
            Swipe per scoprire i nostri migliori progetti in formato verticale.
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory container mx-auto px-4"
      >
        {reels.map((r) => (
          <div
            key={r.client}
            className="flex-shrink-0 w-56 sm:w-64 aspect-[9/16] rounded-[2rem] overflow-hidden relative group cursor-pointer snap-center"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${r.color}`} />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-popover gap-3">
              <div className="w-16 h-16 rounded-full bg-popover/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Play size={28} fill="currentColor" />
              </div>
              <p className="font-sans font-semibold text-sm tracking-wide">{r.client}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelPortfolio;
