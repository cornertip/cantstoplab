import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Creative agency workspace" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-foreground mb-6 animate-fade-up">
            Strategie in formato short per brand che{" "}
            <span className="text-primary">emozionano</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Trasformiamo la passione in performance attraverso i vertical video.
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="#contatti" className="btn-gold text-base rounded-full inline-flex items-center gap-2 px-8 py-4">
              Inizia ora <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
