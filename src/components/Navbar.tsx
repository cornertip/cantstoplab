import { useState, useEffect } from "react";
import { Menu, X, ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cantstopLogo from "@/assets/cantstop-logo.png";
import logoFavicon from "@/assets/logo-favicon.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - swap to favicon on sticky */}
        <a href="#" className="z-10">
          {scrolled ? (
            <div className="h-12 w-12 rounded-full bg-card/90 backdrop-blur-md flex items-center justify-center shadow-md transition-all duration-300 border border-border/60 overflow-hidden">
              <img src={logoFavicon} alt="CantStopLab" className="h-12 w-12 object-cover rounded-full" />
            </div>
          ) : (
            <img src={cantstopLogo} alt="CantStopLab" className="h-8 transition-all duration-300" />
          )}
        </a>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center rounded-full border border-border/60 backdrop-blur-md transition-all duration-500 ${scrolled ? "bg-card/90 shadow-lg" : "bg-card/70"}`}>
          <a href="#servizi" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-6 py-3">
            Servizi
          </a>
          <span className="w-px h-5 bg-border" />
          <a href="#portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-6 py-3">
            Casi Studio
          </a>
          <span className="w-px h-5 bg-border" />
          <a href="#chi-siamo" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-6 py-3">
            Chi Siamo
          </a>
          <span className="w-px h-5 bg-border" />
          <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-6 py-3">
            Blog
          </a>
          <a
            href="#contatti"
            className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm rounded-full px-6 py-3 m-1 transition-colors duration-300 group"
          >
            Contatti
            <ArrowDownRight size={16} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground z-10" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-4 right-4 bg-card/95 backdrop-blur-xl rounded-3xl border border-border/60 shadow-2xl p-6 space-y-1"
          >
            {[
              { href: "#servizi", label: "Servizi" },
              { href: "#portfolio", label: "Casi Studio" },
              { href: "#chi-siamo", label: "Chi Siamo" },
              { href: "#blog", label: "Blog" },
            ].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="block text-lg font-medium text-foreground py-3 border-b border-border/40 last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contatti"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="btn-gold text-sm inline-flex items-center gap-2 mt-4 group"
              onClick={() => setOpen(false)}
            >
              Contatti <ArrowDownRight size={16} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
