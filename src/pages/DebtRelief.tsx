import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { TrendingDown, Shield, Clock, CheckCircle } from "lucide-react";

const DebtRelief = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get Out of Debt Faster
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional debt relief solutions to help you regain financial freedom
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Get Free Debt Analysis
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            How We Help You Become Debt-Free
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingDown className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Reduce Debt</h3>
              <p className="text-muted-foreground">Negotiate settlements for less than you owe</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Stop Collections</h3>
              <p className="text-muted-foreground">End harassing collection calls</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fast Results</h3>
              <p className="text-muted-foreground">Become debt-free in 24-48 months</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">One Payment</h3>
              <p className="text-muted-foreground">Simplify with one monthly payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Break Free from Debt?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get your free personalized debt relief plan today
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your Journey to Freedom
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DebtRelief;
