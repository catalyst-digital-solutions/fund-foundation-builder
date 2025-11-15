import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, TrendingDown, Shield } from "lucide-react";

const PersonalLoans = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Personal Loans Made <span className="text-amber-600">Simple</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Compare rates from top lenders and get funded fast with competitive personal loan options
          </p>
          <Button size="lg" className="text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg px-8 py-6">
            Check Your Rate
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Why Choose Our Personal Loans
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Competitive Rates</h3>
              <p className="text-muted-foreground">Get the best rates available for your credit profile</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fast Funding</h3>
              <p className="text-muted-foreground">Get approved and funded as soon as today</p>
            </div>
            <div className="text-center">
              <TrendingDown className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fixed Payments</h3>
              <p className="text-muted-foreground">Predictable monthly payments you can budget for</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">No Collateral</h3>
              <p className="text-muted-foreground">Unsecured loans that don't risk your assets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Get Your Personal Loan?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Check your rate in minutes with no impact to your credit score
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PersonalLoans;
