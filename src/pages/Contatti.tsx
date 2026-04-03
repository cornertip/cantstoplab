import { Instagram, Youtube, Mail, MapPin, Phone, ArrowDownRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import teamPhoto from "@/assets/cantstop-team.jpg";

const budgetOptions = [
  "0 – 2.499€",
  "2.500€ – 4.900€",
  "5.000€ – 9.999€",
  "10.000€ – 20.000€",
  "20.000€+",
];

const interestOptions = [
  "Content Marketing",
  "Influencer Marketing",
  "Personal Branding",
  "Advertising",
  "Brand Strategy",
  "Analytics & Reporting",
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/cantstoplab/" },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15Z" />
      </svg>
    ),
    label: "TikTok",
    url: "https://www.tiktok.com/@cantstoplab",
  },
  { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@cantstoplab" },
];

const Contatti = () => {
  const heroRef = useScrollReveal();
  const formRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const [interests, setInterests] = useState<string[]>([]);
  const [email, setEmail] = useState("");

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Richiesta inviata!", description: "Ti contatteremo al più presto." });
  };

  const handleNewsletterSubmit = () => {
    if (!email) return;
    toast({ title: "Iscritto! 🎉", description: "Riceverai i nostri migliori contenuti ogni settimana." });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="section-fade-in pt-32 pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-display text-foreground mb-6 leading-[1.05]">
            Parliamo del tuo <span className="italic text-primary">progetto</span>
          </h1>
          <p className="text-muted-foreground text-lg font-sans max-w-xl mx-auto">
            Compila il form, scrivici o vieni a trovarci. Siamo pronti ad ascoltarti.
          </p>
        </div>
      </section>

      {/* Team Photo */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden">
          <img
            src={teamPhoto}
            alt="Il team di CantStop Lab"
            className="w-full h-[350px] sm:h-[450px] object-cover"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="section-fade-in pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-display text-foreground mb-10 text-center">
              Inviaci un messaggio
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-foreground font-sans text-sm">Nome</Label>
                  <Input id="nome" name="nome" placeholder="Nome" required className="h-12 bg-[hsl(var(--input-bg))] border-border text-foreground placeholder:text-muted-foreground/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cognome" className="text-foreground font-sans text-sm">Cognome</Label>
                  <Input id="cognome" name="cognome" placeholder="Cognome" required className="h-12 bg-[hsl(var(--input-bg))] border-border text-foreground placeholder:text-muted-foreground/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-contact" className="text-foreground font-sans text-sm">Email</Label>
                  <Input id="email-contact" name="email" type="email" placeholder="email@esempio.com" required className="h-12 bg-[hsl(var(--input-bg))] border-border text-foreground placeholder:text-muted-foreground/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-foreground font-sans text-sm">Telefono</Label>
                  <Input id="telefono" name="telefono" type="tel" placeholder="Numero di telefono" className="h-12 bg-[hsl(var(--input-bg))] border-border text-foreground placeholder:text-muted-foreground/40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="azienda" className="text-foreground font-sans text-sm">Azienda</Label>
                  <Input id="azienda" name="azienda" placeholder="Nome azienda" className="h-12 bg-[hsl(var(--input-bg))] border-border text-foreground placeholder:text-muted-foreground/40" />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground font-sans text-sm">Budget totale</Label>
                  <Select name="budget">
                    <SelectTrigger className="h-12 bg-[hsl(var(--input-bg))] border-border text-foreground">
                      <SelectValue placeholder="Seleziona budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetOptions.map((b) => (
                        <SelectItem key={b} value={b}>{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-10">
                <Label className="text-foreground font-sans text-sm mb-4 block">A cosa sei interessato?</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {interestOptions.map((opt) => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                      <Checkbox
                        checked={interests.includes(opt)}
                        onCheckedChange={() => toggleInterest(opt)}
                      />
                      <span className="text-sm font-sans text-muted-foreground group-hover:text-foreground transition-colors">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-gold text-lg inline-flex items-center gap-3 px-12 py-5 group"
                >
                  Invia richiesta
                  <ArrowDownRight size={20} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social & Info */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Social */}
            <div>
              <h3 className="text-2xl font-display text-foreground mb-6">Seguici</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="font-sans text-sm">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contatti */}
            <div>
              <h3 className="text-2xl font-display text-foreground mb-6">Contatti</h3>
              <div className="space-y-4">
                <a href="mailto:info@cantstoplab.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} />
                  <span className="font-sans text-sm">info@cantstoplab.com</span>
                </a>
                <a href="tel:+393773505530" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} />
                  <span className="font-sans text-sm">+39 377 350 5530</span>
                </a>
              </div>
            </div>

            {/* Indirizzo */}
            <div>
              <h3 className="text-2xl font-display text-foreground mb-6">Dove siamo</h3>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <p className="font-sans text-sm leading-relaxed">
                  CantStop Lab SRL<br />
                  Via George Sand 212<br />
                  80011 Acerra (NA) – IT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="w-full">
        <iframe
          title="CantStop Lab - Sede"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.8!2d14.3729!3d40.9436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b9e1e2f5d3c7b%3A0x0!2sVia+George+Sand+212%2C+80011+Acerra+NA!5e0!3m2!1sit!2sit!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>

      {/* Newsletter */}
      <section ref={ctaRef} className="section-fade-in py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Mail className="mx-auto mb-6 text-primary" size={40} />
          <h2 className="text-3xl sm:text-5xl font-display text-foreground mb-4">
            Resta <span className="italic text-primary">aggiornato</span>
          </h2>
          <p className="text-muted-foreground font-sans mb-8 max-w-md mx-auto">
            Iscriviti alla newsletter per ricevere strategie, novità e contenuti esclusivi direttamente nella tua inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="La tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-background border-border text-foreground placeholder:text-muted-foreground/40 flex-1"
            />
            <Button
              onClick={handleNewsletterSubmit}
              className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 font-sans"
            >
              Iscriviti
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contatti;
