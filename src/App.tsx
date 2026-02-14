import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ForConsumers from "./pages/ForConsumers";
import ForBusinesses from "./pages/ForBusinesses";
import BuildCredit from "./pages/BuildCredit";
import BusinessCreditBuilder from "./pages/BusinessCreditBuilder";
import Resources from "./pages/Resources";
import ArticlesInsights from "./pages/ArticlesInsights";
import FinancialCalculators from "./pages/FinancialCalculators";
import LetterTemplates from "./pages/LetterTemplates";
import NotFound from "./pages/NotFound";
import CreditMonitoring from "./pages/CreditMonitoring";
import CreditRepair from "./pages/CreditRepair";
import DIYCreditRepair from "./pages/DIYCreditRepair";
import CreditCards from "./pages/CreditCards";
import PersonalLoans from "./pages/PersonalLoans";
import AutoLoanRefi from "./pages/AutoLoanRefi";
import StudentLoanRefi from "./pages/StudentLoanRefi";
import DebtConsolidationLoan from "./pages/DebtConsolidationLoan";
import DebtRelief from "./pages/DebtRelief";
import TrustAndWillPlan from "./pages/TrustAndWillPlan";
import LifeInsurance from "./pages/LifeInsurance";
import ZeroInterestBusinessFunding from "./pages/ZeroInterestBusinessFunding";
import BusinessFunding from "./pages/BusinessFunding";
import BusinessDebtRelief from "./pages/BusinessDebtRelief";
import MesaNews from "./pages/MesaNews";
import Contact from "./pages/Contact";
import CreditUtilizationBlogPost from "./pages/blog/CreditUtilizationBlogPost";
import WFBNABlogPost from "./pages/blog/WFBNABlogPost";
import DebtReliefVsConsolidationBlogPost from "./pages/blog/DebtReliefVsConsolidationBlogPost";
import TermsAndConditions from "./pages/TermsAndConditions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/for-consumers" element={<ForConsumers />} />
          <Route path="/for-businesses" element={<ForBusinesses />} />
          <Route path="/build-credit" element={<BuildCredit />} />
          <Route path="/business-credit-builder" element={<BusinessCreditBuilder />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/articles" element={<ArticlesInsights />} />
          <Route path="/resources/news" element={<MesaNews />} />
          <Route path="/resources/calculators" element={<FinancialCalculators />} />
          <Route path="/resources/templates" element={<LetterTemplates />} />
          <Route path="/business-credit" element={<Index />} />
          <Route path="/credit-monitoring" element={<CreditMonitoring />} />
          <Route path="/credit-repair" element={<CreditRepair />} />
          <Route path="/diy-credit-repair" element={<DIYCreditRepair />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/personal-loans" element={<PersonalLoans />} />
          <Route path="/auto-loan-refi" element={<AutoLoanRefi />} />
          <Route path="/student-loan-refi" element={<StudentLoanRefi />} />
          <Route path="/debt-consolidation-loan" element={<DebtConsolidationLoan />} />
          <Route path="/debt-relief" element={<DebtRelief />} />
          <Route path="/trust-and-will-plan" element={<TrustAndWillPlan />} />
          <Route path="/life-insurance" element={<LifeInsurance />} />
          {/* HIDDEN: 0% Interest Funding - Awaiting revised copy from Evert */}
          <Route path="/zero-interest-business-funding" element={<BusinessFunding />} />
          <Route path="/business-funding" element={<BusinessFunding />} />
          <Route path="/business-debt-relief" element={<BusinessDebtRelief />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
