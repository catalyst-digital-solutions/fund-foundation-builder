import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/personal-loans/sections/HeroSection';
import TrustIndicators from '@/components/personal-loans/sections/TrustIndicators';
import ValueProposition from '@/components/personal-loans/sections/ValueProposition';
import HowItWorks from '@/components/personal-loans/sections/HowItWorks';
import EmotionalCTA1 from '@/components/debt-consolidation/sections/EmotionalCTA1';
import LoanUseCases from '@/components/personal-loans/sections/LoanUseCases';
import BenefitsGrid from '@/components/personal-loans/sections/BenefitsGrid';
import EmotionalCTA2 from '@/components/debt-consolidation/sections/EmotionalCTA2';
import LenderNetwork from '@/components/personal-loans/sections/LenderNetwork';
import QualificationRequirements from '@/components/personal-loans/sections/QualificationRequirements';
import EmotionalCTA3 from '@/components/debt-consolidation/sections/EmotionalCTA3';
import FAQ from '@/components/personal-loans/sections/FAQ';
import FinalCTA from '@/components/personal-loans/sections/FinalCTA';
import ComplianceFooter from '@/components/personal-loans/sections/ComplianceFooter';

const PersonalLoans = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        <ValueProposition />
        <HowItWorks />
        <EmotionalCTA1 />
        <LoanUseCases />
        <BenefitsGrid />
        <EmotionalCTA2 />
        <LenderNetwork />
        <QualificationRequirements />
        <EmotionalCTA3 />
        <FAQ />
        <FinalCTA />
        <ComplianceFooter />
      </main>
    </div>
  );
};

export default PersonalLoans;
