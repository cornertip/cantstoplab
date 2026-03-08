import { useScrollReveal } from "@/hooks/useScrollReveal";

const founders = [
  { name: "Marco Rossi", role: "CEO & Strategist", initials: "MR" },
  { name: "Sara Bianchi", role: "Creative Director", initials: "SB" },
];

const FounderSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="chi-siamo" ref={ref} className="section-fade-in py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-4">
            Chi <span className="text-primary">Siamo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto italic">
            "La tecnica è niente senza passione."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
          {founders.map((f) => (
            <div key={f.name} className="text-center group">
              <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 text-3xl font-black text-secondary-foreground group-hover:ring-4 ring-primary transition-all">
                {f.initials}
              </div>
              <h3 className="text-lg font-bold text-foreground">{f.name}</h3>
              <p className="text-muted-foreground text-sm">{f.role}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-12 leading-relaxed">
          Siamo un team di creativi e strategist ossessionati dai vertical video. Crediamo che ogni brand abbia una storia da raccontare — noi la rendiamo impossibile da ignorare.
        </p>
      </div>
    </section>
  );
};

export default FounderSection;
