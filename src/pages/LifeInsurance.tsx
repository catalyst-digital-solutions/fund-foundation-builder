import Header from "@/components/Header";
import HeroSection from "@/components/life-insurance/sections/HeroSection";
import TrustBadgeBar from "@/components/life-insurance/sections/TrustBadgeBar";
import ValueProposition from "@/components/life-insurance/sections/ValueProposition";
import KeyBenefits from "@/components/life-insurance/sections/KeyBenefits";
import HowItWorks from "@/components/life-insurance/sections/HowItWorks";
import CoverageTypes from "@/components/life-insurance/sections/CoverageTypes";
import WhyPolicyGenius from "@/components/life-insurance/sections/WhyPolicyGenius";
import FAQ from "@/components/life-insurance/sections/FAQ";
import FinalCTA from "@/components/life-insurance/sections/FinalCTA";
import ComplianceFooter from "@/components/life-insurance/sections/ComplianceFooter";

const LifeInsurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustBadgeBar />
      <ValueProposition />
      <KeyBenefits />
      <HowItWorks />
      <CoverageTypes />
      <WhyPolicyGenius />
      <FAQ />
      <FinalCTA />
      <ComplianceFooter />
    </div>
  );
};

export default LifeInsurance;
