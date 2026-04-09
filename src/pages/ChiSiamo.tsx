import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAbout from "@/components/chi-siamo/HeroAbout";
import OriginStory from "@/components/chi-siamo/OriginStory";
import TimelineSection from "@/components/chi-siamo/TimelineSection";
import MethodSection from "@/components/chi-siamo/MethodSection";
import ValuesSection from "@/components/chi-siamo/ValuesSection";
import ManifestoSection from "@/components/chi-siamo/ManifestoSection";
import TeamSection from "@/components/chi-siamo/TeamSection";
import OfficeSection from "@/components/chi-siamo/OfficeSection";
import BrandLogos from "@/components/chi-siamo/BrandLogos";
import CtaAbout from "@/components/chi-siamo/CtaAbout";

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroAbout />
      <OriginStory />
      <TimelineSection />
      <MethodSection />
      <ValuesSection />
      <ManifestoSection />
      <TeamSection />
      <OfficeSection />
      <BrandLogos />
      <CtaAbout />
      <Footer />
    </div>
  );
};

export default ChiSiamo;
