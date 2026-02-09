import React, { useState, useEffect } from 'react';
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
// ExternalLinkModal removed; open affiliate links in new tab instead
import { SEO } from '@/components/SEO';

const PersonalLoans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');

  // Open affiliate links in a new tab when CTA components set selectedUrl/isModalOpen
  useEffect(() => {
    if (!isModalOpen || !selectedUrl) return;
    const popup = window.open(selectedUrl, '_blank', 'noopener,noreferrer');
    if (popup) popup.focus();
    setIsModalOpen(false);
  }, [isModalOpen, selectedUrl]);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Personal Loans & Rates | Compare Lenders | Mesa Group Consulting"
        description="Compare personal loan offers from top lenders. Get rates for debt consolidation, home improvements, emergencies. Expert guidance from Mesa Group Consulting."
        canonicalUrl="/personal-loans"
      />
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
    </div>
  );
};

export default PersonalLoans;
