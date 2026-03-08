import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef } from "react";

import reelRistoranteLuce from "@/assets/reel-ristorante-luce.jpg";
import reelFitpro from "@/assets/reel-fitpro.jpg";
import reelMaisonBeaute from "@/assets/reel-maison-beaute.jpg";
import reelTechstart from "@/assets/reel-techstart.jpg";
import reelGustoItaliano from "@/assets/reel-gusto-italiano.jpg";
import reelUrbanStyle from "@/assets/reel-urban-style.jpg";
import reelBellaVitaSpa from "@/assets/reel-bella-vita-spa.jpg";
import reelNovaDigital from "@/assets/reel-nova-digital.jpg";
import reelCaffeRoma from "@/assets/reel-caffe-roma.jpg";
import reelVerdeStudio from "@/assets/reel-verde-studio.jpg";

const reels = [
  { client: "Ristorante Luce", thumb: reelRistoranteLuce },
  { client: "FitPro Academy", thumb: reelFitpro },
  { client: "Maison Beauté", thumb: reelMaisonBeaute },
  { client: "TechStart", thumb: reelTechstart },
  { client: "Gusto Italiano", thumb: reelGustoItaliano },
  { client: "Urban Style", thumb: reelUrbanStyle },
  { client: "Bella Vita Spa", thumb: reelBellaVitaSpa },
  { client: "Nova Digital", thumb: reelNovaDigital },
  { client: "Caffè Roma", thumb: reelCaffeRoma },
  { client: "Verde Studio", thumb: reelVerdeStudio },
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
            <img
              src={r.thumb}
              alt={r.client}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center text-popover">
              <div className="w-16 h-16 rounded-full bg-popover/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Play size={28} fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-5 left-0 right-0 flex justify-center">
              <span className="font-sans font-semibold text-sm tracking-wide bg-white text-foreground px-4 py-1.5 rounded-full">{r.client}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelPortfolio;
