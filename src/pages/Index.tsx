import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AgentSection from "@/components/AgentSection";
import HowItWorksSection from "@/components/HowItWorksSection";

import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <AgentSection />
    <HowItWorksSection />
    <TechStackSection />
    <DownloadSection />
    <Footer />
  </div>
);

export default Index;
