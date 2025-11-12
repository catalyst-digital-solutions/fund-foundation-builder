import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { TrendingDown, DollarSign, Calculator, CheckCircle } from "lucide-react";

const StudentLoanRefi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Lower Your Student Loan Payments
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Refinance your student loans and save thousands with lower interest rates
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Check Your Rate
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Benefits of Student Loan Refinancing
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingDown className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Lower Rates</h3>
              <p className="text-muted-foreground">Reduce your interest rate and save money</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Lower Payments</h3>
              <p className="text-muted-foreground">Decrease your monthly payment amount</p>
            </div>
            <div className="text-center">
              <Calculator className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Flexible Terms</h3>
              <p className="text-muted-foreground">Choose repayment terms that fit your budget</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Simplify Loans</h3>
              <p className="text-muted-foreground">Combine multiple loans into one payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Save on Student Loans?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how much you could save with student loan refinancing
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StudentLoanRefi;
