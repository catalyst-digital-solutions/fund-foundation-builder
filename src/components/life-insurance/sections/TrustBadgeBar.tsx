import { Shield, Lock, CheckCircle, Clock } from "lucide-react";

const TrustBadgeBar = () => {
  return (
    <section className="bg-white border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          
          <div className="text-center">
            <Shield className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">Licensed Agents</div>
            <div className="text-xs text-gray-600">Expert Guidance</div>
          </div>

          <div className="text-center">
            <Lock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">Secure Process</div>
            <div className="text-xs text-gray-600">Data Protected</div>
          </div>

          <div className="text-center">
            <CheckCircle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">A+ Rated Insurers</div>
            <div className="text-xs text-gray-600">Top-Tier Partners</div>
          </div>

          <div className="text-center">
            <Clock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-900">Fast Approval</div>
            <div className="text-xs text-gray-600">24-48 Hours</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBadgeBar;
