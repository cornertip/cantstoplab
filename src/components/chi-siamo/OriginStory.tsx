import { useScrollReveal } from "@/hooks/useScrollReveal";

const OriginStory = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-fade-in py-24 bg-csl-warm">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <p className="text-sm font-sans font-medium uppercase tracking-[0.25em] text-muted-foreground mb-6">
          Come Tutto È Iniziato
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-12">
          Da un laboratorio di idee a un'agenzia che costruisce <span className="italic text-csl-yellow">brand</span>.
        </h2>
        <div className="text-left text-muted-foreground font-sans leading-[1.9] space-y-6 text-[17px]">
          <p>
            Tutto è cominciato in un piccolo spazio ad Acerra, nel 2017. Non avevamo un ufficio vero, non avevamo un portfolio da mostrare. Avevamo qualcosa di più: la convinzione che le imprese del nostro territorio meritassero una comunicazione all'altezza delle loro ambizioni.
          </p>
          <p>
            CantStopLab è nato prima come laboratorio di cultura digitale — un luogo dove imprenditori, studenti e professionisti potevano scoprire le opportunità del web e dei social media. Organizzavamo workshop, corsi, eventi. Portavamo la comunicazione digitale dove nessuno la stava portando.
          </p>
          <p>
            Poi è successo qualcosa: i brand che formavamo hanno iniziato a chiederci di fare per loro quello che insegnavamo. Di trasformare le strategie in contenuti. Le idee in Reel. I follower in clienti.
          </p>
          <p className="font-semibold text-foreground">
            Da quel momento non ci siamo più fermati.
          </p>
          <p>
            Oggi CantStopLab è una Social Media Marketing Agency specializzata in short video e brand strategy. Lavoriamo con imprenditori determinati che vogliono emergere, non semplicemente "essere presenti". E lo facciamo con lo stesso spirito del primo giorno: passione, creatività e un'ossessione sana per i risultati.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
