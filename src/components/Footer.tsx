import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-display font-black text-lg mb-3">
              CantStop<span className="text-primary">Lab</span>
            </p>
            <p className="text-background/60 text-sm leading-relaxed">
              Agenzia creativa specializzata in Short Video per brand ambiziosi.
            </p>
            <p className="text-background/40 text-xs mt-4">P.IVA 01234567890</p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Navigazione</h4>
            <div className="space-y-2">
              <a href="#servizi" className="block text-background/60 text-sm hover:text-primary transition-colors">Servizi</a>
              <a href="#portfolio" className="block text-background/60 text-sm hover:text-primary transition-colors">Casi Studio</a>
              <a href="#chi-siamo" className="block text-background/60 text-sm hover:text-primary transition-colors">Chi Siamo</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Social</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Contatti</h4>
            <p className="text-background/60 text-sm">info@cantstoplab.it</p>
            <p className="text-background/60 text-sm mt-1">+39 02 1234567</p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 text-center text-background/40 text-xs">
          © {new Date().getFullYear()} CantStopLab. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
