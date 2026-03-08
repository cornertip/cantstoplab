import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogosStrip from "@/components/ClientLogosStrip";
import ServicesSection from "@/components/ServicesSection";
import ReelPortfolio from "@/components/ReelPortfolio";
import CaseStudy from "@/components/CaseStudy";
import FounderSection from "@/components/FounderSection";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ClientLogosStrip />
      <ServicesSection />
      <ReelPortfolio />
      <CaseStudy />
      <FounderSection />
      <BlogSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
