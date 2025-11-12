import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/business-credit/sections/HeroSection';
import WhyBusinessCreditMatters from '@/components/business-credit/sections/WhyBusinessCreditMatters';
import HowItWorks from '@/components/business-credit/sections/HowItWorks';
import ServiceTierComparison from '@/components/business-credit/sections/ServiceTierComparison';
import WhatsIncluded from '@/components/business-credit/sections/WhatsIncluded';
import Testimonials from '@/components/business-credit/sections/Testimonials';
import FAQ from '@/components/business-credit/sections/FAQ';
import FinalCTA from '@/components/business-credit/sections/FinalCTA';
import ComplianceFooter from '@/components/business-credit/sections/ComplianceFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyBusinessCreditMatters />
      <HowItWorks />
      <ServiceTierComparison />
      <WhatsIncluded />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ComplianceFooter />
    </div>
  );
};

export default Index;
