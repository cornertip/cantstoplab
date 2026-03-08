import { useScrollReveal } from "@/hooks/useScrollReveal";
import gelsoImg from "@/assets/gelsomina.jpg";
import carlaImg from "@/assets/carla.jpg";
import vincenzoImg from "@/assets/vincenzo.jpg";

const founders = [
  { name: "Gelsomina Tagliamonte", role: "Founder e Key Account Manager", photo: gelsoImg },
  { name: "Carla Panico", role: "Founder e Digital Marketing Manager", photo: carlaImg },
  { name: "Vincenzo Basile", role: "Visual Art Design", photo: vincenzoImg },
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
              CantStopLab è una Social Media Marketing Agency nata dalla passione per i contenuti digitali. Il nostro team di creativi e strategist è specializzato in short video, social advertising e personal branding. Aiutiamo brand e professionisti a costruire una presenza online che converte, con strategie data-driven e contenuti impossibili da ignorare.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {founders.map((f) => (
              <div key={f.name} className="text-center group">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:ring-4 ring-primary ring-offset-4 ring-offset-background transition-all duration-500 overflow-hidden">
                  <img src={f.photo} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-base sm:text-lg font-display text-foreground leading-tight">{f.name.split(" ")[0]}<br/>{f.name.split(" ").slice(1).join(" ")}</h3>
                <p className="text-muted-foreground text-sm font-sans mt-1">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
