import { useScrollReveal } from "@/hooks/useScrollReveal";
import { UserCircle } from "lucide-react";

const founders = [
  { name: "Gelsomina Tagliamonte", role: "Founder e Key Account Manager", initials: "GT" },
  { name: "Carla Panico", role: "Founder e Digital Marketing Manager", initials: "CP" },
  { name: "Vincenzo Basile", role: "Visual Art Design", initials: "VB" },
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

          <div className="grid grid-cols-3 gap-6">
            {founders.map((f) => (
              <div key={f.name} className="text-center group">
                {/* Photo placeholder */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:ring-4 ring-primary ring-offset-4 ring-offset-background transition-all duration-500 overflow-hidden">
                  <UserCircle size={48} className="text-secondary-foreground/40" />
                </div>
                <h3 className="text-sm sm:text-base font-display text-foreground leading-tight">{f.name}</h3>
                <p className="text-muted-foreground text-xs font-sans mt-1">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
