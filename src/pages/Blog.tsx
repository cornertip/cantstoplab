import { useState } from "react";
import { Clock, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";
import blog7 from "@/assets/blog-7.jpg";
import blog8 from "@/assets/blog-8.jpg";
import blog9 from "@/assets/blog-9.jpg";

const categories = [
  "Tutti",
  "Content Strategy",
  "Influencer Marketing",
  "Advertising",
  "Personal Branding",
  "Social Media",
  "UGC Strategy",
  "Video Production",
];

const articles = [
  {
    title: "Come creare Reel virali: 5 strategie che funzionano nel 2025",
    excerpt: "Scopri le tecniche più efficaci per creare contenuti che catturano l'attenzione e generano engagement organico su Instagram e TikTok.",
    category: "Content Strategy",
    date: "15 Gen 2025",
    readTime: "5 min",
    image: blog1,
    featured: true,
  },
  {
    title: "Influencer Marketing: come scegliere i creator giusti per il tuo brand",
    excerpt: "La guida completa per selezionare influencer autentici che parlano al tuo target ideale.",
    category: "Influencer Marketing",
    date: "8 Gen 2025",
    readTime: "7 min",
    image: blog2,
  },
  {
    title: "TikTok Ads vs Instagram Reels: dove investire il tuo budget",
    excerpt: "Un'analisi approfondita delle due piattaforme per aiutarti a prendere la decisione giusta.",
    category: "Advertising",
    date: "2 Gen 2025",
    readTime: "6 min",
    image: blog3,
  },
  {
    title: "Personal Branding: costruire un'identità digitale forte",
    excerpt: "Come posizionarti come leader di pensiero nel tuo settore attraverso i contenuti video.",
    category: "Personal Branding",
    date: "28 Dic 2024",
    readTime: "4 min",
    image: blog4,
  },
  {
    title: "L'algoritmo di Instagram nel 2025: cosa è cambiato",
    excerpt: "Tutte le novità dell'algoritmo e come sfruttarle per massimizzare la reach organica.",
    category: "Social Media",
    date: "20 Dic 2024",
    readTime: "8 min",
    image: blog5,
  },
  {
    title: "UGC e brand: il potere dei contenuti generati dagli utenti",
    excerpt: "Perché i contenuti autentici creati dai tuoi clienti valgono più di qualsiasi campagna pubblicitaria.",
    category: "UGC Strategy",
    date: "15 Dic 2024",
    readTime: "5 min",
    image: blog6,
  },
  {
    title: "Video verticali: la guida definitiva alla produzione professionale",
    excerpt: "Attrezzatura, illuminazione e tecniche di ripresa per creare short video che sembrino produzioni cinematografiche.",
    category: "Video Production",
    date: "10 Dic 2024",
    readTime: "9 min",
    image: blog7,
  },
  {
    title: "Social Media Analytics: le metriche che contano davvero",
    excerpt: "Smetti di inseguire le vanity metrics. Ecco i KPI che guidano le decisioni di business.",
    category: "Social Media",
    date: "5 Dic 2024",
    readTime: "6 min",
    image: blog8,
  },
  {
    title: "Content Creator Economy: come monetizzare la tua presenza online",
    excerpt: "Dal primo follower al primo contratto: la roadmap completa per trasformare la creatività in un business.",
    category: "Content Strategy",
    date: "1 Dic 2024",
    readTime: "7 min",
    image: blog9,
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Tutti");
  const [heroEmail, setHeroEmail] = useState("");
  const [bottomEmail, setBottomEmail] = useState("");
  const heroRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const newsletterRef = useScrollReveal();

  const featured = articles[0];
  const filteredArticles =
    activeCategory === "Tutti"
      ? articles.slice(1)
      : articles.filter((a) => a.category === activeCategory && a.title !== featured.title);

  const handleNewsletterSubmit = (email: string, setter: (v: string) => void) => {
    if (!email) return;
    toast({ title: "Iscritto! 🎉", description: "Riceverai i nostri migliori contenuti ogni settimana." });
    setter("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — Two columns: left title+newsletter, right featured article */}
      <section ref={heroRef} className="section-fade-in pt-32 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left column */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">
                  Blog
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-foreground leading-[1.05] mb-6">
                  Le ultime dal{" "}
                  <span className="italic text-primary">mondo short</span>
                </h1>
                <p className="text-lg font-sans text-muted-foreground max-w-md mb-8 leading-relaxed">
                  Strategie, trend e ispirazioni per dominare Instagram, TikTok e il mondo dei contenuti video.
                </p>
              </div>

              {/* Newsletter mini-form */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm font-sans font-semibold text-foreground uppercase tracking-wide">
                    Newsletter
                  </span>
                </div>
                <p className="text-sm font-sans text-muted-foreground mb-4">
                  Iscriviti e ricevi ogni settimana i migliori articoli direttamente nella tua inbox.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="La tua email"
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    className="rounded-full bg-[hsl(var(--input-bg))] border-border"
                  />
                  <Button
                    onClick={() => handleNewsletterSubmit(heroEmail, setHeroEmail)}
                    className="rounded-full btn-gold shrink-0 px-6"
                  >
                    Iscriviti
                  </Button>
                </div>
              </div>
            </div>

            {/* Right column — Featured article */}
            <a href="#" className="group block">
              <div className="relative rounded-[2rem] overflow-hidden h-full min-h-[360px] bg-muted">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="inline-block text-[11px] font-sans font-bold uppercase tracking-wider text-primary-foreground bg-primary rounded-full px-4 py-1.5">
                    Ultimo articolo
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <span className="inline-block text-xs font-sans font-semibold uppercase tracking-wide text-primary bg-primary/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-3">
                    {featured.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-white leading-tight mb-2">
                    {featured.title}
                  </h2>
                  <p className="text-white/70 font-sans text-sm sm:text-base max-w-lg mb-3 hidden sm:block">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/50 text-sm font-sans">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-sans font-medium px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section ref={gridRef} className="section-fade-in pb-20">
        <div className="container mx-auto px-4">
          {filteredArticles.length === 0 ? (
            <p className="text-muted-foreground text-center py-20 text-lg font-sans">
              Nessun articolo in questa categoria.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredArticles.map((article, i) => (
                <motion.a
                  key={article.title}
                  href="#"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <article className="bg-card rounded-[1.25rem] border border-border/60 overflow-hidden hover:shadow-xl transition-shadow duration-500">
                    <div className="aspect-[16/10] bg-muted overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-sans font-semibold text-primary uppercase tracking-wide">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1 font-sans">
                          <Clock size={12} /> {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-2 leading-snug tracking-wide group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-[15px] font-sans leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-muted-foreground font-sans">
                          {article.date}
                        </span>
                        <span className="text-primary flex items-center gap-1 text-sm font-sans font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Leggi <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA bottom */}
      <section ref={newsletterRef} className="section-fade-in pb-32">
        <div className="container mx-auto px-4">
          <div className="bg-secondary text-secondary-foreground rounded-[2rem] p-10 sm:p-16 text-center">
            <Mail size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight mb-4">
              Non perderti nessun <span className="italic text-primary">contenuto</span>
            </h2>
            <p className="font-sans text-secondary-foreground/70 text-lg max-w-xl mx-auto mb-8">
              Strategie, case study e trend del mondo short video — ogni settimana nella tua casella di posta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="La tua email"
                value={bottomEmail}
                onChange={(e) => setBottomEmail(e.target.value)}
                className="rounded-full bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
              />
              <Button
                onClick={() => handleNewsletterSubmit(bottomEmail, setBottomEmail)}
                className="rounded-full btn-gold shrink-0 px-8"
              >
                Iscriviti ora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
