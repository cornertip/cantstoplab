import { useScrollReveal } from "@/hooks/useScrollReveal";

const founders = [
  { name: "Marco Rossi", role: "CEO & Strategist", initials: "MR" },
  { name: "Sara Bianchi", role: "Creative Director", initials: "SB" },
];

const FounderSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="chi-siamo" ref={ref} className="section-fade-in py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-widest mb-4">Chi Siamo</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground leading-[1.05] mb-8">
              La tecnica è niente senza <span className="italic text-primary">passione</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed max-w-lg">
              Siamo un team di creativi e strategist ossessionati dai vertical video. Crediamo che ogni brand abbia una storia da raccontare — noi la rendiamo impossibile da ignorare.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
            {founders.map((f) => (
              <div key={f.name} className="text-center group">
                <div className="w-36 h-36 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5 text-3xl font-display italic text-secondary-foreground group-hover:ring-4 ring-primary ring-offset-4 ring-offset-background transition-all duration-500">
                  {f.initials}
                </div>
                <h3 className="text-lg font-display text-foreground">{f.name}</h3>
                <p className="text-muted-foreground text-sm font-sans">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
