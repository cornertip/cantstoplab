import { useScrollReveal } from "@/hooks/useScrollReveal";
import officeStudio from "@/assets/office-studio.jpg";
import officeDetail from "@/assets/office-detail.jpg";
import officeMeeting from "@/assets/office-meeting.jpg";
import officeWall from "@/assets/office-wall.jpg";

const OfficeSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sm font-sans font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Dove Nascono Le Idee
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-6">
            Benvenuto nel <span className="italic text-csl-yellow">Lab</span>.
          </h2>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            Il nostro quartier generale è ad Acerra, in Via George Sand 212 — nel cuore del Parco Sant'Anna. È qui che le strategie prendono forma, gli shooting prendono vita e le idee più audaci trovano il coraggio di diventare contenuti. Non è un ufficio qualsiasi: è un laboratorio creativo dove ogni parete racconta un progetto, ogni schermo mostra un Reel in lavorazione e il caffè non finisce mai.
          </p>
          <p className="text-muted-foreground/70 font-sans mt-4 italic">
            Se passi da queste parti, la porta è sempre aperta. Letteralmente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="md:col-span-2 rounded-[2rem] overflow-hidden">
            <img src={officeStudio} alt="Lo studio di CantStop Lab" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[2rem] overflow-hidden">
            <img src={officeDetail} alt="Dettagli dello studio" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-[2rem] overflow-hidden">
            <img src={officeMeeting} alt="Sala riunioni" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="md:col-span-2 rounded-[2rem] overflow-hidden">
            <img src={officeWall} alt="La parete creativa" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
