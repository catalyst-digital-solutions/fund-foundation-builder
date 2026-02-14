import React, { useState, useEffect } from 'react';
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
import ContactFormSection from '@/components/ContactFormSection';
import { SEO } from '@/components/SEO';

const DebtConsolidationLoan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');
 
  useEffect(() => {
    if (!isModalOpen || !selectedUrl) return;
    const popup = window.open(selectedUrl, '_blank', 'noopener,noreferrer');
    if (popup) popup.focus();
    setIsModalOpen(false);
  }, [isModalOpen, selectedUrl]);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Debt Consolidation Loans | Combine Your Debts | Mesa Group Consulting"
        description="Simplify multiple debts into one payment with lower rates. Compare debt consolidation loan offers and reduce monthly payments with Mesa Group Consulting."
        canonicalUrl="/debt-consolidation-loan"
      />
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
        
        {/* Contact Form Section */}
        <ContactFormSection />
        
        <Footer />
      </main>

      
    </div>
  );
};

export default DebtConsolidationLoan;