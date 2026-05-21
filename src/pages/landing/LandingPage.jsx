import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/landing/HeroSection";
import ProblemSection from "../../components/landing/ProblemSection";
import ParadigmSection from "../../components/landing/ParadigmSection";
import ArthSection from "../../components/landing/ArthSection";
import EcosystemSection from "../../components/landing/EcosystemSection";
import TechnologySection from "../../components/landing/TechnologySection";
import AboutSection from "../../components/landing/AboutSection";
import WaitlistSection from "../../components/landing/WaitlistSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ParadigmSection />
        <ArthSection />
        <EcosystemSection />
        <TechnologySection />
        <AboutSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
