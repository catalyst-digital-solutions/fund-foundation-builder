import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { TrendingDown, DollarSign, CheckCircle, Phone } from "lucide-react";

const BusinessDebtRelief = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-amber-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Business <span className="text-amber-600">Debt Relief</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Break free from overwhelming business debt with proven strategies and expert guidance
          </p>
          <Button size="lg" className="text-gray-900 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-amber-500 text-lg px-8 py-6">
            Get Free Consultation
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            How We Help Your Business
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingDown className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Reduce Debt</h3>
              <p className="text-muted-foreground">Negotiate with creditors to reduce your total debt amount</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Lower Payments</h3>
              <p className="text-muted-foreground">Consolidate and restructure for more manageable monthly payments</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fresh Start</h3>
              <p className="text-muted-foreground">Get your business back on track with a clear path forward</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Find Relief?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Speak with a debt relief specialist today
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Schedule Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BusinessDebtRelief;
