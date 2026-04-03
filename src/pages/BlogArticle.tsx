import { ArrowLeft, Clock, Share2, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import articleHero from "@/assets/article-hero.jpg";

const BlogArticle = () => {
  const [email, setEmail] = useState("");
  const heroRef = useScrollReveal();
  const contentRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const handleNewsletterSubmit = () => {
    if (!email) return;
    toast({ title: "Iscritto! 🎉", description: "Riceverai i nostri migliori contenuti ogni settimana." });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="section-fade-in pt-32 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              to="/blog"
              className="flex items-center gap-1.5 text-sm font-sans text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              Blog
            </Link>
            <span className="text-muted-foreground/50">/</span>
            <span className="text-sm font-sans text-muted-foreground">Content Strategy</span>
          </div>

          {/* Category + Meta */}
          <div className="flex items-center gap-4 mb-5">
            <span className="text-xs font-sans font-bold uppercase tracking-wider text-primary-foreground bg-primary rounded-full px-4 py-1.5">
              Content Strategy
            </span>
            <span className="text-sm font-sans text-muted-foreground flex items-center gap-1.5">
              <Clock size={14} /> 12 min di lettura
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground leading-[1.1] mb-6">
            Nicchia di Mercato:{" "}
            <span className="italic text-primary">cos'è e come trovarla</span>
          </h1>

          {/* Excerpt */}
          <p className="text-lg sm:text-xl font-sans text-muted-foreground max-w-2xl leading-relaxed mb-8">
            La base di ogni strategia di marketing: come trovare il tuo segmento ideale, posizionarti come esperto e trasformare la tua passione in un business.
          </p>

          {/* Share */}
          <div className="flex items-center gap-3 mb-10">
            <button className="flex items-center gap-2 text-sm font-sans font-medium text-muted-foreground hover:text-primary transition-colors">
              <Share2 size={16} /> Condividi
            </button>
          </div>

          {/* Hero Image */}
          <div className="rounded-[2rem] overflow-hidden bg-muted">
            <img
              src={articleHero}
              alt="Nicchia di Mercato"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section ref={contentRef} className="section-fade-in pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="prose-article">
            <p>
              Se stai leggendo questo articolo probabilmente vuoi sapere come aumentare i tuoi contatti e acquisire traffico di qualità da convertire in clienti.
            </p>
            <p>
              In questo articolo ti sveleremo quella che è la base di ogni strategia di marketing, il primo mattone da mettere per raggiungere i tuoi obiettivi, ossia trovare la tua <strong>nicchia di mercato</strong>.
            </p>

            <h2>Cos'è una nicchia di mercato?</h2>
            <p>
              Una nicchia di mercato è un segmento del mercato con caratteristiche specifiche, in cui la concorrenza è abbastanza bassa o non è arrivata a coprire tutti i bisogni del target, e quindi c'è ancora spazio per acquisire nuovi clienti.
            </p>
            <p>
              Aspetta, mi spiego meglio.
            </p>
            <p>
              I settori economici – come ad esempio il settore del benessere, quello medico, quello dell'abbigliamento ecc. – possono essere divisi in sottosettori sempre più piccoli, se si prendono a riferimento esigenze e bisogni di pubblici minori.
            </p>
            <p>Qualche esempio?</p>
            <p>Prendendo il settore del fitness, potremmo definire le seguenti nicchie:</p>
            <ul>
              <li>ginnastica per chi ha poco tempo</li>
              <li>pilates per neo mamme</li>
              <li>yoga prenatale</li>
              <li>ginnastica dolce per over 50</li>
              <li>arti marziali per principianti over 30</li>
            </ul>
            <p>
              Questa segmentazione apre a nuove possibilità di business e ci consente di specializzare il nostro lavoro su un'esigenza e un target specifici.
            </p>

            <h2>Quali sono i vantaggi della nicchia di mercato?</h2>
            <p>
              Definire in modo preciso la tua nicchia di mercato ti permetterà di rivolgerti idealmente ad una sola persona – il tuo <strong>cliente ideale</strong> – il quale ha un problema che tu puoi risolvere con i tuoi consigli e le tue dritte.
            </p>
            <p>
              Così facendo potrai creare contenuti utili per il tuo target offrendogli la soluzione giusta per le sue esigenze.
            </p>
            <p>
              <strong>Risultato?</strong> Quella persona ti vedrà come il massimo esperto in quel settore e conterà sulle tue competenze. Tu sarai la prima persona che gli verrà in mente quando dovrà scegliere a chi rivolgersi per risolvere quel dato problema, diventando tuo cliente.
            </p>
            <p>
              Ad esempio, se la tua nicchia è la vendita di libri gialli online e cominci a fare contenuti di valore dedicati a questa tematica attirando un pubblico di lettori giallisti, questi cominceranno a pensarti come un espert* del settore e se avranno bisogno di acquistare altri libri verranno proprio da te!
            </p>
            <p>Definire la tua nicchia di mercato ti permetterà dunque di:</p>
            <ul>
              <li>attirare il pubblico giusto per il tuo business</li>
              <li>aumentare la tua autorevolezza nel tuo settore di riferimento</li>
              <li>avere un pubblico fidelizzato nel lungo periodo</li>
              <li>incrementare le vendite</li>
            </ul>

            <blockquote>
              "Si, ok ma, come trovo la nicchia di mercato giusta per il mio business?"
            </blockquote>

            <h2>Come trovare la nicchia di mercato giusta?</h2>
            <p>
              Trovare la nicchia di mercato giusta non è sempre facile e ti capisco se pensi che dedicarsi ad un solo ambito possa essere limitante.
            </p>
            <p>
              Questo perché spesso crediamo che più attiriamo un pubblico ampio e più riusciamo a vendere, per cui circoscrivere la nostra attività solo su un singolo aspetto sembra quasi riduttivo.
            </p>
            <p>
              <strong>Niente di più sbagliato!</strong>
            </p>
            <p>
              Occuparsi di tante e troppe cose insieme rappresenta un dispendio di energie che non ti farà raggiungere alcun risultato.
            </p>
            <p>
              <em>Non mettere troppa carne al fuoco.</em>
            </p>
            <p>
              I tuoi followers avranno le idee confuse poiché non capiranno di cosa ti occupi precisamente e si rivolgeranno a qualcuno altro che – al contrario di te – avrà creato contenuti specifici e si sarà posizionato come massimo esperto di quel settore.
            </p>
            <p>
              <strong>È chiaro ora perché devi subito trovare la tua nicchia di mercato?</strong>
            </p>
            <p>Ora che lo sai, ti svelo come fare.</p>
            <p>
              Per individuare la tua nicchia di mercato e lanciare il tuo nuovo business devi tenere presente 3 cose: <strong>passione</strong>, <strong>competenza</strong> e <strong>monetizzazione</strong>.
            </p>
            <p>
              La tua nicchia ideale dovrebbe, infatti, essere qualcosa che ti appassiona, su cui sei competente e allo stesso tempo deve avere un pubblico disposto ad acquistare.
            </p>

            <h3>Per trovare la tua nicchia di mercato fatti queste domande:</h3>

            <h3>Quali sono i miei interessi, le mie passioni e le mie competenze?</h3>
            <p>Potresti trovarti di fronte a due casi diversi:</p>
            <ol>
              <li>
                <strong>Sei già un espert* della tua nicchia</strong> però non sei ancora riuscit* a monetizzare le tue conoscenze.
              </li>
              <li>
                <strong>Non sei un espert* del settore</strong>, per cui la soluzione è individuare argomenti che ti appassionano e che ti spingono a saperne sempre di più. In questo caso sarà fondamentale aver maturato esperienze personali in quel determinato settore che ti permetteranno di trasferire agli altri le tue conoscenze, aiutandoli ad arrivare dove sei tu ora. (Ad esempio, sei diventat* vegetarian* e decidi di parlare del tuo percorso e della tua nuova vita).
              </li>
            </ol>

            <h3>Per che cosa viene sempre chiesto il mio parere o il mio aiuto?</h3>
            <p>
              In altre parole, chiediti in cosa sei sempre pront* ad aiutare le persone che si rivolgono a te.
            </p>
            <p>
              Su quale argomento viene sempre chiesto il tuo parere?
            </p>
            <p>
              Ecco, quest'ambito, per quanto ristretto possa sembrarti, potrebbe rappresentare la base per trovare la tua nicchia di mercato.
            </p>
            <p>
              Delle competenze che gli altri già ti riconoscono e che possono essere messe ancora più a frutto.
            </p>

            <h3>La nicchia di mercato che hai individuato è monetizzabile?</h3>
            <p>
              Si, ok, hai trovato un argomento su cui focalizzare i tuoi sforzi perché unisce le tue passioni e le tue competenze. Ma si tratta di un interesse realmente monetizzabile?
            </p>
            <p>
              Accertati che, qualunque sia la tematica su cui vuoi costruire il tuo nuovo business, veda una richiesta da parte del mercato. Verifica che per il tuo prodotto o servizio ci sia un reale bisogno da parte del tuo cliente ideale.
            </p>
            <p>
              <strong>Come fare a verificarlo?</strong> Fai ricerche sul web e sui social e intercetta i problemi e le esigenze del tuo pubblico. Leggi commenti, visita forum, interagisci e domanda. Otterrai certamente ottime dritte!
            </p>
            <p>
              Ricordati, infatti, che non ha senso trovare una nicchia e investirci tempo (e denaro!) se non hai verificato che sia monetizzabile. Se non c'è un pubblico che sarebbe disposto ad acquistare i tuoi prodotti o servizi, allora non ne vale la pena.
            </p>

            <h2>Come far interagire, coinvolgere e aiutare il tuo pubblico?</h2>
            <p>
              Individuare la tua nicchia di mercato ti aiuterà a capire come rivolgerti al tuo cliente ideale: che linguaggio utilizzare, quali soluzioni proporre ed in che modo.
            </p>

            <blockquote>
              "Il modo più semplice per aiutare davvero il tuo pubblico è creare contenuti di valore"
            </blockquote>

            <p>
              Un metodo infallibile per sapere cosa davvero interessa al tuo pubblico è rivolgerti direttamente a lui. Chiedi ai tuoi followers di scriverti nei commenti, di contattarti in direct oppure spingili all'interazione sul tuo profilo attraverso sondaggi e domande aperte.
            </p>
            <p>
              Le loro risposte, commenti e feedback saranno una vera e propria <strong>miniera d'oro</strong> dalla quale attingere per creare i tuoi contenuti.
            </p>
            <p>
              A questo punto, una volta raccolte le informazioni, non ti resterà che creare strumenti di interesse per la tua audience.
            </p>

            <h3>Ecco cosa puoi fare:</h3>
            <ul>
              <li>Crea una <strong>Newsletter</strong> e invita i tuoi followers ad iscriversi per restare sempre aggiornati sui tuoi contenuti</li>
              <li>Regala dei <strong>freebie</strong> su argomenti di interesse per la tua community</li>
              <li>Crea delle <strong>challenge</strong> sul tuo profilo per coinvolgere di più</li>
              <li>Fai dei <strong>post</strong> nel quale ti rivolgi direttamente al tuo pubblico invogliandoli all'interazione</li>
              <li>Crea un <strong>canale telegram</strong> dedicato</li>
              <li>Collabora con altri creator per ideare <strong>live di approfondimento</strong></li>
            </ul>

            <p>
              Speriamo con questo articolo di averti chiarito le idee sull'importanza della nicchia di mercato per il proprio business. Se hai dubbi o domande e vuoi confrontarti sulla tua nicchia o cliente ideale non esitare a scriverci nei commenti!
            </p>
          </article>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section ref={ctaRef} className="section-fade-in pb-32">
        <div className="container mx-auto px-4">
          <div className="bg-secondary text-secondary-foreground rounded-[2rem] p-10 sm:p-16 text-center max-w-4xl mx-auto">
            <Mail size={32} className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight mb-4">
              Ti è piaciuto questo <span className="italic text-primary">articolo</span>?
            </h2>
            <p className="font-sans text-secondary-foreground/70 text-lg max-w-xl mx-auto mb-8">
              Iscriviti alla newsletter per ricevere strategie, case study e trend del mondo digital marketing ogni settimana.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="La tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
              />
              <Button
                onClick={handleNewsletterSubmit}
                className="rounded-full btn-gold shrink-0 px-8"
              >
                Iscriviti ora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogArticle;
