import Header from "@/components/Header";
import HeroSection from "@/components/life-insurance/sections/HeroSection";
import EmotionalCTA1 from "@/components/life-insurance/sections/EmotionalCTA1";
import TrustBadgeBar from "@/components/life-insurance/sections/TrustBadgeBar";
import ValueProposition from "@/components/life-insurance/sections/ValueProposition";
import KeyBenefits from "@/components/life-insurance/sections/KeyBenefits";
import HowItWorks from "@/components/life-insurance/sections/HowItWorks";
import EmotionalCTA2 from "@/components/life-insurance/sections/EmotionalCTA2";
import CoverageTypes from "@/components/life-insurance/sections/CoverageTypes";
import WhyPolicyGenius from "@/components/life-insurance/sections/WhyPolicyGenius";
import EmotionalCTA3 from "@/components/life-insurance/sections/EmotionalCTA3";
import FAQ from "@/components/life-insurance/sections/FAQ";
import FinalCTA from "@/components/life-insurance/sections/FinalCTA";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const LifeInsurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Life Insurance Quotes & Coverage | Mesa Group Consulting"
        description="Compare life insurance quotes from top providers. Find term life, whole life, and affordable coverage to protect your family. Expert guidance from Mesa Group Consulting."
        canonicalUrl="/life-insurance"
      />
      <Header />
      <HeroSection />
      <EmotionalCTA1 />
      <TrustBadgeBar />
      <ValueProposition />
      <KeyBenefits />
      <HowItWorks />
      <EmotionalCTA2 />
      <CoverageTypes />
      <WhyPolicyGenius />
      <EmotionalCTA3 />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default LifeInsurance;
