import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { useRef, useState } from "react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

const articles = [
  { title: "Come creare Reel virali: 5 strategie che funzionano nel 2025", excerpt: "Scopri le tecniche più efficaci per creare contenuti che catturano l'attenzione e generano engagement organico.", category: "Content Strategy", date: "15 Gen 2025", readTime: "5 min", image: blog1 },
  { title: "Influencer Marketing: come scegliere i creator giusti per il tuo brand", excerpt: "La guida completa per selezionare influencer autentici che parlano al tuo target ideale.", category: "Influencer Marketing", date: "8 Gen 2025", readTime: "7 min", image: blog2 },
  { title: "TikTok Ads vs Instagram Reels: dove investire il tuo budget", excerpt: "Un'analisi approfondita delle due piattaforme per aiutarti a prendere la decisione giusta.", category: "Advertising", date: "2 Gen 2025", readTime: "6 min", image: blog3 },
  { title: "Personal Branding: costruire un'identità digitale forte", excerpt: "Come posizionarti come leader di pensiero nel tuo settore attraverso i contenuti video.", category: "Personal Branding", date: "28 Dic 2024", readTime: "4 min", image: blog4 },
  { title: "L'algoritmo di Instagram nel 2025: cosa è cambiato", excerpt: "Tutte le novità dell'algoritmo e come sfruttarle per massimizzare la reach organica.", category: "Social Media", date: "20 Dic 2024", readTime: "8 min", image: blog5 },
  { title: "UGC e brand: il potere dei contenuti generati dagli utenti", excerpt: "Perché i contenuti autentici creati dai tuoi clienti valgono più di qualsiasi campagna pubblicitaria.", category: "UGC Strategy", date: "15 Dic 2024", readTime: "5 min", image: blog6 },
];

const BlogSection = () => {
  const ref = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -380 : 380, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section id="blog" ref={ref} className="section-fade-in py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">Blog</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground leading-[1.05]">
              Le ultime dal <span className="italic text-primary">mondo short</span>
            </h2>
          </div>
          <div className="hidden sm:flex gap-3">
            <button onClick={() => scroll("left")} className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${canScrollLeft ? "text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" : "text-muted-foreground/30 cursor-not-allowed"}`} disabled={!canScrollLeft}>
              <ArrowLeft size={18} />
            </button>
            <button onClick={() => scroll("right")} className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${canScrollRight ? "text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary" : "text-muted-foreground/30 cursor-not-allowed"}`} disabled={!canScrollRight}>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} onScroll={checkScroll} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
          {articles.map((article) => (
            <article key={article.title} className="flex-shrink-0 w-[280px] sm:w-[320px] bg-card rounded-[10px] border border-border/60 overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-500 snap-start">
              <div className="aspect-[16/10] bg-muted overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-sans font-semibold text-primary uppercase tracking-wide">{article.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2 leading-snug tracking-wide group-hover:text-primary transition-colors duration-300">{article.title}</h3>
                <p className="text-muted-foreground text-[15px] font-sans leading-relaxed line-clamp-2">{article.excerpt}</p>
                <p className="text-sm text-muted-foreground mt-3 font-sans">{article.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
