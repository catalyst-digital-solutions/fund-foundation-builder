import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, Calculator } from "lucide-react";

const LifeInsurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Protect Your Family's <span className="text-amber-600">Financial Future</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Get instant life insurance quotes and secure your loved ones with coverage you can trust
          </p>
          <Button size="lg" className="text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg px-8 py-6">
            Get Free Quote
          </Button>
        </div>
      </section>

      {/* Why Life Insurance */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            Why You Need Life Insurance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Financial Protection</h3>
              <p className="text-muted-foreground">Ensure your family's financial security even when you're not there</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Peace of Mind</h3>
              <p className="text-muted-foreground">Rest easy knowing your loved ones are protected</p>
            </div>
            <div className="text-center">
              <Calculator className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Affordable Coverage</h3>
              <p className="text-muted-foreground">Get the coverage you need at a price you can afford</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get your free life insurance quote in minutes
          </p>
          <Button size="lg" className="text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg px-8 py-6">
            Get Free Quote Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LifeInsurance;
