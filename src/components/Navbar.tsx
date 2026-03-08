import { useState, useEffect } from "react";
import { Menu, X, ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cantstopLogo from "@/assets/cantstop-logo.png";

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
      <div className="container mx-auto px-4 flex justify-end">
        {/* Single white pill containing logo + nav + CTA */}
        <div className="hidden md:flex items-center rounded-full bg-card shadow-[0_2px_24px_-4px_rgba(0,0,0,0.1)] transition-all duration-500 pl-6 pr-1 ml-auto">
          <a href="#" className="flex-shrink-0 mr-8">
            <img src={cantstopLogo} alt="CantStopLab" className="h-8 object-contain" />
          </a>

          <div className="flex items-center">
            {["Servizi", "Casi Studio", "Chi Siamo", "Blog"].map((label, i) => (
              <span key={label} className="flex items-center">
                {i > 0 && <span className="w-px h-5 bg-border" />}
                <a
                  href={`#${label === "Casi Studio" ? "portfolio" : label === "Chi Siamo" ? "chi-siamo" : label.toLowerCase()}`}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors px-6 py-3"
                >
                  {label}
                </a>
              </span>
            ))}
          </div>

          <a
            href="#contatti"
            className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm rounded-full px-6 py-3 my-1 ml-4 transition-colors duration-300 group"
          >
            Contatti
            <ArrowDownRight size={16} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile: logo + hamburger */}
        <div className="md:hidden flex items-center justify-between rounded-full bg-card shadow-[0_2px_24px_-4px_rgba(0,0,0,0.1)] px-5 py-3">
          <a href="#">
            <img src={cantstopLogo} alt="CantStopLab" className="h-6 object-contain" />
          </a>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden absolute top-full left-4 right-4 bg-background/95 backdrop-blur-xl rounded-3xl border border-primary/15 shadow-2xl p-6 space-y-1"
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
