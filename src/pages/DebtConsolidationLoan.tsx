import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/debt-consolidation/sections/HeroSection';
import TrustIndicators from '@/components/debt-consolidation/sections/TrustIndicators';
import ValueProposition from '@/components/debt-consolidation/sections/ValueProposition';
import HowItWorks from '@/components/debt-consolidation/sections/HowItWorks';
import EmotionalCTA1 from '@/components/debt-consolidation/sections/EmotionalCTA1';
import BenefitsGrid from '@/components/debt-consolidation/sections/BenefitsGrid';
import EmotionalCTA2 from '@/components/debt-consolidation/sections/EmotionalCTA2';
import LenderNetwork from '@/components/debt-consolidation/sections/LenderNetwork';
import QualificationRequirements from '@/components/debt-consolidation/sections/QualificationRequirements';
import EmotionalCTA3 from '@/components/debt-consolidation/sections/EmotionalCTA3';
import FAQ from '@/components/debt-consolidation/sections/FAQ';
import FinalCTA from '@/components/debt-consolidation/sections/FinalCTA';
import Footer from '@/components/Footer';
import ExternalLinkModal from '@/components/ExternalLinkModal';

const DebtConsolidationLoan = () => {
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
        title="SuperMoney Debt Consolidation"
      />
    </div>
  );
};

export default DebtConsolidationLoan;