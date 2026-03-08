import { ArrowDownRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

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

const FinalCTA = () => {
  const ref = useScrollReveal();
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (value: string) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Richiesta inviata!", description: "Ti contatteremo al più presto." });
  };

  return (
    <section id="contatti" ref={ref} className="section-fade-in py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display text-foreground mb-8 max-w-4xl mx-auto leading-[1.05]">
            Pronto a rendere il tuo brand{" "}
            <span className="italic text-primary">memorabile</span>?
          </h2>
          <p className="text-muted-foreground text-lg font-sans mb-0 max-w-lg mx-auto">
            Affidati alla nostra Social Media Marketing Agency: compila il form e scopri come possiamo far crescere il tuo brand.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
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
              <Label htmlFor="email" className="text-foreground font-sans text-sm">Email</Label>
              <Input id="email" name="email" type="email" placeholder="email@esempio.com" required className="h-12 bg-[hsl(210,12%,95%)] border-border text-foreground placeholder:text-muted-foreground/40" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono" className="text-foreground font-sans text-sm">Telefono</Label>
              <Input id="telefono" name="telefono" type="tel" placeholder="Numero di telefono" className="h-12 bg-[hsl(210,12%,95%)] border-border text-foreground placeholder:text-muted-foreground/40" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="azienda" className="text-foreground font-sans text-sm">Azienda</Label>
              <Input id="azienda" name="azienda" placeholder="Nome azienda" className="h-12 bg-[hsl(210,12%,95%)] border-border text-foreground placeholder:text-muted-foreground/40" />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground font-sans text-sm">Budget totale</Label>
              <Select name="budget">
                <SelectTrigger className="h-12 bg-[hsl(210,12%,95%)] border-border text-foreground">
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
                <label
                  key={opt}
                  className="flex items-center gap-3 cursor-pointer group"
                >
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
    </section>
  );
};

export default FinalCTA;
