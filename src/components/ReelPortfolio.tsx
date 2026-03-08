import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef } from "react";

const reels = [
  { client: "Ristorante Luce", color: "from-rose-500 to-orange-400" },
  { client: "FitPro Academy", color: "from-blue-500 to-cyan-400" },
  { client: "Maison Beauté", color: "from-purple-500 to-pink-400" },
  { client: "TechStart", color: "from-emerald-500 to-teal-400" },
  { client: "Gusto Italiano", color: "from-amber-500 to-yellow-400" },
  { client: "Urban Style", color: "from-indigo-500 to-violet-400" },
  { client: "Bella Vita Spa", color: "from-pink-500 to-rose-400" },
  { client: "Nova Digital", color: "from-sky-500 to-blue-400" },
  { client: "Caffè Roma", color: "from-orange-500 to-amber-400" },
  { client: "Verde Studio", color: "from-lime-500 to-emerald-400" },
];

const ReelPortfolio = () => {
  const ref = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
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
