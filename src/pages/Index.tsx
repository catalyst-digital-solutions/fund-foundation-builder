import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/business-credit/sections/HeroSection';
import EmotionalCTA1 from '@/components/business-credit/sections/EmotionalCTA1';
import WhyBusinessCreditMatters from '@/components/business-credit/sections/WhyBusinessCreditMatters';
import HowItWorks from '@/components/business-credit/sections/HowItWorks';
import EmotionalCTA2 from '@/components/business-credit/sections/EmotionalCTA2';
import ServiceTierComparison from '@/components/business-credit/sections/ServiceTierComparison';
import WhatsIncluded from '@/components/business-credit/sections/WhatsIncluded';
import EmotionalCTA3 from '@/components/business-credit/sections/EmotionalCTA3';
import Testimonials from '@/components/business-credit/sections/Testimonials';
import FAQ from '@/components/business-credit/sections/FAQ';
import FinalCTA from '@/components/business-credit/sections/FinalCTA';
import ComplianceFooter from '@/components/business-credit/sections/ComplianceFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <EmotionalCTA1 />
      <WhyBusinessCreditMatters />
      <HowItWorks />
      <EmotionalCTA2 />
      <ServiceTierComparison />
      <WhatsIncluded />
      <EmotionalCTA3 />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ComplianceFooter />
    </div>
  );
};

export default Index;
