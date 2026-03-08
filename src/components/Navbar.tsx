import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-display font-black tracking-tight text-foreground">
          CantStop<span className="text-primary">Lab</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#servizi" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Servizi</a>
          <a href="#portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Casi Studio</a>
          <a href="#chi-siamo" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Chi Siamo</a>
          <a href="#contatti" className="btn-gold text-sm rounded-full px-5 py-2.5">Prenota Call</a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#servizi" className="block text-sm font-medium text-foreground" onClick={() => setOpen(false)}>Servizi</a>
          <a href="#portfolio" className="block text-sm font-medium text-foreground" onClick={() => setOpen(false)}>Casi Studio</a>
          <a href="#chi-siamo" className="block text-sm font-medium text-foreground" onClick={() => setOpen(false)}>Chi Siamo</a>
          <a href="#contatti" className="btn-gold text-sm rounded-full inline-block" onClick={() => setOpen(false)}>Prenota Call</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
