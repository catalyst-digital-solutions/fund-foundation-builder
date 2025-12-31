import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/personal-loans/sections/HeroSection';
import TrustIndicators from '@/components/personal-loans/sections/TrustIndicators';
import ValueProposition from '@/components/personal-loans/sections/ValueProposition';
import HowItWorks from '@/components/personal-loans/sections/HowItWorks';
import EmotionalCTA1 from '@/components/personal-loans/sections/EmotionalCTA1';
import LoanUseCases from '@/components/personal-loans/sections/LoanUseCases';
import BenefitsGrid from '@/components/personal-loans/sections/BenefitsGrid';
import EmotionalCTA2 from '@/components/personal-loans/sections/EmotionalCTA2';
import LenderNetwork from '@/components/personal-loans/sections/LenderNetwork';
import QualificationRequirements from '@/components/personal-loans/sections/QualificationRequirements';
import EmotionalCTA3 from '@/components/personal-loans/sections/EmotionalCTA3';
import FAQ from '@/components/personal-loans/sections/FAQ';
import FinalCTA from '@/components/personal-loans/sections/FinalCTA';
import Footer from '@/components/Footer';
import ExternalLinkModal from '@/components/ExternalLinkModal';

const PersonalLoans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection setIsModalOpen={setIsModalOpen} setSelectedUrl={setSelectedUrl} />
        <TrustIndicators />
        <ValueProposition />
        <HowItWorks />
        <EmotionalCTA1 setIsModalOpen={setIsModalOpen} setSelectedUrl={setSelectedUrl} />
        <LoanUseCases />
        <BenefitsGrid />
        <EmotionalCTA2 setIsModalOpen={setIsModalOpen} setSelectedUrl={setSelectedUrl} />
        <LenderNetwork />
        <QualificationRequirements />
        <EmotionalCTA3 setIsModalOpen={setIsModalOpen} setSelectedUrl={setSelectedUrl} />
        <FAQ />
        <FinalCTA setIsModalOpen={setIsModalOpen} setSelectedUrl={setSelectedUrl} />
        <Footer />
      </main>

      <ExternalLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={selectedUrl}
        title="SuperMoney Personal Loans"
      />
    </div>
  );
};

export default PersonalLoans;
