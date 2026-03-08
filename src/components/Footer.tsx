import { Instagram, Linkedin } from "lucide-react";
import logoY from "@/assets/cantstop-logo-y.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-20 rounded-t-[3rem]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          <div>
            <img src={logoY} alt="CantStopLab" className="h-8 mb-4" />
            <p className="text-secondary-foreground/60 text-sm font-sans leading-relaxed">
              Agenzia creativa specializzata in Short Video per brand ambiziosi.
            </p>
            <p className="text-secondary-foreground/40 text-xs mt-4 font-sans">P.IVA 01234567890</p>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm mb-5 uppercase tracking-widest text-secondary-foreground/50">Navigazione</h4>
            <div className="space-y-3">
              <a href="#servizi" className="block text-secondary-foreground/70 text-sm font-sans hover:text-primary transition-colors">Servizi</a>
              <a href="#portfolio" className="block text-secondary-foreground/70 text-sm font-sans hover:text-primary transition-colors">Casi Studio</a>
              <a href="#chi-siamo" className="block text-secondary-foreground/70 text-sm font-sans hover:text-primary transition-colors">Chi Siamo</a>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm mb-5 uppercase tracking-widest text-secondary-foreground/50">Social</h4>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a href="#" className="w-11 h-11 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm mb-5 uppercase tracking-widest text-secondary-foreground/50">Contatti</h4>
            <p className="text-secondary-foreground/70 text-sm font-sans">info@cantstoplab.it</p>
            <p className="text-secondary-foreground/70 text-sm font-sans mt-1">+39 02 1234567</p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-16 pt-6 text-center text-secondary-foreground/40 text-xs font-sans">
          © {new Date().getFullYear()} CantStopLab. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
