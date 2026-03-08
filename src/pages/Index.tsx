import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import ServicesSection from "@/components/ServicesSection";
import ReelPortfolio from "@/components/ReelPortfolio";
import CaseStudy from "@/components/CaseStudy";
import FounderSection from "@/components/FounderSection";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ServicesSection />
      <ReelPortfolio />
      <CaseStudy />
      <FounderSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
